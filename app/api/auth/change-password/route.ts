import { NextRequest, NextResponse } from "next/server";
import { getDb } from "@/lib/db";
import { currentAdmin, hashPassword, verifyPassword } from "@/lib/auth";

export async function POST(request: NextRequest) {
  const admin = await currentAdmin();
  if (!admin) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { currentPassword, newPassword } = await request.json();
  if (!currentPassword || !newPassword || newPassword.length < 8) {
    return NextResponse.json({ error: "New password must be at least 8 characters" }, { status: 400 });
  }

  const db = getDb();
  const row = db.prepare("SELECT password_hash FROM admin_users WHERE id = ?").get(admin.id) as
    | { password_hash: string }
    | undefined;
  if (!row || !verifyPassword(currentPassword, row.password_hash)) {
    return NextResponse.json({ error: "Current password is incorrect" }, { status: 403 });
  }

  db.prepare("UPDATE admin_users SET password_hash = ?, must_change_password = 0 WHERE id = ?")
    .run(hashPassword(newPassword), admin.id);
  return NextResponse.json({ ok: true });
}
