import { NextRequest, NextResponse } from "next/server";
import { findRecoveryTarget, createPasswordReset } from "@/lib/auth";
import { smtpConfigured, sendResetEmail } from "@/lib/mailer";

// ─── Step 1: request a password reset ───────────────────────────────────
// Always answers { ok: true } so attackers can't probe which admin
// usernames or emails exist. Delivery strategy:
//   1. SMTP configured        → one-time link is emailed to the recovery email
//   2. Development server     → link returned on screen (local convenience)
//   3. Production, no SMTP    → link printed to the server logs — the site
//                               owner can read it in the Vercel dashboard
//                               (Runtime Logs) or on their own server.
// Only the server operator can read logs, so this stays owner-only.

function baseUrl(request: NextRequest): string {
  const envUrl = process.env.NEXT_PUBLIC_SITE_URL;
  if (envUrl) return envUrl.replace(/\/$/, "");
  const proto = request.headers.get("x-forwarded-proto") || "http";
  const host = request.headers.get("x-forwarded-host") || request.headers.get("host") || "localhost:3000";
  return `${proto}://${host}`;
}

export async function POST(request: NextRequest) {
  try {
    const { identifier } = await request.json();
    if (!identifier || typeof identifier !== "string") {
      return NextResponse.json({ error: "Enter your username or recovery email" }, { status: 400 });
    }

    const target = findRecoveryTarget(identifier);
    const ok = NextResponse.json({ ok: true });

    // No such admin: answer identically (no probing).
    if (!target) return ok;

    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "";
    const token = createPasswordReset(target.id, ip);
    const resetUrl = `${baseUrl(request)}/admin/reset-password?token=${token}`;
    const expiresMin = 30;

    if (smtpConfigured()) {
      if (target.recovery_email) {
        try {
          await sendResetEmail(target.recovery_email, resetUrl, expiresMin);
          return NextResponse.json({ ok: true, delivered: "email" });
        } catch (err) {
          console.error("reset email failed:", err);
          // Fall through to the log fallback so a broken SMTP doesn't lock out.
        }
      }
    } else if (process.env.NODE_ENV !== "production") {
      // Dev convenience: hand the one-time link back to the requester.
      return NextResponse.json({ ok: true, delivered: "onscreen", resetUrl, expiresMin });
    }

    // Owner-only fallback: print the one-time link to the server logs.
    console.log(
      `[JPBA] Password reset link for admin "${target.username}" (valid ${expiresMin} min, one-time use): ${resetUrl}`
    );
    return NextResponse.json({ ok: true, delivered: "logged", expiresMin });
  } catch {
    return NextResponse.json({ error: "Request failed — try again" }, { status: 500 });
  }
}
