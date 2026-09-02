import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#1B5E20] text-white/90">
      <div className="jpba-stripe" />
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-14">

          {/* Column 1: Brand */}
          <div className="flex flex-col gap-5">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative h-10 w-10 bg-white rounded-full p-1">
                <Image src="/jharkhand.PNG" alt="JPBA Logo" fill className="object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-white leading-none">JPBA</span>
                <span className="text-[8px] font-semibold text-white/60 uppercase tracking-[0.2em]">Jharkhand Para Boccia</span>
              </div>
            </Link>
            <p className="text-sm text-white/70 leading-relaxed">
              Promoting Para Boccia across Jharkhand and empowering athletes through competitive excellence and inclusion.
            </p>
            <div className="flex gap-3 mt-2">
              <a href="#" className="h-8 w-8 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-[#D4AF37] transition-colors text-xs">f</a>
              <a href="#" className="h-8 w-8 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-[#D4AF37] transition-colors text-xs">X</a>
              <a href="#" className="h-8 w-8 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-[#D4AF37] transition-colors text-xs">in</a>
            </div>
          </div>

          {/* Column 2: About */}
          <div>
            <h3 className="text-white font-bold mb-2">About JPBA</h3>
            <div className="h-[2px] w-8 bg-[#D4AF37] mb-5" />
            <ul className="flex flex-col gap-3 text-sm text-white/70">
              <li><Link href="/about" className="hover:text-[#D4AF37] transition-colors">About the Association</Link></li>
              <li><Link href="/about/mission" className="hover:text-[#D4AF37] transition-colors">Mission & Purpose</Link></li>
              <li><Link href="/about/what-we-do" className="hover:text-[#D4AF37] transition-colors">What JPBA Does</Link></li>
              <li><Link href="/about/action-pathway" className="hover:text-[#D4AF37] transition-colors">Action Pathway</Link></li>
              <li><Link href="/about/90-day-plan" className="hover:text-[#D4AF37] transition-colors">90-Day Plan</Link></li>
            </ul>
          </div>

          {/* Column 3: Boccia */}
          <div>
            <h3 className="text-white font-bold mb-2">Learn Boccia</h3>
            <div className="h-[2px] w-8 bg-[#D4AF37] mb-5" />
            <ul className="flex flex-col gap-3 text-sm text-white/70">
              <li><Link href="/boccia" className="hover:text-[#D4AF37] transition-colors">What is Boccia?</Link></li>
              <li><Link href="/classification" className="hover:text-[#D4AF37] transition-colors">Classification</Link></li>
              <li><Link href="/court" className="hover:text-[#D4AF37] transition-colors">Court & Equipment</Link></li>
              <li><Link href="/competition" className="hover:text-[#D4AF37] transition-colors">Competition</Link></li>
              <li><Link href="/development" className="hover:text-[#D4AF37] transition-colors">Development</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-white font-bold mb-2">Contact Us</h3>
            <div className="h-[2px] w-8 bg-[#D4AF37] mb-5" />
            <ul className="flex flex-col gap-4 text-sm text-white/70">
              <li className="flex items-start gap-3">
                <span className="text-[#D4AF37] text-lg mt-0.5">+</span>
                <span>+91 8510902424</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#D4AF37] text-lg mt-0.5">@</span>
                <span>Bocciajharkhand@gmail.com</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#D4AF37] text-lg mt-0.5">*</span>
                <span>Ranchi, Jharkhand - 834001</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/50 text-center sm:text-left">
            &copy; 2026 Jharkhand Para Boccia Association. All Rights Reserved.
          </p>
          <div className="flex gap-4 text-xs text-white/50">
            <Link href="/register" className="hover:text-[#D4AF37] transition-colors">Register</Link>
            <Link href="/contact" className="hover:text-[#D4AF37] transition-colors">Contact</Link>
            <Link href="/events" className="hover:text-[#D4AF37] transition-colors">Events</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
