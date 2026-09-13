"use client";

import { Suspense, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

function ResetForm() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token") || "";
  const router = useRouter();

  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [done, setDone] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (password.length < 8) return setError("Password must be at least 8 characters");
    if (password !== confirm) return setError("Passwords do not match");

    setBusy(true);
    try {
      const res = await fetch("/api/auth/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, newPassword: password }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Reset failed");
        setBusy(false);
        return;
      }
      setDone(true);
      setTimeout(() => router.replace("/admin/login"), 1800);
    } catch {
      setError("Network error — please try again");
      setBusy(false);
    }
  };

  if (!token) {
    return (
      <div className="text-center py-2">
        <div className="text-3xl mb-3">⚠️</div>
        <h2 className="text-lg font-bold text-[#0A2F1D] mb-2">Missing reset token</h2>
        <p className="text-[13px] text-[#5C5C5C] mb-6">
          Open the reset link from your email exactly as sent, or start a new request.
        </p>
        <Link
          href="/admin/forgot-password"
          className="inline-block rounded-lg bg-[#C9A84C] px-6 py-3 text-sm font-bold text-[#0A2F1D] uppercase tracking-wider hover:bg-[#0A2F1D] hover:text-white transition-all"
        >
          Request a new link
        </Link>
      </div>
    );
  }

  return done ? (
    <div className="text-center py-2">
      <div className="text-3xl mb-3">✅</div>
      <h2 className="text-lg font-bold text-[#0A2F1D] mb-2">Password updated</h2>
      <p className="text-[13px] text-[#5C5C5C]">Redirecting you to the login page…</p>
    </div>
  ) : (
    <>
      <h2 className="text-lg font-bold text-[#0A2F1D] mb-2 text-center">Choose a new password</h2>
      <p className="text-[13px] text-[#5C5C5C] text-center mb-6">
        Minimum 8 characters. This link works only once.
      </p>
      <form onSubmit={submit} className="space-y-4">
        <div>
          <label className="block text-xs text-[#5C5C5C] mb-1.5 font-semibold">New password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-lg border border-[#E2D9C8] bg-white px-4 py-3 text-sm text-[#1A1A1A] focus:border-[#C9A84C] focus:outline-none focus:ring-2 focus:ring-[#C9A84C]/20 transition-all"
            placeholder="••••••••"
            autoFocus
          />
        </div>
        <div>
          <label className="block text-xs text-[#5C5C5C] mb-1.5 font-semibold">Confirm new password</label>
          <input
            type="password"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            className="w-full rounded-lg border border-[#E2D9C8] bg-white px-4 py-3 text-sm text-[#1A1A1A] focus:border-[#C9A84C] focus:outline-none focus:ring-2 focus:ring-[#C9A84C]/20 transition-all"
            placeholder="••••••••"
          />
        </div>
        {error && <p className="text-xs text-[#B91C1C]">{error}</p>}
        <button
          type="submit"
          disabled={busy}
          className="w-full rounded-lg bg-[#C9A84C] px-4 py-3 text-sm font-bold text-[#0A2F1D] uppercase tracking-wider transition-all hover:bg-[#0A2F1D] hover:text-white disabled:opacity-60"
        >
          {busy ? "Saving…" : "Set new password"}
        </button>
      </form>
    </>
  );
}

export default function ResetPasswordPage() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-[#FDF8EF] px-4 overflow-hidden">
      <div className="absolute top-10 left-10 h-72 w-72 rounded-full bg-[#C9A84C]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-[#0A2F1D]/10 blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-texture-diagonal pointer-events-none" />

      <div className="w-full max-w-md relative z-10">
        <div className="text-center mb-8">
          <Image src="/jharkhand.PNG" alt="JPBA Logo" width={96} height={96} className="mx-auto object-contain mb-4" />
          <h1 className="text-2xl font-bold text-[#0A2F1D]">JPBA Admin</h1>
          <p className="text-sm text-[#5C5C5C] mt-1">Password recovery</p>
        </div>

        <div className="rounded-2xl bg-white border border-[#C9A84C]/25 shadow-xl p-8">
          <Suspense>
            <ResetForm />
          </Suspense>
        </div>

        <p className="text-center text-[11px] text-[#8A8A8A] mt-6">
          Authorized personnel only · Jharkhand Para Boccia Association
        </p>
      </div>
    </div>
  );
}
