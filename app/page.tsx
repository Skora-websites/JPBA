"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

function useCountUp(end: number, duration = 2000, start = 0) {
  const [val, setVal] = useState(start);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setStarted(true); }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  useEffect(() => {
    if (!started) return;
    let raf: number;
    const t0 = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - t0) / duration, 1);
      setVal(Math.floor(start + (end - start) * p));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [started, end, duration, start]);
  return { val, ref };
}

function StatCard({ end, suffix, label }: { end: number; suffix: string; label: string }) {
  const { val, ref } = useCountUp(end);
  return (
    <div ref={ref} className="text-center px-6 py-6">
      <p className="text-[36px] sm:text-[44px] font-bold leading-none text-[#1B5E20]">{val.toLocaleString()}<span>{suffix}</span></p>
      <p className="text-[11px] text-gray-400 mt-2 uppercase tracking-wider font-medium">{label}</p>
    </div>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F5F5DC]">
      <Navbar />

      {/* HERO */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden" style={{ background: "linear-gradient(135deg, #FFF5EB 0%, #FFFFFF 50%, #F0FFF0 100%)" }}>
        <div className="mx-auto max-w-[1400px] w-full px-6 lg:px-10 pt-[100px] pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col items-start">
              <p className="text-[#D4AF37] text-[11px] font-bold tracking-[0.3em] uppercase mb-5">JHARKHAND PARA BOCCIA ASSOCIATION</p>
              <h1 className="text-[40px] sm:text-[52px] lg:text-[60px] font-bold leading-[1.08] text-[#1B5E20] mb-6">
                BOCCIA<span className="text-[#D4AF37]">.</span><br /><span className="text-[#D4AF37]">Precision.</span> Strategy.<br />Inclusion.
              </h1>
              <p className="text-[15px] text-gray-600 leading-relaxed mb-4 max-w-[520px]">
                Empowering athletes with severe physical disabilities through precision sport, competition, and international representation across Jharkhand.
              </p>
              <p className="text-[13px] text-gray-400 leading-relaxed mb-10 max-w-[520px]">
                Affiliated with Boccia Sports Federation of India (BSFI). The official governing body for Boccia in Jharkhand.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/register" className="rounded-full bg-[#1B5E20] px-8 py-3.5 text-[13px] font-bold text-white tracking-wide shadow-lg shadow-[#1B5E20]/25 hover:bg-[#154a19] transition-all active:scale-[0.97]">REGISTER NOW</Link>
                <Link href="/about" className="rounded-full border-2 border-[#1B5E20] px-8 py-3.5 text-[13px] font-bold text-[#1B5E20] hover:bg-[#1B5E20] hover:text-white transition-all">ABOUT JPBA</Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-[#D4AF37]/20">
                <img src="https://images.unsplash.com/photo-1564769662533-4f00a87b4056?w=800&q=80" alt="Boccia athlete in competition" className="w-full h-[450px] object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="bg-white border-y border-[#D4AF37]/20">
        <div className="jpba-stripe" />
        <div className="mx-auto max-w-[1400px] grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
          <StatCard end={15} suffix="+" label="Districts" />
          <StatCard end={27} suffix="+" label="Active Athletes" />
          <StatCard end={4} suffix="" label="Sport Classes" />
          <StatCard end={240} suffix="+" label="Events Nationwide" />
        </div>
        <div className="jpba-stripe" />
      </section>

      {/* ABOUT THE SPORT */}
      <section className="py-20 bg-[#F5F5DC]">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#D4AF37] text-[11px] font-bold tracking-[0.3em] uppercase mb-4">ABOUT THE SPORT</p>
              <h2 className="text-[32px] sm:text-[40px] font-bold text-[#1B5E20] leading-tight mb-6">Boccia Is a Paralympic<br />Precision Sport</h2>
              <p className="text-[15px] text-gray-600 leading-relaxed mb-4">A Paralympic precision sport designed specifically for athletes with severe physical disabilities affecting motor skills. Recognized as one of the most inclusive Paralympic sports worldwide.</p>
              <p className="text-[14px] text-gray-400 leading-relaxed mb-8">Played indoors on a flat court, Boccia involves athletes throwing, kicking, or using an assistive ramp to propel leather balls as close as possible to a target ball known as the jack.</p>
              <Link href="/boccia" className="inline-flex items-center gap-2 text-[13px] font-bold text-[#D4AF37] hover:text-[#1B5E20] transition-colors">Learn More About Boccia <span>&rarr;</span></Link>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl border border-[#D4AF37]/20">
                <img src="https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800&q=80" alt="Boccia sport" className="w-full h-[400px] object-cover" />
              </div>
              <div className="absolute -bottom-6 -left-6 rounded-xl bg-[#1B5E20] px-6 py-4 shadow-xl">
                <p className="text-[28px] font-bold text-white">70+</p>
                <p className="text-[10px] text-white/80 uppercase tracking-wider">Countries Worldwide</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT JPBA DOES */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="text-center mb-16">
            <p className="text-[#D4AF37] text-[11px] font-bold tracking-[0.3em] uppercase mb-4">WHAT WE DO</p>
            <h2 className="text-[32px] sm:text-[40px] font-bold text-[#1B5E20]">JPBA ACTION PATHWAY</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[{ num: "01", title: "Discover", desc: "District demonstrations through schools, hospitals, rehabilitation centres and disability networks.", href: "/about/action-pathway", color: "forest" },
              { num: "02", title: "Equip", desc: "Balls, training targets, ramps and accessible venue partnerships for athletes.", href: "/court", color: "gold" },
              { num: "03", title: "Develop", desc: "Athlete-centred coaching, referee education and classification literacy programs.", href: "/development", color: "dark-green" },
              { num: "04", title: "Compete", desc: "State calendar, data, safeguarding and transparent selection for competitions.", href: "/competition", color: "forest" },
              { num: "05", title: "Connect", desc: "BSFI, government, CSR, health, education and media partnerships.", href: "/about", color: "gold" },
              { num: "06", title: "Classify", desc: "Official classification pathway from recreational play to BC1-BC4 competitive categories.", href: "/classification", color: "dark-green" }].map((item) => (
              <Link key={item.num} href={item.href} className="group rounded-xl bg-[#F5F5DC] border border-[#D4AF37]/20 p-6 transition-all hover:shadow-lg hover:border-gold hover:-translate-y-1">
                <span className={"text-[13px] font-bold text-" + item.color}>{item.num}</span>
                <h3 className="text-[16px] font-bold text-[#1B5E20] mt-3 mb-2 group-hover:text-[#D4AF37] transition-colors">{item.title}</h3>
                <p className="text-[13px] text-gray-400 leading-relaxed">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* EVENTS PREVIEW */}
      <section className="py-20 bg-off-white">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-[#D4AF37] text-[11px] font-bold tracking-[0.3em] uppercase mb-4">UPCOMING</p>
              <h2 className="text-[32px] sm:text-[40px] font-bold text-[#1B5E20]">Events & Schedule</h2>
            </div>
            <Link href="/events" className="hidden sm:inline-flex items-center gap-2 text-[13px] font-bold text-[#D4AF37] hover:text-[#1B5E20] transition-colors">View All Events <span>&rarr;</span></Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[{ num: "01", title: "Para Boccia Awareness Camp", date: "7th June, 2026", venue: "Ranchi", type: "Awareness" },
              { num: "02", title: "1st JPBA State Championship", date: "August 2026", venue: "TBD", type: "Championship" },
              { num: "03", title: "Boccia Federation Cup 2026", date: "October 2026", venue: "TBD", type: "Federation" },
              { num: "04", title: "11th Boccia National Championship", date: "January 2027", venue: "TBD", type: "National" }].map((e) => (
              <Link key={e.num} href="/events" className="flex items-center gap-5 rounded-xl bg-white border border-[#D4AF37]/20 p-5 hover:shadow-lg hover:border-gold transition-all group">
                <div className="h-12 w-12 rounded-xl bg-[#1B5E20] flex items-center justify-center text-[15px] font-bold text-white shrink-0">{e.num}</div>
                <div className="flex-1 min-w-0">
                  <span className="inline-block rounded-md bg-[#1B5E20]/10 px-2 py-0.5 text-[10px] font-bold text-[#1B5E20] mb-1.5 uppercase tracking-wide">{e.type}</span>
                  <h3 className="text-[14px] font-bold text-[#1B5E20] truncate group-hover:text-[#D4AF37] transition-colors">{e.title}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-[12px] text-gray-400">{e.date}</span>
                    <span className="text-[12px] text-border">&middot;</span>
                    <span className="text-[12px] text-gray-400">{e.venue}</span>
                  </div>
                </div>
                <span className="text-border group-hover:text-[#D4AF37] transition-colors">&rarr;</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY PREVIEW */}
      <section className="py-20 bg-[#F5F5DC]">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-[#D4AF37] text-[11px] font-bold tracking-[0.3em] uppercase mb-4">MOMENTS IN FOCUS</p>
              <h2 className="text-[32px] sm:text-[40px] font-bold text-[#1B5E20]">Photo Gallery</h2>
            </div>
            <Link href="/gallery" className="hidden sm:inline-flex items-center gap-2 text-[13px] font-bold text-[#D4AF37] hover:text-[#1B5E20] transition-colors">View Full Gallery <span>&rarr;</span></Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {["https://images.unsplash.com/photo-1564769662533-4f00a87b4056?w=500&q=75","https://images.unsplash.com/photo-1517649763962-0c623066013b?w=500&q=75","https://images.unsplash.com/photo-1559028012-481c04fa702d?w=500&q=75","https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=500&q=75"].map((url, i) => (
              <Link key={i} href="/gallery" className="group relative aspect-square rounded-xl overflow-hidden border border-[#D4AF37]/20 shadow-sm hover:shadow-lg transition-all">
                <img src={url} alt={"Gallery " + (i + 1)} className="w-full h-full object-cover transition-transform group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/0 to-black/0 group-hover:from-black/30 transition-all" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-20 bg-[#1B5E20]">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 text-center">
          <p className="text-[#D4AF37] text-[11px] font-bold tracking-[0.3em] uppercase mb-4">JOIN US TODAY</p>
          <h2 className="text-[32px] sm:text-[40px] font-bold text-white mb-4">Ready to Compete?</h2>
          <p className="text-[15px] text-white/85 max-w-[500px] mx-auto mb-8">Register as a JPBA athlete and begin your journey in Paralympic Boccia. Open to all eligible athletes across Jharkhand.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/register" className="rounded-full bg-[#D4AF37] px-8 py-3.5 text-[13px] font-bold text-[#1B5E20] shadow-lg hover:bg-[#b8962c] transition-all">REGISTER NOW</Link>
            <Link href="/contact" className="rounded-full border-2 border-white px-8 py-3.5 text-[13px] font-bold text-white hover:bg-white/10 transition-all">CONTACT US</Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
