import { NextRequest, NextResponse } from "next/server";
import { getDb } from "@/lib/db";
import { requireAdmin } from "@/lib/auth";

type Params = { params: Promise<{ id: string }> };

export async function PATCH(request: NextRequest, { params }: Params) {
  const admin = await requireAdmin();
  if (!admin) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { id } = await params;
  const body = await request.json();
  const db = getDb();

  const existing = db.prepare("SELECT * FROM videos WHERE id = ?").get(id) as Record<string, unknown> | undefined;
  if (!existing) return NextResponse.json({ error: "Not found" }, { status: 404 });

  const fields: string[] = [];
  const values: unknown[] = [];
  const allowed = ["title", "description", "category", "featured", "published", "display_order", "youtube_id", "thumbnail_url"];
  for (const key of allowed) {
    if (key in body) {
      fields.push(`${key} = ?`);
      values.push(body[key]);
    }
  }
  if (fields.length === 0) return NextResponse.json({ error: "Nothing to update" }, { status: 400 });
  fields.push("updated_at = datetime('now')");
  values.push(id);

  db.prepare(`UPDATE videos SET ${fields.join(", ")} WHERE id = ?`).run(...values);
  return NextResponse.json({ video: db.prepare("SELECT * FROM videos WHERE id = ?").get(id) });
}

export async function DELETE(_request: NextRequest, { params }: Params) {
  const admin = await requireAdmin();
  if (!admin) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { id } = await params;
  const result = getDb().prepare("DELETE FROM videos WHERE id = ?").run(id);
  if (result.changes === 0) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json({ ok: true });
}
