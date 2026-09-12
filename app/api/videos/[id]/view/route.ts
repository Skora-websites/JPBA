import { NextRequest, NextResponse } from "next/server";
import { getDb } from "@/lib/db";

type Params = { params: Promise<{ id: string }> };

/** Public view counter — increments once per client call when playback starts. */
export async function POST(_request: NextRequest, { params }: Params) {
  const { id } = await params;
  const db = getDb();

  const existing = db.prepare("SELECT id FROM videos WHERE id = ?").get(id);
  if (!existing) return NextResponse.json({ error: "Not found" }, { status: 404 });

  db.prepare("UPDATE videos SET views = views + 1, updated_at = datetime('now') WHERE id = ?").run(id);
  const row = db.prepare("SELECT views FROM videos WHERE id = ?").get(id) as { views: number };
  return NextResponse.json({ views: row.views });
}
