"use client";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import ScrollReveal from "@/app/components/ScrollReveal";

// ─── Verified JPBA athletes (photos + details provided by the association) ──
const athletes = [
  {
    name: "Suman Kumar Prajapati",
    cls: "BC4",
    level: "International Player",
    town: "Jharkhand, India",
    bio: "Represents Jharkhand on the international stage in the BC4 class — the division for athletes with the most severe impairments, competing with a ramp and assistant. A flagbearer of Jharkhand's rise in world para boccia.",
    img: "/images/people/suman-kumar-prajapati.webp",
  },
  {
    name: "Anam Hyder",
    cls: "BC2",
    level: "National Player",
    town: "Jharkhand, India",
    bio: "A BC2 national-level player for Jharkhand. Competes in one of the sport's most competitive classes, known for precision throwing and steady match temperament at national championships.",
    img: "/images/people/anam-hyder.webp",
  },
];

export default function AthletesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FDF8EF]">
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative pt-[230px] pb-16 min-h-[320px] overflow-hidden" style={{background: "linear-gradient(135deg, #FDF8EF 0%, #FFFFFF 50%, #F4F1E9 100%)"}}>
          <img src="/images/national-game.webp" alt="" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-texture-court pointer-events-none" />
          <div className="absolute inset-0 pointer-events-none" style={{background: "linear-gradient(to right, rgba(253,248,239,0.97) 0%, rgba(253,248,239,0.94) 30%, rgba(253,248,239,0.7) 44%, rgba(253,248,239,0.2) 56%, rgba(253,248,239,0) 70%)"}} />
          <div className="absolute inset-0 pointer-events-none" style={{background: "linear-gradient(to top, rgba(253,248,239,1) 0%, rgba(253,248,239,0) 20%)"}} />
          <div className="mx-auto max-w-[1400px] px-6 lg:px-10 relative z-10">
            <div className="max-w-2xl">
              <div className="w-16 h-1 bg-[#C9A84C] rounded-full mb-6" />
              <p className="text-[#B8923A] text-[11px] font-bold tracking-[0.3em] uppercase mb-3">
                OUR PLAYERS
              </p>
              <h1 className="text-[36px] sm:text-[44px] font-bold text-[#0A2F1D] leading-tight mb-4">
                Meet the Athletes
              </h1>
              <p className="text-[15px] text-gray-600 max-w-[600px] leading-relaxed">
                The verified players representing Jharkhand in national and
                international Para Boccia.
              </p>
            </div>
          </div>
        </section>

        {/* Players */}
        <ScrollReveal variant="fade-in">
          <section className="py-16 relative overflow-hidden">
            <div className="absolute inset-0 bg-texture-diagonal pointer-events-none opacity-30" />
            <div className="gradient-orb gradient-orb-gold w-[400px] h-[400px] -top-40 -right-40 pointer-events-none opacity-20" />

            <div className="mx-auto max-w-[1100px] px-6 lg:px-10 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {athletes.map((a, i) => (
                  <ScrollReveal key={a.name} variant="fade-up" delay={i * 120}>
                    <div className="group rounded-2xl bg-white border border-[#C9A84C]/15 overflow-hidden shadow-sm hover:shadow-2xl hover:border-[#C9A84C]/50 transition-all duration-300 h-full">
                      <div className="h-[420px] overflow-hidden relative">
                        <img
                          src={a.img}
                          alt={a.name}
                          className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700"
                        />
                        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/55 to-transparent" />
                        <span className="absolute top-4 right-4 px-3 py-1 bg-[#C9A84C] text-[#0A2F1D] text-[12px] font-bold rounded-full shadow-lg">
                          {a.cls}
                        </span>
                        <span className="absolute bottom-4 left-4 px-3 py-1 bg-[#0A2F1D]/85 text-white text-[11px] font-bold uppercase tracking-wider rounded-full">
                          {a.level}
                        </span>
                      </div>
                      <div className="p-7">
                        <h3 className="text-[20px] font-bold text-[#0A2F1D] mb-1">
                          {a.name}
                        </h3>
                        <p className="text-[12px] text-gray-400 uppercase tracking-wider mb-4">
                          {a.town}
                        </p>
                        <p className="text-[14px] text-gray-600 leading-relaxed">
                          {a.bio}
                        </p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>

              <ScrollReveal variant="fade-up" delay={200}>
                <div className="mt-14 rounded-2xl border-2 border-dashed border-[#C9A84C]/40 bg-white/60 p-10 text-center">
                  <h3 className="text-[20px] font-bold text-[#0A2F1D] mb-2">
                    This could be you
                  </h3>
                  <p className="text-[14px] text-gray-600 max-w-xl mx-auto mb-6">
                    JPBA is scouting and training the next generation of para
                    athletes across all districts of Jharkhand. Register and
                    start your journey.
                  </p>
                  <a
                    href="https://forms.gle/y6QSBFfTQqK6fd7z8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#C9A84C] text-[#0A2F1D] rounded font-bold uppercase tracking-wider hover:bg-[#0A2F1D] hover:text-white transition-all text-[13px] shadow-lg"
                  >
                    Player Registration
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  </a>
                </div>
              </ScrollReveal>
            </div>
          </section>
        </ScrollReveal>
      </main>
      <Footer />
    </div>
  );
}
