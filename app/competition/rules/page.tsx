"use client";
import { useState } from "react";

import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import RegistrationForm from "@/app/components/RegistrationForm";
import PageHero from "@/app/components/PageHero";
import { PAGE_HERO } from "@/lib/images";

export default function RulesPage() {
  const [showReg, setShowReg] = useState(false);
  return (
    <div className="flex flex-col min-h-screen bg-[#FDF8EF]">
      <Navbar onRegisterClick={() => setShowReg(true)} />
      <main className="flex-1">

        {/* Hero Section */}
                <PageHero
          image={PAGE_HERO.competitionRules}
          imageAlt="A pairs championship match on court"
          eyebrow="COMPETITION"
          title={"Rules & Penalties"}
          description="Cards, forfeits, and tie-breaks."
          breadcrumb={[{"label": "Competition", "href": "/competition"}, {"label": "Rules & Penalties"}]}
          size={"sm"}
          reverse
        />

      </main>
      <Footer />
      <RegistrationForm isOpen={showReg} onClose={() => setShowReg(false)} />
    </div>
  );
}
