"use client";
import { useState } from "react";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import RegistrationForm from "@/app/components/RegistrationForm";
import ScrollReveal from "@/app/components/ScrollReveal";
import PageHero from "@/app/components/PageHero";
import { PAGE_HERO } from "@/lib/images";

export default function AboutPage() {
  const [showReg, setShowReg] = useState(false);
  return (
    <div className="flex flex-col min-h-screen bg-[#FDF8EF]">
      <Navbar onRegisterClick={() => setShowReg(true)} />
      <main className="flex-1">
                <PageHero
          image={PAGE_HERO.about}
          imageAlt="JPBA members at an association meeting"
          eyebrow="ABOUT JPBA"
          title={"About the Association"}
          description="JPBA builds the ecosystem around the athlete — from first contact through sustainable competition."
          breadcrumb={[{"label": "About"}]}
          size={"lg"}
          reverse
        />

        <ScrollReveal>
        <section className="py-16">
          <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#0A2F1D] mb-4">Who We Are</h2>
              <p className="text-gray-600 max-w-3xl mx-auto text-lg">The Jharkhand Para Boccia Association (JPBA) is dedicated to developing Boccia in Jharkhand â€” building pathways from grassroots awareness through international competition.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {[
                {icon:"ðŸŽ¯",title:"Our Mission",desc:"To create a thriving Boccia ecosystem in Jharkhand that identifies, develops, and supports para-athletes from first contact through Paralympic competition."},
                {icon:"ðŸ‘ï¸",title:"Our Vision",desc:"A Jharkhand where every person with a physical disability has access to competitive sport, community, and a pathway to excellence."},
                {icon:"ðŸ¤",title:"Our Values",desc:"Inclusion, precision, athlete-centred development, transparency, and commitment to the highest standards of Para sport."}
              ].map((item,i)=>(
                <div key={i} className="bg-white rounded-2xl p-8 shadow-lg border border-[#C9A84C]/10 text-center hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 rounded-xl bg-[#0A2F1D]/10 flex items-center justify-center mx-auto mb-4"><span className="text-3xl">{item.icon}</span></div>
                  <h3 className="text-xl font-bold text-[#0A2F1D] mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-2xl p-10 shadow-lg border border-[#C9A84C]/10 mb-12">
              <h2 className="text-2xl font-bold text-[#0A2F1D] mb-6">What JPBA Does</h2>
              <p className="text-gray-600 mb-8 text-lg">JPBA operates around five core pillars that guide every aspect of our work:</p>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                {[
                  {step:"1",label:"DISCOVER",desc:"District demonstrations through schools, hospitals, rehabilitation centres and disability networks.",color:"bg-[#0A2F1D]"},
                  {step:"2",label:"EQUIP",desc:"Balls, training targets, ramps and accessible venue partnerships.",color:"bg-[#133824]"},
                  {step:"3",label:"DEVELOP",desc:"Athlete-centred coaching, referee education and classification literacy.",color:"bg-[#1B4E33]"},
                  {step:"4",label:"COMPETE",desc:"State calendar, data, safeguarding and transparent selection.",color:"bg-[#29774D]"},
                  {step:"5",label:"CONNECT",desc:"BSFI, government, CSR, health, education and media partnerships.",color:"bg-[#C9A84C]"}
                ].map((item,i)=>(
                  <div key={i} className="text-center">
                    <div className={`w-12 h-12 rounded-full ${item.color} text-white flex items-center justify-center font-bold mx-auto mb-3 text-lg`}>{item.step}</div>
                    <h4 className="font-bold text-[#0A2F1D] mb-1">{item.label}</h4>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                {num:"75+",label:"Countries Playing Boccia"},
                {num:"1984",label:"Paralympic Debut"},
                {num:"4",label:"Competition Classes"},
                {num:"13",label:"Balls Per Set"}
              ].map((stat,i)=>(
                <div key={i} className="bg-[#0A2F1D] rounded-xl p-6 text-white">
                  <p className="text-3xl font-bold mb-1">{stat.num}</p>
                  <p className="text-sm text-white/80">{stat.label}</p>
                </div>
              ))}
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
