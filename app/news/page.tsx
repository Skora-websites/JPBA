"use client";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import PageHeader from "@/app/components/PageHeader";
import ScrollReveal from "@/app/components/ScrollReveal";

const articles = [
  { title: "District Awareness Camp in Ranchi", excerpt: "JPBA organized a successful awareness camp at Ranchi District Sports Complex, introducing Boccia to over 50 students and families.", date: "Aug 25, 2026", views: 24, featured: false },
  { title: "Athletes Selected for National Training", excerpt: "Three athletes from Jharkhand have been selected for the national coaching camp for upcoming international events.", date: "Aug 10, 2026", views: 36, featured: false },
  { title: "Jharkhand State Championship Announced", excerpt: "The first official JPBA State Championship will be held in Ranchi. District associations encouraged to register.", date: "Jul 16, 2026", views: 122, featured: true },
  { title: "Coach Certification Program Launches", excerpt: "JPBA in collaboration with BSFI launches a certified coaching program for Boccia across three districts.", date: "Jul 10, 2026", views: 104, featured: false },
  { title: "Equipment Distribution to District Centers", excerpt: "International-standard Boccia balls and ramps distributed to 8 training centers across Jharkhand.", date: "Jun 30, 2026", views: 98, featured: false },
  { title: "Partnership with Jharkhand Sports Council", excerpt: "JPBA signs MoU with JSSC for facility access and athlete support across the state.", date: "Jun 15, 2026", views: 115, featured: false },
];

export default function LatestNewsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FDF8EF]">
      <Navbar />
      <PageHeader title="Latest News" image="/boccia1.png" breadcrumb={[{ label: "News & Media" }, { label: "News" }]}
      />
      <main className="flex-1 py-16">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 relative">
          <div className="absolute inset-0 bg-texture-wavy pointer-events-none opacity-30" />
          <div className="gradient-orb gradient-orb-green-light w-[500px] h-[500px] top-1/4 -left-60 pointer-events-none opacity-20" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
            {articles.map((article, i) => (
              <ScrollReveal key={i} variant="fade-up" delay={i * 60}>
                <div className="group bg-white rounded-2xl p-6 border border-[#E2D9C8] hover:border-[#C9A84C]/40 hover:shadow-xl transition-all duration-300 h-full">
                  {article.featured && (
                    <span className="inline-block px-2.5 py-1 bg-[#C9A84C]/15 text-[#C9A84C] text-[10px] font-bold rounded-full mb-3">
                      &#9733; Featured
                    </span>
                  )}
                  <div className="flex items-center gap-2 text-[11px] text-[#8A8A8A] mb-3">
                    <span className="w-5 h-5 rounded-full bg-[#0A2F1D] flex items-center justify-center text-white text-[8px] font-bold">
                      JP
                    </span>
                    <span>JPBA Official</span>
                    <span>&bull;</span>
                    <span>{article.date}</span>
                  </div>
                  <h4 className="text-[16px] font-bold text-[#0A2F1D] mb-2 group-hover:text-[#C9A84C] transition-colors leading-snug">
                    {article.title}
                  </h4>
                  <p className="text-[13px] text-[#5C5C5C] leading-relaxed mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-[13px] font-bold text-[#C9A84C] group-hover:text-[#0A2F1D] transition-colors">
                      Read More &raquo;
                    </span>
                    <span className="text-[11px] text-[#8A8A8A]">
                      {article.views} Views
                    </span>
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
