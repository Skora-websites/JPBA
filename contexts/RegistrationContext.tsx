"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
} from "react";
import type { Registration, RegistrationFormData } from "@/types/registration";

interface RegistrationContextType {
  registrations: Registration[];
  /** Submit a new registration from the public form (POST /api/registrations) */
  addRegistration: (data: RegistrationFormData) => Promise<Registration>;
  /** Admin: update status/notes (PATCH /api/registrations/:id) */
  updateRegistration: (
    id: string,
    updates: Partial<Pick<Registration, "status" | "adminNotes">>
  ) => Promise<void>;
  refresh: () => Promise<void>;
  getRegistration: (id: string) => Registration | undefined;
  /** True once the initial fetch attempt has finished */
  isLoaded: boolean;
}

const RegistrationContext = createContext<RegistrationContextType | null>(null);

export function RegistrationProvider({ children }: { children: ReactNode }) {
  const [registrations, setRegistrations] = useState<Registration[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const refresh = useCallback(async () => {
    try {
      const res = await fetch("/api/registrations");
      if (res.ok) {
        const data = await res.json();
        setRegistrations(data.registrations ?? []);
      }
    } catch {
      // Not signed in (public visitor) or network issue — leave list empty
    } finally {
      setIsLoaded(true);
    }
  }, []);

  // Initial load — only succeeds for signed-in admins
  useEffect(() => {
    refresh();
  }, [refresh]);

  const addRegistration = useCallback(
    async (data: RegistrationFormData): Promise<Registration> => {
      const res = await fetch("/api/registrations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.error || "Failed to submit registration");
      }
      const { id } = await res.json();
      return {
        ...data,
        id,
        status: "pending",
        submittedAt: new Date().toISOString(),
        adminNotes: "",
      };
    },
    []
  );

  const updateRegistration = useCallback(
    async (id: string, updates: Partial<Pick<Registration, "status" | "adminNotes">>) => {
      const res = await fetch(`/api/registrations/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updates),
      });
      if (!res.ok) throw new Error("Failed to update registration");
      // Re-fetch to stay in sync with the server
      await refresh();
    },
    [refresh]
  );

  const getRegistration = useCallback(
    (id: string) => registrations.find((r) => r.id === id),
    [registrations]
  );

  return (
    <RegistrationContext.Provider
      value={{
        registrations,
        addRegistration,
        updateRegistration,
        refresh,
        getRegistration,
        isLoaded,
      }}
    >
      {children}
    </RegistrationContext.Provider>
  );
}

export function useRegistrations() {
  const ctx = useContext(RegistrationContext);
  if (!ctx) {
    throw new Error("useRegistrations must be used within RegistrationProvider");
  }
  return ctx;
}
