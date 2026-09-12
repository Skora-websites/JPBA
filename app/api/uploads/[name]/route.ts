import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

// On Vercel the filesystem is read-only, so admin uploads land in /tmp.
// This route streams them back. On a self-hosted server files live in
// public/uploads and are served statically — this route is unused there.
export async function GET(_request: NextRequest, { params }: { params: Promise<{ name: string }> }) {
  const { name } = await params;
  if (!/^[\w-]+\.webp$/.test(name)) {
    return NextResponse.json({ error: "Invalid file name" }, { status: 400 });
  }

  const filePath = path.join(process.env.TMPDIR || "/tmp", "jpba-uploads", name);
  if (!fs.existsSync(filePath)) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  const buffer = fs.readFileSync(filePath);
  return new NextResponse(buffer, {
    headers: {
      "Content-Type": "image/webp",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}
