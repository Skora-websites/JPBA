import path from "path";
import fs from "fs";
import Database from "better-sqlite3";

// ─── SQLite data layer ──────────────────────────────────────────────────
// Locally the DB lives at data/jpba.db. On read-only filesystems (Vercel,
// serverless) it is copied to /tmp at boot — changes persist per-instance
// for the demo. On the client's own server the file persists on disk.

const DATA_DIR = path.join(process.cwd(), "data");
const BUNDLED_DB = path.join(DATA_DIR, "jpba.db");

// Writable location: /tmp on Vercel/Linux, project data/ locally on Windows
const WRITABLE_DIR = process.env.TMPDIR || process.env.TEMP || "/tmp";
const RUNTIME_DB = process.env.VERCEL
  ? path.join(WRITABLE_DIR, "jpba.db")
  : path.join(DATA_DIR, "jpba.db");
// Marker holding the deployment that seeded the runtime copy — /tmp can
// survive across deployments on warm instances, so re-seed when it differs.
const DEPLOY_MARKER = path.join(WRITABLE_DIR, "jpba.deploy.id");
const DEPLOY_ID = process.env.VERCEL_DEPLOYMENT_ID ?? "local";

declare global {
  // eslint-disable-next-line no-var
  var __jpbaDb: Database.Database | undefined;
}

function createDb(): Database.Database {
  if (process.env.VERCEL && fs.existsSync(BUNDLED_DB)) {
    const seeded = fs.existsSync(DEPLOY_MARKER)
      ? fs.readFileSync(DEPLOY_MARKER, "utf8")
      : "";
    if (!fs.existsSync(RUNTIME_DB) || seeded !== DEPLOY_ID) {
      // First boot on this instance, or a new deployment: refresh from bundle
      fs.copyFileSync(BUNDLED_DB, RUNTIME_DB);
      fs.writeFileSync(DEPLOY_MARKER, DEPLOY_ID);
    }
  }
  if (!process.env.VERCEL) fs.mkdirSync(DATA_DIR, { recursive: true });
  const db = new Database(RUNTIME_DB);
  db.pragma("journal_mode = WAL");
  db.pragma("foreign_keys = ON");
  migrate(db);
  return db;
}

export function getDb(): Database.Database {
  if (!global.__jpbaDb) global.__jpbaDb = createDb();
  return global.__jpbaDb;
}

function migrate(db: Database.Database) {
  db.exec(`
    CREATE TABLE IF NOT EXISTS admin_users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT UNIQUE NOT NULL,
      password_hash TEXT NOT NULL,
      name TEXT NOT NULL DEFAULT 'Administrator',
      must_change_password INTEGER NOT NULL DEFAULT 0,
      created_at TEXT NOT NULL DEFAULT (datetime('now'))
    );

    CREATE TABLE IF NOT EXISTS sessions (
      token TEXT PRIMARY KEY,
      admin_id INTEGER NOT NULL REFERENCES admin_users(id) ON DELETE CASCADE,
      created_at TEXT NOT NULL DEFAULT (datetime('now')),
      expires_at TEXT NOT NULL
    );

    CREATE TABLE IF NOT EXISTS videos (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      description TEXT DEFAULT '',
      youtube_id TEXT,
      file_path TEXT,
      thumbnail_url TEXT,
      category TEXT DEFAULT 'Matches',
      featured INTEGER NOT NULL DEFAULT 0,
      published INTEGER NOT NULL DEFAULT 1,
      display_order INTEGER NOT NULL DEFAULT 0,
      views INTEGER NOT NULL DEFAULT 0,
      created_at TEXT NOT NULL DEFAULT (datetime('now')),
      updated_at TEXT NOT NULL DEFAULT (datetime('now'))
    );

    CREATE TABLE IF NOT EXISTS news_posts (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      excerpt TEXT DEFAULT '',
      body TEXT DEFAULT '',
      image TEXT,
      featured INTEGER NOT NULL DEFAULT 0,
      published INTEGER NOT NULL DEFAULT 1,
      views INTEGER NOT NULL DEFAULT 0,
      published_at TEXT NOT NULL DEFAULT (datetime('now')),
      created_at TEXT NOT NULL DEFAULT (datetime('now'))
    );

    CREATE TABLE IF NOT EXISTS events (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      type TEXT DEFAULT 'Event',
      event_date TEXT,
      location TEXT DEFAULT '',
      description TEXT DEFAULT '',
      display_order INTEGER NOT NULL DEFAULT 0,
      published INTEGER NOT NULL DEFAULT 1,
      created_at TEXT NOT NULL DEFAULT (datetime('now'))
    );

    CREATE TABLE IF NOT EXISTS gallery_albums (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      location TEXT DEFAULT '',
      album_date TEXT,
      cover_image TEXT,
      featured INTEGER NOT NULL DEFAULT 0,
      display_order INTEGER NOT NULL DEFAULT 0,
      created_at TEXT NOT NULL DEFAULT (datetime('now'))
    );

    CREATE TABLE IF NOT EXISTS gallery_photos (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      album_id INTEGER REFERENCES gallery_albums(id) ON DELETE SET NULL,
      src TEXT NOT NULL,
      title TEXT DEFAULT '',
      category TEXT DEFAULT 'Community',
      display_order INTEGER NOT NULL DEFAULT 0,
      created_at TEXT NOT NULL DEFAULT (datetime('now'))
    );

    CREATE TABLE IF NOT EXISTS password_resets (
      token_hash TEXT PRIMARY KEY,
      admin_id INTEGER NOT NULL REFERENCES admin_users(id) ON DELETE CASCADE,
      requested_ip TEXT DEFAULT '',
      created_at TEXT NOT NULL DEFAULT (datetime('now')),
      expires_at TEXT NOT NULL,
      used_at TEXT
    );

    CREATE TABLE IF NOT EXISTS registrations (
      id TEXT PRIMARY KEY,
      full_name TEXT NOT NULL,
      date_of_birth TEXT DEFAULT '',
      gender TEXT DEFAULT '',
      phone TEXT NOT NULL,
      email TEXT DEFAULT '',
      address TEXT DEFAULT '',
      district TEXT DEFAULT '',
      underlying_condition TEXT DEFAULT '',
      impairment_type TEXT DEFAULT '',
      mic_status TEXT DEFAULT '',
      photo_url TEXT DEFAULT '',
      id_proof_url TEXT DEFAULT '',
      medical_cert_url TEXT DEFAULT '',
      status TEXT NOT NULL DEFAULT 'pending',
      admin_notes TEXT DEFAULT '',
      submitted_at TEXT NOT NULL DEFAULT (datetime('now')),
      updated_at TEXT NOT NULL DEFAULT (datetime('now'))
    );
  `);

  // Lightweight column migrations (idempotent)
  const eventCols = db.prepare("PRAGMA table_info(events)").all() as { name: string }[];
  if (!eventCols.some((c) => c.name === "date_label")) {
    db.exec("ALTER TABLE events ADD COLUMN date_label TEXT DEFAULT ''");
  }
  const adminCols = db.prepare("PRAGMA table_info(admin_users)").all() as { name: string }[];
  if (!adminCols.some((c) => c.name === "recovery_email")) {
    db.exec("ALTER TABLE admin_users ADD COLUMN recovery_email TEXT DEFAULT ''");
  }
}

