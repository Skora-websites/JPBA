"use client";
import { useState } from "react";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import RegistrationForm from "@/app/components/RegistrationForm";

export default function ResourcesPage() {
  const [showReg, setShowReg] = useState(false);
  const resources = [
    {icon:"📖",title:"Boccia Glossary",desc:"Official Boccia terminology and definitions for athletes, coaches, and officials.",href:"/resources/glossary",label:"View Glossary"},
    {icon:"📋",title:"Quick Rules Reference",desc:"A compact rulebook reference covering court, balls, scoring, events, and penalties.",href:"/resources/quick-rules",label:"View Quick Rules"},
    {icon:"📄",title:"Official References",desc:"World Boccia rules, classification protocols, referee manuals, and governing body documents.",href:"/resources/references",label:"View References"}
  ];
  return (
    <div className="flex flex-col min-h-screen bg-[#FDF8EF]">
      <Navbar onRegisterClick={() => setShowReg(true)} />
      <main className="flex-1">
        <section className="relative pt-[180px] pb-16 min-h-[320px] border-b border-[#C9A84C]/20" style={{background: "linear-gradient(135deg, #0A2F1D 0%, #133824 40%, #1B4E33 100%)"}}>
          <img src="/boccia1.png" alt="" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 pointer-events-none" style={{background: "linear-gradient(to right, rgba(10,47,29,0.92) 0%, rgba(10,47,29,0.85) 35%, rgba(10,47,29,0.5) 60%, rgba(10,47,29,0.15) 80%, transparent 100%)"}} />
          <div className="absolute inset-0 pointer-events-none" style={{background: "linear-gradient(to top, rgba(10,47,29,0.6) 0%, transparent 40%)"}} />
<div className="mx-auto max-w-[1400px] px-6 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-16 h-1 bg-[#C9A84C] rounded-full mb-6" />
                <p className="text-[#C9A84C] text-[11px] font-bold tracking-[0.3em] uppercase mb-3">RESOURCES</p>
                <h1 className="text-[36px] sm:text-[44px] font-bold text-[#0A2F1D] leading-tight mb-4">Resources</h1>
                <p className="text-[15px] text-gray-600 max-w-[600px] leading-relaxed">Official documentation, glossary, quick rules, and governing body references.</p>
              </div>
              <div className="hidden lg:block">
                <div className="rounded-2xl overflow-hidden shadow-xl border border-[#C9A84C]/20">
                  <img src="https://images.pexels.com/photos/38149196/pexels-photo-38149196.jpeg?w=800&q=80" alt="Resources" className="w-full h-[350px] object-cover" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-16">
          <div className="mx-auto max-w-[1000px] px-6 lg:px-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {resources.map((r,i)=>(
                <Link key={i} href={r.href} className="bg-white rounded-2xl p-8 shadow-lg border border-[#C9A84C]/10 hover:shadow-xl hover:border-[#C9A84C]/30 transition-all text-center group">
                  <div className="w-16 h-16 rounded-xl bg-[#0A2F1D]/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-[#0A2F1D]/20 transition-colors"><span className="text-3xl">{r.icon}</span></div>
                  <h3 className="text-xl font-bold text-[#0A2F1D] mb-2">{r.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{r.desc}</p>
                  <span className="text-[#C9A84C] font-semibold text-sm group-hover:underline">{r.label} →</span>
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
