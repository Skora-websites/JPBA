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
    <div className="relative pt-[180px] pb-16 min-h-[300px] overflow-hidden flex items-center bg-[#0A2F1D]">
      {/* Full background image */}
      <img
        src={image}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Gradient fade: dark on left (for text) to transparent on right (showing image) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(to right, rgba(10,47,29,0.92) 0%, rgba(10,47,29,0.85) 35%, rgba(10,47,29,0.5) 60%, rgba(10,47,29,0.15) 80%, transparent 100%)",
        }}
      />
      {/* Bottom gradient fade */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(to top, rgba(10,47,29,0.6) 0%, transparent 40%)",
        }}
      />

      <div className="mx-auto max-w-[1400px] w-full px-6 lg:px-10 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-[12px] font-bold tracking-wider uppercase text-white/60 mb-6">
            <Link href="/" className="hover:text-[#C9A84C] transition-colors">
              Home
            </Link>
            {breadcrumb.map((item, index) => (
              <span key={index} className="flex items-center gap-2">
                <span className="text-white/40">/</span>
                {item.href ? (
                  <Link
                    href={item.href}
                    className="hover:text-[#C9A84C] transition-colors"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-[#C9A84C]">{item.label}</span>
                )}
              </span>
            ))}
          </nav>

          {/* Title */}
          <h1 className="text-[40px] md:text-[56px] font-bold text-white leading-tight">
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
