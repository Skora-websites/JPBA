"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { useRegistrations } from "@/contexts/RegistrationContext";

const ITEMS_PER_PAGE = 10;

export default function RegistrationsList() {
  const { registrations, updateRegistration } = useRegistrations();
  const [search, setSearch] = useState("");
  const [filterDistrict, setFilterDistrict] = useState("");
  const [filterCondition, setFilterCondition] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  const [page, setPage] = useState(1);

  // Filter logic
  const filtered = useMemo(() => {
    return registrations.filter((reg) => {
      const matchSearch =
        !search ||
        reg.fullName.toLowerCase().includes(search.toLowerCase()) ||
        reg.email.toLowerCase().includes(search.toLowerCase()) ||
        reg.phone.includes(search) ||
        reg.id.toLowerCase().includes(search.toLowerCase());
      const matchDistrict = !filterDistrict || reg.district === filterDistrict;
      const matchCondition =
        !filterCondition || reg.underlyingCondition === filterCondition;
      const matchStatus = !filterStatus || reg.status === filterStatus;
      return matchSearch && matchDistrict && matchCondition && matchStatus;
    });
  }, [registrations, search, filterDistrict, filterCondition, filterStatus]);

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paginated = filtered.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  // Unique districts/conditions for filters
  const districts = [...new Set(registrations.map((r) => r.district))].sort();
  const conditions = [
    ...new Set(registrations.map((r) => r.underlyingCondition)),
  ].sort();

  // CSV Export
  const exportCSV = () => {
    const headers = [
      "ID",
      "Full Name",
      "DOB",
      "Gender",
      "Phone",
      "Email",
      "District",
      "Condition",
      "Impairment",
      "MIC Status",
      "Status",
      "Submitted At",
    ];
    const rows = filtered.map((r) => [
      r.id,
      r.fullName,
      r.dateOfBirth,
      r.gender,
      r.phone,
      r.email,
      r.district,
      r.underlyingCondition,
      r.impairmentType,
      r.micStatus,
      r.status,
      r.submittedAt,
    ]);
    const csv = [headers, ...rows].map((row) => row.join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `jpba_registrations_${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const statusBadge = (status: string) => {
    const classes: Record<string, string> = {
      pending: "badge-pending",
      approved: "badge-approved",
      rejected: "badge-rejected",
    };
    return (
      <span className={`rounded-full px-2.5 py-0.5 text-[10px] font-semibold ${classes[status] || ""}`}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </span>
    );
  };

  const inputClass =
    "rounded-lg border border-border bg-surface px-3 py-2 text-sm text-white placeholder:text-text-secondary focus:border-primary focus:outline-none transition-colors";

  return (
    <div>
      {/* Filters Bar */}
      <div className="rounded-xl bg-card border border-border p-4 mb-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {/* Search */}
          <input
            type="text"
            placeholder="Search name, email, phone, ID..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setPage(1);
            }}
            className={`${inputClass} lg:col-span-2`}
          />

          {/* District Filter */}
          <select
            value={filterDistrict}
            onChange={(e) => {
              setFilterDistrict(e.target.value);
              setPage(1);
            }}
            className={inputClass}
          >
            <option value="">All Districts</option>
            {districts.map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </select>

          {/* Condition Filter */}
          <select
            value={filterCondition}
            onChange={(e) => {
              setFilterCondition(e.target.value);
              setPage(1);
            }}
            className={inputClass}
          >
            <option value="">All Conditions</option>
            {conditions.map((c) => (
              <option key={c} value={c}>
                {c.replace(/-/g, " ")}
              </option>
            ))}
          </select>

          {/* Status Filter */}
          <select
            value={filterStatus}
            onChange={(e) => {
              setFilterStatus(e.target.value);
              setPage(1);
            }}
            className={inputClass}
          >
            <option value="">All Statuses</option>
            <option value="pending">Pending</option>
            <option value="approved">Approved</option>
            <option value="rejected">Rejected</option>
          </select>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between mt-4">
          <p className="text-xs text-text-secondary">
            Showing {filtered.length} registration{filtered.length !== 1 ? "s" : ""}
          </p>
          <button
            onClick={exportCSV}
            disabled={filtered.length === 0}
            className="rounded-lg bg-accent/15 px-4 py-2 text-xs font-semibold text-accent transition-all hover:bg-accent/25 disabled:opacity-30"
          >
            Export CSV ↓
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="rounded-xl bg-card border border-border overflow-hidden">
        {paginated.length === 0 ? (
          <div className="p-12 text-center">
            <p className="text-text-secondary text-sm">
              {registrations.length === 0
                ? "No registrations submitted yet."
                : "No registrations match your filters."}
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="px-6 py-3 text-left text-xs font-semibold text-text-secondary">ID</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-text-secondary">Name</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-text-secondary">District</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-text-secondary">Condition</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-text-secondary">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-text-secondary">Date</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-text-secondary">Actions</th>
                </tr>
              </thead>
              <tbody>
                {paginated.map((reg) => (
                  <tr key={reg.id} className="border-b border-border last:border-0 hover:bg-white/[0.02]">
                    <td className="px-6 py-4 text-xs font-mono text-text-secondary">{reg.id}</td>
                    <td className="px-6 py-4 text-sm font-medium text-white">{reg.fullName}</td>
                    <td className="px-6 py-4 text-sm text-text-secondary">{reg.district}</td>
                    <td className="px-6 py-4 text-sm text-text-secondary capitalize">
                      {reg.underlyingCondition.replace(/-/g, " ")}
                    </td>
                    <td className="px-6 py-4">{statusBadge(reg.status)}</td>
                    <td className="px-6 py-4 text-xs text-text-secondary">
                      {new Date(reg.submittedAt).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <Link
                          href={`/admin/registrations/${reg.id}`}
                          className="text-xs text-primary hover:text-primary-light transition-colors"
                        >
                          View
                        </Link>
                        {reg.status === "pending" && (
                          <>
                            <button
                              onClick={() =>
                                updateRegistration(reg.id, { status: "approved" })
                              }
                              className="text-xs text-accent hover:text-accent/80 transition-colors"
                            >
                              Approve
                            </button>
                            <button
                              onClick={() =>
                                updateRegistration(reg.id, { status: "rejected" })
                              }
                              className="text-xs text-danger hover:text-danger/80 transition-colors"
                            >
                              Reject
                            </button>
                          </>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-between px-6 py-4 border-t border-border">
            <p className="text-xs text-text-secondary">
              Page {page} of {totalPages}
            </p>
            <div className="flex gap-2">
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1}
                className="rounded-lg border border-border px-3 py-1.5 text-xs text-text-secondary hover:text-white disabled:opacity-30 transition-colors"
              >
                ← Prev
              </button>
              <button
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
                className="rounded-lg border border-border px-3 py-1.5 text-xs text-text-secondary hover:text-white disabled:opacity-30 transition-colors"
              >
                Next →
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
