"use client";
import { useState } from "react";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import RegistrationForm from "@/app/components/RegistrationForm";

export default function WhatWeDoPage() {
  const [showReg, setShowReg] = useState(false);
  return (
    <div className="flex flex-col min-h-screen bg-[#F5F5DC]">
      <Navbar onRegisterClick={() => setShowReg(true)} />
      <main className="flex-1">
        <section className="relative pt-[120px] pb-16 min-h-[320px] border-b border-[#D4AF37]/20" style={{background:"linear-gradient(135deg, #F5F5DC 0%, #FFFFFF 50%, #E8F5E9 100%)"}}>
          <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-16 h-1 bg-[#D4AF37] rounded-full mb-6" />
                <p className="text-[#D4AF37] text-[11px] font-bold tracking-[0.3em] uppercase mb-3">ABOUT JPBA</p>
                <h1 className="text-[36px] sm:text-[44px] font-bold text-[#1B5E20] leading-tight mb-4">What JPBA Does</h1>
                <p className="text-[15px] text-gray-600 max-w-[600px] leading-relaxed">Building the Boccia ecosystem from grassroots awareness to international competition.</p>
              </div>
              <div className="hidden lg:block">
                <div className="rounded-2xl overflow-hidden shadow-xl border border-[#D4AF37]/20">
                  <img src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800&q=80" alt="What We Do" className="w-full h-[350px] object-cover" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
            <div className="space-y-8">
              {[
                {icon:"🔍",title:"Discover",color:"#1B5E20",items:["District demonstrations in schools, hospitals, and rehabilitation centres","Awareness campaigns through disability networks","Community outreach programmes","Identification of athletes with potential"]},
                {icon:"⚙️",title:"Equip",color:"#2E7D32",items:["Providing Boccia ball sets for training","Sourcing and distributing ramps and assistive devices","Establishing accessible venue partnerships","Creating mobile equipment kits for district use"]},
                {icon:"📈",title:"Develop",color:"#388E3C",items:["Athlete-centred coaching programmes","Coach certification and development","Referee education and accreditation","Classification literacy and support"]},
                {icon:"🏆",title:"Compete",color:"#43A047",items:["State competition calendar","Transparent selection processes","Data-driven performance tracking","Safeguarding and welfare standards"]},
                {icon:"🤝",title:"Connect",color:"#4CAF50",items:["Partnerships with Boccia Sports Federation of India (BSFI)","Government and policy engagement","CSR and corporate sponsorship","Media and public awareness"]}
              ].map((pillar,i)=>(
                <div key={i} className="bg-white rounded-2xl p-8 shadow-lg border border-[#D4AF37]/10 flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl" style={{backgroundColor: pillar.color + "15"}}>{pillar.icon}</div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-4" style={{color: pillar.color}}>{pillar.title}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {pillar.items.map((item,j)=>(
                        <div key={j} className="flex items-start gap-2 text-gray-600">
                          <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{backgroundColor: pillar.color}}></span>
                          <span>{item}</span>
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
