"use client";
import { useState } from "react";

import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import RegistrationForm from "@/app/components/RegistrationForm";
import ScrollReveal from "@/app/components/ScrollReveal";
import PageHero from "@/app/components/PageHero";
import { PAGE_HERO } from "@/lib/images";

export default function DevelopmentPage() {
  const [showReg, setShowReg] = useState(false);
  return (
    <div className="flex flex-col min-h-screen bg-[#FDF8EF]">
      <Navbar onRegisterClick={() => setShowReg(true)} />
      <main className="flex-1">

        {/* Hero Section */}
                <PageHero
          image={PAGE_HERO.development}
          imageAlt="Athletes during a practice session"
          eyebrow="ATHLETE PATHWAY"
          title={"Development Pathway"}
          description="Community to Paralympic progression."
          breadcrumb={[{"label": "Boccia", "href": "/boccia"}, {"label": "Development"}]}
          size={"sm"}
        />

        <ScrollReveal>
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-[1000px] px-6 lg:px-10">
            <h2 className="text-[28px] font-bold text-[#0A2F1D] mb-8">Athlete Development Pathway</h2>
            <div className="space-y-4">
              {["Community", "Identify", "Develop", "Classify", "Compete", "State", "National", "International", "Paralympic"].map((stage, i) => (
                <div key={stage} className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-[#0A2F1D] flex items-center justify-center text-white font-bold shrink-0">{i + 1}</div>
                  <div className="rounded-xl bg-[#FDF8EF] border border-[#C9A84C]/20 p-4 flex-1">
                    <h3 className="text-[16px] font-bold text-[#0A2F1D]">{stage}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        </ScrollReveal>
      </main>
      <Footer />
      <RegistrationForm isOpen={showReg} onClose={() => setShowReg(false)} />
    </div>
  );
}
