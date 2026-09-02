"use client";

import Link from "next/link";
import { useRegistrations } from "@/contexts/RegistrationContext";

export default function AdminDashboard() {
  const { registrations } = useRegistrations();

  const stats = {
    total: registrations.length,
    pending: registrations.filter((r) => r.status === "pending").length,
    approved: registrations.filter((r) => r.status === "approved").length,
    rejected: registrations.filter((r) => r.status === "rejected").length,
  };

  const statCards = [
    {
      label: "Total Registrations",
      value: stats.total,
      icon: "📋",
      color: "bg-primary/15 text-primary",
    },
    {
      label: "Pending Review",
      value: stats.pending,
      icon: "⏳",
      color: "bg-warning/15 text-warning",
    },
    {
      label: "Approved",
      value: stats.approved,
      icon: "✅",
      color: "bg-accent/15 text-accent",
    },
    {
      label: "Rejected",
      value: stats.rejected,
      icon: "❌",
      color: "bg-danger/15 text-danger",
    },
  ];

  const recent = registrations.slice(0, 10);

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

  return (
    <div>
      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {statCards.map((stat) => (
          <div
            key={stat.label}
            className="rounded-xl bg-card border border-border p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <span className={`h-10 w-10 rounded-lg flex items-center justify-center ${stat.color}`}>
                <span className="text-lg">{stat.icon}</span>
              </span>
            </div>
            <p className="text-3xl font-bold text-white">{stat.value}</p>
            <p className="text-sm text-text-secondary mt-1">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Recent Registrations */}
      <div className="rounded-xl bg-card border border-border overflow-hidden">
        <div className="flex items-center justify-between px-6 py-4 border-b border-border">
          <h2 className="text-base font-bold text-white">Recent Registrations</h2>
          <Link
            href="/admin/registrations"
            className="text-xs text-primary hover:text-primary-light transition-colors"
          >
            View All →
          </Link>
        </div>

        {recent.length === 0 ? (
          <div className="p-12 text-center">
            <p className="text-text-secondary text-sm">
              No registrations yet. Players will appear here after submitting the registration form.
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="px-6 py-3 text-left text-xs font-semibold text-text-secondary">
                    ID
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-text-secondary">
                    Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-text-secondary">
                    District
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-text-secondary">
                    Condition
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-text-secondary">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-text-secondary">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-text-secondary">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {recent.map((reg) => (
                  <tr key={reg.id} className="border-b border-border last:border-0 hover:bg-white/[0.02]">
                    <td className="px-6 py-4 text-xs font-mono text-text-secondary">
                      {reg.id}
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-white">
                      {reg.fullName}
                    </td>
                    <td className="px-6 py-4 text-sm text-text-secondary">
                      {reg.district}
                    </td>
                    <td className="px-6 py-4 text-sm text-text-secondary capitalize">
                      {reg.underlyingCondition.replace(/-/g, " ")}
                    </td>
                    <td className="px-6 py-4">{statusBadge(reg.status)}</td>
                    <td className="px-6 py-4 text-xs text-text-secondary">
                      {new Date(reg.submittedAt).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4">
                      <Link
                        href={`/admin/registrations/${reg.id}`}
                        className="text-xs text-primary hover:text-primary-light transition-colors"
                      >
                        View
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
