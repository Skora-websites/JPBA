"use client";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import PageHeader from "@/app/components/PageHeader";
import { motion } from "framer-motion";

export default function ComplianceRegulationsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FDF8EF]">
      <Navbar />
      
      <PageHeader 
        title="Compliance & Regulations" 
        breadcrumb={[{"label":"MYAS Disclosures"},{"label":"Compliance"}]} 
      />

      <main className="flex-1 py-16">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-xl border border-[#C9A84C]/20 p-8 md:p-12 min-h-[400px]"
          >
            <h2 className="text-3xl font-bold text-[#0A2F1D] mb-6">Compliance & Regulations</h2>
            <div className="prose max-w-none text-gray-600">
              <p className="text-lg leading-relaxed mb-4">
                Welcome to the Compliance & Regulations section of the Jharkhand Para Boccia Association. 
                This section is currently being updated to reflect our latest guidelines and information.
              </p>
              <p className="text-lg leading-relaxed">
                Please check back soon for complete details.
              </p>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
