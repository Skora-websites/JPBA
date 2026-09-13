import { NextRequest, NextResponse } from "next/server";
import { consumePasswordReset } from "@/lib/auth";

// ─── Step 2: complete the password reset with a one-time token ──────────
// The token is single-use, expires in 30 minutes, and (on success) also
// clears must_change_password and kills all existing sessions for that
// admin, so a stolen session can't outlive the reset.

export async function POST(request: NextRequest) {
  try {
    const { token, newPassword } = await request.json();
    if (!token || !newPassword || typeof newPassword !== "string" || newPassword.length < 8) {
      return NextResponse.json({ error: "New password must be at least 8 characters" }, { status: 400 });
    }

    const result = consumePasswordReset(token, newPassword);
    if (!result.valid) {
      return NextResponse.json(
        { error: "This reset link is invalid, already used, or expired. Request a new one." },
        { status: 400 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Reset failed — try again" }, { status: 500 });
  }
}
