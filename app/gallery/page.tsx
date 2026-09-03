"use client";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import PageHeader from "@/app/components/PageHeader";
import ScrollReveal from "@/app/components/ScrollReveal";

const albums = [
  { title: "District Awareness Camps", location: "Jharkhand", date: "Aug 2026", count: 12, img: "https://images.pexels.com/photos/10517000/pexels-photo-10517000.jpeg?w=600&q=80", featured: true },
  { title: "State Championship 2026", location: "Ranchi", date: "Jul 2026", count: 8, img: "https://images.pexels.com/photos/38149196/pexels-photo-38149196.jpeg?w=600&q=80" },
  { title: "Training Camp Solan", location: "IAMD, Solan", date: "Aug 2026", count: 4, img: "https://images.pexels.com/photos/38149196/pexels-photo-38149196.jpeg?w=600&q=80" },
  { title: "Award Ceremony 2026", location: "Ranchi", date: "Jun 2026", count: 6, img: "https://images.pexels.com/photos/10517000/pexels-photo-10517000.jpeg?w=600&q=80" },
];

export default function GalleryPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FDF8EF]">
      <Navbar />
      <PageHeader title="Gallery" image="/boccia.png" breadcrumb={[{ label: "News & Media" }, { label: "Gallery" }]}
      />
      <main className="flex-1 py-16">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 relative">
          {/* Background decorations */}
          <div className="absolute inset-0 bg-texture-diagonal pointer-events-none opacity-30" />
          <div className="gradient-orb gradient-orb-gold w-[500px] h-[500px] -top-40 -right-40 pointer-events-none opacity-25 animate-float-slow" />

          <ScrollReveal variant="fade-up">
            <div className="mb-8">
              <p className="text-[#5C5C5C] text-[16px]">
                Explore national championships, training camps, awareness drives
                and athlete journeys.
              </p>
              <div className="flex items-center gap-3 mt-3 text-[13px] text-[#8A8A8A] font-semibold">
                <span>48 Photos</span>
                <span className="text-[#C9A84C]">&bull;</span>
                <span>3 Albums</span>
                <span className="text-[#C9A84C]">&bull;</span>
                <span>4 Categories</span>
              </div>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {albums.map((album, i) => (
              <ScrollReveal key={i} variant="fade-up" delay={i * 80}>
                <div className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-[#C9A84C]/15 hover:shadow-2xl transition-all duration-300 cursor-pointer">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={album.img}
                      alt={album.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    {album.featured && (
                      <span className="absolute top-3 left-3 px-2.5 py-1 bg-[#C9A84C] text-[#0A2F1D] text-[10px] font-bold rounded-full">
                        &#9733; Featured
                      </span>
                    )}
                    <span className="absolute bottom-3 right-3 px-2.5 py-1 bg-black/60 text-white text-[11px] font-semibold rounded-full backdrop-blur-sm">
                      {album.count} Photos
                    </span>
                  </div>
                  <div className="p-5">
                    <h4 className="text-[15px] font-bold text-[#0A2F1D] mb-1 group-hover:text-[#C9A84C] transition-colors">
                      {album.title}
                    </h4>
                    <p className="text-[12px] text-[#8A8A8A]">
                      {album.location} &bull; {album.date}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
