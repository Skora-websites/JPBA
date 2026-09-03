"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import ScrollReveal from "@/app/components/ScrollReveal";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeTab, setActiveTab] = useState("overview");
  const [showStickyCTA, setShowStickyCTA] = useState(false);

  const slides = [
    "https://images.pexels.com/photos/6763758/pexels-photo-6763758.jpeg?w=1920&q=80",
    "https://images.pexels.com/photos/10517000/pexels-photo-10517000.jpeg?w=1920&q=80",
    "https://images.pexels.com/photos/38149196/pexels-photo-38149196.jpeg?w=1920&q=80",
  ]

  const words =
    "\u201c I didn\u2019t know there was a sport for me until I found Boccia \u201d".split(
      " "
    );

  // Slide interval
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const heroRef = useRef<HTMLElement>(null);
  const heroOrbsRef = useRef<HTMLDivElement>(null);

  // Hero GSAP animation
  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.3 });
    tl.to(".hero-anim-word", {
      opacity: 1,
      y: 0,
      stagger: 0.12,
      duration: 0.5,
      ease: "power2.out",
    });
    tl.to(
      ".animated-fade-item",
      {
        opacity: 1,
        y: 0,
        stagger: 0.15,
        duration: 0.6,
        ease: "power2.out",
      },
      "-=0.3"
    );
  }, []);

  // GSAP ScrollTrigger parallax effects
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero parallax — orbs move slower than scroll
      if (heroOrbsRef.current) {
        gsap.to(heroOrbsRef.current, {
          y: 120,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1.5,
          },
        });
      }

      // Hero text parallax — content shifts up slightly on scroll
      const heroContent = heroRef.current?.querySelector(".hero-content");
      if (heroContent) {
        gsap.to(heroContent, {
          y: -60,
          opacity: 0.3,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
        });
      }

      // Section headings — parallax float on scroll
      gsap.utils.toArray<HTMLElement>(".gsap-parallax-heading").forEach((el) => {
        gsap.fromTo(el,
          { y: 40 },
          {
            y: -20,
            ease: "none",
            scrollTrigger: {
              trigger: el,
              start: "top 90%",
              end: "bottom 10%",
              scrub: 2,
            },
          }
        );
      });

      // Gradient orbs — subtle parallax movement on scroll
      gsap.utils.toArray<HTMLElement>(".gsap-parallax-orb").forEach((el, i) => {
        gsap.to(el, {
          y: (i % 2 === 0 ? -80 : 80),
          x: (i % 3 === 0 ? 30 : -20),
          ease: "none",
          scrollTrigger: {
            trigger: el.closest("section") || el,
            start: "top bottom",
            end: "bottom top",
            scrub: 2 + i * 0.5,
          },
        });
      });

      // Counter animation for stats
      gsap.utils.toArray<HTMLElement>(".gsap-counter").forEach((el) => {
        const target = el;
        ScrollTrigger.create({
          trigger: el,
          start: "top 85%",
          once: true,
          onEnter: () => {
            gsap.fromTo(target,
              { scale: 0.8, opacity: 0 },
              { scale: 1, opacity: 1, duration: 0.6, ease: "back.out(1.7)" }
            );
          },
        });
      });

      // Boccia images — parallax drift on scroll
      gsap.utils.toArray<HTMLElement>(".boccia-parallax").forEach((el) => {
        gsap.to(el.querySelector("img"), {
          y: -30,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5,
          },
        });
      });
    });

    return () => ctx.revert();
  }, []);

  // Smooth scroll to hash
  useEffect(() => {
    const scrollToHash = () => {
      const hash = window.location.hash;
      if (!hash) return;
      const id = hash.slice(1);
      const el = document.getElementById(id);
      if (el) {
        setTimeout(
          () => el.scrollIntoView({ behavior: "smooth", block: "start" }),
          100
        );
      }
    };
    scrollToHash();
    window.addEventListener("hashchange", scrollToHash);
    return () => window.removeEventListener("hashchange", scrollToHash);
  }, []);

  // Sticky Register CTA
  useEffect(() => {
    const handleScroll = () => setShowStickyCTA(window.scrollY > 600);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="opacity-100">
        <Navbar />

        {/* ═══════════════════════════════════════════
             HERO SLIDESHOW — Enhanced with gradient mesh & orbs
        ════════════════════════════════════════════ */}
        <section ref={heroRef} className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-[#0A2F1D]" style={{paddingTop: "190px", paddingBottom: "40px"}}>
          {/* Background Slides */}
          {slides.map((src, index) => (
            <div
              key={index}
              className={`absolute inset-0 w-full h-full transition-all duration-[2000ms] ease-in-out ${
                currentSlide === index
                  ? "opacity-100 z-10"
                  : "opacity-0 z-[1]"
              }`}
            >
              <div className="absolute inset-0 bg-black/60 z-10" />
              <img
                src={src}
                alt="Boccia"
                className={`w-full h-full object-cover transition-transform duration-[8000ms] ease-in-out ${
                  currentSlide === index ? "scale-105" : "scale-100"
                }`}
              />
            </div>
          ))}

          {/* Gradient Mesh Overlay */}
          <div className="absolute inset-0 z-15 bg-mesh-gradient-dark opacity-40 pointer-events-none animate-gradient-shift" />

          {/* Floating Gradient Orbs — with GSAP parallax */}
          <div ref={heroOrbsRef} className="pointer-events-none z-15">
            <div className="gradient-orb gradient-orb-gold w-[500px] h-[500px] -top-40 -left-40 animate-float gsap-parallax-orb" />
            <div className="gradient-orb gradient-orb-green-light w-[400px] h-[400px] -bottom-32 -right-32 animate-float-delayed gsap-parallax-orb" />
            <div className="gradient-orb gradient-orb-white w-[300px] h-[300px] top-1/3 right-1/4 animate-float-slow opacity-60 gsap-parallax-orb" />
          </div>

          {/* Hero Content */}
          <div className="hero-content relative z-20 text-center px-4 max-w-4xl mx-auto flex flex-col items-center mt-20">
            <h1 className="text-[32px] sm:text-[48px] md:text-[64px] font-bold text-white leading-tight mb-6 flex flex-wrap justify-center gap-x-3 gap-y-1">
              {words.map((word, i) => (
                <span
                  key={i}
                  className="hero-anim-word inline-block opacity-0 translate-y-4"
                  style={{
                    color:
                      word === "\u201c" || word === "\u201d"
                        ? "#C9A84C"
                        : "white",
                  }}
                >
                  {word}
                </span>
              ))}
            </h1>

            {/* Animated Gold Accent Line */}
            <div className="animated-fade-item relative w-32 h-[2px] mb-8 opacity-0 translate-y-4 overflow-hidden">
              <div className="absolute inset-0 bg-[#C9A84C]" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent animate-shimmer" />
            </div>

            <p className="animated-fade-item text-[16px] md:text-[20px] text-white/90 mb-10 opacity-0 translate-y-4 max-w-2xl font-light">
              Boccia is a Paralympic precision sport for athletes with severe
              physical disabilities.
              <br className="hidden md:block" />
              JPBA develops Boccia across Jharkhand through athlete
              registration, coaching, and competitions.
            </p>

            <div className="animated-fade-item flex flex-wrap justify-center gap-4 opacity-0 translate-y-4">
              <Link
                href="/register"
                className="btn bg-[#C9A84C] text-[#0A2F1D] px-8 py-3.5 rounded font-bold uppercase tracking-wider hover:bg-white transition-colors shadow-lg shadow-[#C9A84C]/20"
              >
                Player Registration &rarr;
              </Link>
              <Link
                href="/about/about-boccia"
                className="btn border border-[#C9A84C] text-[#C9A84C] px-8 py-3.5 rounded font-bold uppercase tracking-wider hover:bg-[#C9A84C] hover:text-[#0A2F1D] transition-colors"
              >
                Explore Boccia
              </Link>
            </div>
          </div>

          {/* Decorative Dots */}
          <div className="absolute bottom-20 left-10 z-20 opacity-30 pointer-events-none">
            <div className="flex gap-2">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] animate-pulse-glow"
                  style={{ animationDelay: `${i * 0.5}s` }}
                />
              ))}
            </div>
          </div>
          <div className="absolute top-1/4 right-10 z-20 opacity-20 pointer-events-none">
            <div className="flex flex-col gap-2">
              {[0, 1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-1 h-1 rounded-full bg-white"
                  style={{ opacity: 0.3 + i * 0.15 }}
                />
              ))}
            </div>
          </div>

          {/* Slide Dots */}
          <div className="absolute bottom-10 left-0 w-full flex justify-center gap-3 z-30">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === idx
                    ? "bg-[#C9A84C] scale-110 shadow-lg shadow-[#C9A84C]/40"
                    : "bg-white/40 hover:bg-white"
                }`}
                aria-label={`Slide ${idx + 1}`}
              />
            ))}
          </div>
        </section>

        {/* ═══════════════════════════════════════════
             SECTION 2: What is Boccia? — Enhanced with gradient orbs & texture
        ════════════════════════════════════════════ */}
        <section className="py-24 bg-[#FDF8EF] relative overflow-hidden">
          {/* Background decorations */}
          <div className="absolute inset-0 bg-texture-diagonal pointer-events-none" />
          <div className="gradient-orb gradient-orb-gold w-[600px] h-[600px] -top-60 -right-60 pointer-events-none opacity-60 gsap-parallax-orb" />
          <div className="gradient-orb gradient-orb-green-light w-[400px] h-[400px] bottom-0 -left-40 pointer-events-none opacity-40 gsap-parallax-orb" />

          <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Interactive Tabs */}
              <ScrollReveal variant="slide-left">
                <div>
                  <span className="text-[#C9A84C] font-bold tracking-[0.25em] text-[12px] uppercase">
                    The Sport
                  </span>
                  <h2 className="text-[40px] font-bold text-[#0A2F1D] mb-8 leading-tight gsap-parallax-heading">
                    Overview &amp; Origins
                  </h2>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {[
                      { id: "overview", label: "Overview" },
                      { id: "history", label: "History" },
                      { id: "reach", label: "Global Reach" },
                      { id: "india", label: "History in India" },
                    ].map((tab) => (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`px-5 py-2.5 rounded text-[14px] font-semibold transition-all duration-300 ${
                          activeTab === tab.id
                            ? "bg-[#0A2F1D] text-white shadow-lg shadow-[#0A2F1D]/20"
                            : "bg-white text-[#0A2F1D] border border-gray-200 hover:border-[#C9A84C] hover:shadow-md"
                        }`}
                      >
                        {tab.label}
                      </button>
                    ))}
                  </div>

                  <div className="min-h-[220px]">
                    {activeTab === "overview" && (
                      <div className="animate-fade-in">
                        <h4 className="text-[20px] font-bold text-[#0A2F1D] mb-4">
                          Precision. Strategy. Inclusion.
                        </h4>
                        <p className="text-gray-700 text-[16px] leading-relaxed mb-4">
                          Boccia is a precision ball sport designed specifically
                          for athletes with severe physical disabilities
                          affecting motor skills. Recognized as one of the most
                          inclusive Paralympic sports, Boccia provides
                          individuals with high support needs an opportunity to
                          compete at local, national, and international levels.
                        </p>
                        <p className="text-gray-700 text-[16px] leading-relaxed">
                          Played indoors on a flat court, Boccia involves
                          athletes throwing, kicking, or using an assistive
                          ramp to propel leather balls as close as possible to
                          a target ball known as the &quot;jack.&quot;
                        </p>
                      </div>
                    )}
                    {activeTab === "history" && (
                      <div className="animate-fade-in">
                        <h4 className="text-[20px] font-bold text-[#0A2F1D] mb-4">
                          A Rich Paralympic Legacy
                        </h4>
                        <p className="text-gray-700 text-[16px] leading-relaxed mb-4">
                          Boccia originated in Europe during the 1970s as a
                          competitive sport for individuals with cerebral palsy.
                          Over time, it evolved to include athletes with a wider
                          range of severe physical disabilities.
                        </p>
                        <div className="boccia-parallax boccia-img-container  overflow-hidden border border-[#C9A84C]/20 shadow-lg">
                          <img src="/boccia.png" alt="Boccia balls on court" className="w-full h-[180px] object-cover boccia-drift" />
                        </div>
                        <p className="text-gray-700 text-[16px] leading-relaxed">
                          The sport made its Paralympic debut at the 1984
                          Paralympic Games and has since grown into a globally
                          recognized discipline governed internationally by World
                          Boccia.
                        </p>
                      </div>
                    )}
                    {activeTab === "reach" && (
                      <div className="animate-fade-in">
                        <h4 className="text-[20px] font-bold text-[#0A2F1D] mb-4">
                          Expanding Boundaries Worldwide
                        </h4>
                        <p className="text-gray-700 text-[16px] leading-relaxed mb-4">
                          Today, Boccia is played in more than 70 countries and
                          continues to expand its reach through grassroots
                          development programs, national championships, and
                          international competitions.
                        </p>
                        <p className="text-gray-700 text-[16px] leading-relaxed">
                          As a key component of the Paralympic movement, World
                          Boccia works to bring this highly accessible sport to
                          new regions, establishing training centers, certifying
                          coaches, and supporting local organizations.
                        </p>
                      </div>
                    )}
                    {activeTab === "india" && (
                      <div className="animate-fade-in">
                        <h4 className="text-[20px] font-bold text-[#0A2F1D] mb-4">
                          History of Boccia in India
                        </h4>
                        <p className="text-gray-700 text-[16px] leading-relaxed mb-4">
                          The history of Boccia in India began in 2016, when Mr.
                          Jaspreet Singh Dhaliwal introduced and established the
                          sport in the country.
                        </p>
                        <p className="text-gray-700 text-[16px] leading-relaxed">
                          India&apos;s international journey started with the 2018
                          Asian Para Games in Jakarta and the 2019 Fazza Cup in
                          Dubai. Since then, Indian athletes have steadily risen
                          on the world stage.
                        </p>
                        <div className="boccia-parallax boccia-img-container  overflow-hidden border border-[#C9A84C]/20 shadow-lg">
                          <img src="/boccia1.png" alt="Boccia game in action" className="w-full h-[180px] object-cover boccia-drift-reverse" />
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="mt-8">
                    <Link
                      href="/about/about-boccia"
                      className="text-[14px] font-bold text-[#C9A84C] hover:text-[#0A2F1D] transition-colors border-b-2 border-[#C9A84C] pb-1"
                    >
                      Learn About Boccia &rarr;
                    </Link>
                  </div>
                </div>
              </ScrollReveal>

              {/* Video Player */}
              <ScrollReveal variant="slide-right">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-black aspect-video group cursor-pointer border-4 border-white">
                  <img
                    src="https://img.youtube.com/vi/itPWqcx7xBg/hqdefault.jpg"
                    alt="Video thumbnail"
                    className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-500"
                  />
                  {/* Gradient overlay on video */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <div className="w-16 h-16 bg-[#C9A84C] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg shadow-[#C9A84C]/30">
                      <svg
                        className="w-8 h-8 text-[#0A2F1D] ml-1"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                    <span className="mt-4 bg-black/60 text-white px-4 py-1.5 rounded-full text-[12px] font-semibold tracking-wide backdrop-blur-sm">
                      🎥 Official Introduction to Para Boccia
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
             SECTION 3: Who Can Participate? — Enhanced with textures & glow cards
        ════════════════════════════════════════════ */}
        <section className="py-24 bg-mesh-gradient-dark text-center relative overflow-hidden">
          {/* Texture & orbs */}
          <div className="absolute inset-0 bg-texture-dots-dark pointer-events-none" />
          <div className="absolute inset-0 bg-noise pointer-events-none" />
          <div className="gradient-orb gradient-orb-gold w-[500px] h-[500px] -top-40 right-1/4 pointer-events-none animate-float-slow gsap-parallax-orb" />
          <div className="gradient-orb gradient-orb-white w-[350px] h-[350px] bottom-0 -left-20 pointer-events-none animate-float-delayed opacity-40 gsap-parallax-orb" />

          <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative z-10">
            <ScrollReveal variant="fade-up">
              <span className="text-[#C9A84C] font-bold tracking-[0.25em] text-[12px] uppercase">
                ATHLETE ELIGIBILITY
              </span>
              <h2 className="text-[36px] sm:text-[44px] font-bold text-white mt-2 mb-6 gsap-parallax-heading">
                Who Can Participate?
              </h2>
              <p className="text-white/80 text-[16px] md:text-[18px] max-w-4xl mx-auto mb-16 leading-relaxed">
                To participate in competitive boccia at an international level,
                an athlete must meet three exact requirements governed by the{" "}
                <a
                  href="#"
                  className="text-[#C9A84C] hover:underline"
                >
                  International Paralympic Committee (IPC)
                </a>{" "}
                and{" "}
                <a
                  href="#"
                  className="text-[#C9A84C] hover:underline"
                >
                  World Boccia
                </a>
                . The player must have an eligible Underlying Health Condition,
                a specific Impairment Type, and meet the Minimum Impairment
                Criteria.
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1 */}
              <ScrollReveal variant="fade-up" delay={0}>
                <div className="bg-white/5 border border-white/10 rounded-xl p-8 text-left hover:bg-white/10 transition-all duration-300 backdrop-blur-sm group hover:shadow-[0_0_30px_rgba(201,168,76,0.1)]">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#C9A84C]/20 flex items-center justify-center text-[#C9A84C] group-hover:bg-[#C9A84C]/30 transition-colors">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v8m-4-4h8m-8-4a10 10 0 100 20 10 10 0 000-20z"
                        />
                      </svg>
                    </div>
                    <h4 className="text-[20px] font-bold text-white leading-tight">
                      1. Underlying Conditions
                    </h4>
                  </div>
                  <ul className="space-y-3 text-white/70 text-[15px]">
                    <li className="flex items-start gap-2">
                      <span className="text-[#C9A84C] mt-1">&#8226;</span>{" "}
                      Cerebral Palsy
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#C9A84C] mt-1">&#8226;</span>{" "}
                      Traumatic Brain Injury or Stroke
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#C9A84C] mt-1">&#8226;</span>{" "}
                      Spinal Cord Injury (quadriplegia)
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#C9A84C] mt-1">&#8226;</span>{" "}
                      Muscular Dystrophy
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#C9A84C] mt-1">&#8226;</span>{" "}
                      Spina Bifida
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#C9A84C] mt-1">&#8226;</span>{" "}
                      Severe Amputations or Limb Deficiencies
                    </li>
                  </ul>
                </div>
              </ScrollReveal>

              {/* Card 2 */}
              <ScrollReveal variant="fade-up" delay={100}>
                <div className="bg-white/5 border border-white/10 rounded-xl p-8 text-left hover:bg-white/10 transition-all duration-300 backdrop-blur-sm group hover:shadow-[0_0_30px_rgba(201,168,76,0.1)]">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#C9A84C]/20 flex items-center justify-center text-[#C9A84C] group-hover:bg-[#C9A84C]/30 transition-colors">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        />
                      </svg>
                    </div>
                    <h4 className="text-[20px] font-bold text-white leading-tight">
                      2. Eligible Impairments
                    </h4>
                  </div>
                  <ul className="space-y-3 text-white/70 text-[15px]">
                    <li className="flex items-start gap-2">
                      <span className="text-[#C9A84C] mt-1">&#8226;</span>{" "}
                      Hypertonia (increased muscle tension)
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#C9A84C] mt-1">&#8226;</span>{" "}
                      Ataxia (uncoordinated movements)
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#C9A84C] mt-1">&#8226;</span>{" "}
                      Athetosis (involuntary movements)
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#C9A84C] mt-1">&#8226;</span>{" "}
                      Impaired Muscle Power
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#C9A84C] mt-1">&#8226;</span>{" "}
                      Impaired Passive Range of Movement
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#C9A84C] mt-1">&#8226;</span>{" "}
                      Limb Deficiency
                    </li>
                  </ul>
                </div>
              </ScrollReveal>

              {/* Card 3 */}
              <ScrollReveal variant="fade-up" delay={200}>
                <div className="bg-white/5 border border-white/10 rounded-xl p-8 text-left hover:bg-white/10 transition-all duration-300 backdrop-blur-sm group hover:shadow-[0_0_30px_rgba(201,168,76,0.1)]">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#C9A84C]/20 flex items-center justify-center text-[#C9A84C] group-hover:bg-[#C9A84C]/30 transition-colors">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                        />
                      </svg>
                    </div>
                    <h4 className="text-[20px] font-bold text-white leading-tight">
                      3. Minimum Criteria
                    </h4>
                  </div>
                  <p className="text-white/70 text-[15px] leading-relaxed mb-4">
                    Athletes must have a severe permanent physical impairment
                    that significantly affects their ability to play the sport.
                  </p>
                  <div className="mt-6 border-t border-white/10 pt-4">
                    <Link
                      href="/sport/classification"
                      className="text-[#C9A84C] font-bold text-[14px] hover:text-white transition-colors flex items-center gap-2"
                    >
                      View Classification Classes (BC1-BC4) &rarr;
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* SECTION 4: National Footprint */}
        <section className="py-24 bg-[#FDF8EF] relative overflow-hidden">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative z-10">
            <div className="text-center mb-14">
              <span className="text-[#C9A84C] font-bold tracking-[0.25em] text-[12px] uppercase">National Footprint</span>
              <h2 className="text-[36px] sm:text-[44px] font-bold text-[#0A2F1D] mt-2 mb-4">Official State Associations</h2>
              <p className="text-[#5C5C5C] text-[16px] max-w-2xl mx-auto">Jharkhand leads Boccia development across India with active athlete programs.</p>
            </div>
            <div className="bg-white rounded-2xl shadow-xl border border-[#C9A84C]/20 p-8 md:p-10">
              <div className="flex items-center gap-3 mb-8"><div className="w-3 h-3 rounded-full bg-[#0A2F1D]" /><h3 className="text-[20px] font-bold text-[#0A2F1D]">Recognized State Associations</h3></div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                <div className="rounded-xl p-4 text-center border-2 border-[#C9A84C] bg-[#0A2F1D] shadow-lg"><span className="text-[28px] font-bold block mb-1 text-[#C9A84C]">JH</span><span className="text-[11px] font-semibold text-white/80">Jharkhand</span><span className="inline-block mt-2 px-2 py-0.5 bg-[#C9A84C] text-[#0A2F1D] text-[9px] font-bold rounded-full">Active</span></div>
                <div className="rounded-xl p-4 text-center border border-[#E2D9C8] bg-[#FDF8EF] hover:border-[#C9A84C]/40 hover:shadow-md transition-all"><span className="text-[28px] font-bold block mb-1 text-[#0A2F1D]">BR</span><span className="text-[11px] font-semibold text-[#5C5C5C]">Bihar</span></div>
                <div className="rounded-xl p-4 text-center border border-[#E2D9C8] bg-[#FDF8EF] hover:border-[#C9A84C]/40 hover:shadow-md transition-all"><span className="text-[28px] font-bold block mb-1 text-[#0A2F1D]">WB</span><span className="text-[11px] font-semibold text-[#5C5C5C]">West Bengal</span></div>
                <div className="rounded-xl p-4 text-center border border-[#E2D9C8] bg-[#FDF8EF] hover:border-[#C9A84C]/40 hover:shadow-md transition-all"><span className="text-[28px] font-bold block mb-1 text-[#0A2F1D]">OD</span><span className="text-[11px] font-semibold text-[#5C5C5C]">Odisha</span></div>
                <div className="rounded-xl p-4 text-center border border-[#E2D9C8] bg-[#FDF8EF] hover:border-[#C9A84C]/40 hover:shadow-md transition-all"><span className="text-[28px] font-bold block mb-1 text-[#0A2F1D]">CG</span><span className="text-[11px] font-semibold text-[#5C5C5C]">Chhattisgarh</span></div>
                <div className="rounded-xl p-4 text-center border border-[#E2D9C8] bg-[#FDF8EF] hover:border-[#C9A84C]/40 hover:shadow-md transition-all"><span className="text-[28px] font-bold block mb-1 text-[#0A2F1D]">MP</span><span className="text-[11px] font-semibold text-[#5C5C5C]">MP</span></div>
                <div className="rounded-xl p-4 text-center border border-[#E2D9C8] bg-[#FDF8EF] hover:border-[#C9A84C]/40 hover:shadow-md transition-all"><span className="text-[28px] font-bold block mb-1 text-[#0A2F1D]">MH</span><span className="text-[11px] font-semibold text-[#5C5C5C]">Maharashtra</span></div>
                <div className="rounded-xl p-4 text-center border border-[#E2D9C8] bg-[#FDF8EF] hover:border-[#C9A84C]/40 hover:shadow-md transition-all"><span className="text-[28px] font-bold block mb-1 text-[#0A2F1D]">KA</span><span className="text-[11px] font-semibold text-[#5C5C5C]">Karnataka</span></div>
                <div className="rounded-xl p-4 text-center border border-[#E2D9C8] bg-[#FDF8EF] hover:border-[#C9A84C]/40 hover:shadow-md transition-all"><span className="text-[28px] font-bold block mb-1 text-[#0A2F1D]">TN</span><span className="text-[11px] font-semibold text-[#5C5C5C]">Tamil Nadu</span></div>
                <div className="rounded-xl p-4 text-center border border-[#E2D9C8] bg-[#FDF8EF] hover:border-[#C9A84C]/40 hover:shadow-md transition-all"><span className="text-[28px] font-bold block mb-1 text-[#0A2F1D]">DL</span><span className="text-[11px] font-semibold text-[#5C5C5C]">Delhi</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5: Registration Pathway */}
        <section className="py-24 bg-[#0A2F1D] relative overflow-hidden">
          <div className="absolute inset-0 bg-texture-dots-dark opacity-10 pointer-events-none" />
          <div className="absolute inset-0 bg-noise pointer-events-none" />
          <div className="gradient-orb gradient-orb-gold w-[500px] h-[500px] -top-40 left-1/4 pointer-events-none opacity-30 animate-float-slow gsap-parallax-orb" />
          <div className="gradient-orb gradient-orb-white w-[350px] h-[350px] bottom-0 right-1/4 pointer-events-none opacity-20 animate-float gsap-parallax-orb" />

          <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative z-10">
            <ScrollReveal variant="fade-up">
              <div className="text-center mb-16">
                <span className="text-[#C9A84C] font-bold tracking-[0.25em] text-[12px] uppercase">
                  JOIN THE MOVEMENT
                </span>
                <h2 className="text-[36px] sm:text-[44px] font-bold text-white mt-2 mb-4 gsap-parallax-heading">
                  Become a Boccia Athlete
                </h2>
                <p className="text-white/70 text-[16px] max-w-2xl mx-auto">
                  Follow the official registration pathway to become part of
                  Jharkhand&apos;s growing Boccia community.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {[
                {
                  step: "01",
                  title: "Register Online",
                  desc: "Create your official JPBA profile through the registration form.",
                },
                {
                  step: "02",
                  title: "Submit Documents",
                  desc: "Upload identity proof and medical documentation.",
                },
                {
                  step: "03",
                  title: "Classification",
                  desc: "Complete the certified impairment assessment.",
                },
                {
                  step: "04",
                  title: "District Review",
                  desc: "Verification by your local district association.",
                },
                {
                  step: "05",
                  title: "National Registration",
                  desc: "Receive your official JPBA registration number.",
                },
              ].map((item, i) => (
                <ScrollReveal key={i} variant="scale-in" delay={i * 80}>
                  <div className="relative group">
                    <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300 h-full backdrop-blur-sm hover:shadow-[0_0_25px_rgba(201,168,76,0.1)]">
                      <span className="text-[32px] font-bold gradient-text-gold block mb-3">
                        {item.step}
                      </span>
                      <h4 className="text-[16px] font-bold text-white mb-2">
                        {item.title}
                      </h4>
                      <p className="text-[13px] text-white/60 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                    {i < 4 && (
                      <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-[2px] bg-[#C9A84C]/40 animate-connector" />
                    )}
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal variant="fade-up" delay={400}>
              <div className="text-center mt-12">
                <Link
                  href="/register"
                  className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#C9A84C] text-[#0A2F1D] rounded font-bold uppercase tracking-wider hover:bg-white transition-colors text-[14px] shadow-lg shadow-[#C9A84C]/20"
                >
                  Register as an Athlete &rarr;
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
             SECTION 6: Athletes Showcase — Enhanced
        ════════════════════════════════════════════ */}
        <section className="py-24 bg-mesh-gradient-light relative overflow-hidden">
          <div className="absolute inset-0 bg-texture-crosshatch pointer-events-none" />
          <div className="gradient-orb gradient-orb-gold w-[500px] h-[500px] -top-40 -left-40 pointer-events-none opacity-30 animate-float" />

          <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative z-10">
            <ScrollReveal variant="fade-up">
              <div className="text-center mb-16">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <span className="text-[#C9A84C] text-xl">&#10022;</span>
                  <span className="text-[#C9A84C] font-bold tracking-[0.25em] text-[12px] uppercase">
                    OUR STARS
                  </span>
                  <span className="text-[#C9A84C] text-xl">&#10022;</span>
                </div>
                <h2 className="text-[36px] sm:text-[44px] font-bold text-[#0A2F1D] mb-3">
                  Meet the Athletes
                </h2>
                <p className="text-[#5C5C5C] text-[16px]">
                  Representing Jharkhand with Precision, Passion, and Pride.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  name: "Arjun Kumar",
                  cls: "BC2",
                  desc: "State champion with exceptional precision and tactical awareness.",
                  img: "https://images.pexels.com/photos/6763758/pexels-photo-6763758.jpeg?w=400&q=80",
                },
                {
                  name: "Priya Devi",
                  cls: "BC1",
                  desc: "Pioneer athlete who inspired inclusion across three districts.",
                  img: "https://images.pexels.com/photos/38149196/pexels-photo-38149196.jpeg?w=400&q=80",
                },
                {
                  name: "Ravi Singh",
                  cls: "BC3",
                  desc: "Ramp specialist with outstanding competitive record.",
                  img: "https://images.pexels.com/photos/38149196/pexels-photo-38149196.jpeg?w=400&q=80",
                },
                {
                  name: "Meera Lakra",
                  cls: "BC4",
                  desc: "Rising star in BC4 category with national ranking.",
                  img: "https://images.pexels.com/photos/10517000/pexels-photo-10517000.jpeg?w=400&q=80",
                },
              ].map((athlete, i) => (
                <ScrollReveal key={i} variant="fade-up" delay={i * 100}>
                  <div className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-[#C9A84C]/15 hover:shadow-2xl hover:border-[#C9A84C]/40 transition-all duration-300">
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={athlete.img}
                        alt={athlete.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A2F1D]/80 via-transparent to-transparent" />
                      <span className="absolute top-4 right-4 px-3 py-1 bg-[#C9A84C] text-[#0A2F1D] text-[11px] font-bold rounded-full shadow-lg">
                        {athlete.cls}
                      </span>
                    </div>
                    <div className="p-6">
                      <h4 className="text-[18px] font-bold text-[#0A2F1D] mb-2">
                        {athlete.name}
                      </h4>
                      <p className="text-[13px] text-[#5C5C5C] leading-relaxed">
                        {athlete.desc}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal variant="fade-up" delay={400}>
              <div className="text-center mt-10">
                <Link
                  href="/athletes"
                  className="text-[14px] font-bold text-[#C9A84C] hover:text-[#0A2F1D] transition-colors border-b-2 border-[#C9A84C] pb-1"
                >
                  Meet All Athletes &rarr;
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
             SECTION 7: Events Schedule — Enhanced
        ════════════════════════════════════════════ */}
        <section
          className="py-24 bg-white relative overflow-hidden"
          id="events-schedule"
        >
          <div className="absolute inset-0 bg-texture-wavy pointer-events-none opacity-50" />
          <div className="gradient-orb gradient-orb-green-light w-[400px] h-[400px] -top-40 right-0 pointer-events-none opacity-30 gsap-parallax-orb" />

          <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative z-10">
            <ScrollReveal variant="fade-up">
              <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14">
                <div>
                  <span className="text-[#C9A84C] font-bold tracking-[0.25em] text-[12px] uppercase">
                    JPBA 2026
                  </span>                   <h2 className="text-[36px] sm:text-[44px] font-bold text-[#0A2F1D] mt-2 gsap-parallax-heading">
                    Schedule
                  </h2>
                </div>
                <Link
                  href="/events"
                  className="text-[14px] font-bold text-[#C9A84C] hover:text-[#0A2F1D] transition-colors mt-4 md:mt-0 border-b-2 border-[#C9A84C] pb-1 inline-block"
                >
                  View All Events &rarr;
                </Link>
              </div>
            </ScrollReveal>

            <div className="space-y-4">
              {[
                {
                  num: "01",
                  title: "Para Boccia Awareness Camp",
                  type: "Awareness Camp",
                  date: "7th June, 2026",
                  location: "Kolhapur, Maharashtra",
                },
                {
                  num: "02",
                  title: "Seoul 2026 World Boccia Championship",
                  type: "International",
                  date: "24 Aug - 4 Sep, 2026",
                  location: "Seoul, South Korea",
                },
                {
                  num: "03",
                  title: "Pilsen 2026 World Boccia Challenger",
                  type: "International",
                  date: "7-15 Sep, 2026",
                  location: "Pilsen, Czech Republic",
                },
                {
                  num: "04",
                  title: "2nd Boccia Federation Cup 2026",
                  type: "Federation Cup",
                  date: "October 2026",
                  location: "TBC",
                },
                {
                  num: "05",
                  title: "11th National Championship 2025-26",
                  type: "National Championship",
                  date: "January 2027",
                  location: "TBC",
                },
              ].map((event, i) => (
                <ScrollReveal key={i} variant="fade-up" delay={i * 60}>
                  <div className="flex items-center gap-6 p-5 rounded-xl border border-[#E2D9C8] hover:border-[#C9A84C]/40 hover:shadow-md transition-all bg-[#FDF8EF]/50 group">
                    <span className="text-[28px] font-bold text-[#C9A84C] min-w-[50px]">
                      {event.num}
                    </span>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-[16px] font-bold text-[#0A2F1D] group-hover:text-[#C9A84C] transition-colors truncate">
                        {event.title}
                      </h4>
                      <span className="text-[11px] font-bold text-[#C9A84C] bg-[#C9A84C]/10 px-2.5 py-0.5 rounded-full inline-block mt-1">
                        {event.type}
                      </span>
                    </div>
                    <div className="text-right hidden sm:block">
                      <p className="text-[13px] font-semibold text-[#0A2F1D]">
                        {event.date}
                      </p>
                      <p className="text-[12px] text-[#8A8A8A]">
                        {event.location}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
             SECTION 8: Photo Gallery — Enhanced
        ════════════════════════════════════════════ */}
        <section
          className="py-24 bg-[#FDF8EF] relative overflow-hidden"
          id="photo-gallery"
        >
          <div className="absolute inset-0 bg-texture-diagonal pointer-events-none" />
          <div className="gradient-orb gradient-orb-gold w-[400px] h-[400px] -bottom-40 -right-40 pointer-events-none opacity-40 animate-float-delayed gsap-parallax-orb" />

          <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative z-10">
            <ScrollReveal variant="fade-up">
              <div className="text-center mb-14">
                <span className="text-[#C9A84C] font-bold tracking-[0.25em] text-[12px] uppercase">
                  JPBA - Moments in Focus
                </span>                   <h2 className="text-[36px] sm:text-[44px] font-bold text-[#0A2F1D] mt-2 mb-3 gsap-parallax-heading">
                    Photo Gallery
                </h2>
                <p className="text-[#5C5C5C] text-[16px]">
                  Explore district championships, training camps, awareness
                  drives and athlete journeys.
                </p>
                <div className="flex items-center justify-center gap-3 mt-4 text-[13px] text-[#8A8A8A] font-semibold">
                  <span>48 Photos</span>
                  <span className="text-[#C9A84C]">&bull;</span>
                  <span>3 Albums</span>
                  <span className="text-[#C9A84C]">&bull;</span>
                  <span>4 Categories</span>
                </div>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "District Awareness Camps",
                  location: "Jharkhand",
                  date: "Aug 2026",
                  count: 12,
                  img: "https://images.pexels.com/photos/10517000/pexels-photo-10517000.jpeg?w=600&q=80",
                  featured: true,
                },
                {
                  title: "State Championship 2026",
                  location: "Ranchi",
                  date: "Jul 2026",
                  count: 8,
                  img: "https://images.pexels.com/photos/38149196/pexels-photo-38149196.jpeg?w=600&q=80",
                },
                {
                  title: "Training Camp Solan",
                  location: "IAMD, Solan",
                  date: "Aug 2026",
                  count: 4,
                  img: "https://images.pexels.com/photos/38149196/pexels-photo-38149196.jpeg?w=600&q=80",
                },
                {
                  title: "Award Ceremony 2026",
                  location: "Ranchi",
                  date: "Jun 2026",
                  count: 6,
                  img: "https://images.pexels.com/photos/10517000/pexels-photo-10517000.jpeg?w=600&q=80",
                },
              ].map((album, i) => (
                <ScrollReveal key={i} variant="fade-up" delay={i * 80}>
                  <div className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-[#C9A84C]/15 hover:shadow-2xl transition-all duration-300 cursor-pointer">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={album.img}
                        alt={album.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      {album.featured && (
                        <span className="absolute top-3 left-3 px-2.5 py-1 bg-[#C9A84C] text-[#0A2F1D] text-[10px] font-bold rounded-full">
                          &#9733; Featured
                        </span>
                      )}
                      <span className="absolute bottom-3 right-3 px-2.5 py-1 bg-black/60 text-white text-[11px] font-semibold rounded-full backdrop-blur-sm">
                        {album.count} Photos
                      </span>
                    </div>
                    <div className="p-5">
                      <h4 className="text-[15px] font-bold text-[#0A2F1D] mb-1 group-hover:text-[#C9A84C] transition-colors">
                        {album.title}
                      </h4>
                      <p className="text-[12px] text-[#8A8A8A]">
                        {album.location} &bull; {album.date}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal variant="fade-up" delay={300}>
              <div className="text-center mt-10">
                <Link
                  href="/gallery"
                  className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-[#0A2F1D] text-[#0A2F1D] rounded font-bold uppercase tracking-wider hover:bg-[#0A2F1D] hover:text-white transition-colors text-[13px]"
                >
                  All Collections &rarr;
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
             SECTION 9: News — Enhanced
        ════════════════════════════════════════════ */}
        <section
          className="py-24 bg-white relative overflow-hidden"
          id="official-federation-updates"
        >
          <div className="absolute inset-0 bg-texture-wavy pointer-events-none opacity-30" />
          <div className="gradient-orb gradient-orb-green-light w-[500px] h-[500px] top-1/4 -left-60 pointer-events-none opacity-20 gsap-parallax-orb" />

          <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative z-10">
            <ScrollReveal variant="fade-up">
              <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14">
                <div>
                  <span className="text-[#C9A84C] font-bold tracking-[0.25em] text-[12px] uppercase">
                    JPBA 2026
                  </span>                   <h2 className="text-[36px] sm:text-[44px] font-bold text-[#0A2F1D] mt-2 gsap-parallax-heading">
                    Official Federation Updates
                  </h2>
                </div>
                <Link
                  href="/news"
                  className="text-[14px] font-bold text-[#C9A84C] hover:text-[#0A2F1D] transition-colors mt-4 md:mt-0 border-b-2 border-[#C9A84C] pb-1 inline-block"
                >
                  All News &rarr;
                </Link>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "District Awareness Camp in Ranchi",
                  excerpt:
                    "JPBA organized a successful awareness camp at Ranchi District Sports Complex, introducing Boccia to over 50 students and families.",
                  date: "Aug 25, 2026",
                  views: 24,
                  featured: false,
                },
                {
                  title: "Athletes Selected for National Training",
                  excerpt:
                    "Three athletes from Jharkhand have been selected for the national coaching camp for upcoming international events.",
                  date: "Aug 10, 2026",
                  views: 36,
                  featured: false,
                },
                {
                  title: "Jharkhand State Championship Announced",
                  excerpt:
                    "The first official JPBA State Championship will be held in Ranchi. District associations encouraged to register.",
                  date: "Jul 16, 2026",
                  views: 122,
                  featured: true,
                },
                {
                  title: "Coach Certification Program Launches",
                  excerpt:
                    "JPBA in collaboration with BSFI launches a certified coaching program for Boccia across three districts.",
                  date: "Jul 10, 2026",
                  views: 104,
                  featured: false,
                },
                {
                  title: "Equipment Distribution to District Centers",
                  excerpt:
                    "International-standard Boccia balls and ramps distributed to 8 training centers across Jharkhand.",
                  date: "Jun 30, 2026",
                  views: 98,
                  featured: false,
                },
                {
                  title: "Partnership with Jharkhand Sports Council",
                  excerpt:
                    "JPBA signs MoU with JSSC for facility access and athlete support across the state.",
                  date: "Jun 15, 2026",
                  views: 115,
                  featured: false,
                },
              ].map((article, i) => (
                <ScrollReveal key={i} variant="fade-up" delay={i * 60}>
                  <div className="group bg-[#FDF8EF] rounded-2xl p-6 border border-[#E2D9C8] hover:border-[#C9A84C]/40 hover:shadow-xl transition-all duration-300">
                    {article.featured && (
                      <span className="inline-block px-2.5 py-1 bg-[#C9A84C]/15 text-[#C9A84C] text-[10px] font-bold rounded-full mb-3">
                        &#9733; Featured
                      </span>
                    )}
                    <div className="flex items-center gap-2 text-[11px] text-[#8A8A8A] mb-3">
                      <span className="w-5 h-5 rounded-full bg-[#0A2F1D] flex items-center justify-center text-white text-[8px] font-bold">
                        JP
                      </span>
                      <span>JPBA Official</span>
                      <span>&bull;</span>
                      <span>{article.date}</span>
                    </div>
                    <h4 className="text-[16px] font-bold text-[#0A2F1D] mb-2 group-hover:text-[#C9A84C] transition-colors leading-snug">
                      {article.title}
                    </h4>
                    <p className="text-[13px] text-[#5C5C5C] leading-relaxed mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-[13px] font-bold text-[#C9A84C] group-hover:text-[#0A2F1D] transition-colors">
                        Read More &raquo;
                      </span>
                      <span className="text-[11px] text-[#8A8A8A]">
                        {article.views} Views
                      </span>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
             SECTION 10: Partners — Enhanced with gradient orbs
        ════════════════════════════════════════════ */}
        <section className="py-24 bg-[#FDF8EF] relative overflow-hidden">
          <div className="absolute inset-0 bg-texture-diagonal pointer-events-none" />
          <div className="gradient-orb gradient-orb-gold w-[500px] h-[500px] -bottom-60 -right-60 pointer-events-none opacity-30 animate-float-slow gsap-parallax-orb" />
          <div className="gradient-orb gradient-orb-green-light w-[400px] h-[400px] -top-40 -left-40 pointer-events-none opacity-25 animate-float-delayed gsap-parallax-orb" />

          <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <ScrollReveal variant="slide-left">
                <div>
                  <span className="text-[#C9A84C] font-bold tracking-[0.25em] text-[12px] uppercase">
                    Recognitions &amp; Affiliations
                  </span>
                  <h2 className="text-[36px] sm:text-[44px] font-bold text-[#0A2F1D] mt-2 mb-8 gsap-parallax-heading">
                    Our Strategic Partners
                  </h2>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {[
                      "Boccia Sports Federation of India",
                      "Paralympic Committee of India",
                      "Sports Authority of India",
                      "Jharkhand State Sports Council",
                      "District Administration",
                      "Indian Railways",
                    ].map((partner, i) => (
                      <div
                        key={i}
                        className="bg-white rounded-xl p-5 flex items-center justify-center border border-[#E2D9C8] hover:border-[#C9A84C]/40 hover:shadow-md transition-all text-center min-h-[80px]"
                      >
                        <span className="text-[11px] font-bold text-[#0A2F1D] leading-tight">
                          {partner}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal variant="slide-right">
                <div className="bg-[#0A2F1D] rounded-2xl p-10 relative overflow-hidden animate-glow-border">
                  <div className="absolute inset-0 bg-texture-dots-dark opacity-10 pointer-events-none" />
                  <div className="gradient-orb gradient-orb-gold w-[300px] h-[300px] -top-32 -right-32 pointer-events-none opacity-20" />
                  <div className="relative z-10">
                    <h3 className="text-[24px] font-bold text-white mb-2">
                      Why Support JPBA?
                    </h3>
                    <p className="text-[#C9A84C] text-[14px] mb-8">
                      Supporting Jharkhand&apos;s Para Boccia Future
                    </p>
                    <div className="space-y-5 mb-8">
                      {[
                        "Athlete Development - Coaching, camps & player programs",
                        "District Competitions - Championships, rankings & pathways",
                        "Inclusive Access - Specialized equipment & classification",
                        "Growing Nationwide - District associations & grassroots",
                      ].map((item, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <span className="text-[#C9A84C] mt-1">&#9679;</span>
                          <span className="text-white/80 text-[14px] leading-relaxed">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#C9A84C] text-[#0A2F1D] rounded font-bold uppercase tracking-wider hover:bg-white transition-colors text-[13px] shadow-lg shadow-[#C9A84C]/20"
                    >
                      Contact JPBA &rarr;
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        <Footer />
      </div>

      {/* Sticky Register CTA */}
      <div
        className={`fixed bottom-6 right-6 z-[90] transition-all duration-300 ${
          showStickyCTA
            ? "translate-y-0 opacity-100"
            : "translate-y-12 opacity-0 pointer-events-none"
        }`}
      >
        <Link
          href="/register"
          className="flex items-center gap-2 px-6 py-3.5 bg-[#C9A84C] text-[#0A2F1D] rounded-full font-bold text-[13px] tracking-wider shadow-xl shadow-[#C9A84C]/30 hover:bg-white hover:shadow-white/30 transition-all duration-200 active:scale-95"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4"
          >
            <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
            <polyline points="10 17 15 12 10 7"></polyline>
            <line x1="15" y1="12" x2="3" y2="12"></line>
          </svg>
          REGISTER NOW
        </Link>
      </div>
    </>
  );
}
