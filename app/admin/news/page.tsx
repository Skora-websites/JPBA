"use client";
import { useEffect, useState } from "react";

interface Post {
  id: number;
  title: string;
  excerpt: string;
  body: string;
  featured: number;
  published: number;
  views: number;
  published_at: string;
}

export default function AdminNews() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState<Post | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [error, setError] = useState("");

  // form state
  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [body, setBody] = useState("");
  const [featured, setFeatured] = useState(false);

  const load = () =>
    fetch("/api/news")
      .then((r) => r.json())
      .then((d) => setPosts(d.posts ?? []))
      .finally(() => setLoading(false));

  useEffect(() => { load(); }, []);

  const openCreate = () => {
    setEditing(null); setTitle(""); setExcerpt(""); setBody(""); setFeatured(false);
    setError(""); setShowForm(true);
  };

  const openEdit = (p: Post) => {
    setEditing(p); setTitle(p.title); setExcerpt(p.excerpt); setBody(p.body);
    setFeatured(!!p.featured); setError(""); setShowForm(true);
  };

  const save = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return setError("Title is required");
    const payload = { title, excerpt, body, featured: featured ? 1 : 0 };
    const res = editing
      ? await fetch(`/api/news/${editing.id}`, { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) })
      : await fetch("/api/news", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
    if (!res.ok) {
      const d = await res.json();
      return setError(d.error || "Save failed");
    }
    setShowForm(false);
    load();
  };

  const patch = async (id: number, updates: Record<string, unknown>) => {
    await fetch(`/api/news/${id}`, { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify(updates) });
    load();
  };

  const remove = async (p: Post) => {
    if (!confirm(`Delete "${p.title}"?`)) return;
    await fetch(`/api/news/${p.id}`, { method: "DELETE" });
    load();
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-[28px] font-bold text-[#0A2F1D]">News</h1>
          <p className="text-[#5C5C5C] text-[14px] mt-1">Publish updates to the website</p>
        </div>
        <button
          onClick={openCreate}
          className="px-5 py-2.5 bg-[#C9A84C] text-[#0A2F1D] rounded-lg font-bold text-[13px] uppercase tracking-wider hover:bg-[#0A2F1D] hover:text-white transition-colors"
        >
          + New Post
        </button>
      </div>

      {/* Editor modal */}
      {showForm && (
        <div className="fixed inset-0 z-50 bg-black/40 flex items-start justify-center p-4 overflow-y-auto">
          <form onSubmit={save} className="w-full max-w-2xl rounded-2xl bg-white border border-[#E2D9C8] shadow-2xl p-6 mt-10">
            <h2 className="text-[18px] font-bold text-[#0A2F1D] mb-5">
              {editing ? "Edit Post" : "New Post"}
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#5C5C5C] mb-1.5">Title *</label>
                <input value={title} onChange={(e) => setTitle(e.target.value)}
                  className="w-full rounded-lg border border-[#E2D9C8] px-4 py-3 text-sm focus:border-[#C9A84C] focus:outline-none focus:ring-2 focus:ring-[#C9A84C]/20" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#5C5C5C] mb-1.5">Excerpt</label>
                <textarea rows={2} value={excerpt} onChange={(e) => setExcerpt(e.target.value)}
                  className="w-full rounded-lg border border-[#E2D9C8] px-4 py-3 text-sm resize-none focus:border-[#C9A84C] focus:outline-none focus:ring-2 focus:ring-[#C9A84C]/20" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#5C5C5C] mb-1.5">Body</label>
                <textarea rows={6} value={body} onChange={(e) => setBody(e.target.value)}
                  className="w-full rounded-lg border border-[#E2D9C8] px-4 py-3 text-sm resize-none focus:border-[#C9A84C] focus:outline-none focus:ring-2 focus:ring-[#C9A84C]/20" />
              </div>
              <label className="flex items-center gap-2 cursor-pointer select-none">
                <input type="checkbox" checked={featured} onChange={(e) => setFeatured(e.target.checked)} className="h-4 w-4 accent-[#C9A84C]" />
                <span className="text-[13px] font-semibold text-[#0A2F1D]">Featured (shows first, highlighted on homepage)</span>
              </label>
              {error && <p className="text-sm text-[#B91C1C]">{error}</p>}
              <div className="flex gap-3 pt-2">
                <button type="submit" className="px-6 py-3 rounded-lg bg-[#C9A84C] text-[#0A2F1D] text-[13px] font-bold uppercase tracking-wider hover:bg-[#0A2F1D] hover:text-white transition-colors">
                  {editing ? "Save Changes" : "Publish Post"}
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

      {/* List */}
      <div className="rounded-2xl bg-white border border-[#E2D9C8] overflow-hidden">
        {loading ? (
          <p className="px-6 py-8 text-[#8A8A8A] text-sm">Loading…</p>
        ) : posts.length === 0 ? (
          <p className="px-6 py-8 text-[#8A8A8A] text-sm">No posts yet.</p>
        ) : (
          <ul className="divide-y divide-[#F0EBE0]">
            {posts.map((p) => (
              <li key={p.id} className="flex flex-col sm:flex-row sm:items-center gap-3 px-6 py-4 hover:bg-[#FDF8EF]/60 transition-colors">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-[15px] font-bold text-[#0A2F1D]">{p.title}</h3>
                    {p.featured === 1 && <span className="px-2 py-0.5 rounded-full bg-[#C9A84C] text-[#0A2F1D] text-[10px] font-bold">★ Featured</span>}
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${p.published ? "bg-[#1B4E33]/10 text-[#1B4E33]" : "bg-[#B91C1C]/10 text-[#B91C1C]"}`}>
                      {p.published ? "Published" : "Hidden"}
                    </span>
                  </div>
                  <p className="text-[12px] text-[#8A8A8A] mt-1 truncate">{p.excerpt}</p>
                  <p className="text-[11px] text-[#8A8A8A] mt-0.5">{p.published_at?.slice(0, 10)} · {p.views} views</p>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <button onClick={() => openEdit(p)} className="h-8 px-3 rounded-lg border border-[#E2D9C8] text-[12px] font-bold text-[#5C5C5C] hover:border-[#C9A84C] hover:text-[#C9A84C] transition-colors">Edit</button>
                  <button onClick={() => patch(p.id, { published: p.published ? 0 : 1 })}
                    className={`h-8 px-3 rounded-lg text-[12px] font-bold transition-colors ${p.published ? "border border-[#E2D9C8] text-[#5C5C5C] hover:border-[#B91C1C] hover:text-[#B91C1C]" : "bg-[#1B4E33] text-white"}`}>
                    {p.published ? "Hide" : "Publish"}
                  </button>
                  <button onClick={() => remove(p)} className="h-8 px-3 rounded-lg border border-[#B91C1C]/30 text-[#B91C1C] text-[12px] font-bold hover:bg-[#B91C1C] hover:text-white transition-colors">Delete</button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
