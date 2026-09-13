"use client";
import { Suspense, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

function SettingsInner() {
  const [currentPassword, setCurrent] = useState("");
  const [newPassword, setNew] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const [ok, setOk] = useState(false);
  const [busy, setBusy] = useState(false);
  const [forced, setForced] = useState(false);
  const [recEmail, setRecEmail] = useState("");
  const [recBusy, setRecBusy] = useState(false);
  const [recOk, setRecOk] = useState(false);
  const [recError, setRecError] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (searchParams.get("change") === "1") setForced(true);
  }, [searchParams]);

  useEffect(() => {
    fetch("/api/auth/recovery-email")
      .then((r) => (r.ok ? r.json() : null))
      .then((d) => d && setRecEmail(d.recoveryEmail || ""))
      .catch(() => {});
  }, []);

  const saveRecoveryEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setRecOk(false);
    setRecError("");
    setRecBusy(true);
    const res = await fetch("/api/auth/recovery-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ recoveryEmail: recEmail }),
    });
    setRecBusy(false);
    const d = await res.json();
    if (!res.ok) return setRecError(d.error || "Could not save");
    setRecOk(true);
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(""); setOk(false);
    if (newPassword.length < 8) return setError("New password must be at least 8 characters");
    if (newPassword !== confirm) return setError("Passwords do not match");

    setBusy(true);
    const res = await fetch("/api/auth/change-password", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ currentPassword, newPassword }),
    });
    setBusy(false);
    if (!res.ok) {
      const d = await res.json();
      return setError(d.error || "Failed to change password");
    }
    setOk(true);
    setCurrent(""); setNew(""); setConfirm("");
    if (forced) {
      setTimeout(() => router.replace("/admin"), 1200);
    }
  };

  return (
    <div className="max-w-xl">
      {forced && (
        <div className="mb-6 rounded-xl border border-[#C9A84C]/50 bg-[#C9A84C]/10 px-5 py-4">
          <p className="text-[14px] font-bold text-[#0A2F1D]">Welcome to the JPBA admin panel</p>
          <p className="text-[13px] text-[#5C5C5C] mt-1">
            For security, please set your own password before continuing. The default password should not stay in use.
          </p>
        </div>
      )}

      <h1 className="text-[28px] font-bold text-[#0A2F1D] mb-1">Settings</h1>
      <p className="text-[#5C5C5C] text-[14px] mb-8">Password, recovery email and server notes</p>

      <form onSubmit={submit} className="rounded-2xl bg-white border border-[#E2D9C8] p-6 space-y-4">
        <div>
          <label className="block text-xs font-semibold text-[#5C5C5C] mb-1.5">Current password</label>
          <input type="password" value={currentPassword} onChange={(e) => setCurrent(e.target.value)}
            className="w-full rounded-lg border border-[#E2D9C8] px-4 py-3 text-sm focus:border-[#C9A84C] focus:outline-none focus:ring-2 focus:ring-[#C9A84C]/20" />
        </div>
        <div>
          <label className="block text-xs font-semibold text-[#5C5C5C] mb-1.5">New password (min 8 characters)</label>
          <input type="password" value={newPassword} onChange={(e) => setNew(e.target.value)}
            className="w-full rounded-lg border border-[#E2D9C8] px-4 py-3 text-sm focus:border-[#C9A84C] focus:outline-none focus:ring-2 focus:ring-[#C9A84C]/20" />
        </div>
        <div>
          <label className="block text-xs font-semibold text-[#5C5C5C] mb-1.5">Confirm new password</label>
          <input type="password" value={confirm} onChange={(e) => setConfirm(e.target.value)}
            className="w-full rounded-lg border border-[#E2D9C8] px-4 py-3 text-sm focus:border-[#C9A84C] focus:outline-none focus:ring-2 focus:ring-[#C9A84C]/20" />
        </div>
        {error && <p className="text-sm text-[#B91C1C]">{error}</p>}
        {ok && <p className="text-sm text-[#1B4E33] font-semibold">✔ Password changed{forced ? " — redirecting to dashboard…" : ""}</p>}
        <button type="submit" disabled={busy}
          className="px-6 py-3 rounded-lg bg-[#C9A84C] text-[#0A2F1D] text-[13px] font-bold uppercase tracking-wider hover:bg-[#0A2F1D] hover:text-white transition-colors disabled:opacity-60">
          {busy ? "Saving…" : "Change Password"}
        </button>
      </form>

      {/* Recovery email */}
      <form onSubmit={saveRecoveryEmail} className="rounded-2xl bg-white border border-[#E2D9C8] p-6 space-y-4 mb-6">
        <div>
          <h2 className="text-[16px] font-bold text-[#0A2F1D]">Password recovery email</h2>
          <p className="text-[13px] text-[#5C5C5C] mt-1 leading-relaxed">
            If you ever forget your password, a one-time reset link is sent here from the
            &quot;Forgot password?&quot; page. Keep it up to date — it&apos;s the only self-service way
            back into this panel.
          </p>
        </div>
        <div>
          <label className="block text-xs font-semibold text-[#5C5C5C] mb-1.5">Recovery email address</label>
          <input
            type="email"
            value={recEmail}
            onChange={(e) => {
              setRecEmail(e.target.value);
              setRecOk(false);
            }}
            className="w-full rounded-lg border border-[#E2D9C8] px-4 py-3 text-sm focus:border-[#C9A84C] focus:outline-none focus:ring-2 focus:ring-[#C9A84C]/20"
            placeholder="you@example.com"
          />
        </div>
        {recError && <p className="text-sm text-[#B91C1C]">{recError}</p>}
        {recOk && <p className="text-sm text-[#1B4E33] font-semibold">✔ Recovery email saved</p>}
        <button type="submit" disabled={recBusy}
          className="px-6 py-3 rounded-lg bg-[#C9A84C] text-[#0A2F1D] text-[13px] font-bold uppercase tracking-wider hover:bg-[#0A2F1D] hover:text-white transition-colors disabled:opacity-60">
          {recBusy ? "Saving…" : "Save Recovery Email"}
        </button>
      </form>

      {/* Deployment note for the client */}
      <div className="mt-8 rounded-2xl bg-[#0A2F1D] text-white/80 p-6 text-[13px] leading-relaxed">
        <p className="font-bold text-white mb-2">Server backup tip</p>
        All website content (videos metadata, news, events, photos, registrations) lives in a single
        SQLite file at <code className="text-[#C9A84C]">data/jpba.db</code> on the server. Back it up
        by copying that file — photos additionally live in <code className="text-[#C9A84C]">public/uploads</code>.
      </div>
    </div>
  );
}

export default function AdminSettings() {
  return (
    <Suspense>
      <SettingsInner />
    </Suspense>
  );
}
