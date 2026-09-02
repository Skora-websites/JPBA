"use client";
import { useState } from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import RegistrationForm from "@/app/components/RegistrationForm";

const events = [
  { num: "01", title: "Para Boccia Awareness Camp", type: "Awareness Camp", date: "7th June, 2026", venue: "Ranchi, Jharkhand", desc: "Introduction to Boccia for athletes, families, and support organisations across Ranchi." },
  { num: "02", title: "1st JPBA State Championship 2026", type: "State Championship", date: "August 2026", venue: "TBD, Jharkhand", desc: "The inaugural state-level Boccia championship featuring athletes from across Jharkhand." },
  { num: "03", title: "Jharkhand Boccia Federation Cup 2026", type: "Federation Cup", date: "October 2026", venue: "TBD, Jharkhand", desc: "Annual federation cup competition for state-ranked athletes." },
  { num: "04", title: "11th Boccia National Championship", type: "National Championship", date: "January 2027", venue: "TBD", desc: "India's premier national Boccia championship featuring athletes from all states." },
];

export default function EventsPage() {
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
                <p className="text-[#D4AF37] text-[11px] font-bold tracking-[0.3em] uppercase mb-3">BOCCIA JHARKHAND 2026</p>
                <h1 className="text-[36px] sm:text-[44px] font-bold text-[#1B5E20] leading-tight mb-4">Events &amp; Schedule</h1>
                <p className="text-[15px] text-gray-600 max-w-[600px] leading-relaxed">Competition calendar, training camps, and development events across Jharkhand.</p>
              </div>
              <div className="hidden lg:block">
                <div className="rounded-2xl overflow-hidden shadow-xl border border-[#D4AF37]/20">
                  <img src="https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=800&q=80" alt="Events" className="w-full h-[350px] object-cover" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-[900px] px-6">
            <div className="space-y-6">
              {events.map((e) => (
                <div key={e.num} className="flex gap-5 items-start bg-white rounded-2xl border border-[#D4AF37]/10 p-6 hover:shadow-lg hover:border-[#D4AF37]/30 transition-all">
                  <div className="h-14 w-14 rounded-xl bg-[#1B5E20] flex items-center justify-center text-[15px] font-bold text-white shrink-0">{e.num}</div>
                  <div className="flex-1 min-w-0">
                    <span className="inline-block rounded-md bg-[#1B5E20]/10 px-2.5 py-0.5 text-[10px] font-bold text-[#1B5E20] uppercase tracking-wide mb-2">{e.type}</span>
                    <h3 className="text-[16px] font-bold text-[#1B5E20] mb-1">{e.title}</h3>
                    <p className="text-[13px] text-gray-500 mb-2">{e.desc}</p>
                    <div className="flex items-center gap-3">
                      <span className="text-[12px] text-[#D4AF37] font-semibold">{e.date}</span>
                      <span className="text-[12px] text-gray-300">&middot;</span>
                      <span className="text-[12px] text-gray-500">{e.venue}</span>
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
