import { NextRequest, NextResponse } from "next/server";
import { getDb } from "@/lib/db";
import { requireAdmin } from "@/lib/auth";

export async function GET() {
  const admin = await requireAdmin().catch(() => null);
  const rows = admin
    ? getDb().prepare("SELECT * FROM news_posts ORDER BY featured DESC, published_at DESC").all()
    : getDb().prepare("SELECT * FROM news_posts WHERE published = 1 ORDER BY featured DESC, published_at DESC").all();
  return NextResponse.json({ posts: rows });
}

export async function POST(request: NextRequest) {
  const admin = await requireAdmin();
  if (!admin) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { title, excerpt = "", body = "", image = null, featured = 0, published = 1 } = await request.json();
  if (!title) return NextResponse.json({ error: "Title is required" }, { status: 400 });

  const result = getDb()
    .prepare("INSERT INTO news_posts (title, excerpt, body, image, featured, published) VALUES (?, ?, ?, ?, ?, ?)")
    .run(title, excerpt, body, image, featured ? 1 : 0, published ? 1 : 0);
  return NextResponse.json({ post: getDb().prepare("SELECT * FROM news_posts WHERE id = ?").get(result.lastInsertRowid) }, { status: 201 });
}
