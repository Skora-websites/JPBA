"use client";
import { useMemo, useState } from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import PageHeader from "@/app/components/PageHeader";
import ScrollReveal from "@/app/components/ScrollReveal";
import Lightbox from "@/app/components/Lightbox";
import RetroMarquee from "@/app/components/RetroMarquee";
import { GALLERY, GALLERY_CATEGORIES, IMG } from "@/lib/images";

export default function GalleryPage() {
  const [category, setCategory] = useState<(typeof GALLERY_CATEGORIES)[number]>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const photos = useMemo(
    () => (category === "All" ? GALLERY : GALLERY.filter((p) => p.category === category)),
    [category]
  );

  return (
    <div className="flex flex-col min-h-screen bg-[#FDF8EF]">
      <Navbar />
      <PageHeader
        title="Gallery"
        image={IMG.hero2}
        breadcrumb={[{ label: "News & Media" }, { label: "Gallery" }]}
      />

      {/* Retro ticker */}
      <div className="bg-[#C9A84C] py-2.5 text-[#0A2F1D] text-[12px] font-bold uppercase tracking-[0.2em]">
        <RetroMarquee
          items={["Moments in Focus", "Championships", "Training Camps", "Award Nights", "Community"]}
          duration={28}
        />
      </div>

      <main className="flex-1 py-16">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 relative">
          {/* Background decorations */}
          <div className="absolute inset-0 bg-texture-diagonal pointer-events-none opacity-30" />
          <div className="gradient-orb gradient-orb-gold w-[500px] h-[500px] -top-40 -right-40 pointer-events-none opacity-25 animate-float-slow" />

          <ScrollReveal variant="fade-up">
            <div className="mb-10 relative z-10">
              <p className="text-[#5C5C5C] text-[16px]">
                Explore national championships, training camps, awareness drives
                and athlete journeys — every photo from JPBA&apos;s real events.
              </p>
              <div className="flex items-center gap-3 mt-3 text-[13px] text-[#8A8A8A] font-semibold">
                <span>{GALLERY.length} Photos</span>
                <span className="text-[#C9A84C]">&bull;</span>
                <span>{GALLERY_CATEGORIES.length - 1} Categories</span>
                <span className="text-[#C9A84C]">&bull;</span>
                <span>1 Mission</span>
              </div>
            </div>
          </ScrollReveal>

          {/* Category filters */}
          <ScrollReveal variant="fade-up" delay={80}>
            <div className="flex flex-wrap gap-2 mb-10 relative z-10">
              {GALLERY_CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={`px-5 py-2.5 rounded text-[14px] font-semibold transition-all duration-300 ${
                    category === cat
                      ? "bg-[#0A2F1D] text-white shadow-lg shadow-[#0A2F1D]/20 retro-frame"
                      : "bg-white text-[#0A2F1D] border border-gray-200 hover:border-[#C9A84C] hover:shadow-md"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Masonry photo grid — real photos with tilt + shine */}
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-5 relative z-10 [column-fill:_balance]">
            {photos.map((photo, i) => (
              <ScrollReveal key={photo.src} variant="fade-up" delay={(i % 8) * 60} className="break-inside-avoid mb-5">
                <button
                  onClick={() => setLightboxIndex(i)}
                  className="group relative block w-full overflow-hidden rounded-2xl shadow-lg border border-[#C9A84C]/15 shine-sweep gold-foil text-left cursor-zoom-in"
                  aria-label={`View ${photo.title}`}
                >
                  <div className="retro-scanlines relative">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={photo.src}
                      alt={photo.title}
                      loading="lazy"
                      className={`w-full h-auto object-cover retro-img transition-transform duration-700 group-hover:scale-105 ${
                        i % 3 === 0 ? "aspect-[4/5]" : i % 3 === 1 ? "aspect-square" : "aspect-[4/3]"
                      }`}
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A2F1D]/95 via-[#0A2F1D]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
                    <span className="retro-led inline-block mb-2" />
                    <p className="text-white font-bold text-[14px] leading-tight">{photo.title}</p>
                    <p className="text-[#C9A84C] text-[11px] uppercase tracking-widest mt-1">
                      {photo.category}
                    </p>
                  </div>
                </button>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </main>
      <Footer />

      <Lightbox
        photos={photos}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={setLightboxIndex}
      />
    </div>
  );
}
