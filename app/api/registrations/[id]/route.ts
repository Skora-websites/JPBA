import { NextRequest, NextResponse } from "next/server";
import { getDb } from "@/lib/db";
import { requireAdmin } from "@/lib/auth";

type Params = { params: Promise<{ id: string }> };

export async function GET(_request: NextRequest, { params }: Params) {
  const admin = await requireAdmin();
  if (!admin) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { id } = await params;
  const row = getDb().prepare("SELECT * FROM registrations WHERE id = ?").get(id) as
    | Record<string, string>
    | undefined;
  if (!row) return NextResponse.json({ error: "Not found" }, { status: 404 });

  // reuse camelCase mapping
  const { rowToRegistration } = await import("../route");
  return NextResponse.json({ registration: rowToRegistration(row as never) });
}

export async function PATCH(request: NextRequest, { params }: Params) {
  const admin = await requireAdmin();
  if (!admin) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { id } = await params;
  const { status, adminNotes } = (await request.json()) as { status?: string; adminNotes?: string };
  const db = getDb();

  const fields: string[] = [];
  const values: unknown[] = [];
  if (status !== undefined) {
    if (!["pending", "approved", "rejected"].includes(status)) {
      return NextResponse.json({ error: "Invalid status" }, { status: 400 });
    }
    fields.push("status = ?");
    values.push(status);
  }
  if (adminNotes !== undefined) {
    fields.push("admin_notes = ?");
    values.push(adminNotes);
  }
  if (fields.length === 0) return NextResponse.json({ error: "Nothing to update" }, { status: 400 });

  fields.push("updated_at = datetime('now')");
  values.push(id);
  const result = db.prepare(`UPDATE registrations SET ${fields.join(", ")} WHERE id = ?`).run(...values);
  if (result.changes === 0) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json({ ok: true });
}

export async function DELETE(_request: NextRequest, { params }: Params) {
  const admin = await requireAdmin();
  if (!admin) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { id } = await params;
  const result = getDb().prepare("DELETE FROM registrations WHERE id = ?").run(id);
  if (result.changes === 0) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json({ ok: true });
}
