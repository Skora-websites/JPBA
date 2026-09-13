import { NextRequest, NextResponse } from "next/server";
import { getDb } from "@/lib/db";
import { requireAdmin } from "@/lib/auth";

export async function GET() {
  const admin = await requireAdmin().catch(() => null);
  const rows = admin
    ? getDb().prepare("SELECT * FROM events ORDER BY display_order ASC, event_date ASC").all()
    : getDb().prepare("SELECT * FROM events WHERE published = 1 ORDER BY display_order ASC, event_date ASC").all();
  return NextResponse.json({ events: rows });
}

export async function POST(request: NextRequest) {
  const admin = await requireAdmin();
  if (!admin) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { title, type = "Event", event_date = null, date_label = "", location = "", description = "", display_order = 0, published = 1 } = await request.json();
  if (!title) return NextResponse.json({ error: "Title is required" }, { status: 400 });

  const result = getDb()
    .prepare("INSERT INTO events (title, type, event_date, date_label, location, description, display_order, published) VALUES (?, ?, ?, ?, ?, ?, ?, ?)")
    .run(title, type, event_date, date_label, location, description, display_order, published ? 1 : 0);
  return NextResponse.json({ event: getDb().prepare("SELECT * FROM events WHERE id = ?").get(result.lastInsertRowid) }, { status: 201 });
}
