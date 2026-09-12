# JPBA — Jharkhand Para Boccia Association Website

Official portal for Para Boccia in Jharkhand, India. Next.js 16 + SQLite.

## Quick start (development)

```bash
npm install
npm run seed    # creates data/jpba.db with initial content + default admin
npm run dev
```

## Admin panel

Visit **`/admin`** — you'll be redirected to the login page.

| | |
|---|---|
| Default username | `admin` |
| Default password | `jpba2026` |

**You'll be asked to set your own password on first login** (the default is intentionally flagged for forced change).

What admins can manage:

- **Videos** — paste any YouTube URL (auto-detects the video ID and fetches the real thumbnail), title/description/category, feature on homepage, publish/hide, reorder, delete
- **News** — create, edit, feature, hide, delete posts (shows on homepage News section)
- **Events** — manage the homepage schedule (type, date, location, ordering)
- **Gallery** — upload photos (auto-compressed to WebP for fast loading), rename, re-categorize, delete
- **Registrations** — review, approve/reject athlete registrations, export CSV, add notes

All content is stored in a single SQLite database — see Backup below.

## Deploying to your own server (self-hosted)

The project builds to a **standalone Node server** — no Vercel needed.

```bash
# 1. Build
npm run build

# 2. Copy to the server (or git pull there), then install only production deps
npm ci --omit=dev

# 3. Run (Next outputs .next/standalone/server.js after build)
node .next/standalone/server.js
# Default port 3000 — change with PORT=8080 node .next/standalone/server.js
```

### Static files note

Because standalone mode doesn't serve `public/`, copy it next to the server (and `.next/static` into `.next/standalone/.next/`):

```bash
cp -r public .next/standalone/public
cp -r .next/static .next/standalone/.next/static
```

Then point your reverse proxy (nginx/Apache/Caddy) at the Node port.

### Environment

Optional `.env` at the project root:

```
PORT=3000
NODE_ENV=production
```

## Backup & restore

Everything the admin manages lives in **two places** on the server:

1. `data/jpba.db` — the SQLite database (videos, news, events, registrations, photo records)
2. `public/uploads/` — uploaded gallery photos (WebP files)

**Backup = copy both.** Restore = put them back and restart the server. No DB server required.

## Resetting the database

```bash
rm data/jpba.db
npm run seed
```

This re-creates the schema, the default admin, and re-imports the built-in gallery/news/events seed content.

## Tech notes

- Next.js 16 (App Router, `proxy.ts` guards `/admin/**` — Next 16 renamed middleware to proxy)
- SQLite via `better-sqlite3` (native module, `serverExternalPackages` configured)
- bcrypt password hashing + HTTP-only cookie sessions (7 days)
- Photos uploaded through the admin are resized to ≤1920px WebP via `sharp`
- Videos are embedded from YouTube with a click-to-load facade (fast on mobile data)
