import { NextRequest, NextResponse } from "next/server";
import { getDb, extractYouTubeId, youTubeThumb } from "@/lib/db";
import { requireAdmin } from "@/lib/auth";

export async function GET() {
  const admin = await requireAdmin().catch(() => null);
  const rows = admin
    ? getDb().prepare("SELECT * FROM videos ORDER BY featured DESC, display_order ASC, created_at DESC").all()
    : getDb().prepare("SELECT * FROM videos WHERE published = 1 ORDER BY featured DESC, display_order ASC, created_at DESC").all();
  return NextResponse.json({ videos: rows });
}

export async function POST(request: NextRequest) {
  const admin = await requireAdmin();
  if (!admin) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = await request.json();
  const { title, description = "", url = "", category = "Matches", featured = 0 } = body;

  const youtubeId = extractYouTubeId(url);
  if (!title) return NextResponse.json({ error: "Title is required" }, { status: 400 });
  if (!youtubeId) return NextResponse.json({ error: "A valid YouTube URL is required" }, { status: 400 });

  const db = getDb();
  const maxOrder = (db.prepare("SELECT COALESCE(MAX(display_order),0) AS m FROM videos").get() as { m: number }).m;
  const result = db
    .prepare(
      "INSERT INTO videos (title, description, youtube_id, thumbnail_url, category, featured, display_order) VALUES (?, ?, ?, ?, ?, ?, ?)"
    )
    .run(title, description, youtubeId, youTubeThumb(youtubeId), category, featured ? 1 : 0, maxOrder + 1);

  const video = db.prepare("SELECT * FROM videos WHERE id = ?").get(result.lastInsertRowid);
  return NextResponse.json({ video }, { status: 201 });
}
