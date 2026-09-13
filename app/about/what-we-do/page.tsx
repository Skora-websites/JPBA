"use client";
import { useState } from "react";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import RegistrationForm from "@/app/components/RegistrationForm";
import PageHero from "@/app/components/PageHero";
import { PAGE_HERO } from "@/lib/images";

export default function WhatWeDoPage() {
  const [showReg, setShowReg] = useState(false);
  return (
    <div className="flex flex-col min-h-screen bg-[#FDF8EF]">
      <Navbar onRegisterClick={() => setShowReg(true)} />
      <main className="flex-1">
                <PageHero
          image={PAGE_HERO.aboutWhatWeDo}
          imageAlt="A coach running a boccia training drill"
          eyebrow="ABOUT JPBA"
          title={"What JPBA Does"}
          description="Building the Boccia ecosystem from grassroots awareness to international competition."
          breadcrumb={[{"label": "About", "href": "/about"}, {"label": "What JPBA Does"}]}
          size={"lg"}
        />

        <section className="py-16">
          <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
            <div className="space-y-8">
              {[
                {icon:"ðŸ”",title:"Discover",color:"#0A2F1D",items:["District demonstrations in schools, hospitals, and rehabilitation centres","Awareness campaigns through disability networks","Community outreach programmes","Identification of athletes with potential"]},
                {icon:"âš™ï¸",title:"Equip",color:"#133824",items:["Providing Boccia ball sets for training","Sourcing and distributing ramps and assistive devices","Establishing accessible venue partnerships","Creating mobile equipment kits for district use"]},
                {icon:"ðŸ“ˆ",title:"Develop",color:"#1B4E33",items:["Athlete-centred coaching programmes","Coach certification and development","Referee education and accreditation","Classification literacy and support"]},
                {icon:"ðŸ†",title:"Compete",color:"#29774D",items:["State competition calendar","Transparent selection processes","Data-driven performance tracking","Safeguarding and welfare standards"]},
                {icon:"ðŸ¤",title:"Connect",color:"#C9A84C",items:["Partnerships with Boccia Sports Federation of India (BSFI)","Government and policy engagement","CSR and corporate sponsorship","Media and public awareness"]}
              ].map((pillar,i)=>(
                <div key={i} className="bg-white rounded-2xl p-8 shadow-lg border border-[#C9A84C]/10 flex flex-col md:flex-row gap-6">
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
