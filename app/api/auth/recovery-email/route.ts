import { NextRequest, NextResponse } from "next/server";
import { getDb } from "@/lib/db";
import { currentAdmin } from "@/lib/auth";

// ─── Recovery email management (admin settings) ─────────────────────────
// The recovery email is where password-reset links are sent. It is the only
// self-service way back into the panel if the password is forgotten.

export async function GET() {
  const admin = await currentAdmin();
  if (!admin) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const row = getDb()
    .prepare("SELECT recovery_email FROM admin_users WHERE id = ?")
    .get(admin.id) as { recovery_email: string | null } | undefined;
  return NextResponse.json({ recoveryEmail: row?.recovery_email || "" });
}

export async function POST(request: NextRequest) {
  const admin = await currentAdmin();
  if (!admin) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { recoveryEmail } = await request.json();
  const email = typeof recoveryEmail === "string" ? recoveryEmail.trim() : "";
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Enter a valid email address" }, { status: 400 });
  }

  getDb().prepare("UPDATE admin_users SET recovery_email = ? WHERE id = ?").run(email, admin.id);
  return NextResponse.json({ ok: true, recoveryEmail: email });
}
