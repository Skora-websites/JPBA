"use client";
import Link from "next/link";
import { motion } from "framer-motion";

interface PageHeaderProps {
  title: string;
  breadcrumb: { label: string; href?: string }[];
}

export default function PageHeader({ title, breadcrumb }: PageHeaderProps) {
  return (
    <div className="relative pt-[180px] pb-16 min-h-[300px] overflow-hidden flex items-center"
      style={{
        background: "linear-gradient(135deg, #FDF8EF 0%, #FFFFFF 50%, #F4F1E9 100%)",
      }}
    >
      {/* Background textures */}
      {/* Floating gradient orbs */}
      {/* Diagonal texture overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: "repeating-linear-gradient(45deg, rgba(255,255,255,0.02) 0, rgba(255,255,255,0.02) 1px, transparent 1px, transparent 10px)",
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
