"use client";
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

const STORAGE_KEY = "jpba_preloader_done";

export default function Preloader() {
  const [visible, setVisible] = useState(true);
  const preloaderRef = useRef<HTMLDivElement>(null);
  const sweepRef = useRef<HTMLDivElement>(null);
  const holdRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const tl = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    // Skip if already shown this session
    if (sessionStorage.getItem(STORAGE_KEY)) {
      setVisible(false);
      return;
    }

    // Lock body scroll
    document.body.style.overflow = "hidden";

    // GSAP Animation Loop
    tl.current = gsap.timeline({ repeat: -1, repeatDelay: 0.5 });

    tl.current
      .set(["#red-ball", "#blue-ball", "#white-ball"], { x: 0, y: 0 })
      .set("#player-arm", { rotation: 0, svgOrigin: "41.75 94.5" })
      .set(["#player-group", "#red-ball", "#ground-line"], { opacity: 1, scale: 1 })
      .set(["#blue-ball", "#white-ball"], { scale: 1 })
      .set("#text-lockup", { opacity: 0 });

    tl.current
      .to("#player-arm", { rotation: -40, duration: 0.3, ease: "power1.inOut" })
      .add("throw")
      .to("#red-ball", { x: 65, duration: 0.5, ease: "power1.inOut" }, "throw")
      .to("#red-ball", { y: -15, duration: 0.25, ease: "power1.out" }, "throw")
      .to("#red-ball", { y: 28, duration: 0.25, ease: "power1.in" }, "throw+=0.25")
      .to("#player-arm", { rotation: 20, duration: 0.4, ease: "power2.out" }, "throw")

      .add("impact")
      .to("#red-ball", { scaleY: 0.7, scaleX: 1.2, duration: 0.1, yoyo: true, repeat: 1, transformOrigin: "bottom" }, "impact")
      .to("#red-ball", { x: 75, duration: 0.3, ease: "power1.out" }, "impact")
      .to("#blue-ball", { x: -45, duration: 0.6, ease: "power1.inOut" }, "impact")
      .to("#blue-ball", { y: -80, duration: 0.3, ease: "power1.out" }, "impact")
      .to("#blue-ball", { y: -55, duration: 0.3, ease: "power1.in" }, "impact+=0.3")
      .to("#white-ball", { x: 43, duration: 0.6, ease: "power1.inOut" }, "impact")
      .to("#white-ball", { y: -80, duration: 0.3, ease: "power1.out" }, "impact")
      .to("#white-ball", { y: -55, duration: 0.3, ease: "power1.in" }, "impact+=0.3")

      .add("lockup", "-=0.1")
      .to(["#player-group", "#red-ball", "#ground-line"], { opacity: 0, duration: 0.4 }, "lockup")
      .to("#text-lockup", { opacity: 1, duration: 0.4 }, "lockup")
      .to({}, { duration: 1.5 });

    // Dismiss sequence after 2.5s
    const dismissTimer = setTimeout(() => {
      if (tl.current) tl.current.kill();

      // Sweep transition
      if (sweepRef.current) {
        gsap.to(sweepRef.current, {
          x: 0, y: 0,
          duration: 1.5,
          ease: "power3.inOut",
        });
      }

      setTimeout(() => {
        if (holdRef.current) holdRef.current.style.opacity = "1";
        if (preloaderRef.current) preloaderRef.current.style.display = "none";
        document.body.style.overflow = "auto";
      }, 1000);

      setTimeout(() => {
        if (holdRef.current) holdRef.current.style.opacity = "0";
        sessionStorage.setItem(STORAGE_KEY, "1");
        setVisible(false);
      }, 1200);
    }, 2500);

    return () => {
      clearTimeout(dismissTimer);
      if (tl.current) tl.current.kill();
      document.body.style.overflow = "auto";
    };
  }, []);

  if (!visible) return null;

  return (
    <>
      <div ref={preloaderRef} className="fixed inset-0 z-[99999] bg-[#FDF8EF] flex items-center justify-center transition-opacity duration-500 overflow-hidden">
        {/* Gradient mesh background */}
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 30% 40%, rgba(201, 168, 76, 0.06) 0%, transparent 50%), radial-gradient(ellipse at 70% 60%, rgba(10, 47, 29, 0.04) 0%, transparent 50%)" }} />
        <div className="absolute inset-0 bg-texture-dots opacity-30 pointer-events-none" />
        <div className="w-full max-w-[450px] relative aspect-video mx-auto">
          <svg ref={svgRef} viewBox="0 0 320 180" className="w-full h-full overflow-visible">
            {/* Background Text */}
            <g id="text-lockup" opacity="0">
              <text x="160" y="60" fontFamily="Impact, Arial Black, sans-serif" fontWeight="bold" fontSize="36" fill="#0A2F1D" textAnchor="middle" letterSpacing="4">JPBA</text>
              <text x="100" y="135" fontFamily="Impact, Arial Black, sans-serif" fontWeight="900" fontSize="64" fill="#1A1A1A" textAnchor="middle">J</text>
              <text x="140" y="135" fontFamily="Impact, Arial Black, sans-serif" fontWeight="900" fontSize="64" fill="#1A1A1A" textAnchor="middle">P</text>
              <text x="180" y="135" fontFamily="Impact, Arial Black, sans-serif" fontWeight="900" fontSize="64" fill="#1A1A1A" textAnchor="middle">B</text>
              <text x="220" y="135" fontFamily="Impact, Arial Black, sans-serif" fontWeight="900" fontSize="64" fill="#1A1A1A" textAnchor="middle">A</text>
              {/* JPBA Sweep Lines */}
              <path d="M 50 158 Q 160 175 270 158" fill="none" stroke="#C9A84C" strokeWidth="4" strokeLinecap="round"/>
              <path d="M 50 168 Q 160 185 270 168" fill="none" stroke="#0A2F1D" strokeWidth="4" strokeLinecap="round"/>
            </g>

            {/* Ground */}
            <line id="ground-line" x1="20" y1="140" x2="300" y2="140" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" />

            {/* Target Balls */}
            <circle id="blue-ball" cx="135" cy="132" r="8" fill="#0A2F1D" />
            <circle id="white-ball" cx="155" cy="132" r="8" fill="#FFFFFF" stroke="#1A1A1A" strokeWidth="2" />

            {/* Player & Wheelchair */}
            <g id="player-group">
              <circle cx="45" cy="127" r="13" fill="none" stroke="#C9A84C" strokeWidth="3" />
              <circle cx="45" cy="127" r="6.5" fill="none" stroke="#1A1A1A" strokeWidth="2" />
              <circle cx="61.25" cy="136.75" r="3.25" fill="#1A1A1A" />
              <path d="M 38.5 114 L 38.5 127 L 58 127 L 61.25 136.75" fill="none" stroke="#1A1A1A" strokeWidth="2.6" strokeLinejoin="round" />
              <path d="M 38.5 114 L 35.25 101" fill="none" stroke="#1A1A1A" strokeWidth="2.6" strokeLinecap="round" />
              <circle cx="41.75" cy="84.75" r="6.5" fill="#1A1A1A" />
              <path d="M 41.75 94.5 L 38.5 114 L 48.25 114 L 48.25 123.75" fill="none" stroke="#1A1A1A" strokeWidth="3.25" strokeLinejoin="round" />
              <path id="player-arm" d="M 41.75 94.5 L 54.75 104.25" fill="none" stroke="#1A1A1A" strokeWidth="3.25" strokeLinecap="round" />
            </g>

            {/* Red Ball */}
            <circle id="red-ball" cx="55" cy="104" r="8" fill="#C9A84C" />
          </svg>
        </div>
      </div>

      {/* JPBA Sweep */}
      <div
        ref={sweepRef}
        className="fixed inset-0 z-[100001] pointer-events-none"
        style={{ transform: "translate(-200vmax, 200vmax)" }}
      >
        <div
          className="absolute top-1/2 left-1/2 w-[300vmax] h-[300vmax]"
          style={{
            marginTop: "-150vmax",
            marginLeft: "-150vmax",
            background: "linear-gradient(45deg, #0A2F1D 0%, #0A2F1D 85%, #C9A84C 85%, #C9A84C 92%, #FFFFFF 92%, #FFFFFF 95%, #E8D5A3 95%, #E8D5A3 100%)",
          }}
        />
      </div>

      {/* Dark Green Hold */}
      <div ref={holdRef} className="fixed inset-0 z-[100000] bg-[#0A2F1D] opacity-0 pointer-events-none transition-opacity duration-500" />
    </>
  );
}
