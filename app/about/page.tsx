"use client";
import { useState } from "react";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import RegistrationForm from "@/app/components/RegistrationForm";
import ScrollReveal from "@/app/components/ScrollReveal";

export default function AboutPage() {
  const [showReg, setShowReg] = useState(false);
  return (
    <div className="flex flex-col min-h-screen bg-[#FDF8EF]">
      <Navbar onRegisterClick={() => setShowReg(true)} />
      <main className="flex-1">
        <section className="relative pt-[180px] pb-16 min-h-[320px] border-b border-[#C9A84C]/20" style={{background:"linear-gradient(135deg, #FDF8EF 0%, #FFFFFF 50%, #F4F1E9 100%)"}}>
          <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-16 h-1 bg-[#C9A84C] rounded-full mb-6" />
                <p className="text-[#C9A84C] text-[11px] font-bold tracking-[0.3em] uppercase mb-3">ABOUT JPBA</p>
                <h1 className="text-[36px] sm:text-[44px] font-bold text-[#0A2F1D] leading-tight mb-4">About the Association</h1>
                <p className="text-[15px] text-gray-600 max-w-[600px] leading-relaxed">JPBA builds the ecosystem around the athlete — from first contact through sustainable competition.</p>
              </div>
              <div className="hidden lg:block">
                <div className="rounded-2xl overflow-hidden shadow-xl border border-[#C9A84C]/20">
                  <img src="https://images.pexels.com/photos/6763758/pexels-photo-6763758.jpeg?w=800&q=80" alt="About JPBA" className="w-full h-[350px] object-cover" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <ScrollReveal>
        <section className="py-16">
          <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#0A2F1D] mb-4">Who We Are</h2>
              <p className="text-gray-600 max-w-3xl mx-auto text-lg">The Jharkhand Para Boccia Association (JPBA) is dedicated to developing Boccia in Jharkhand — building pathways from grassroots awareness through international competition.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {[
                {icon:"🎯",title:"Our Mission",desc:"To create a thriving Boccia ecosystem in Jharkhand that identifies, develops, and supports para-athletes from first contact through Paralympic competition."},
                {icon:"👁️",title:"Our Vision",desc:"A Jharkhand where every person with a physical disability has access to competitive sport, community, and a pathway to excellence."},
                {icon:"🤝",title:"Our Values",desc:"Inclusion, precision, athlete-centred development, transparency, and commitment to the highest standards of Para sport."}
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
            <div className="mt-8 rounded-xl overflow-hidden shadow-lg border border-[#C9A84C]/15 boccia-img-container">
              <img src="/boccia.png" alt="" className="w-full h-[200px] object-cover" />
            </div>
        </section>
        </ScrollReveal>
      </main>
      <Footer />
      <RegistrationForm isOpen={showReg} onClose={() => setShowReg(false)} />
    </div>
  );
}
