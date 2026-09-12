"use client";
import { useEffect, useState } from "react";

interface Video {
  id: number;
  title: string;
  description: string;
  youtube_id: string | null;
  file_path: string | null;
  thumbnail_url: string | null;
  category: string;
  featured: number;
  published: number;
  display_order: number;
  views: number;
  created_at: string;
}

const CATEGORIES = ["Matches", "Highlights", "Training", "Ceremony", "Interview"];

function extractId(input: string): string | null {
  const m =
    input.match(/(?:youtube\.com\/watch\?(?:.*&)?v=)([\w-]{11})/) ||
    input.match(/(?:youtu\.be\/)([\w-]{11})/) ||
    input.match(/(?:youtube\.com\/(?:embed|shorts|live)\/)([\w-]{11})/);
  if (m) return m[1];
  if (/^[\w-]{11}$/.test(input.trim())) return input.trim();
  return null;
}

export default function AdminVideos() {
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");

  // form state
  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Matches");
  const [featured, setFeatured] = useState(false);

  const ytId = extractId(url);

  const load = () =>
    fetch("/api/videos")
      .then((r) => r.json())
      .then((d) => setVideos(d.videos ?? []))
      .finally(() => setLoading(false));

  useEffect(() => {
    load();
  }, []);

  const addVideo = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!title.trim()) return setError("Please enter a title");
    if (!ytId) return setError("Paste a valid YouTube URL (or 11-character video ID)");

    setSaving(true);
    const res = await fetch("/api/videos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, description, url, category, featured: featured ? 1 : 0 }),
    });
    const data = await res.json();
    setSaving(false);
    if (!res.ok) return setError(data.error || "Failed to add video");

    setNotice(`Video "${title}" added`);
    setTimeout(() => setNotice(""), 3000);
    setUrl(""); setTitle(""); setDescription(""); setFeatured(false);
    load();
  };

  const patch = async (id: number, updates: Record<string, unknown>) => {
    await fetch(`/api/videos/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updates),
    });
    load();
  };

  const remove = async (v: Video) => {
    if (!confirm(`Delete "${v.title}"?`)) return;
    await fetch(`/api/videos/${v.id}`, { method: "DELETE" });
    load();
  };

  const move = async (v: Video, dir: -1 | 1) => {
    await patch(v.id, { display_order: v.display_order + dir });
  };

  return (
    <div>
      <h1 className="text-[28px] font-bold text-[#0A2F1D] mb-1">Videos</h1>
      <p className="text-[#5C5C5C] text-[14px] mb-8">
        Add videos from the Boccia Jharkhand YouTube channel — paste the video URL
      </p>

      {notice && (
        <div className="mb-6 rounded-xl border border-[#1B4E33]/30 bg-[#1B4E33]/10 px-5 py-3 text-[14px] font-semibold text-[#0A2F1D]">
          ✔ {notice}
        </div>
      )}

      {/* Add form */}
      <form onSubmit={addVideo} className="rounded-2xl bg-white border border-[#E2D9C8] p-6 mb-8">
        <h2 className="text-[16px] font-bold text-[#0A2F1D] mb-5">Add a Video</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left: fields */}
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-[#5C5C5C] mb-1.5">YouTube URL *</label>
              <input
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="https://youtube.com/watch?v=… or youtu.be/…"
                className="w-full rounded-lg border border-[#E2D9C8] bg-white px-4 py-3 text-sm text-[#1A1A1A] focus:border-[#C9A84C] focus:outline-none focus:ring-2 focus:ring-[#C9A84C]/20"
              />
              {url && !ytId && (
                <p className="text-xs text-[#B91C1C] mt-1.5">Could not detect a video ID in this URL</p>
              )}
              {ytId && (
                <p className="text-xs text-[#1B4E33] mt-1.5">✔ Video ID detected: {ytId}</p>
              )}
            </div>
            <div>
              <label className="block text-xs font-semibold text-[#5C5C5C] mb-1.5">Title *</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g. BC1 Final — State Championship 2026"
                className="w-full rounded-lg border border-[#E2D9C8] bg-white px-4 py-3 text-sm text-[#1A1A1A] focus:border-[#C9A84C] focus:outline-none focus:ring-2 focus:ring-[#C9A84C]/20"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-[#5C5C5C] mb-1.5">Description</label>
              <textarea
                rows={3}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full rounded-lg border border-[#E2D9C8] bg-white px-4 py-3 text-sm text-[#1A1A1A] focus:border-[#C9A84C] focus:outline-none focus:ring-2 focus:ring-[#C9A84C]/20 resize-none"
              />
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#5C5C5C] mb-1.5">Category</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="rounded-lg border border-[#E2D9C8] bg-white px-4 py-2.5 text-sm text-[#1A1A1A] focus:border-[#C9A84C] focus:outline-none"
                >
                  {CATEGORIES.map((c) => (
                    <option key={c}>{c}</option>
                  ))}
                </select>
              </div>
              <label className="flex items-center gap-2 mt-4 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={featured}
                  onChange={(e) => setFeatured(e.target.checked)}
                  className="h-4 w-4 accent-[#C9A84C]"
                />
                <span className="text-[13px] font-semibold text-[#0A2F1D]">Feature on homepage</span>
              </label>
            </div>
            {error && <p className="text-sm text-[#B91C1C]">{error}</p>}
            <button
              type="submit"
              disabled={saving}
              className="px-6 py-3 rounded-lg bg-[#C9A84C] text-[#0A2F1D] text-[13px] font-bold uppercase tracking-wider hover:bg-[#0A2F1D] hover:text-white transition-colors disabled:opacity-60"
            >
              {saving ? "Adding…" : "+ Add Video"}
            </button>
          </div>

          {/* Right: live preview */}
          <div>
            <label className="block text-xs font-semibold text-[#5C5C5C] mb-1.5">Live Preview</label>
            <div className="rounded-xl overflow-hidden border border-[#E2D9C8] bg-[#FDF8EF] retro-scanlines relative aspect-video">
              {ytId ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={`https://i.ytimg.com/vi/${ytId}/hqdefault.jpg`}
                  alt="Video thumbnail preview"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center text-[#8A8A8A]">
                  <span className="text-4xl mb-3">▶</span>
                  <span className="text-[13px]">Paste a YouTube URL to preview</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </form>

      {/* List */}
      <div className="rounded-2xl bg-white border border-[#E2D9C8] overflow-hidden">
        <div className="px-6 py-4 border-b border-[#F0EBE0] flex items-center justify-between">
          <h2 className="text-[16px] font-bold text-[#0A2F1D]">
            All Videos <span className="text-[#8A8A8A] font-semibold">({videos.length})</span>
          </h2>
          <span className="hidden md:block text-[11px] uppercase tracking-wider text-[#8A8A8A] font-bold">Site views</span>
        </div>
        {loading ? (
          <p className="px-6 py-8 text-[#8A8A8A] text-sm">Loading…</p>
        ) : videos.length === 0 ? (
          <p className="px-6 py-8 text-[#8A8A8A] text-sm">
            No videos yet. Add the first one from the YouTube channel above.
          </p>
        ) : (
          <ul className="divide-y divide-[#F0EBE0]">
            {videos.map((v) => (
              <li key={v.id} className="flex flex-col sm:flex-row sm:items-center gap-4 px-6 py-4 hover:bg-[#FDF8EF]/60 transition-colors">
                {/* Thumb */}
                <div className="w-full sm:w-40 h-24 rounded-lg overflow-hidden border border-[#E2D9C8] shrink-0 bg-[#0A2F1D]">
                  {v.thumbnail_url ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={v.thumbnail_url} alt="" className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-white/60">▶</div>
                  )}
                </div>
                {/* Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-[15px] font-bold text-[#0A2F1D] truncate">{v.title}</h3>
                    {v.featured === 1 && (
                      <span className="px-2 py-0.5 rounded-full bg-[#C9A84C] text-[#0A2F1D] text-[10px] font-bold">★ Featured</span>
                    )}
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${v.published ? "bg-[#1B4E33]/10 text-[#1B4E33]" : "bg-[#B91C1C]/10 text-[#B91C1C]"}`}>
                      {v.published ? "Published" : "Hidden"}
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-[#0A2F1D]/5 text-[#0A2F1D] text-[10px] font-bold">{v.category}</span>
                  </div>
                  <p className="text-[12px] text-[#8A8A8A] mt-1 truncate">
                    {v.youtube_id ? `youtube.com/watch?v=${v.youtube_id}` : v.file_path}
                  </p>
                </div>
                {/* Views */}
                <div className="hidden md:flex flex-col items-end shrink-0 w-20" title="Site views — plays started on this website">
                  <span className="text-[15px] font-bold text-[#0A2F1D] leading-none">{v.views.toLocaleString()}</span>
                  <span className="text-[10px] uppercase tracking-wider text-[#8A8A8A] font-semibold mt-1">views</span>
                </div>
                {/* Actions */}
                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={() => move(v, -1)}
                    className="h-8 w-8 rounded-lg border border-[#E2D9C8] text-[#5C5C5C] hover:border-[#C9A84C] hover:text-[#C9A84C] transition-colors"
                    title="Move up"
                  >
                    ↑
                  </button>
                  <button
                    onClick={() => move(v, 1)}
                    className="h-8 w-8 rounded-lg border border-[#E2D9C8] text-[#5C5C5C] hover:border-[#C9A84C] hover:text-[#C9A84C] transition-colors"
                    title="Move down"
                  >
                    ↓
                  </button>
                  <button
                    onClick={() => patch(v.id, { featured: v.featured ? 0 : 1 })}
                    className={`h-8 px-3 rounded-lg text-[12px] font-bold transition-colors ${v.featured ? "bg-[#C9A84C] text-[#0A2F1D]" : "border border-[#E2D9C8] text-[#5C5C5C] hover:border-[#C9A84C]"}`}
                  >
                    ★
                  </button>
                  <button
                    onClick={() => patch(v.id, { published: v.published ? 0 : 1 })}
                    className={`h-8 px-3 rounded-lg text-[12px] font-bold transition-colors ${v.published ? "border border-[#E2D9C8] text-[#5C5C5C] hover:border-[#B91C1C] hover:text-[#B91C1C]" : "bg-[#1B4E33] text-white"}`}
                  >
                    {v.published ? "Hide" : "Publish"}
                  </button>
                  <button
                    onClick={() => remove(v)}
                    className="h-8 px-3 rounded-lg border border-[#B91C1C]/30 text-[#B91C1C] text-[12px] font-bold hover:bg-[#B91C1C] hover:text-white transition-colors"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
