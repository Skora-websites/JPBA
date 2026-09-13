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
  recovery_email?: string | null;
}

/** Seed the default admin once (username: admin / password: jpba2026). */
export function ensureDefaultAdmin() {
  const db = getDb();
  const count = (db.prepare("SELECT COUNT(*) AS c FROM admin_users").get() as { c: number }).c;
  if (count === 0) {
    const seedEmail = process.env.ADMIN_RECOVERY_EMAIL || "";
    db.prepare(
      "INSERT INTO admin_users (username, password_hash, name, must_change_password, recovery_email) VALUES (?, ?, ?, 1, ?)"
    ).run("admin", hashPassword("jpba2026"), "JPBA Administrator", seedEmail);
  }
}

// ─── Password recovery ──────────────────────────────────────────────────

export interface RecoveryTarget {
  id: number;
  username: string;
  recovery_email: string | null;
}

export function findRecoveryTarget(identifier: string): RecoveryTarget | null {
  const id = identifier.trim().toLowerCase();
  const db = getDb();
  const byUsername = db
    .prepare("SELECT id, username, recovery_email FROM admin_users WHERE lower(username) = ?")
    .get(id) as RecoveryTarget | undefined;
  if (byUsername) return byUsername;
  const byEmail = db
    .prepare("SELECT id, username, recovery_email FROM admin_users WHERE lower(recovery_email) = ?")
    .get(id) as RecoveryTarget | undefined;
  return byEmail ?? null;
}

const RESET_TOKEN_MINUTES = 30;

/**
 * Create a one-time reset token for an admin. Returns the raw token (shown
 * or emailed) — only its SHA-256 hash is stored, so a DB leak can't be used
 * to reset anything. Any previous unused tokens for the admin are revoked.
 */
export function createPasswordReset(adminId: number, ip: string): string {
  const db = getDb();
  db.prepare("DELETE FROM password_resets WHERE admin_id = ? AND used_at IS NULL").run(adminId);
  const token = crypto.randomBytes(32).toString("hex");
  const tokenHash = crypto.createHash("sha256").update(token).digest("hex");
  const expires = new Date(Date.now() + RESET_TOKEN_MINUTES * 60 * 1000).toISOString();
  db.prepare(
    "INSERT INTO password_resets (token_hash, admin_id, requested_ip, expires_at) VALUES (?, ?, ?, ?)"
  ).run(tokenHash, adminId, ip, expires);
  return token;
}

export interface ResetTokenInfo {
  valid: boolean;
  adminId?: number;
}

export function consumePasswordReset(token: string, newPassword: string): ResetTokenInfo {
  const db = getDb();
  const tokenHash = crypto.createHash("sha256").update(token).digest("hex");
  const row = db
    .prepare(
      `SELECT r.admin_id, r.expires_at FROM password_resets r
       WHERE r.token_hash = ? AND r.used_at IS NULL AND r.expires_at > datetime('now')`
    )
    .get(tokenHash) as { admin_id: number; expires_at: string } | undefined;
  if (!row) return { valid: false };

  const setPwd = db.prepare("UPDATE admin_users SET password_hash = ?, must_change_password = 0 WHERE id = ?");
  const markUsed = db.prepare("UPDATE password_resets SET used_at = datetime('now') WHERE token_hash = ?");
  const killSessions = db.prepare("DELETE FROM sessions WHERE admin_id = ?");
  const tx = db.transaction(() => {
    setPwd.run(hashPassword(newPassword), row.admin_id);
    markUsed.run(tokenHash);
    killSessions.run(row.admin_id);
  });
  tx();
  return { valid: true, adminId: row.admin_id };
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
