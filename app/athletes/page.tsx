"use client";
import { useState } from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import ScrollReveal from "@/app/components/ScrollReveal";

const athletes = [
  { name: "Pooja Gupta", cls: "BC4", town: "Ranchi", highlight: "First Indian to win individual international Boccia medal", status: "National Team", medals: {g:0,s:1,b:2}, img: "https://images.pexels.com/photos/6763758/pexels-photo-6763758.jpeg?w=400&q=80" },
  { name: "Sachin Chamaria", cls: "BC3", town: "Hazaribagh", highlight: "Gold medalist at World Boccia Challenger", status: "National Team", medals: {g:1,s:0,b:1}, img: "https://images.pexels.com/photos/38149196/pexels-photo-38149196.jpeg?w=400&q=80" },
  { name: "Jatin Kumar Kushwaha", cls: "BC4", town: "Dhanbad", highlight: "Silver in BC4 Pairs + Bronze Individual", status: "National Team", medals: {g:0,s:1,b:1}, img: "https://images.pexels.com/photos/10517000/pexels-photo-10517000.jpeg?w=400&q=80" },
  { name: "Ajeya Raj", cls: "BC3", town: "Bokaro", highlight: "Bronze medal at World Boccia Challenger", status: "National Team", medals: {g:0,s:0,b:1}, img: "https://images.pexels.com/photos/10517000/pexels-photo-10517000.jpeg?w=400&q=80" },
  { name: "Anjali Thakur", cls: "BC2", town: "Jamshedpur", highlight: "Multiple national championship participant", status: "State Team", medals: {g:0,s:0,b:0}, img: "https://images.pexels.com/photos/9643439/pexels-photo-9643439.jpeg?w=400&q=80" },
  { name: "Vijay Kumar", cls: "BC1", town: "Dumka", highlight: "Rising star in para boccia", status: "State Team", medals: {g:0,s:0,b:0}, img: "https://images.pexels.com/photos/38149196/pexels-photo-38149196.jpeg?w=400&q=80" },
];

export default function AthletesPage() {
  const [sel, setSel] = useState<number | null>(null);

  return (
    <div className="flex flex-col min-h-screen bg-[#FDF8EF]">
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative pt-[180px] pb-16 min-h-[320px] overflow-hidden" style={{background: "linear-gradient(135deg, #FDF8EF 0%, #FFFFFF 50%, #F4F1E9 100%)"}}>
          <img src="/boccia.png" alt="" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 pointer-events-none" style={{background: "linear-gradient(to right, rgba(10,47,29,0.92) 0%, rgba(10,47,29,0.85) 35%, rgba(10,47,29,0.5) 60%, rgba(10,47,29,0.15) 80%, transparent 100%)"}} />
          <div className="absolute inset-0 pointer-events-none" style={{background: "linear-gradient(to top, rgba(10,47,29,0.6) 0%, transparent 40%)"}} />
<div className="absolute inset-0 bg-noise pointer-events-none opacity-30" /><img src="/boccia.png" alt="Athletes" className="absolute right-0 top-0 h-full w-1/2 object-cover opacity-15" /><div className="mx-auto max-w-[1400px] px-6 lg:px-10 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-16 h-1 bg-[#C9A84C] rounded-full mb-6" />
                <p className="text-[#C9A84C] text-[11px] font-bold tracking-[0.3em] uppercase mb-3">
                  OUR STARS
                </p>
                <h1 className="text-[36px] sm:text-[44px] font-bold text-[#0A2F1D] leading-tight mb-4">
                  Meet the Athletes
                </h1>
                <p className="text-[15px] text-gray-600 max-w-[600px] leading-relaxed">
                  Representing Jharkhand and India with Precision, Passion, and
                  Pride.
                </p>
              </div>
              <div className="hidden lg:block">
                <div className="rounded-2xl overflow-hidden shadow-2xl border border-[#C9A84C]/20 relative">
                  <img
                    src="https://images.pexels.com/photos/38149196/pexels-photo-38149196.jpeg?w=800&q=80"
                    alt="Athletes"
                    className="w-full h-[350px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A2F1D]/40 via-transparent to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Athletes Grid */}
        <ScrollReveal variant="fade-in">
          <section className="py-16 relative overflow-hidden">
            <div className="absolute inset-0 bg-texture-diagonal pointer-events-none opacity-30" />
            <div className="gradient-orb gradient-orb-gold w-[400px] h-[400px] -top-40 -right-40 pointer-events-none opacity-20" />

            <div className="mx-auto max-w-[1200px] px-6 lg:px-10 relative z-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {athletes.map((a, i) => (
                  <ScrollReveal key={a.name} variant="fade-up" delay={i * 80}>
                    <div
                      onClick={() => setSel(sel === i ? null : i)}
                      className={
                        "rounded-2xl bg-white border overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-lg hover:border-transparent " +
                        (sel === i
                          ? "border-[#C9A84C] shadow-lg"
                          : "border-[#C9A84C]/10")
                      }
                    >
                      <div className="h-48 overflow-hidden relative">
                        <img
                          src={a.img}
                          alt={a.name}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0A2F1D]/50 via-transparent to-transparent" />
                        <span className="absolute top-4 right-4 px-3 py-1 bg-[#C9A84C] text-[#0A2F1D] text-[11px] font-bold rounded-full shadow-lg">
                          {a.cls}
                        </span>
                      </div>
                      <div className="p-6">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h3 className="text-[16px] font-bold text-[#0A2F1D]">
                              {a.name}
                            </h3>
                            <p className="text-[12px] text-gray-400">
                              {a.town}
                            </p>
                          </div>
                        </div>
                        <p className="text-[13px] text-gray-500 mb-3">
                          {a.highlight}
                        </p>
                        {sel === i && (
                          <div className="pt-3 border-t border-[#F3F4F6]">
                            <span
                              className={
                                "inline-block rounded-lg px-2.5 py-0.5 text-[10px] font-bold " +
                                (a.status === "National Team"
                                  ? "bg-[#0A2F1D]/10 text-[#0A2F1D]"
                                  : "bg-[#C9A84C]/15 text-[#8B6914]")
                              }
                            >
                              {a.status}
                            </span>
                            <div className="flex gap-4 mt-2">
                              {a.medals.g > 0 && (
                                <span className="text-[11px] text-[#C9A84C] font-semibold">
                                  Gold: {a.medals.g}
                                </span>
                              )}
                              {a.medals.s > 0 && (
                                <span className="text-[11px] text-gray-400 font-semibold">
                                  Silver: {a.medals.s}
                                </span>
                              )}
                              {a.medals.b > 0 && (
                                <span className="text-[11px] text-[#8B6914] font-semibold">
                                  Bronze: {a.medals.b}
                                </span>
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </section>
        </ScrollReveal>
      </main>
      <Footer />
    </div>
  );
}
