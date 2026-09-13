"use client";
import { useState } from "react";

import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import RegistrationForm from "@/app/components/RegistrationForm";
import PageHero from "@/app/components/PageHero";
import { PAGE_HERO } from "@/lib/images";

export default function ScoringPage() {
  const [showReg, setShowReg] = useState(false);
  return (
    <div className="flex flex-col min-h-screen bg-[#FDF8EF]">
      <Navbar onRegisterClick={() => setShowReg(true)} />
      <main className="flex-1">

        {/* Hero Section */}
                <PageHero
          image={PAGE_HERO.bocciaScoring}
          imageAlt="The referee's closest-ball call that decides a point"
          eyebrow="SCORING"
          title={"Scoring in Boccia"}
          description="Points per ball closer to the jack."
          breadcrumb={[{"label": "Boccia", "href": "/boccia"}, {"label": "Scoring"}]}
          size={"sm"}
          reverse
        />

        <section className="py-16 bg-white">
          <div className="mx-auto max-w-[1000px] px-6 lg:px-10">
            <h2 className="text-[28px] font-bold text-[#0A2F1D] mb-6">Scoring in Boccia</h2>
            <p className="text-[15px] text-gray-600 leading-relaxed mb-6">
              At the end of each end, the referee measures the distance of the balls closest to the jack and awards points â€” one point for each ball that is closer to the jack than the opponent's closest ball.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="rounded-xl bg-[#FDF8EF] border border-[#C9A84C]/20 p-6">
                <h3 className="text-[18px] font-bold text-[#0A2F1D] mb-3">How Points Work</h3>
                <ul className="space-y-2 text-[14px] text-gray-600">
                  <li className="flex items-start gap-2"><span className="text-[#C9A84C] mt-1">â—</span>The side with balls closer to the jack scores all points for that end</li>
                  <li className="flex items-start gap-2"><span className="text-[#C9A84C] mt-1">â—</span>If balls are equidistant, the point is not awarded</li>
                  <li className="flex items-start gap-2"><span className="text-[#C9A84C] mt-1">â—</span>Maximum possible score per end depends on the format</li>
                </ul>
              </div>
              <div className="rounded-xl bg-[#FDF8EF] border border-[#C9A84C]/20 p-6">
                <h3 className="text-[18px] font-bold text-[#0A2F1D] mb-3">Special Situations</h3>
                <ul className="space-y-2 text-[14px] text-gray-600">
                  <li className="flex items-start gap-2"><span className="text-[#C9A84C] mt-1">â—</span>If the jack goes out of bounds, the end is replayed</li>
                  <li className="flex items-start gap-2"><span className="text-[#C9A84C] mt-1">â—</span>If scores are tied after all ends, one additional end is played</li>
                  <li className="flex items-start gap-2"><span className="text-[#C9A84C] mt-1">â—</span>Dead balls are removed from play</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <RegistrationForm isOpen={showReg} onClose={() => setShowReg(false)} />
    </div>
  );
}
