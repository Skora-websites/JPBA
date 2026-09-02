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
  addRegistration: (data: RegistrationFormData) => Registration;
  updateRegistration: (
    id: string,
    updates: Partial<Pick<Registration, "status" | "adminNotes">>
  ) => void;
  getRegistration: (id: string) => Registration | undefined;
}

const RegistrationContext = createContext<RegistrationContextType | null>(null);

const STORAGE_KEY = "jpba_registrations";

function generateId(): string {
  return `JPBA-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).substring(2, 6).toUpperCase()}`;
}

export function RegistrationProvider({ children }: { children: ReactNode }) {
  const [registrations, setRegistrations] = useState<Registration[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        setRegistrations(JSON.parse(stored));
      }
    } catch (e) {
      console.error("Failed to load registrations from localStorage", e);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  // Listen to storage events for cross-tab synchronization
  useEffect(() => {
    const handleStorage = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY && e.newValue) {
        try {
          setRegistrations(JSON.parse(e.newValue));
        } catch (err) {
          console.error("Failed to parse registrations from storage event");
        }
      }
    };
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  // Save to localStorage on change
  useEffect(() => {
    if (!isLoaded) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(registrations));
    } catch (e) {
      console.error("Failed to save registrations to localStorage", e);
    }
  }, [registrations, isLoaded]);

  const addRegistration = useCallback(
    (data: RegistrationFormData): Registration => {
      const newReg: Registration = {
        ...data,
        id: generateId(),
        status: "pending",
        submittedAt: new Date().toISOString(),
        adminNotes: "",
      };
      setRegistrations((prev) => [newReg, ...prev]);
      return newReg;
    },
    []
  );

  const updateRegistration = useCallback(
    (
      id: string,
      updates: Partial<Pick<Registration, "status" | "adminNotes">>
    ) => {
      setRegistrations((prev) =>
        prev.map((reg) => (reg.id === id ? { ...reg, ...updates } : reg))
      );
    },
    []
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
        getRegistration,
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
