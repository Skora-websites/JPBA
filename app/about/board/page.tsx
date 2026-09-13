"use client";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import PageHeader from "@/app/components/PageHeader";
import ScrollReveal from "@/app/components/ScrollReveal";
import { PEOPLE } from "@/lib/images";

const officeBearers = [
  {
    role: "President",
    name: "Capt Jitendra Kumar Sharma",
    img: PEOPLE.president,
    desc: "Leads the Jharkhand Para Boccia Association with a vision of sporting excellence and inclusion for persons with disabilities across the state.",
  },
  {
    role: "Secretary General",
    name: "Dr Suman Kumar Sharma",
    img: PEOPLE.secretaryGeneral,
    desc: "Senior Consultant Physiotherapist and National Coach — combines clinical expertise with hands-on athlete development for JPBA.",
  },
  {
    role: "Executive Member (Treasurer)",
    name: "Sonu Kumar Sharma",
    img: PEOPLE.treasurer,
    desc: "Manages the association's finances and ensures transparent, accountable operations as JPBA grows across districts.",
  },
  {
    role: "National Coach",
    name: "Raj Kumar Singh",
    img: PEOPLE.coach,
    desc: "Blind Football Coach and disability-sports activist — prepares the Jharkhand Blind Football Team and drives grassroots para-sports development.",
  },
];

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FDF8EF]">
      <Navbar />
      <PageHeader
        title="Board and Leadership"
        image="/images/members-meet.webp"
        breadcrumb={[{ label: "About" }, { label: "Board" }]}
      />
      <main className="flex-1 py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-texture-crosshatch pointer-events-none" />
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 relative z-10">
          {/* Office Bearers */}
          <ScrollReveal variant="fade-up">
            <h2 className="text-3xl font-bold text-[#0A2F1D] mb-2">Office Bearers &amp; National Coach</h2>
            <div className="w-16 h-1 bg-[#C9A84C] rounded-full mb-10" />
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {officeBearers.map((p, i) => (
              <ScrollReveal key={p.name} variant="fade-up" delay={i * 120}>
                <div className="group bg-white rounded-2xl overflow-hidden border border-[#C9A84C]/15 shadow-sm hover:shadow-2xl hover:border-[#C9A84C]/50 transition-all duration-300 h-full">
                  <div className="h-96 overflow-hidden relative">
                    <img
                      src={p.img}
                      alt={p.name}
                      className="w-full h-full object-cover object-top group-hover:scale-[1.04] transition-transform duration-700"
                    />
                    <span className="absolute top-4 left-4 px-3 py-1 bg-[#C9A84C] text-[#0A2F1D] text-[11px] font-bold uppercase tracking-wider rounded-full shadow-lg">
                      {p.role}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-[19px] font-bold text-[#0A2F1D] mb-3">{p.name}</h3>
                    <p className="text-[13px] text-gray-600 leading-relaxed">{p.desc}</p>
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