export interface VideoRow {
  id: number;
  title: string;
  description: string;
  youtube_id: string | null;
  file_path: string | null;
  thumbnail_url: string | null;
  category: string;
  featured: number;
  published: number;
  display_order: number;
  views: number;
  created_at: string;
}

export interface NewsRow {
  id: number;
  title: string;
  excerpt: string;
  body: string;
  image: string | null;
  featured: number;
  published: number;
  views: number;
  published_at: string;
}

export interface EventRow {
  id: number;
  title: string;
  type: string;
  event_date: string | null;
  date_label: string;
  location: string;
  description: string;
  display_order: number;
  published: number;
}

export interface GalleryPhotoRow {
  id: number;
  album_id: number | null;
  src: string;
  title: string;
  category: string;
  display_order: number;
}

export interface RegistrationRow {
  id: string;
  full_name: string;
  date_of_birth: string;
  gender: string;
  phone: string;
  email: string;
  address: string;
  district: string;
  underlying_condition: string;
  impairment_type: string;
  mic_status: string;
  photo_url: string;
  id_proof_url: string;
  medical_cert_url: string;
  status: string;
  admin_notes: string;
  submitted_at: string;
}

// ─── Query helpers ──────────────────────────────────────────────────────
export const queries = {
  videos: {
    listPublished: () =>
      getDb().prepare("SELECT * FROM videos WHERE published = 1 ORDER BY featured DESC, display_order ASC, created_at DESC").all() as VideoRow[],
    listAll: () =>
      getDb().prepare("SELECT * FROM videos ORDER BY featured DESC, display_order ASC, created_at DESC").all() as VideoRow[],
    get: (id: number) => getDb().prepare("SELECT * FROM videos WHERE id = ?").get(id) as VideoRow | undefined,
    featured: () => getDb().prepare("SELECT * FROM videos WHERE published = 1 AND featured = 1 ORDER BY display_order ASC LIMIT 4").all() as VideoRow[],
  },
  news: {
    listPublished: () =>
      getDb().prepare("SELECT * FROM news_posts WHERE published = 1 ORDER BY featured DESC, published_at DESC").all() as NewsRow[],
    listAll: () =>
      getDb().prepare("SELECT * FROM news_posts ORDER BY featured DESC, published_at DESC").all() as NewsRow[],
    get: (id: number) => getDb().prepare("SELECT * FROM news_posts WHERE id = ?").get(id) as NewsRow | undefined,
  },
  events: {
    listPublished: () =>
      getDb().prepare("SELECT * FROM events WHERE published = 1 ORDER BY display_order ASC, event_date ASC").all() as EventRow[],
    listAll: () =>
      getDb().prepare("SELECT * FROM events ORDER BY display_order ASC, event_date ASC").all() as EventRow[],
  },
  gallery: {
    photos: () =>
      getDb().prepare("SELECT * FROM gallery_photos ORDER BY display_order ASC, id ASC").all() as GalleryPhotoRow[],
  },
  registrations: {
    list: () => getDb().prepare("SELECT * FROM registrations ORDER BY submitted_at DESC").all() as RegistrationRow[],
    get: (id: string) => getDb().prepare("SELECT * FROM registrations WHERE id = ?").get(id) as RegistrationRow | undefined,
  },
};

// Extract a YouTube video ID from any common URL format (or a raw ID)
export function extractYouTubeId(input: string): string | null {
  if (!input) return null;
  const patterns = [
    /(?:youtube\.com\/watch\?(?:.*&)?v=)([\w-]{11})/,
    /(?:youtu\.be\/)([\w-]{11})/,
    /(?:youtube\.com\/(?:embed|shorts|live)\/)([\w-]{11})/,
    /(?:youtube\.com\/.*[?&]video_id=)([\w-]{11})/,
  ];
  for (const p of patterns) {
    const m = input.match(p);
    if (m) return m[1];
  }
  if (/^[\w-]{11}$/.test(input.trim())) return input.trim();
  return null;
}

export function youTubeThumb(youtubeId: string): string {
  return `https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg`;
}
