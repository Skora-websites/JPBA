"use client";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import PageHeader from "@/app/components/PageHeader";
import ScrollReveal from "@/app/components/ScrollReveal";

const letters = [
  {
    title: "Affiliation — Paralympic Committee of India (PCI)",
    desc: "Official recognition of the Jharkhand Para Boccia Association by the Paralympic Committee of India.",
    href: "/documents/affiliation-pci.pdf",
    file: "affiliation-pci.pdf",
    tag: "PCI",
  },
  {
    title: "Affiliation — Boccia India",
    desc: "Registration of the Jharkhand association (No. 284) with Boccia India, the national governing body for the sport.",
    href: "/documents/affiliation-boccia-india.pdf",
    file: "affiliation-boccia-india.pdf",
    tag: "Boccia India",
  },
];

const bodies = [
  { name: "World Boccia", desc: "International governing body recognized by the IPC" },
  { name: "Paralympic Committee of India", desc: "National Paralympic body — JPBA is an affiliated member" },
  { name: "Boccia India / BSFI", desc: "National governing body for Boccia in India" },
  { name: "Sports Authority of India (SAI)", desc: "National sports development body" },
  { name: "Jharkhand State Sports Council", desc: "State-level sports governing council" },
];

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FDF8EF]">
      <Navbar />
      <PageHeader
        title="Affiliations"
        image="/images/members-meet.webp"
        breadcrumb={[{ label: "About" }, { label: "Affiliations" }]}
      />
      <main className="flex-1 py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-texture-diagonal pointer-events-none" />
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 relative z-10">
          {/* Official letters */}
          <ScrollReveal variant="fade-up">
            <h2 className="text-3xl font-bold text-[#0A2F1D] mb-2">Official Affiliation Letters</h2>
            <div className="w-16 h-1 bg-[#C9A84C] rounded-full mb-4" />
            <p className="text-[#5C5C5C] text-[15px] mb-10 max-w-2xl">
              JPBA operates under the governance framework of national and
              international Boccia bodies. Our official affiliation documents:
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {letters.map((l, i) => (
              <ScrollReveal key={l.tag} variant="fade-up" delay={i * 120}>
                <div className="group bg-white rounded-2xl border border-[#C9A84C]/20 shadow-sm hover:shadow-2xl hover:border-[#C9A84C]/60 transition-all duration-300 p-8 h-full flex flex-col">
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-14 h-16 relative">
                      {/* Document icon */}
                      <svg viewBox="0 0 24 28" className="w-full h-full text-[#C9A84C]" fill="currentColor">
                        <path d="M4 0h12l6 6v20a2 2 0 01-2 2H4a2 2 0 01-2-2V2a2 2 0 012-2z" opacity="0.15" />
                        <path d="M4 0h12l6 6v20a2 2 0 01-2 2H4a2 2 0 01-2-2V2a2 2 0 012-2z" fill="none" stroke="currentColor" strokeWidth="1.4" />
                        <path d="M16 0v6h6" fill="none" stroke="currentColor" strokeWidth="1.4" />
                        <text x="12" y="20" textAnchor="middle" fontSize="6" fontWeight="bold" fill="currentColor">PDF</text>
                      </svg>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-[#0A2F1D] text-[#C9A84C] text-[10px] font-bold uppercase tracking-wider">
                      {l.tag}
                    </span>
                  </div>
                  <h3 className="text-[17px] font-bold text-[#0A2F1D] mb-2 leading-snug">{l.title}</h3>
                  <p className="text-[13px] text-[#5C5C5C] leading-relaxed mb-6 flex-1">{l.desc}</p>
                  <div className="flex gap-3">
                    <a
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0A2F1D] text-[#C9A84C] rounded font-bold uppercase tracking-wider hover:bg-[#C9A84C] hover:text-[#0A2F1D] transition-colors text-[12px]"
                    >
                      View Letter
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                    </a>
                    <a
                      href={l.href}
                      download={l.file}
                      className="inline-flex items-center gap-2 px-5 py-2.5 border-2 border-[#C9A84C] text-[#C9A84C] rounded font-bold uppercase tracking-wider hover:bg-[#C9A84C] hover:text-[#0A2F1D] transition-colors text-[12px]"
                    >
                      Download
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Governing bodies */}
          <ScrollReveal variant="fade-up">
            <h2 className="text-3xl font-bold text-[#0A2F1D] mb-2">Governing Bodies</h2>
            <div className="w-16 h-1 bg-[#C9A84C] rounded-full mb-10" />
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 pb-4">
            {bodies.map((b, i) => (
              <ScrollReveal key={b.name} variant="fade-up" delay={i * 80}>
                <div className="bg-white rounded-xl p-6 border border-[#E2D9C8] hover:border-[#C9A84C]/50 hover:shadow-lg transition-all duration-300 h-full">
                  <h3 className="text-[15px] font-bold text-[#0A2F1D] mb-1">{b.name}</h3>
                  <p className="text-[13px] text-[#5C5C5C]">{b.desc}</p>
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
