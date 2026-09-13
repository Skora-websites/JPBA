"use client";
import { useState } from "react";

import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import RegistrationForm from "@/app/components/RegistrationForm";
import ScrollReveal from "@/app/components/ScrollReveal";
import PageHero from "@/app/components/PageHero";
import { PAGE_HERO } from "@/lib/images";

export default function BocciaPage() {
  const [showReg, setShowReg] = useState(false);
  return (
    <div className="flex flex-col min-h-screen bg-[#FDF8EF]">
      <Navbar onRegisterClick={() => setShowReg(true)} />
      <main className="flex-1">

        {/* Hero Section */}
                <PageHero
          image={PAGE_HERO.boccia}
          imageAlt="National championship boccia court action"
          eyebrow="THE SPORT"
          title={"What is Boccia?"}
          description="A Paralympic precision ball sport."
          breadcrumb={[{"label": "Boccia"}]}
          size={"sm"}
        />

        <ScrollReveal>
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-[1000px] px-6 lg:px-10">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-[28px] font-bold text-[#0A2F1D] mb-6">What is Boccia?</h2>
              <p className="text-[15px] text-gray-600 leading-relaxed mb-4">
                Boccia (<strong>/ËˆbÉ’tÊƒÉ™/</strong>, BOTCH-uh) is a precision ball sport, similar to bocce, and related to bowls and petanque. The name "boccia" is derived from the Latin word for "boss" â€” bottia. The sport is contested at local, national and international levels by athletes with severe physical disabilities.
              </p>
              <p className="text-[15px] text-gray-600 leading-relaxed mb-4">
                Originally designed to be played by people with cerebral palsy, Boccia now includes athletes with other severe disabilities affecting motor skills. In 1984, it became a Paralympic sport and as of 2020, 75 boccia national organizations have joined one or more of the international organizations.
              </p>
              <p className="text-[15px] text-gray-600 leading-relaxed mb-8">
                Boccia is governed by the Boccia International Sports Federation (BISFed) since 2013 and is one of two Paralympic sports (along with goalball) that have no counterpart in the Olympic program.
              </p>
            </div>
          </div>
        </section>
        </ScrollReveal>

        <ScrollReveal delay={100}>
        <section className="py-16 bg-[#FDF8EF] border-t border-[#C9A84C]/20">
          <div className="mx-auto max-w-[1000px] px-6 lg:px-10">
            <h2 className="text-[28px] font-bold text-[#0A2F1D] mb-6">How the Game Works</h2>
            <p className="text-[15px] text-gray-600 leading-relaxed mb-6">
              The aim of the game is to throw leather balls â€” coloured red or blue â€” as close as they can to a white target ball, or jack. The jack is thrown first, then the first two regular balls are played, after which the side furthest away from the jack goes next.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="rounded-xl bg-white border border-[#C9A84C]/20 p-6">
                <h3 className="text-[18px] font-bold text-[#0A2F1D] mb-3">Individual</h3>
                <p className="text-[14px] text-gray-600">4 ends, 6 balls per player per end</p>
              </div>
              <div className="rounded-xl bg-white border border-[#C9A84C]/20 p-6">
                <h3 className="text-[18px] font-bold text-[#0A2F1D] mb-3">Pairs</h3>
                <p className="text-[14px] text-gray-600">4 ends, 6 balls per pair per end (3 per player)</p>
              </div>
              <div className="rounded-xl bg-white border border-[#C9A84C]/20 p-6">
                <h3 className="text-[18px] font-bold text-[#0A2F1D] mb-3">Team</h3>
                <p className="text-[14px] text-gray-600">6 ends, 6 balls per team per end (2 per player)</p>
              </div>
              <div className="rounded-xl bg-white border border-[#C9A84C]/20 p-6">
                <h3 className="text-[18px] font-bold text-[#0A2F1D] mb-3">Tie-Break</h3>
                <p className="text-[14px] text-gray-600">One additional end is played if scores are equal</p>
              </div>
            </div>
          </div>
        </section>
        </ScrollReveal>

        <ScrollReveal delay={200}>
        <section className="py-16 bg-white border-t border-[#C9A84C]/20">
          <div className="mx-auto max-w-[1000px] px-6 lg:px-10">
            <h2 className="text-[28px] font-bold text-[#0A2F1D] mb-6">Pronunciation & Origin</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="rounded-xl bg-[#FDF8EF] border border-[#C9A84C]/20 p-6 text-center">
                <p className="text-[24px] font-bold text-[#0A2F1D] mb-2">/ËˆbÉ’tÊƒÉ™/</p>
                <p className="text-[14px] text-gray-400">BOTCH-uh</p>
              </div>
              <div className="rounded-xl bg-[#FDF8EF] border border-[#C9A84C]/20 p-6 text-center">
                <p className="text-[24px] font-bold text-[#0A2F1D] mb-2">Latin</p>
                <p className="text-[14px] text-gray-400">From "bottia" meaning boss</p>
              </div>
              <div className="rounded-xl bg-[#FDF8EF] border border-[#C9A84C]/20 p-6 text-center">
                <p className="text-[24px] font-bold text-[#0A2F1D] mb-2">1984</p>
                <p className="text-[14px] text-gray-400">Paralympic debut</p>
              </div>
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
