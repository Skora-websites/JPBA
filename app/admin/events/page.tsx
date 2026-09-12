"use client";
import { useEffect, useState } from "react";

interface Event {
  id: number;
  title: string;
  type: string;
  event_date: string | null;
  location: string;
  display_order: number;
  published: number;
}

const TYPES = ["Awareness Camp", "District", "State Championship", "National Championship", "Federation Cup", "International"];

export default function AdminEvents() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState<Event | null>(null);
  const [error, setError] = useState("");

  const [title, setTitle] = useState("");
  const [type, setType] = useState(TYPES[0]);
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");

  const load = () =>
    fetch("/api/events").then((r) => r.json()).then((d) => setEvents(d.events ?? [])).finally(() => setLoading(false));

  useEffect(() => { load(); }, []);

  const openCreate = () => {
    setEditing(null); setTitle(""); setType(TYPES[0]); setDate(""); setLocation(""); setError(""); setShowForm(true);
  };
  const openEdit = (ev: Event) => {
    setEditing(ev); setTitle(ev.title); setType(ev.type); setDate(ev.event_date?.slice(0, 10) ?? ""); setLocation(ev.location); setError(""); setShowForm(true);
  };

  const save = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return setError("Title is required");
    const payload = { title, type, event_date: date || null, location };
    const res = editing
      ? await fetch(`/api/events/${editing.id}`, { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) })
      : await fetch("/api/events", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...payload, display_order: events.length + 1 }) });
    if (!res.ok) { const d = await res.json(); return setError(d.error || "Save failed"); }
    setShowForm(false);
    load();
  };

  const patch = async (id: number, updates: Record<string, unknown>) => {
    await fetch(`/api/events/${id}`, { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify(updates) });
    load();
  };

  const remove = async (ev: Event) => {
    if (!confirm(`Delete "${ev.title}"?`)) return;
    await fetch(`/api/events/${ev.id}`, { method: "DELETE" });
    load();
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-[28px] font-bold text-[#0A2F1D]">Events</h1>
          <p className="text-[#5C5C5C] text-[14px] mt-1">Manage the schedule shown on the homepage</p>
        </div>
        <button onClick={openCreate}
          className="px-5 py-2.5 bg-[#C9A84C] text-[#0A2F1D] rounded-lg font-bold text-[13px] uppercase tracking-wider hover:bg-[#0A2F1D] hover:text-white transition-colors">
          + New Event
        </button>
      </div>

      {showForm && (
        <div className="fixed inset-0 z-50 bg-black/40 flex items-start justify-center p-4 overflow-y-auto">
          <form onSubmit={save} className="w-full max-w-lg rounded-2xl bg-white border border-[#E2D9C8] shadow-2xl p-6 mt-16">
            <h2 className="text-[18px] font-bold text-[#0A2F1D] mb-5">{editing ? "Edit Event" : "New Event"}</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#5C5C5C] mb-1.5">Title *</label>
                <input value={title} onChange={(e) => setTitle(e.target.value)}
                  className="w-full rounded-lg border border-[#E2D9C8] px-4 py-3 text-sm focus:border-[#C9A84C] focus:outline-none focus:ring-2 focus:ring-[#C9A84C]/20" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#5C5C5C] mb-1.5">Type</label>
                  <select value={type} onChange={(e) => setType(e.target.value)}
                    className="w-full rounded-lg border border-[#E2D9C8] px-4 py-3 text-sm bg-white focus:border-[#C9A84C] focus:outline-none">
                    {TYPES.map((t) => <option key={t}>{t}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#5C5C5C] mb-1.5">Date</label>
                  <input type="date" value={date} onChange={(e) => setDate(e.target.value)}
                    className="w-full rounded-lg border border-[#E2D9C8] px-4 py-3 text-sm focus:border-[#C9A84C] focus:outline-none focus:ring-2 focus:ring-[#C9A84C]/20" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#5C5C5C] mb-1.5">Location</label>
                <input value={location} onChange={(e) => setLocation(e.target.value)} placeholder="e.g. Ranchi, Jharkhand"
                  className="w-full rounded-lg border border-[#E2D9C8] px-4 py-3 text-sm focus:border-[#C9A84C] focus:outline-none focus:ring-2 focus:ring-[#C9A84C]/20" />
              </div>
              {error && <p className="text-sm text-[#B91C1C]">{error}</p>}
              <div className="flex gap-3 pt-2">
                <button type="submit" className="px-6 py-3 rounded-lg bg-[#C9A84C] text-[#0A2F1D] text-[13px] font-bold uppercase tracking-wider hover:bg-[#0A2F1D] hover:text-white transition-colors">
                  {editing ? "Save Changes" : "Add Event"}
                </button>
                <button type="button" onClick={() => setShowForm(false)}
                  className="px-6 py-3 rounded-lg border border-[#E2D9C8] text-[#5C5C5C] text-[13px] font-bold hover:border-[#C9A84C] transition-colors">
                  Cancel
                </button>
              </div>
            </div>
          </form>
        </div>
      )}

      <div className="rounded-2xl bg-white border border-[#E2D9C8] overflow-hidden">
        {loading ? (
          <p className="px-6 py-8 text-[#8A8A8A] text-sm">Loading…</p>
        ) : events.length === 0 ? (
          <p className="px-6 py-8 text-[#8A8A8A] text-sm">No events yet.</p>
        ) : (
          <ul className="divide-y divide-[#F0EBE0]">
            {events.map((ev, i) => (
              <li key={ev.id} className="flex flex-col sm:flex-row sm:items-center gap-3 px-6 py-4 hover:bg-[#FDF8EF]/60 transition-colors">
                <span className="text-[24px] font-bold text-[#C9A84C] min-w-[36px]">{String(i + 1).padStart(2, "0")}</span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-[15px] font-bold text-[#0A2F1D]">{ev.title}</h3>
                    <span className="px-2 py-0.5 rounded-full bg-[#C9A84C]/10 text-[#C9A84C] text-[10px] font-bold">{ev.type}</span>
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${ev.published ? "bg-[#1B4E33]/10 text-[#1B4E33]" : "bg-[#B91C1C]/10 text-[#B91C1C]"}`}>
                      {ev.published ? "Shown" : "Hidden"}
                    </span>
                  </div>
                  <p className="text-[12px] text-[#8A8A8A] mt-1">
                    {ev.event_date || "Date TBC"} · {ev.location || "Location TBC"}
                  </p>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <button onClick={() => patch(ev.id, { display_order: Math.max(0, ev.display_order - 1) })}
                    className="h-8 w-8 rounded-lg border border-[#E2D9C8] text-[#5C5C5C] hover:border-[#C9A84C] hover:text-[#C9A84C] transition-colors">↑</button>
                  <button onClick={() => patch(ev.id, { display_order: ev.display_order + 1 })}
                    className="h-8 w-8 rounded-lg border border-[#E2D9C8] text-[#5C5C5C] hover:border-[#C9A84C] hover:text-[#C9A84C] transition-colors">↓</button>
                  <button onClick={() => openEdit(ev)} className="h-8 px-3 rounded-lg border border-[#E2D9C8] text-[12px] font-bold text-[#5C5C5C] hover:border-[#C9A84C] hover:text-[#C9A84C] transition-colors">Edit</button>
                  <button onClick={() => patch(ev.id, { published: ev.published ? 0 : 1 })}
                    className={`h-8 px-3 rounded-lg text-[12px] font-bold transition-colors ${ev.published ? "border border-[#E2D9C8] text-[#5C5C5C] hover:border-[#B91C1C] hover:text-[#B91C1C]" : "bg-[#1B4E33] text-white"}`}>
                    {ev.published ? "Hide" : "Show"}
                  </button>
                  <button onClick={() => remove(ev)} className="h-8 px-3 rounded-lg border border-[#B91C1C]/30 text-[#B91C1C] text-[12px] font-bold hover:bg-[#B91C1C] hover:text-white transition-colors">Delete</button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
