"use client";
import { useState } from "react";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import RegistrationForm from "@/app/components/RegistrationForm";

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
    <div className="flex flex-col min-h-screen bg-[#F5F5DC]">
      <Navbar onRegisterClick={() => setShowReg(true)} />
      <main className="flex-1">
        <section className="relative pt-[120px] pb-16 min-h-[320px] border-b border-[#D4AF37]/20" style={{background:"linear-gradient(135deg, #F5F5DC 0%, #FFFFFF 50%, #E8F5E9 100%)"}}>
          <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-16 h-1 bg-[#D4AF37] rounded-full mb-6" />
                <p className="text-[#D4AF37] text-[11px] font-bold tracking-[0.3em] uppercase mb-3">PATHWAY</p>
                <h1 className="text-[36px] sm:text-[44px] font-bold text-[#1B5E20] leading-tight mb-4">Competition Pathway</h1>
                <p className="text-[15px] text-gray-600 max-w-[600px] leading-relaxed">From local discovery through Paralympic competition — the complete athlete journey.</p>
              </div>
              <div className="hidden lg:block">
                <div className="rounded-2xl overflow-hidden shadow-xl border border-[#D4AF37]/20">
                  <img src="https://images.unsplash.com/photo-1461896836934-bd45ba8fcf9b?w=800&q=80" alt="Competition Pathway" className="w-full h-[350px] object-cover" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
            <h2 className="text-2xl font-bold text-[#1B5E20] mb-8">JPBA Practical Pathway</h2>
            <div className="space-y-4 mb-16">
              {jhSteps.map((s,i)=>(
                <div key={i} className="flex gap-5 items-start bg-white rounded-xl p-6 shadow-md border border-[#D4AF37]/10">
                  <div className="w-12 h-12 rounded-full bg-[#D4AF37] text-white flex items-center justify-center font-bold flex-shrink-0">{s.step}</div>
                  <div><h3 className="text-lg font-bold text-[#1B5E20]">{s.title}</h3><p className="text-gray-600 mt-1">{s.desc}</p></div>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-[#1B5E20] mb-8">International Competition Pathway</h2>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#D4AF37]/10">
              <div className="space-y-0">
                {intlSteps.map((s,i)=>(
                  <div key={i} className="flex gap-4 items-start py-4 border-b border-[#D4AF37]/10 last:border-0">
                    <div className="w-8 h-8 rounded-full bg-[#1B5E20] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">{i+1}</div>
                    <div className="flex-1"><h4 className="font-bold text-[#1B5E20]">{s.level}</h4><p className="text-gray-600 text-sm mt-1">{s.events}</p></div>
                  </div>
                ))}
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
