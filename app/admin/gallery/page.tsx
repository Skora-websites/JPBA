"use client";
import { useEffect, useRef, useState } from "react";

interface Photo {
  id: number;
  src: string;
  title: string;
  category: string;
}

const CATEGORIES = ["Competitions", "Training", "Awards", "Community"];

export default function AdminGallery() {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");
  const [filter, setFilter] = useState("All");
  const [lightbox, setLightbox] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  const load = () =>
    fetch("/api/gallery").then((r) => r.json()).then((d) => setPhotos(d.photos ?? [])).finally(() => setLoading(false));

  useEffect(() => { load(); }, []);

  const upload = async (files: FileList | null) => {
    if (!files || files.length === 0) return;
    setUploading(true);
    setError("");
    let ok = 0;
    for (const file of Array.from(files)) {
      const fd = new FormData();
      fd.append("file", file);
      const res = await fetch("/api/upload", { method: "POST", body: fd });
      if (!res.ok) {
        const d = await res.json();
        setError(d.error || `Failed to upload ${file.name}`);
        continue;
      }
      const { src } = await res.json();
      await fetch("/api/gallery", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ src, title: file.name.replace(/\.[^.]+$/, ""), category: "Community" }),
      });
      ok++;
    }
    setUploading(false);
    if (fileRef.current) fileRef.current.value = "";
    if (ok > 0) {
      setNotice(`${ok} photo${ok === 1 ? "" : "s"} uploaded`);
      setTimeout(() => setNotice(""), 3000);
      load();
    }
  };

  const patch = async (id: number, updates: Record<string, unknown>) => {
    await fetch("/api/gallery", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, ...updates }),
    });
    load();
  };

  const rename = async (p: Photo) => {
    const title = prompt("Photo caption:", p.title);
    if (title === null) return;
    patch(p.id, { title });
  };

  const changeCategory = async (p: Photo, category: string) => {
    patch(p.id, { category });
  };

  const remove = async (p: Photo) => {
    if (!confirm(`Delete "${p.title || "this photo"}"?`)) return;
    await fetch(`/api/gallery?id=${p.id}`, { method: "DELETE" });
    load();
  };

  const shown = filter === "All" ? photos : photos.filter((p) => p.category === filter);

  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-[28px] font-bold text-[#0A2F1D]">Gallery</h1>
          <p className="text-[#5C5C5C] text-[14px] mt-1">
            Upload photos — large images are auto-compressed to WebP for fast loading
          </p>
        </div>
        <div>
          <input
            ref={fileRef}
            type="file"
            accept="image/*"
            multiple
            onChange={(e) => upload(e.target.files)}
            className="hidden"
            id="gallery-upload"
          />
          <label
            htmlFor="gallery-upload"
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-bold text-[13px] uppercase tracking-wider cursor-pointer transition-colors ${
              uploading
                ? "bg-[#8A8A8A] text-white pointer-events-none"
                : "bg-[#C9A84C] text-[#0A2F1D] hover:bg-[#0A2F1D] hover:text-white"
            }`}
          >
            {uploading ? "Uploading…" : "+ Upload Photos"}
          </label>
        </div>
      </div>

      {notice && (
        <div className="mb-6 rounded-xl border border-[#1B4E33]/30 bg-[#1B4E33]/10 px-5 py-3 text-[14px] font-semibold text-[#0A2F1D]">✔ {notice}</div>
      )}
      {error && (
        <div className="mb-6 rounded-xl border border-[#B91C1C]/30 bg-[#B91C1C]/10 px-5 py-3 text-[14px] font-semibold text-[#B91C1C]">{error}</div>
      )}

      {/* Filters */}
      <div className="flex flex-wrap gap-2 mb-6">
        {["All", ...CATEGORIES].map((c) => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            className={`px-4 py-2 rounded-lg text-[13px] font-semibold transition-all ${
              filter === c ? "bg-[#0A2F1D] text-white" : "bg-white border border-[#E2D9C8] text-[#0A2F1D] hover:border-[#C9A84C]"
            }`}
          >
            {c}
          </button>
        ))}
        <span className="ml-auto text-[13px] text-[#8A8A8A] font-semibold self-center">
          {shown.length} photo{shown.length === 1 ? "" : "s"}
        </span>
      </div>

      {/* Grid */}
      {loading ? (
        <p className="text-[#8A8A8A] text-sm">Loading…</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
          {shown.map((p) => (
            <div key={p.id} className="group rounded-2xl overflow-hidden bg-white border border-[#E2D9C8] hover:border-[#C9A84C]/50 hover:shadow-lg transition-all">
              <button onClick={() => setLightbox(p.src)} className="block w-full aspect-[4/3] overflow-hidden bg-[#F0EBE0] cursor-zoom-in">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.src} alt={p.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </button>
              <div className="p-3">
                <p className="text-[13px] font-bold text-[#0A2F1D] truncate">{p.title || "Untitled"}</p>
                <div className="flex items-center justify-between mt-2">
                  <select
                    value={p.category}
                    onChange={(e) => changeCategory(p, e.target.value)}
                    className="rounded-full bg-[#0A2F1D]/5 text-[#0A2F1D] text-[10px] font-bold px-2 py-1 border-none focus:outline-none cursor-pointer"
                  >
                    {CATEGORIES.map((c) => <option key={c}>{c}</option>)}
                  </select>
                  <div className="flex gap-1.5">
                    <button onClick={() => rename(p)} className="h-7 px-2 rounded-md border border-[#E2D9C8] text-[11px] font-bold text-[#5C5C5C] hover:border-[#C9A84C] hover:text-[#C9A84C] transition-colors">Rename</button>
                    <button onClick={() => remove(p)} className="h-7 px-2 rounded-md border border-[#B91C1C]/30 text-[11px] font-bold text-[#B91C1C] hover:bg-[#B91C1C] hover:text-white transition-colors">✕</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Lightbox */}
      {lightbox && (
        <div className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center p-6" onClick={() => setLightbox(null)}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={lightbox} alt="" className="max-h-[85vh] max-w-full object-contain rounded-lg" />
          <button className="absolute top-5 right-5 h-11 w-11 rounded-full bg-white/10 text-white text-xl hover:bg-[#C9A84C] hover:text-[#0A2F1D] transition-colors">✕</button>
        </div>
      )}
    </div>
  );
}
