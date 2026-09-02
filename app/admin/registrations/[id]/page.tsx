"use client";

import { use } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useRegistrations } from "@/contexts/RegistrationContext";

export default function RegistrationDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const router = useRouter();
  const { getRegistration, updateRegistration } = useRegistrations();
  const reg = getRegistration(decodeURIComponent(id));

  if (!reg) {
    return (
      <div className="text-center py-20">
        <h2 className="text-xl font-bold text-white mb-4">
          Registration Not Found
        </h2>
        <p className="text-text-secondary mb-6">
          The registration with ID &quot;{id}&quot; could not be found.
        </p>
        <Link
          href="/admin/registrations"
          className="text-sm text-primary hover:text-primary-light transition-colors"
        >
          ← Back to Registrations
        </Link>
      </div>
    );
  }

  const statusBadge = (status: string) => {
    const classes: Record<string, string> = {
      pending: "badge-pending",
      approved: "badge-approved",
      rejected: "badge-rejected",
    };
    return (
      <span className={`rounded-full px-3 py-1 text-xs font-semibold ${classes[status] || ""}`}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </span>
    );
  };

  const cardClass = "rounded-xl bg-card border border-border p-6";
  const labelClass = "text-xs text-text-secondary mb-1";
  const valueClass = "text-sm font-medium text-white";

  return (
    <div>
      {/* Breadcrumb */}
      <div className="mb-6">
        <Link
          href="/admin/registrations"
          className="text-xs text-text-secondary hover:text-white transition-colors"
        >
          ← Back to Registrations
        </Link>
      </div>

      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
        <div>
          <h2 className="text-xl font-bold text-white">{reg.fullName}</h2>
          <p className="text-sm text-text-secondary mt-1 font-mono">{reg.id}</p>
        </div>
        <div className="flex items-center gap-3">
          {statusBadge(reg.status)}
          <span className="text-xs text-text-secondary">
            Submitted {new Date(reg.submittedAt).toLocaleString()}
          </span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-3 mb-8">
        <button
          onClick={() => updateRegistration(reg.id, { status: "approved" })}
          className="rounded-lg bg-accent/15 px-4 py-2 text-sm font-semibold text-accent hover:bg-accent/25 transition-colors"
        >
          ✓ Approve
        </button>
        <button
          onClick={() => updateRegistration(reg.id, { status: "rejected" })}
          className="rounded-lg bg-danger/15 px-4 py-2 text-sm font-semibold text-danger hover:bg-danger/25 transition-colors"
        >
          ✕ Reject
        </button>
        <button
          onClick={() => updateRegistration(reg.id, { status: "pending" })}
          className="rounded-lg bg-warning/15 px-4 py-2 text-sm font-semibold text-warning hover:bg-warning/25 transition-colors"
        >
          ⏳ Mark Pending
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Personal Info */}
        <div className={cardClass}>
          <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2">
            <span>👤</span> Personal Information
          </h3>
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "Full Name", value: reg.fullName },
              { label: "Date of Birth", value: reg.dateOfBirth },
              { label: "Gender", value: reg.gender },
              { label: "Phone", value: reg.phone },
              { label: "Email", value: reg.email || "—" },
              { label: "District", value: reg.district },
              { label: "Address", value: reg.address || "—" },
            ].map((item) => (
              <div key={item.label}>
                <p className={labelClass}>{item.label}</p>
                <p className={valueClass}>{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Disability Info */}
        <div className={cardClass}>
          <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2">
            <span>⚕️</span> Disability Information
          </h3>
          <div className="space-y-4">
            {[
              { label: "Underlying Condition", value: reg.underlyingCondition },
              { label: "Impairment Type", value: reg.impairmentType },
              { label: "MIC Status", value: reg.micStatus },
            ].map((item) => (
              <div key={item.label}>
                <p className={labelClass}>{item.label}</p>
                <p className={`${valueClass} capitalize`}>
                  {item.value.replace(/-/g, " ")}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Documents */}
        <div className={cardClass}>
          <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2">
            <span>📎</span> Documents
          </h3>
          <div className="space-y-4">
            {[
              { label: "Photo", value: reg.photoUrl },
              { label: "ID Proof", value: reg.idProofUrl },
              { label: "Medical Certificate", value: reg.medicalCertUrl },
            ].map((item) => (
              <div key={item.label} className="flex items-center justify-between">
                <p className={labelClass}>{item.label}</p>
                <p className={valueClass}>
                  {item.value ? (
                    <span className="text-accent">✓ {item.value}</span>
                  ) : (
                    <span className="text-text-secondary">Not uploaded</span>
                  )}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Admin Notes */}
        <div className={cardClass}>
          <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2">
            <span>📝</span> Admin Notes
          </h3>
          <textarea
            value={reg.adminNotes}
            onChange={(e) =>
              updateRegistration(reg.id, { adminNotes: e.target.value })
            }
            placeholder="Add notes about this registration..."
            rows={6}
            className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-sm text-white placeholder:text-text-secondary focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors resize-none"
          />
        </div>
      </div>
    </div>
  );
}
