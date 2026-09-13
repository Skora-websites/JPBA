"use client";
import { useState } from "react";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import RegistrationForm from "@/app/components/RegistrationForm";
import PageHero from "@/app/components/PageHero";
import { PAGE_HERO } from "@/lib/images";

export default function NinetyDayPlanPage() {
  const [showReg, setShowReg] = useState(false);
  return (
    <div className="flex flex-col min-h-screen bg-[#FDF8EF]">
      <Navbar onRegisterClick={() => setShowReg(true)} />
      <main className="flex-1">

        {/* Hero Section */}
                <PageHero
          image={PAGE_HERO.about90DayPlan}
          imageAlt="The JPBA team planning around a meeting table"
          eyebrow="DEVELOPMENT"
          title={"90-Day Development Plan"}
          description="MAP. MOBILISE. MEASURE."
          breadcrumb={[{"label": "About", "href": "/about"}, {"label": "90-Day Plan"}]}
          size={"sm"}
        />

        <section className="py-16 bg-white">
          <div className="mx-auto max-w-[1000px] px-6 lg:px-10">
            <h2 className="text-[28px] font-bold text-[#0A2F1D] mb-8">JPBA 90-Day Development Plan</h2>
            <div className="space-y-8">
              {[{ phase: "MAP", days: "Days 1-30", color: "forest", items: ["District leads", "Athlete mapping", "Venue assessment", "Clinician partnerships", "Equipment procurement", "Safeguarding protocols"] },
                { phase: "MOBILISE", days: "Days 31-60", color: "gold", items: ["District demonstrations", "Coach training", "Referee education", "Athlete profiles", "Practice hub establishment"] },
                { phase: "MEASURE", days: "Days 61-90", color: "dark-green", items: ["Assessment camps", "Call-room simulation", "Event calendar", "Classification sessions", "National pathway dossiers"] }].map((p) => (
                <div key={p.phase} className="rounded-xl border border-[#C9A84C]/20 overflow-hidden">
                  <div className={"bg-" + p.color + " px-6 py-4 flex items-center justify-between"}>
                    <h3 className="text-[20px] font-bold text-white">{p.phase}</h3>
                    <span className="text-white/80 text-[14px]">{p.days}</span>
                  </div>
                  <div className="p-6 bg-[#FDF8EF]">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {p.items.map((item) => (
                        <div key={item} className="flex items-center gap-2 text-[14px] text-gray-600">
                          <span className="h-1.5 w-1.5 rounded-full bg-current shrink-0" />{item}
                        </div>
                      ))}
                    </div>
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
