"use client";
import { useState } from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import RegistrationForm from "@/app/components/RegistrationForm";

const news = [
  { id: 1, title: "JPBA Hosts First Para Boccia Awareness Camp in Ranchi", excerpt: "The Jharkhand Para Boccia Association organized its inaugural awareness camp at Ranchi, introducing para boccia to over 50 participants from schools, hospitals, and disability organisations.", date: "Aug 25, 2026", featured: true, img: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80" },
  { id: 2, title: "Jharkhand Athletes Selected for National Training Camp", excerpt: "Three athletes from Jharkhand have been selected for the upcoming national coaching camp organized by Boccia Sports Federation of India (BSFI).", date: "Aug 15, 2026", featured: false, img: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&q=80" },
  { id: 3, title: "JPBA Signs MoU with Jharkhand Sports Council", excerpt: "A landmark agreement to promote para boccia development across all 24 districts of Jharkhand, bringing state-level support to athlete identification and training.", date: "Jul 28, 2026", featured: true, img: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=600&q=80" },
  { id: 4, title: "District-Level Selection Trials Announced", excerpt: "JPBA announces district-level selection trials for the upcoming 1st JPBA State Championship 2026 across multiple districts.", date: "Jul 10, 2026", featured: false, img: "https://images.unsplash.com/photo-1461896836934-bd45ba8fcf9b?w=600&q=80" },
  { id: 5, title: "Pooja Gupta Inspires Jharkhand Youth at Ranchi Event", excerpt: "International medalist Pooja Gupta visited Ranchi to interact with young para athletes and share her journey in competitive Boccia.", date: "Jun 22, 2026", featured: false, img: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=600&q=80" },
];

export default function NewsPage() {
  const [showReg, setShowReg] = useState(false);
  return (
    <div className="flex flex-col min-h-screen bg-[#F5F5DC]">
      <Navbar onRegisterClick={() => setShowReg(true)} />
      <main className="flex-1">
        <section className="relative pt-[120px] pb-16 min-h-[320px] border-b border-[#D4AF37]/20" style={{background:"linear-gradient(135deg, #F5F5DC 0%, #FFFFFF 50%, #E8F5E9 100%)"}}>
          <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-16 h-1 bg-[#D4AF37] rounded-full mb-6" />
                <p className="text-[#D4AF37] text-[11px] font-bold tracking-[0.3em] uppercase mb-3">OFFICIAL UPDATES</p>
                <h1 className="text-[36px] sm:text-[44px] font-bold text-[#1B5E20] leading-tight mb-4">Latest News</h1>
                <p className="text-[15px] text-gray-600 max-w-[600px] leading-relaxed">Updates from JPBA events, athlete achievements, and Boccia development in Jharkhand.</p>
              </div>
              <div className="hidden lg:block">
                <div className="rounded-2xl overflow-hidden shadow-xl border border-[#D4AF37]/20">
                  <img src="https://images.unsplash.com/photo-1495020689067-958852a7765e?w=800&q=80" alt="News" className="w-full h-[350px] object-cover" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-[900px] px-6 space-y-6">
            {news.map((item) => (
              <article key={item.id} className="bg-white rounded-2xl border border-[#D4AF37]/10 overflow-hidden hover:shadow-lg hover:border-[#D4AF37]/30 transition-all">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                  <div className="md:col-span-1 h-48 md:h-auto">
                    <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="md:col-span-2 p-6">
                    <div className="flex items-center gap-2 mb-3 flex-wrap">
                      <span className="text-[11px] font-bold text-[#1B5E20] bg-[#1B5E20]/10 px-2 py-0.5 rounded">JPBA Official</span>
                      <span className="text-[11px] text-gray-300">&middot;</span>
                      <span className="text-[11px] text-gray-400">{item.date}</span>
                      {item.featured && <span className="rounded bg-[#D4AF37]/15 px-2 py-0.5 text-[10px] font-bold text-[#8B6914]">Featured</span>}
                    </div>
                    <h3 className="text-[16px] font-bold text-[#1B5E20] mb-2">{item.title}</h3>
                    <p className="text-[13px] text-gray-500 mb-3">{item.excerpt}</p>
                    <span className="text-[12px] font-bold text-[#D4AF37] cursor-pointer hover:underline">Read More →</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
      <RegistrationForm isOpen={showReg} onClose={() => setShowReg(false)} />
    </div>
  );
}
