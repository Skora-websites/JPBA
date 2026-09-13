"use client";
import { useState } from "react";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import RegistrationForm from "@/app/components/RegistrationForm";
import PageHero from "@/app/components/PageHero";
import { PAGE_HERO } from "@/lib/images";

export default function CompetitionPage() {
  const [showReg, setShowReg] = useState(false);
  return (
    <div className="flex flex-col min-h-screen bg-[#FDF8EF]">
      <Navbar onRegisterClick={() => setShowReg(true)} />
      <main className="flex-1">

        {/* Hero Section */}
                <PageHero
          image={PAGE_HERO.competition}
          imageAlt="Opening day of the state championship"
          eyebrow="COMPETITION"
          title={"Competition Formats"}
          description="Individual, Pair, and Team events."
          breadcrumb={[{"label": "Competition"}]}
          size={"sm"}
        />

        <section className="py-16 bg-white">
          <div className="mx-auto max-w-[1000px] px-6 lg:px-10">
            <h2 className="text-[28px] font-bold text-[#0A2F1D] mb-6">Competition Formats</h2>
            <p className="text-[15px] text-gray-600 leading-relaxed mb-8">
              Boccia competitions are organized across three formats: Individual, Pairs, and Team. Each format has specific requirements for athlete numbers, ends, and ball allocation.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-[14px] border border-[#C9A84C]/20 rounded-xl overflow-hidden">
                <thead className="bg-[#0A2F1D] text-white">
                  <tr>
                    <th className="px-4 py-3 text-left font-bold">Format</th>
                    <th className="px-4 py-3 text-left font-bold">Athletes</th>
                    <th className="px-4 py-3 text-left font-bold">Ends</th>
                    <th className="px-4 py-3 text-left font-bold">Balls/Team</th>
                    <th className="px-4 py-3 text-left font-bold">Time Limit</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="bg-[#FDF8EF]"><td className="px-4 py-3 font-semibold text-[#0A2F1D]">Individual</td><td className="px-4 py-3">1 per side</td><td className="px-4 py-3">4</td><td className="px-4 py-3">6</td><td className="px-4 py-3">4 min end / 2 min remaining</td></tr>
                  <tr className="bg-white"><td className="px-4 py-3 font-semibold text-[#0A2F1D]">Pairs</td><td className="px-4 py-3">2 per side</td><td className="px-4 py-3">4</td><td className="px-4 py-3">6 (3 each)</td><td className="px-4 py-3">4 min end / 2 min remaining</td></tr>
                  <tr className="bg-[#FDF8EF]"><td className="px-4 py-3 font-semibold text-[#0A2F1D]">Team</td><td className="px-4 py-3">3 per side</td><td className="px-4 py-3">6</td><td className="px-4 py-3">6 (2 each)</td><td className="px-4 py-3">6 min end / 2 min remaining</td></tr>
                </tbody>
              </table>
            </div>
            <p className="text-[13px] text-gray-400 mt-4">In pair and team events, a reserve player is allowed. One substitution per game is permitted between ends.</p>
          </div>
        </section>
      </main>
      <Footer />
      <RegistrationForm isOpen={showReg} onClose={() => setShowReg(false)} />
    </div>
  );
}
