import { NextRequest, NextResponse } from "next/server";
import { getDb, RegistrationRow } from "@/lib/db";
import { requireAdmin } from "@/lib/auth";
import type { RegistrationFormData } from "@/types/registration";

// Map DB row (snake_case) → app type (camelCase)
export function rowToRegistration(r: RegistrationRow) {
  return {
    id: r.id,
    fullName: r.full_name,
    dateOfBirth: r.date_of_birth,
    gender: r.gender,
    phone: r.phone,
    email: r.email,
    address: r.address,
    district: r.district,
    underlyingCondition: r.underlying_condition,
    impairmentType: r.impairment_type,
    micStatus: r.mic_status,
    photoUrl: r.photo_url,
    idProofUrl: r.id_proof_url,
    medicalCertUrl: r.medical_cert_url,
    status: r.status as "pending" | "approved" | "rejected",
    submittedAt: r.submitted_at,
    adminNotes: r.admin_notes,
  };
}

export async function GET() {
  const admin = await requireAdmin();
  if (!admin) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const rows = getDb().prepare("SELECT * FROM registrations ORDER BY submitted_at DESC").all() as RegistrationRow[];
  return NextResponse.json({ registrations: rows.map(rowToRegistration) });
}

export async function POST(request: NextRequest) {
  try {
    const data = (await request.json()) as RegistrationFormData;
    if (!data.fullName || !data.phone) {
      return NextResponse.json({ error: "Full name and phone are required" }, { status: 400 });
    }

    const id = `JPBA-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).substring(2, 6).toUpperCase()}`;
    const db = getDb();
    db.prepare(
      `INSERT INTO registrations
       (id, full_name, date_of_birth, gender, phone, email, address, district,
        underlying_condition, impairment_type, mic_status, photo_url, id_proof_url, medical_cert_url)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
    ).run(
      id,
      data.fullName,
      data.dateOfBirth ?? "",
      data.gender ?? "",
      data.phone,
      data.email ?? "",
      data.address ?? "",
      data.district ?? "",
      data.underlyingCondition ?? "",
      data.impairmentType ?? "",
      data.micStatus ?? "",
      data.photoUrl ?? "",
      data.idProofUrl ?? "",
      data.medicalCertUrl ?? ""
    );

    return NextResponse.json({ ok: true, id }, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Failed to submit registration" }, { status: 500 });
  }
}
