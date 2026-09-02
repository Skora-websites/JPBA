"use client";
import { useState } from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import RegistrationForm from "@/app/components/RegistrationForm";

const categories = ["All", "Events", "Training", "Team"];
const images = [
  { url: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80", title: "Awareness Camp", cat: "Events" },
  { url: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=600&q=80", title: "Competition Day", cat: "Events" },
  { url: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&q=80", title: "Training Session", cat: "Training" },
  { url: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=600&q=80", title: "Team Workshop", cat: "Team" },
  { url: "https://images.unsplash.com/photo-1461896836934-bd45ba8fcf9b?w=600&q=80", title: "State Championship", cat: "Events" },
  { url: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80", title: "Coaching Camp", cat: "Training" },
  { url: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=600&q=80", title: "Group Photo", cat: "Team" },
  { url: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=600&q=80", title: "District Meet", cat: "Events" },
  { url: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&q=80", title: "Team Spirit", cat: "Team" },
  { url: "https://images.unsplash.com/photo-1530549387789-4c1017266635?w=600&q=80", title: "Athlete Focus", cat: "Training" },
  { url: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=600&q=80", title: "Practice Session", cat: "Training" },
  { url: "https://images.unsplash.com/photo-1564769662533-4f00a87b4056?w=600&q=80", title: "Medal Ceremony", cat: "Events" },
];

export default function GalleryPage() {
  const [cat, setCat] = useState("All");
  const [selImg, setSelImg] = useState<string | null>(null);
  const [showReg, setShowReg] = useState(false);
  const filtered = cat === "All" ? images : images.filter(i => i.cat === cat);
  return (
    <div className="flex flex-col min-h-screen bg-[#F5F5DC]">
      <Navbar onRegisterClick={() => setShowReg(true)} />
      <main className="flex-1">
        <section className="relative pt-[120px] pb-16 min-h-[320px] border-b border-[#D4AF37]/20" style={{background:"linear-gradient(135deg, #F5F5DC 0%, #FFFFFF 50%, #E8F5E9 100%)"}}>
          <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-16 h-1 bg-[#D4AF37] rounded-full mb-6" />
                <p className="text-[#D4AF37] text-[11px] font-bold tracking-[0.3em] uppercase mb-3">MOMENTS IN FOCUS</p>
                <h1 className="text-[36px] sm:text-[44px] font-bold text-[#1B5E20] leading-tight mb-4">Photo Gallery</h1>
                <p className="text-[15px] text-gray-600">{images.length} Photos from events, training and team activities</p>
              </div>
              <div className="hidden lg:block">
                <div className="rounded-2xl overflow-hidden shadow-xl border border-[#D4AF37]/20">
                  <img src="https://images.unsplash.com/photo-1530549387789-4c1017266635?w=800&q=80" alt="Gallery" className="w-full h-[350px] object-cover" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
            <div className="flex flex-wrap gap-2 mb-8">
              {categories.map(c => (
                <button key={c} onClick={() => setCat(c)} className={"px-5 py-2 rounded-full text-[12px] font-bold tracking-wide border transition-colors " + (cat === c ? "bg-[#1B5E20] text-white border-[#1B5E20]" : "bg-white text-gray-500 border-[#D4AF37]/20 hover:border-[#1B5E20] hover:text-[#1B5E20]")}>{c}</button>
              ))}
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {filtered.map((img, i) => (
                <div key={i} onClick={() => setSelImg(img.url)} className="group relative aspect-square rounded-xl overflow-hidden border border-[#D4AF37]/10 cursor-pointer hover:shadow-lg transition-all">
                  <img src={img.url} alt={img.title} className="w-full h-full object-cover transition-transform group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                    <div><p className="text-[12px] font-bold text-white">{img.title}</p><span className="text-[10px] text-[#D4AF37] font-bold uppercase">{img.cat}</span></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      {selImg && (
        <div className="fixed inset-0 z-[200] bg-black/80 flex items-center justify-center p-4" onClick={() => setSelImg(null)}>
          <button className="absolute top-6 right-6 text-white text-3xl z-10 hover:text-[#D4AF37] transition-colors">&times;</button>
          <img src={selImg} alt="Gallery" className="max-w-full max-h-[90vh] rounded-xl shadow-2xl" />
        </div>
      )}
      <Footer />
      <RegistrationForm isOpen={showReg} onClose={() => setShowReg(false)} />
    </div>
  );
}
