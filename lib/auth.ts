import crypto from "crypto";
import bcrypt from "bcryptjs";
import { cookies } from "next/headers";
import { getDb } from "./db";

// ─── Auth: bcrypt password hashing + DB-backed cookie sessions ─────────

export const SESSION_COOKIE = "jpba_session";
const SESSION_DAYS = 7;

export function hashPassword(plain: string): string {
  return bcrypt.hashSync(plain, 10);
}

export function verifyPassword(plain: string, hash: string): boolean {
  return bcrypt.compareSync(plain, hash);
}

export interface AdminUser {
  id: number;
  username: string;
  name: string;
  must_change_password: number;
}

/** Seed the default admin once (username: admin / password: jpba2026). */
export function ensureDefaultAdmin() {
  const db = getDb();
  const count = (db.prepare("SELECT COUNT(*) AS c FROM admin_users").get() as { c: number }).c;
  if (count === 0) {
    db.prepare("INSERT INTO admin_users (username, password_hash, name, must_change_password) VALUES (?, ?, ?, 1)")
      .run("admin", hashPassword("jpba2026"), "JPBA Administrator");
  }
}

export function createSession(adminId: number): string {
  const db = getDb();
  const token = crypto.randomBytes(32).toString("hex");
  const expires = new Date(Date.now() + SESSION_DAYS * 24 * 60 * 60 * 1000);
  db.prepare("INSERT INTO sessions (token, admin_id, expires_at) VALUES (?, ?, ?)")
    .run(token, adminId, expires.toISOString());
  return token;
}

export function destroySession(token: string) {
  getDb().prepare("DELETE FROM sessions WHERE token = ?").run(token);
}

export function getSessionAdmin(token: string | undefined): AdminUser | null {
  if (!token) return null;
  const row = getDb()
    .prepare(
      `SELECT u.id, u.username, u.name, u.must_change_password
       FROM sessions s JOIN admin_users u ON u.id = s.admin_id
       WHERE s.token = ? AND s.expires_at > datetime('now')`
    )
    .get(token) as AdminUser | undefined;
  return row ?? null;
}

/** Read the current admin from the request's cookies (server side). */
export async function currentAdmin(): Promise<AdminUser | null> {
  const store = await cookies();
  return getSessionAdmin(store.get(SESSION_COOKIE)?.value);
}

/** Guard for write APIs — returns the admin or null. */
export async function requireAdmin(): Promise<AdminUser | null> {
  return currentAdmin();
}

export function sessionCookieOptions() {
  return {
    httpOnly: true,
    sameSite: "lax" as const,
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: SESSION_DAYS * 24 * 60 * 60,
  };
}
