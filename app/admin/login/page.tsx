"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense } from "react";
import Image from "next/image";

function LoginForm() {
  const [username, setUsername] = useState("admin");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const next = searchParams.get("next") || "/admin";

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Login failed");
        setLoading(false);
        return;
      }
      router.replace(data.mustChangePassword ? "/admin/settings?change=1" : next);
    } catch {
      setError("Network error — please try again");
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-[#FDF8EF] px-4 overflow-hidden">
      {/* Brand decorative orbs */}
      <div className="absolute top-10 left-10 h-72 w-72 rounded-full bg-[#C9A84C]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-[#0A2F1D]/10 blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-texture-diagonal pointer-events-none" />

      <div className="w-full max-w-md relative z-10">
        {/* Logo */}
        <div className="text-center mb-8">
          <Image
            src="/jharkhand.PNG"
            alt="JPBA Logo"
            width={96}
            height={96}
            className="mx-auto object-contain mb-4"
          />
          <h1 className="text-2xl font-bold text-[#0A2F1D]">JPBA Admin</h1>
          <p className="text-sm text-[#5C5C5C] mt-1">
            Jharkhand Para Boccia Association
          </p>
        </div>

        {/* Login Card */}
        <div className="rounded-2xl bg-white border border-[#C9A84C]/25 shadow-xl p-8">
          <h2 className="text-lg font-bold text-[#0A2F1D] mb-6 text-center">
            Admin Login
          </h2>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs text-[#5C5C5C] mb-1.5 font-semibold">
                Username
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full rounded-lg border border-[#E2D9C8] bg-white px-4 py-3 text-sm text-[#1A1A1A] focus:border-[#C9A84C] focus:outline-none focus:ring-2 focus:ring-[#C9A84C]/20 transition-all"
                placeholder="Username"
                autoFocus
              />
            </div>
            <div>
              <label className="block text-xs text-[#5C5C5C] mb-1.5 font-semibold">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError("");
                }}
                className="w-full rounded-lg border border-[#E2D9C8] bg-white px-4 py-3 text-sm text-[#1A1A1A] focus:border-[#C9A84C] focus:outline-none focus:ring-2 focus:ring-[#C9A84C]/20 transition-all"
                placeholder="Enter password"
              />
              {error && <p className="text-xs text-[#B91C1C] mt-2">{error}</p>}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-lg bg-[#C9A84C] px-4 py-3 text-sm font-bold text-[#0A2F1D] uppercase tracking-wider transition-all hover:bg-[#0A2F1D] hover:text-white disabled:opacity-60"
            >
              {loading ? "Signing in…" : "Login"}
            </button>
          </form>
        </div>

        <p className="text-center text-[11px] text-[#8A8A8A] mt-6">
          Authorized personnel only · Jharkhand Para Boccia Association
        </p>
      </div>
    </div>
  );
}

export default function AdminLogin() {
  return (
    <Suspense>
      <LoginForm />
    </Suspense>
  );
}
