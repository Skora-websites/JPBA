import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import sharp from "sharp";
import { requireAdmin } from "@/lib/auth";

// Writable dir: /tmp on Vercel (served via /api/uploads/[name]),
// public/uploads on a self-hosted server (served statically).
const UPLOAD_DIR = process.env.VERCEL
  ? path.join(process.env.TMPDIR || "/tmp", "jpba-uploads")
  : path.join(process.cwd(), "public", "uploads");
const MAX_SIZE = 10 * 1024 * 1024; // 10 MB

export async function POST(request: NextRequest) {
  const admin = await requireAdmin();
  if (!admin) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const form = await request.formData();
  const file = form.get("file");
  if (!(file instanceof File)) return NextResponse.json({ error: "file required" }, { status: 400 });
  if (file.size > MAX_SIZE) return NextResponse.json({ error: "Max file size is 10 MB" }, { status: 400 });
  if (!file.type.startsWith("image/")) return NextResponse.json({ error: "Only images are allowed" }, { status: 400 });

  fs.mkdirSync(UPLOAD_DIR, { recursive: true });
  const name = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}.webp`;
  const outPath = path.join(UPLOAD_DIR, name);

  const buffer = Buffer.from(await file.arrayBuffer());
  await sharp(buffer)
    .rotate() // respect EXIF orientation
    .resize(1920, 1920, { withoutEnlargement: true })
    .webp({ quality: 82 })
    .toFile(outPath);

  const src = process.env.VERCEL ? `/api/uploads/${name}` : `/uploads/${name}`;
  return NextResponse.json({ src }, { status: 201 });
}
