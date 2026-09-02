"use client";
import { useState } from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import RegistrationForm from "@/app/components/RegistrationForm";

const athletes = [
  { name: "Pooja Gupta", cls: "BC4", town: "Ranchi", highlight: "First Indian to win individual international Boccia medal", status: "National Team", medals: {g:0,s:1,b:2}, img: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&q=80" },
  { name: "Sachin Chamaria", cls: "BC3", town: "Hazaribagh", highlight: "Gold medalist at World Boccia Challenger", status: "National Team", medals: {g:1,s:0,b:1}, img: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=400&q=80" },
  { name: "Jatin Kumar Kushwaha", cls: "BC4", town: "Dhanbad", highlight: "Silver in BC4 Pairs + Bronze Individual", status: "National Team", medals: {g:0,s:1,b:1}, img: "https://images.unsplash.com/photo-1461896836934-bd45ba8fcf9b?w=400&q=80" },
  { name: "Ajeya Raj", cls: "BC3", town: "Bokaro", highlight: "Bronze medal at World Boccia Challenger", status: "National Team", medals: {g:0,s:0,b:1}, img: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=400&q=80" },
  { name: "Anjali Thakur", cls: "BC2", town: "Jamshedpur", highlight: "Multiple national championship participant", status: "State Team", medals: {g:0,s:0,b:0}, img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&q=80" },
  { name: "Vijay Kumar", cls: "BC1", town: "Dumka", highlight: "Rising star in para boccia", status: "State Team", medals: {g:0,s:0,b:0}, img: "https://images.unsplash.com/photo-1530549387789-4c1017266635?w=400&q=80" },
];

export default function AthletesPage() {
  const [sel, setSel] = useState<number | null>(null);
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
                <p className="text-[#D4AF37] text-[11px] font-bold tracking-[0.3em] uppercase mb-3">OUR STARS</p>
                <h1 className="text-[36px] sm:text-[44px] font-bold text-[#1B5E20] leading-tight mb-4">Meet the Athletes</h1>
                <p className="text-[15px] text-gray-600 max-w-[600px] leading-relaxed">Representing Jharkhand and India with Precision, Passion, and Pride.</p>
              </div>
              <div className="hidden lg:block">
                <div className="rounded-2xl overflow-hidden shadow-xl border border-[#D4AF37]/20">
                  <img src="https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&q=80" alt="Athletes" className="w-full h-[350px] object-cover" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {athletes.map((a, i) => (
                <div key={a.name} onClick={() => setSel(sel === i ? null : i)} className={"rounded-2xl bg-white border overflow-hidden cursor-pointer transition-all hover:shadow-lg hover:border-transparent " + (sel === i ? "border-[#D4AF37] shadow-lg" : "border-[#D4AF37]/10")}>
                  <div className="h-48 overflow-hidden">
                    <img src={a.img} alt={a.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-[16px] font-bold text-[#1B5E20]">{a.name}</h3>
                        <p className="text-[12px] text-gray-400">{a.town}</p>
                      </div>
                      <span className="rounded-lg bg-[#D4AF37]/15 px-2.5 py-1 text-[11px] font-bold text-[#8B6914]">{a.cls}</span>
                    </div>
                    <p className="text-[13px] text-gray-500 mb-3">{a.highlight}</p>
                    {sel === i && (
                      <div className="pt-3 border-t border-[#F3F4F6]">
                        <span className={"inline-block rounded-lg px-2.5 py-0.5 text-[10px] font-bold " + (a.status === "National Team" ? "bg-[#1B5E20]/10 text-[#1B5E20]" : "bg-[#D4AF37]/15 text-[#8B6914]")}>{a.status}</span>
                        <div className="flex gap-4 mt-2">
                          {a.medals.g > 0 && <span className="text-[11px] text-[#D4AF37] font-semibold">Gold: {a.medals.g}</span>}
                          {a.medals.s > 0 && <span className="text-[11px] text-gray-400 font-semibold">Silver: {a.medals.s}</span>}
                          {a.medals.b > 0 && <span className="text-[11px] text-[#8B6914] font-semibold">Bronze: {a.medals.b}</span>}
                        </div>
                      </div>
                    )}
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
