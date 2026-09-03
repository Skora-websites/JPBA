"use client";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import ScrollReveal from "@/app/components/ScrollReveal";

const events = [
  { num: "01", title: "Para Boccia Awareness Camp", type: "Awareness Camp", date: "7th June, 2026", venue: "Ranchi, Jharkhand", desc: "Introduction to Boccia for athletes, families, and support organisations across Ranchi." },
  { num: "02", title: "1st JPBA State Championship 2026", type: "State Championship", date: "August 2026", venue: "TBD, Jharkhand", desc: "The inaugural state-level Boccia championship featuring athletes from across Jharkhand." },
  { num: "03", title: "Jharkhand Boccia Federation Cup 2026", type: "Federation Cup", date: "October 2026", venue: "TBD, Jharkhand", desc: "Annual federation cup competition for state-ranked athletes." },
  { num: "04", title: "11th Boccia National Championship", type: "National Championship", date: "January 2027", venue: "TBD", desc: "India's premier national Boccia championship featuring athletes from all states." },
];

export default function EventsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FDF8EF]">
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative pt-[180px] pb-16 min-h-[320px] overflow-hidden" style={{background: "linear-gradient(135deg, #FDF8EF 0%, #FFFFFF 50%, #F4F1E9 100%)"}}>
          <img src="/boccia.png" alt="" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 pointer-events-none" style={{background: "linear-gradient(to right, rgba(10,47,29,0.92) 0%, rgba(10,47,29,0.85) 35%, rgba(10,47,29,0.5) 60%, rgba(10,47,29,0.15) 80%, transparent 100%)"}} />
          <div className="absolute inset-0 pointer-events-none" style={{background: "linear-gradient(to top, rgba(10,47,29,0.6) 0%, transparent 40%)"}} />
<div className="absolute inset-0 bg-noise pointer-events-none opacity-30" /><img src="/boccia.png" alt="Events" className="absolute right-0 top-0 h-full w-1/2 object-cover opacity-15" /><div className="mx-auto max-w-[1400px] px-6 lg:px-10 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-16 h-1 bg-[#C9A84C] rounded-full mb-6" />
                <p className="text-[#C9A84C] text-[11px] font-bold tracking-[0.3em] uppercase mb-3">
                  BOCCIA JHARKHAND 2026
                </p>
                <h1 className="text-[36px] sm:text-[44px] font-bold text-[#0A2F1D] leading-tight mb-4">
                  Events &amp; Schedule
                </h1>
                <p className="text-[15px] text-gray-600 max-w-[600px] leading-relaxed">
                  Competition calendar, training camps, and development events
                  across Jharkhand.
                </p>
              </div>
              <div className="hidden lg:block">
                <div className="rounded-2xl overflow-hidden shadow-2xl border border-[#C9A84C]/20 relative">
                  <img
                    src="https://images.pexels.com/photos/10517000/pexels-photo-10517000.jpeg?w=800&q=80"
                    alt="Events"
                    className="w-full h-[350px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A2F1D]/40 via-transparent to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Events List */}
        <ScrollReveal variant="fade-in">
          <section className="py-16 relative overflow-hidden">
            <div className="absolute inset-0 bg-texture-wavy pointer-events-none opacity-30" />
            <div className="gradient-orb gradient-orb-gold w-[400px] h-[400px] -top-40 right-1/4 pointer-events-none opacity-20" />

            <div className="mx-auto max-w-[900px] px-6 relative z-10">
              <div className="space-y-6">
                {events.map((e, i) => (
                  <ScrollReveal key={e.num} variant="fade-up" delay={i * 80}>
                    <div className="flex gap-5 items-start bg-white rounded-2xl border border-[#C9A84C]/10 p-6 hover:shadow-lg hover:border-[#C9A84C]/30 transition-all duration-300">
                      <div className="h-14 w-14 rounded-xl bg-[#0A2F1D] flex items-center justify-center text-[15px] font-bold text-white shrink-0 shadow-lg shadow-[#0A2F1D]/20">
                        {e.num}
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="inline-block rounded-md bg-[#C9A84C]/10 px-2.5 py-0.5 text-[10px] font-bold text-[#C9A84C] uppercase tracking-wide mb-2">
                          {e.type}
                        </span>
                        <h3 className="text-[16px] font-bold text-[#0A2F1D] mb-1">
                          {e.title}
                        </h3>
                        <p className="text-[13px] text-gray-500 mb-2">
                          {e.desc}
                        </p>
                        <div className="flex items-center gap-3">
                          <span className="text-[12px] text-[#C9A84C] font-semibold">
                            {e.date}
                          </span>
                          <span className="text-[12px] text-gray-300">
                            &middot;
                          </span>
                          <span className="text-[12px] text-gray-500">
                            {e.venue}
                          </span>
                        </div>
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
