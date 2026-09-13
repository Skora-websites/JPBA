/* eslint-disable @typescript-eslint/no-require-imports */
// Seed the database with initial content so the admin dashboard starts
// populated. Safe to run multiple times (skips already-seeded tables).
// Run with: npx tsx scripts/seed.ts   (or via `npm run seed`)

import { getDb } from "../lib/db";
import { ensureDefaultAdmin } from "../lib/auth";

const NEWS = [
  {
    title: "District Awareness Camp in Ranchi",
    excerpt: "JPBA organized a successful awareness camp at Ranchi District Sports Complex, introducing Boccia to over 50 students and families.",
    featured: 0,
    views: 24,
    date: "2026-08-25",
  },
  {
    title: "Athletes Selected for National Training",
    excerpt: "Three athletes from Jharkhand have been selected for the national coaching camp for upcoming international events.",
    featured: 0,
    views: 36,
    date: "2026-08-10",
  },
  {
    title: "Jharkhand State Championship Announced",
    excerpt: "The first official JPBA State Championship will be held in Ranchi. District associations encouraged to register.",
    featured: 1,
    views: 122,
    date: "2026-07-16",
  },
  {
    title: "Coach Certification Program Launches",
    excerpt: "JPBA in collaboration with BSFI launches a certified coaching program for Boccia across three districts.",
    featured: 0,
    views: 104,
    date: "2026-07-10",
  },
  {
    title: "Equipment Distribution to District Centers",
    excerpt: "International-standard Boccia balls and ramps distributed to 8 training centers across Jharkhand.",
    featured: 0,
    views: 98,
    date: "2026-06-30",
  },
  {
    title: "Partnership with Jharkhand Sports Council",
    excerpt: "JPBA signs MoU with JSSC for facility access and athlete support across the state.",
    featured: 0,
    views: 115,
    date: "2026-06-15",
  },
];

const EVENTS = [
  { title: "Para Boccia Awareness Camp", type: "Awareness Camp", date: "2026-06-07", dateLabel: "7th June, 2026", location: "Kolhapur, Maharashtra", order: 1 },
  { title: "Seoul 2026 World Boccia Championship - South Korea", type: "International", date: "2026-08-24", dateLabel: "24 August–4 September, 2026", location: "Seoul, South Korea", order: 2 },
  { title: "Pilsen 2026 World Boccia Challenger - Czech Republic", type: "International", date: "2026-09-07", dateLabel: "7–15 September, 2026", location: "Pilsen, Czech Republic", order: 3 },
  { title: "2nd Boccia Federation Cup 2026 - TBC", type: "Federation Cup", date: "2026-10-01", dateLabel: "October 2026", location: "TBC", order: 4 },
  { title: "11th Boccia Sub-Junior, Junior, and Senior National Championship 2025–26", type: "National Championship", date: "2027-01-15", dateLabel: "January 2027", location: "TBC", order: 5 },
];

function main() {
  const db = getDb();

  // Admin (username: admin / password: jpba2026 — must change on first login)
  ensureDefaultAdmin();

  // News
  const newsCount = (db.prepare("SELECT COUNT(*) AS c FROM news_posts").get() as { c: number }).c;
  if (newsCount === 0) {
    const ins = db.prepare(
      "INSERT INTO news_posts (title, excerpt, featured, views, published_at) VALUES (?, ?, ?, ?, ?)"
    );
    for (const n of NEWS) ins.run(n.title, n.excerpt, n.featured, n.views, n.date);
    console.log(`Seeded ${NEWS.length} news posts`);
  }

  // Events
  const eventCount = (db.prepare("SELECT COUNT(*) AS c FROM events").get() as { c: number }).c;
  if (eventCount === 0) {
    const ins = db.prepare(
      "INSERT INTO events (title, type, event_date, date_label, location, display_order) VALUES (?, ?, ?, ?, ?, ?)"
    );
    for (const e of EVENTS) ins.run(e.title, e.type, e.date, e.dateLabel, e.location, e.order);
    console.log(`Seeded ${EVENTS.length} events`);
  }

  // Gallery — import the existing lib/images.ts registry
  const photoCount = (db.prepare("SELECT COUNT(*) AS c FROM gallery_photos").get() as { c: number }).c;
  if (photoCount === 0) {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const { GALLERY } = require("../lib/images");
    const ins = db.prepare(
      "INSERT INTO gallery_photos (src, title, category, display_order) VALUES (?, ?, ?, ?)"
    );
    GALLERY.forEach((p: { src: string; title: string; category: string }, i: number) =>
      ins.run(p.src, p.title, p.category, i)
    );
    console.log(`Seeded ${GALLERY.length} gallery photos`);
  }

  console.log("Seed complete ✔");
}

main();
