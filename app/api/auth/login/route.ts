import { NextRequest, NextResponse } from "next/server";
import { getDb } from "@/lib/db";
import { verifyPassword, createSession, SESSION_COOKIE, sessionCookieOptions } from "@/lib/auth";

export async function POST(request: NextRequest) {
  try {
    const { username, password } = await request.json();
    if (!username || !password) {
      return NextResponse.json({ error: "Username and password required" }, { status: 400 });
    }

    const db = getDb();
    const user = db.prepare("SELECT * FROM admin_users WHERE username = ?").get(username) as
      | { id: number; username: string; password_hash: string; must_change_password: number }
      | undefined;

    if (!user || !verifyPassword(password, user.password_hash)) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
    }

    const token = createSession(user.id);
    const res = NextResponse.json({
      ok: true,
      mustChangePassword: !!user.must_change_password,
    });
    res.cookies.set(SESSION_COOKIE, token, sessionCookieOptions());
    return res;
  } catch {
    return NextResponse.json({ error: "Login failed" }, { status: 500 });
  }
}
