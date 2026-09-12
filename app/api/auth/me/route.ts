import { NextResponse } from "next/server";
import { currentAdmin } from "@/lib/auth";

export async function GET() {
  const admin = await currentAdmin();
  if (!admin) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  return NextResponse.json({ admin });
}
