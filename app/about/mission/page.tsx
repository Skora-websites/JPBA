"use client";
import { useState } from "react";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import RegistrationForm from "@/app/components/RegistrationForm";
import PageHero from "@/app/components/PageHero";
import { PAGE_HERO } from "@/lib/images";

export default function MissionPage() {
  const [showReg, setShowReg] = useState(false);
  return (
    <div className="flex flex-col min-h-screen bg-[#FDF8EF]">
      <Navbar onRegisterClick={() => setShowReg(true)} />
      <main className="flex-1">
                <PageHero
          image={PAGE_HERO.aboutMission}
          imageAlt="Athletes and families at a JPBA district awareness camp"
          eyebrow="ABOUT JPBA"
          title={"Mission & Purpose"}
          description="From first contact through sustainable competition — our mission drives everything we do."
          breadcrumb={[{"label": "About", "href": "/about"}, {"label": "Mission & Purpose"}]}
          size={"lg"}
          reverse
        />

        <section className="py-16">
          <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
            <div className="bg-white rounded-2xl p-10 shadow-lg border border-[#C9A84C]/10 mb-12">
              <h2 className="text-2xl font-bold text-[#0A2F1D] mb-6">Our Mission</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                The Jharkhand Para Boccia Association exists to build a complete Boccia ecosystem in Jharkhand â€” one that identifies athletes with physical disabilities, introduces them to the sport, provides world-class training and classification, and creates competitive pathways from community level all the way to the Paralympic Games.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We believe every person with a physical disability deserves access to competitive sport. Boccia is uniquely positioned to serve this purpose â€” it is one of the few Paralympic sports designed specifically for athletes with severe physical impairments, and it requires minimal equipment while offering extraordinary depth of competition.
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
                  {["Athlete-centred development at every stage","Transparent selection and competition processes","Safe, accessible environments for all participants","Evidence-based coaching and classification","Strong governance and accountability","Inclusion â€” Boccia is for everyone, recreational and competitive"].map((item,i)=>(
                    <li key={i} className="flex items-start gap-3 text-gray-700"><span className="w-2 h-2 rounded-full bg-[#C9A84C] mt-2 flex-shrink-0"></span><span>{item}</span></li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-[#0A2F1D] rounded-2xl p-10 text-white text-center">
              <h2 className="text-2xl font-bold mb-4">From Awareness to Paralympics</h2>
              <p className="text-white/80 max-w-3xl mx-auto text-lg">Every champion starts with awareness. JPBA ensures that every person in Jharkhand with a physical disability has the opportunity to discover Boccia â€” and that every athlete who pursues the sport has a clear, supported pathway to excellence.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <RegistrationForm isOpen={showReg} onClose={() => setShowReg(false)} />
    </div>
  );
}
