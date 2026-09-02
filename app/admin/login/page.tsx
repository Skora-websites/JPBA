"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function AdminLogin() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple password check (in production, use proper auth)
    const adminPassword = "jpba2026";
    if (password === adminPassword) {
      localStorage.setItem("jpba_admin_auth", "true");
      router.push("/admin");
    } else {
      setError("Invalid password. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      {/* Decorative */}
      <div className="absolute top-10 left-10 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-secondary/5 blur-3xl" />

      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <Image
            src="/jharkhand.PNG"
            alt="JPBA Logo"
            width={72}
            height={72}
            className="mx-auto object-contain mb-4"
          />
          <h1 className="text-2xl font-bold text-white">JPBA Admin</h1>
          <p className="text-sm text-text-secondary mt-1">
            Jharkhand Para Boccia Association
          </p>
        </div>

        {/* Login Card */}
        <div className="rounded-2xl bg-card border border-border p-8">
          <h2 className="text-lg font-bold text-white mb-6 text-center">
            Admin Login
          </h2>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs text-text-secondary mb-1.5">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError("");
                }}
                className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-sm text-white placeholder:text-text-secondary focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                placeholder="Enter admin password"
                autoFocus
              />
              {error && (
                <p className="text-xs text-danger mt-2">{error}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-primary px-4 py-3 text-sm font-semibold text-white transition-all hover:bg-primary-light"
            >
              Login
            </button>
          </form>

          <p className="text-[10px] text-text-secondary text-center mt-4">
            Default password: jpba2026
          </p>
        </div>

        <p className="text-center text-xs text-text-secondary mt-6">
          <a href="/" className="hover:text-white transition-colors">
            ← Back to JPBA Website
          </a>
        </p>
      </div>
    </div>
  );
}
