"use client";
import { useState } from "react";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import RegistrationForm from "@/app/components/RegistrationForm";
import PageHero from "@/app/components/PageHero";
import { PAGE_HERO } from "@/lib/images";

export default function ResourcesPage() {
  const [showReg, setShowReg] = useState(false);
  const resources = [
    {icon:"ðŸ“–",title:"Boccia Glossary",desc:"Official Boccia terminology and definitions for athletes, coaches, and officials.",href:"/resources/glossary",label:"View Glossary"},
    {icon:"ðŸ“‹",title:"Quick Rules Reference",desc:"A compact rulebook reference covering court, balls, scoring, events, and penalties.",href:"/resources/quick-rules",label:"View Quick Rules"},
    {icon:"ðŸ“„",title:"Official References",desc:"World Boccia rules, classification protocols, referee manuals, and governing body documents.",href:"/resources/references",label:"View References"}
  ];
  return (
    <div className="flex flex-col min-h-screen bg-[#FDF8EF]">
      <Navbar onRegisterClick={() => setShowReg(true)} />
      <main className="flex-1">
                <PageHero
          image={PAGE_HERO.resources}
          imageAlt="Technical officials on court at a championship"
          eyebrow="RESOURCES"
          title={"Resources"}
          description="Official documentation, glossary, quick rules, and governing body references."
          breadcrumb={[{"label": "Resources"}]}
          size={"lg"}
          reverse
        />
        <section className="py-16">
          <div className="mx-auto max-w-[1000px] px-6 lg:px-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {resources.map((r,i)=>(
                <Link key={i} href={r.href} className="bg-white rounded-2xl p-8 shadow-lg border border-[#C9A84C]/10 hover:shadow-xl hover:border-[#C9A84C]/30 transition-all text-center group">
                  <div className="w-16 h-16 rounded-xl bg-[#0A2F1D]/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-[#0A2F1D]/20 transition-colors"><span className="text-3xl">{r.icon}</span></div>
                  <h3 className="text-xl font-bold text-[#0A2F1D] mb-2">{r.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{r.desc}</p>
                  <span className="text-[#C9A84C] font-semibold text-sm group-hover:underline">{r.label} â†’</span>
                </Link>
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
