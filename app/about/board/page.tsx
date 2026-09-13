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

          {/* National Coach — full profile */}
          <ScrollReveal variant="fade-up">
            <h2 className="text-3xl font-bold text-[#0A2F1D] mb-2">National Coach &amp; Executive Member</h2>
            <div className="w-16 h-1 bg-[#C9A84C] rounded-full mb-10" />
          </ScrollReveal>

          <ScrollReveal variant="fade-up">
            <div className="bg-white rounded-2xl shadow-xl border border-[#C9A84C]/20 overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-5">
                <div className="lg:col-span-2 h-[420px] lg:h-auto overflow-hidden">
                  <img
                    src={PEOPLE.coach}
                    alt="Raj Kumar Singh — National Coach"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="lg:col-span-3 p-8 md:p-10">
                  <h3 className="text-[26px] font-bold text-[#0A2F1D] leading-tight">Raj Kumar Singh</h3>
                  <p className="text-[#C9A84C] font-bold text-[13px] uppercase tracking-wider mt-2 mb-5">
                    Blind Football Coach · Sports Development Professional · Disability Sports Activist
                  </p>
                  <p className="text-[#5C5C5C] text-[14px] leading-relaxed mb-4">
                    Raj Kumar Singh is a sports professional and disability-sports activist from Jamshedpur,
                    actively associated with the development and promotion of Blind Football and sports for
                    persons with disabilities. His work spans grassroots player development, sports camps,
                    competitions and support for athletes at national-level events — including preparing the
                    Jharkhand Blind Football Team for the Greater Lions Vision Cup 2025, where Jharkhand
                    finished 2nd Runner-up.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 mb-6">
                    {[
                      "Secretary — DMDT / CPSJ",
                      "National Coach — Blind Football",
                      "Master Trainer — Special Olympics Bharat",
                      "Master Trainer — BFJ Jharkhand",
                      "Basic Mountaineer",
                      "Sports-event coordination & team management",
                    ].map((r) => (
                      <div key={r} className="flex items-start gap-2 text-[13px] text-[#0A2F1D]">
                        <span className="text-[#C9A84C] mt-0.5">&#10022;</span>
                        {r}
                      </div>
                    ))}
                  </div>
                  <div className="border-t border-[#E2D9C8] pt-5">
                    <p className="text-[13px] font-bold text-[#0A2F1D] mb-2">Vision</p>
                    <p className="text-[13px] text-[#5C5C5C] leading-relaxed mb-4">
                      To create greater opportunities for persons with visual impairment and other disabilities
                      through sports, training, skill development and participation at national and
                      international levels.
                    </p>
                    <div className="flex flex-wrap gap-x-6 gap-y-1 text-[13px] text-[#5C5C5C]">
                      <span><span className="font-semibold text-[#0A2F1D]">Phone:</span> 9308820769, 9031352082</span>
                      <span><span className="font-semibold text-[#0A2F1D]">Email:</span> rajkumarsinghcbr@gmail.com</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </main>
      <Footer />
    </div>
  );
}
