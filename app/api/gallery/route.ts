import { NextRequest, NextResponse } from "next/server";
import { getDb } from "@/lib/db";
import { requireAdmin } from "@/lib/auth";

export async function GET() {
  const photos = getDb().prepare("SELECT * FROM gallery_photos ORDER BY display_order ASC, id ASC").all();
  return NextResponse.json({ photos });
}

export async function POST(request: NextRequest) {
  const admin = await requireAdmin();
  if (!admin) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { src, title = "", category = "Community", album_id = null, display_order = 0 } = await request.json();
  if (!src) return NextResponse.json({ error: "Photo source is required" }, { status: 400 });

  const result = getDb()
    .prepare("INSERT INTO gallery_photos (src, title, category, album_id, display_order) VALUES (?, ?, ?, ?, ?)")
    .run(src, title, category, album_id, display_order);
  return NextResponse.json({ photo: getDb().prepare("SELECT * FROM gallery_photos WHERE id = ?").get(result.lastInsertRowid) }, { status: 201 });
}

export async function PATCH(request: NextRequest) {
  const admin = await requireAdmin();
  if (!admin) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { id, ...updates } = await request.json();
  if (!id) return NextResponse.json({ error: "id required" }, { status: 400 });

  const fields: string[] = [];
  const values: unknown[] = [];
  for (const key of ["title", "category", "album_id", "display_order"]) {
    if (key in updates) {
      fields.push(`${key} = ?`);
      values.push(updates[key]);
    }
  }
  if (fields.length === 0) return NextResponse.json({ error: "Nothing to update" }, { status: 400 });
  values.push(id);
  getDb().prepare(`UPDATE gallery_photos SET ${fields.join(", ")} WHERE id = ?`).run(...values);
  return NextResponse.json({ photo: getDb().prepare("SELECT * FROM gallery_photos WHERE id = ?").get(id) });
}

export async function DELETE(request: NextRequest) {
  const admin = await requireAdmin();
  if (!admin) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const id = new URL(request.url).searchParams.get("id");
  if (!id) return NextResponse.json({ error: "id required" }, { status: 400 });
  const result = getDb().prepare("DELETE FROM gallery_photos WHERE id = ?").run(id);
  if (result.changes === 0) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json({ ok: true });
}
