"use client";
import { useState } from "react";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import RegistrationForm from "@/app/components/RegistrationForm";
import PageHero from "@/app/components/PageHero";
import { PAGE_HERO } from "@/lib/images";

export default function ActionPathwayPage() {
  const [showReg, setShowReg] = useState(false);
  return (
    <div className="flex flex-col min-h-screen bg-[#FDF8EF]">
      <Navbar onRegisterClick={() => setShowReg(true)} />
      <main className="flex-1">

        {/* Hero Section */}
                <PageHero
          image={PAGE_HERO.aboutActionPathway}
          imageAlt="Athletes at a JPBA development pathway camp"
          eyebrow="ACTION PATHWAY"
          title={"JPBA Action Pathway"}
          description="DISCOVER. EQUIP. DEVELOP. COMPETE. CONNECT."
          breadcrumb={[{"label": "About", "href": "/about"}, {"label": "Action Pathway"}]}
          size={"sm"}
          reverse
        />

        <section className="py-16 bg-white">
          <div className="mx-auto max-w-[1000px] px-6 lg:px-10">
            <h2 className="text-[28px] font-bold text-[#0A2F1D] mb-8">The JPBA Action Pathway</h2>
            <div className="space-y-6">
              {[{ stage: "DISCOVER", desc: "District demonstrations through schools, hospitals, rehabilitation centres and disability networks.", icon: "ðŸ”" },
                { stage: "EQUIP", desc: "Providing balls, training targets, ramps and accessible venue partnerships.", icon: "ðŸ“¦" },
                { stage: "DEVELOP", desc: "Athlete-centred coaching, referee education and classification literacy programs.", icon: "ðŸ“ˆ" },
                { stage: "COMPETE", desc: "State calendar, data management, safeguarding and transparent selection.", icon: "ðŸ†" },
                { stage: "CONNECT", desc: "Building partnerships with BSFI, government, CSR, health, education and media.", icon: "ðŸ¤" }].map((s, i) => (
                <div key={s.stage} className="flex items-start gap-5 rounded-xl bg-[#FDF8EF] border border-[#C9A84C]/20 p-6 hover:shadow-md transition-all">
                  <div className="text-3xl">{s.icon}</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="inline-block rounded-lg bg-[#0A2F1D]/10 px-3 py-1 text-[12px] font-bold text-[#0A2F1D] uppercase tracking-wider">Step {i + 1}</span>
                      <h3 className="text-[18px] font-bold text-[#0A2F1D]">{s.stage}</h3>
                    </div>
                    <p className="text-[14px] text-gray-600 leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <RegistrationForm isOpen={showReg} onClose={() => setShowReg(false)} />
    </div>
  );
}
