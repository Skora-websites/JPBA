"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function ForgotPasswordPage() {
  const [identifier, setIdentifier] = useState("");
  const [busy, setBusy] = useState(false);
  const [done, setDone] = useState(false);
  const [delivery, setDelivery] = useState<"email" | "onscreen" | "logged" | null>(null);
  const [resetUrl, setResetUrl] = useState("");
  const [expiresMin, setExpiresMin] = useState(30);
  const [error, setError] = useState("");

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setBusy(true);
    setError("");
    try {
      const res = await fetch("/api/auth/request-reset", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ identifier }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Something went wrong — try again");
        setBusy(false);
        return;
      }
      setDelivery(data.delivered === "email" ? "email" : data.delivered === "logged" ? "logged" : "onscreen");
      setResetUrl(data.resetUrl || "");
      setExpiresMin(data.expiresMin || 30);
      setDone(true);
    } catch {
      setError("Network error — please try again");
    } finally {
      setBusy(false);
    }
  };

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
          {!done ? (
            <>
              <h2 className="text-lg font-bold text-[#0A2F1D] mb-2 text-center">Forgot your password?</h2>
              <p className="text-[13px] text-[#5C5C5C] text-center mb-6 leading-relaxed">
                Enter your admin username or the recovery email set in Admin → Settings.
                We&apos;ll send a one-time reset link valid for 30 minutes.
              </p>

              <form onSubmit={submit} className="space-y-4">
                <div>
                  <label className="block text-xs text-[#5C5C5C] mb-1.5 font-semibold">Username or recovery email</label>
                  <input
                    type="text"
                    value={identifier}
                    onChange={(e) => setIdentifier(e.target.value)}
                    className="w-full rounded-lg border border-[#E2D9C8] bg-white px-4 py-3 text-sm text-[#1A1A1A] focus:border-[#C9A84C] focus:outline-none focus:ring-2 focus:ring-[#C9A84C]/20 transition-all"
                    placeholder="admin or you@example.com"
                    autoFocus
                  />
                </div>
                {error && <p className="text-xs text-[#B91C1C]">{error}</p>}
                <button
                  type="submit"
                  disabled={busy || !identifier.trim()}
                  className="w-full rounded-lg bg-[#C9A84C] px-4 py-3 text-sm font-bold text-[#0A2F1D] uppercase tracking-wider transition-all hover:bg-[#0A2F1D] hover:text-white disabled:opacity-60"
                >
                  {busy ? "Sending…" : "Send reset link"}
                </button>
              </form>
            </>
          ) : delivery === "logged" ? (
            <div className="text-center py-2">
              <div className="text-3xl mb-3">🔐</div>
              <h2 className="text-lg font-bold text-[#0A2F1D] mb-2">Request received</h2>
              <p className="text-[13px] text-[#5C5C5C] leading-relaxed">
                A one-time reset link was generated and written to the server logs, which only the
                site owner can read (on Vercel: Project → Logs; on your own server: the app log).
              </p>
              <p className="text-[12px] text-[#8A8A8A] mt-3 leading-relaxed">
                Tip: set the <code className="text-[#1B4E33]">SMTP_HOST</code>, <code className="text-[#1B4E33]">SMTP_USER</code>,
                <code className="text-[#1B4E33]"> SMTP_PASS</code> environment variables to have the link emailed
                automatically next time.
              </p>
            </div>
          ) : delivery === "email" ? (
            <div className="text-center py-2">
              <div className="text-3xl mb-3">📧</div>
              <h2 className="text-lg font-bold text-[#0A2F1D] mb-2">Check your email</h2>
              <p className="text-[13px] text-[#5C5C5C] leading-relaxed">
                If an account matches <span className="font-semibold text-[#0A2F1D]">{identifier}</span>, a reset link
                is on its way. It expires in {expiresMin} minutes.
              </p>
            </div>
          ) : (
            <div className="py-1">
              <div className="text-center mb-4">
                <div className="text-3xl mb-2">🔑</div>
                <h2 className="text-lg font-bold text-[#0A2F1D]">Your one-time reset link</h2>
                <p className="text-[12px] text-[#5C5C5C] mt-1 leading-relaxed">
                  Email delivery isn&apos;t configured on this server yet, so here is your personal link.
                  It expires in {expiresMin} minutes and works only once. Set{" "}
                  <code className="text-[#1B4E33]">SMTP_HOST</code> etc. to email it automatically next time.
                </p>
              </div>
              {resetUrl && (
                <a
                  href={resetUrl}
                  className="block w-full text-center rounded-lg bg-[#C9A84C] px-4 py-3 text-sm font-bold text-[#0A2F1D] uppercase tracking-wider transition-all hover:bg-[#0A2F1D] hover:text-white"
                >
                  Open reset page
                </a>
              )}
              <p className="text-center text-[11px] text-[#8A8A8A] mt-4">
                Treat this link like a password — anyone holding it can sign in as you.
              </p>
            </div>
          )}

          <p className="text-center mt-6">
            <Link href="/admin/login" className="text-xs font-semibold text-[#1B4E33] hover:text-[#C9A84C] transition-colors underline underline-offset-4 decoration-[#C9A84C]/40">
              ← Back to login
            </Link>
          </p>
        </div>

        <p className="text-center text-[11px] text-[#8A8A8A] mt-6">
          Authorized personnel only · Jharkhand Para Boccia Association
        </p>
      </div>
    </div>
  );
}
