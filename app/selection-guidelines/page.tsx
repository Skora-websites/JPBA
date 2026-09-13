"use client";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import PageHeader from "@/app/components/PageHeader";
import { motion } from "framer-motion";

const documents = [
  {
    title: "SELECTION POLICY",
    desc: "Official BSFI athlete selection policy, eligibility requirements, evaluation methodology, and competition participation framework.",
    pdf: "/documents/Selection-Policy-Boccia-Asian-Para-Games-2026.pdf",
  },
  {
    title: "BOCCIA ASIAN PARA GAMES 2026",
    desc: "Official selection criteria, qualification process, athlete requirements and timelines for the Boccia Asian Para Games 2026.",
    pdf: "/documents/Selection-Policy-Boccia-Asian-Para-Games-2026.pdf",
  },
  {
    title: "SELECTION TRIALS APG 2026",
    desc: "Official trial schedules, athlete eligibility, evaluation standards and guidelines for APG 2026 selection events.",
    pdf: "/documents/Selection-Trials-APG-2026.pdf",
  },
];

export default function Page(){
return(<div className="flex flex-col min-h-screen bg-[#FDF8EF]"><Navbar /><PageHeader title="Selection Guidelines" image="/images/795a2335.webp" breadcrumb={[{label:"Selection Guidelines"}]} /><main className="flex-1 py-16"><div className="mx-auto max-w-[1400px] px-6 lg:px-10">

<motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.6,delay:0.15}}>
  <h2 className="text-3xl font-bold text-[#0A2F1D] mb-2">Official Documents</h2>
  <div className="w-16 h-1 bg-[#C9A84C] rounded-full mb-10" />
</motion.div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
  {documents.map((doc, i) => (
    <motion.div
      key={doc.title}
      initial={{opacity:0,y:20}}
      animate={{opacity:1,y:0}}
      transition={{duration:0.6,delay:0.2+i*0.1}}
      className="group bg-white rounded-2xl border-t-4 border-t-[#0A2F1D] border border-[#C9A84C]/15 shadow-sm hover:shadow-2xl hover:border-[#C9A84C]/50 hover:-translate-y-1 transition-all duration-300 p-8 flex flex-col"
    >
      <div className="w-14 h-14 rounded-full bg-[#0A2F1D] border border-[#0A2F1D] flex items-center justify-center mb-6 shrink-0 group-hover:bg-[#1B4E33] transition-colors">
        <svg className="w-7 h-7 text-[#E8D5A3]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      </div>
      <h3 className="text-[17px] font-bold text-[#0A2F1D] tracking-wide mb-3">{doc.title}</h3>
      <p className="text-[13px] text-[#5C5C5C] leading-relaxed mb-8 flex-1">{doc.desc}</p>
      <div className="w-full h-[2px] bg-gradient-to-r from-[#0A2F1D] via-[#C9A84C]/40 to-transparent mb-6" />
      <div className="flex flex-wrap gap-3">
        <a
          href={doc.pdf}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#C9A84C] text-[#0A2F1D] text-[11px] font-bold tracking-wider hover:bg-[#E8D5A3] transition-all shadow-md"
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
          View Document
        </a>
        <a
          href={doc.pdf}
          download
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#C9A84C] text-[#C9A84C] text-[11px] font-bold tracking-wider hover:bg-[#C9A84C] hover:text-[#0A2F1D] transition-all"
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3" /></svg>
          Download PDF
        </a>
      </div>
    </motion.div>
  ))}
</div>

<motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.6,delay:0.2}} className="bg-white rounded-2xl shadow-xl border border-[#C9A84C]/20 p-8 md:p-12"><h2 className="text-3xl font-bold text-[#0A2F1D] mb-6">Selection Guidelines</h2><p className="text-[#5C5C5C] text-lg leading-relaxed mb-4">Criteria for JPBA athletes to represent Jharkhand at competitions.</p><ul className="list-disc pl-6 space-y-2 mb-6 text-[#5C5C5C]"><li>Valid JPBA registration and classification</li><li>Minimum state event participation</li><li>Performance ranking at qualifiers</li><li>Medical fitness certification</li><li>Anti-doping compliance</li><li>Good conduct record</li></ul><p className="text-[#5C5C5C] text-lg leading-relaxed">Selection conducted by JPBA technical committee. Appeals within 48 hours of notification.</p></motion.div></div></main><Footer /></div>);}
