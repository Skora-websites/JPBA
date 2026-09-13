"use client";
import { useState } from "react";

import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import RegistrationForm from "@/app/components/RegistrationForm";
import ScrollReveal from "@/app/components/ScrollReveal";
import PageHero from "@/app/components/PageHero";
import { PAGE_HERO } from "@/lib/images";

export default function PathwayPage() {
  const [showReg, setShowReg] = useState(false);
  const jhSteps = [
    {step:"1",title:"Awareness",desc:"District demonstrations in schools, hospitals, rehabilitation centres and disability networks to introduce Boccia."},
    {step:"2",title:"Athlete Identification",desc:"Screening athletes with physical disabilities for Boccia potential through functional assessments."},
    {step:"3",title:"Preliminary Screening",desc:"Functional screening to determine athlete potential and initial classification direction."},
    {step:"4",title:"Coaching",desc:"Structured training programmes with certified Boccia coaches at district and state level."},
    {step:"5",title:"Official Classification",desc:"Formal classification through World Boccia protocols to determine competition class (BC1-BC4)."},
    {step:"6",title:"State Competition",desc:"State-level tournaments providing competitive experience and performance tracking."},
    {step:"7",title:"National Pathway",desc:"Selection for national competition through BSFI, representing Jharkhand at national level."},
    {step:"8",title:"International Pathway",desc:"Progression to international competition, Asian Championships, World Cups, and ultimately the Paralympic Games."}
  ];
  const intlSteps = [
    {level:"State",events:"State Championships, District Meets, Training Camps"},
    {level:"National",events:"National Championships, Inter-State Competitions, National Training Camps"},
    {level:"Continental",events:"Asian Para Games, Asian Championships, Continental Challengers"},
    {level:"World",events:"World Championships, World Cups, Intercontinental Challengers"},
    {level:"Paralympic",events:"Paralympic Qualification Tournament, Paralympic Games"}
  ];
  return (
    <div className="flex flex-col min-h-screen bg-[#FDF8EF]">
      <Navbar onRegisterClick={() => setShowReg(true)} />
      <main className="flex-1">
                <PageHero
          image={PAGE_HERO.pathway}
          imageAlt="Athletes at a training camp on the pathway to competition"
          eyebrow="PATHWAY"
          title={"Competition Pathway"}
          description="From local discovery through Paralympic competition — the complete athlete journey."
          breadcrumb={[{"label": "Competition", "href": "/competition"}, {"label": "Pathway"}]}
          size={"lg"}
          reverse
        />

        <ScrollReveal>
        <section className="py-16">
          <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
            <h2 className="text-2xl font-bold text-[#0A2F1D] mb-8">JPBA Practical Pathway</h2>
            <div className="space-y-4 mb-16">
              {jhSteps.map((s,i)=>(
                <div key={i} className="flex gap-5 items-start bg-white rounded-xl p-6 shadow-md border border-[#C9A84C]/10">
                  <div className="w-12 h-12 rounded-full bg-[#C9A84C] text-white flex items-center justify-center font-bold flex-shrink-0">{s.step}</div>
                  <div><h3 className="text-lg font-bold text-[#0A2F1D]">{s.title}</h3><p className="text-gray-600 mt-1">{s.desc}</p></div>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-[#0A2F1D] mb-8">International Competition Pathway</h2>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#C9A84C]/10">
              <div className="space-y-0">
                {intlSteps.map((s,i)=>(
                  <div key={i} className="flex gap-4 items-start py-4 border-b border-[#C9A84C]/10 last:border-0">
                    <div className="w-8 h-8 rounded-full bg-[#0A2F1D] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">{i+1}</div>
                    <div className="flex-1"><h4 className="font-bold text-[#0A2F1D]">{s.level}</h4><p className="text-gray-600 text-sm mt-1">{s.events}</p></div>
                  </div>
                ))}
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
