'use client';

import { useState, useEffect } from 'react';

const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSejXpcQc40K9GqggtadDUyUaAKNWZNaFColxKDsT1yGPQeIqw/viewform';

export default function StickyRegister() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 200);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const baseClasses = "fixed bottom-6 right-6 z-[9999] bg-[#C9A84C] hover:bg-[#b8953a] text-[#0A2F1D] font-bold px-6 py-3.5 rounded-full shadow-[0_4px_20px_rgba(201,168,76,0.4)] hover:shadow-[0_6px_30px_rgba(201,168,76,0.6)] transition-all duration-300 ease-out hover:scale-105 flex items-center gap-2 cursor-pointer";
  const visibilityClasses = isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none";

  return (
    <a
      href={GOOGLE_FORM_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseClasses} ${visibilityClasses}`}
      style={{ fontSize: "15px", letterSpacing: "0.5px" }}
    >
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
      Register Now
    </a>
  );
}
