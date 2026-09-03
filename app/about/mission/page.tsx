"use client";
import { useState } from "react";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import RegistrationForm from "@/app/components/RegistrationForm";

export default function MissionPage() {
  const [showReg, setShowReg] = useState(false);
  return (
    <div className="flex flex-col min-h-screen bg-[#FDF8EF]">
      <Navbar onRegisterClick={() => setShowReg(true)} />
      <main className="flex-1">
        <section className="relative pt-[180px] pb-16 min-h-[320px] border-b border-[#C9A84C]/20" style={{background:"linear-gradient(135deg, #FDF8EF 0%, #FFFFFF 50%, #E8F5E9 100%)"}}>
          <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-16 h-1 bg-[#C9A84C] rounded-full mb-6" />
                <p className="text-[#C9A84C] text-[11px] font-bold tracking-[0.3em] uppercase mb-3">ABOUT JPBA</p>
                <h1 className="text-[36px] sm:text-[44px] font-bold text-[#0A2F1D] leading-tight mb-4">Mission &amp; Purpose</h1>
                <p className="text-[15px] text-gray-600 max-w-[600px] leading-relaxed">From first contact through sustainable competition — our mission drives everything we do.</p>
              </div>
              <div className="hidden lg:block">
                <div className="rounded-2xl overflow-hidden shadow-xl border border-[#C9A84C]/20">
                  <img src="https://images.pexels.com/photos/6763758/pexels-photo-6763758.jpeg?w=800&q=80" alt="Mission" className="w-full h-[350px] object-cover" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
            <div className="bg-white rounded-2xl p-10 shadow-lg border border-[#C9A84C]/10 mb-12">
              <h2 className="text-2xl font-bold text-[#0A2F1D] mb-6">Our Mission</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                The Jharkhand Para Boccia Association exists to build a complete Boccia ecosystem in Jharkhand — one that identifies athletes with physical disabilities, introduces them to the sport, provides world-class training and classification, and creates competitive pathways from community level all the way to the Paralympic Games.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We believe every person with a physical disability deserves access to competitive sport. Boccia is uniquely positioned to serve this purpose — it is one of the few Paralympic sports designed specifically for athletes with severe physical impairments, and it requires minimal equipment while offering extraordinary depth of competition.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#C9A84C]/10">
                <h3 className="text-xl font-bold text-[#0A2F1D] mb-4">Core Purpose</h3>
                <ul className="space-y-3">
                  {["Create awareness of Boccia across Jharkhand","Identify athletes with potential through school and hospital demonstrations","Provide coaching, classification, and competitive opportunities","Build a sustainable pathway from grassroots to national and international competition","Develop coaches, officials, and support personnel","Create partnerships with government, corporate, and community organisations"].map((item,i)=>(
                    <li key={i} className="flex items-start gap-3 text-gray-700"><span className="w-2 h-2 rounded-full bg-[#C9A84C] mt-2 flex-shrink-0"></span><span>{item}</span></li>
                  ))}
                </ul>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#C9A84C]/10">
                <h3 className="text-xl font-bold text-[#0A2F1D] mb-4">Our Commitment</h3>
                <ul className="space-y-3">
                  {["Athlete-centred development at every stage","Transparent selection and competition processes","Safe, accessible environments for all participants","Evidence-based coaching and classification","Strong governance and accountability","Inclusion — Boccia is for everyone, recreational and competitive"].map((item,i)=>(
                    <li key={i} className="flex items-start gap-3 text-gray-700"><span className="w-2 h-2 rounded-full bg-[#C9A84C] mt-2 flex-shrink-0"></span><span>{item}</span></li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-[#0A2F1D] rounded-2xl p-10 text-white text-center">
              <h2 className="text-2xl font-bold mb-4">From Awareness to Paralympics</h2>
              <p className="text-white/80 max-w-3xl mx-auto text-lg">Every champion starts with awareness. JPBA ensures that every person in Jharkhand with a physical disability has the opportunity to discover Boccia — and that every athlete who pursues the sport has a clear, supported pathway to excellence.</p>
            </div>
          </div>
            <div className="mt-8 rounded-xl overflow-hidden shadow-lg border border-[#C9A84C]/15 boccia-img-container">
              <img src="/boccia.png" alt="" className="w-full h-[200px] object-cover" />
            </div>
        </section>
      </main>
      <Footer />
      <RegistrationForm isOpen={showReg} onClose={() => setShowReg(false)} />
    </div>
  );
}
