"use client";
import Link from "next/link";
import { motion } from "framer-motion";

interface PageHeaderProps {
  title: string;
  breadcrumb: { label: string; href?: string }[];
  image?: string;
}

export default function PageHeader({ title, breadcrumb, image = "/boccia.png" }: PageHeaderProps) {
  return (
    <div className="relative pt-[180px] pb-16 min-h-[300px] overflow-hidden flex items-center bg-[#FDF8EF]">
      {/* Full background image */}
      <img
        src={image}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Cream fade: strong on left (text side) → clear image on right */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, rgba(253,248,239,0.96) 0%, rgba(253,248,239,0.92) 38%, rgba(253,248,239,0.55) 62%, rgba(253,248,239,0.18) 82%, rgba(253,248,239,0.05) 100%)",
        }}
      />
      {/* Bottom fade into page background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, rgba(253,248,239,1) 0%, rgba(253,248,239,0) 30%)",
        }}
      />

      <div className="mx-auto max-w-[1400px] w-full px-6 lg:px-10 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-[12px] font-bold tracking-wider uppercase text-gray-500 mb-6">
            <Link href="/" className="hover:text-[#B8923A] transition-colors">
              Home
            </Link>
            {breadcrumb.map((item, index) => (
              <span key={index} className="flex items-center gap-2">
                <span className="text-gray-400">/</span>
                {item.href ? (
                  <Link
                    href={item.href}
                    className="hover:text-[#B8923A] transition-colors"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-[#B8923A]">{item.label}</span>
                )}
              </span>
            ))}
          </nav>

          {/* Title */}
          <h1 className="text-[40px] md:text-[56px] font-bold text-[#0A2F1D] leading-tight">
            {title}
          </h1>
          <div className="relative w-24 h-1.5 mt-6 overflow-hidden">
            <div className="absolute inset-0 bg-[#C9A84C]" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
