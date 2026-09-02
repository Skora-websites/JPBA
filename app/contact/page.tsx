"use client";
import { useState } from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import RegistrationForm from "@/app/components/RegistrationForm";

export default function ContactPage() {
  const [showReg, setShowReg] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0APhone: ${phone}%0D%0A%0D%0A${encodeURIComponent(message)}`;
    const mailtoLink = `mailto:Bocciajharkhand@gmail.com?subject=${encodeURIComponent(subject || "Contact from JPBA Website")}&body=${body}`;
    window.location.href = mailtoLink;
    setSent(true);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#F5F5DC]">
      <Navbar onRegisterClick={() => setShowReg(true)} />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative pt-[120px] pb-16 min-h-[280px] border-b border-[#D4AF37]/20" style={{ background: "linear-gradient(135deg, #FFF5EB 0%, #FFFFFF 50%, #F0FFF0 100%)" }}>
          <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-16 h-1 bg-[#D4AF37] rounded-full mb-6" />
                <p className="text-[#D4AF37] text-[11px] font-bold tracking-[0.3em] uppercase mb-3">GET IN TOUCH</p>
                <h1 className="text-[36px] sm:text-[44px] font-bold text-[#1B5E20] leading-tight mb-4">Contact JPBA</h1>
                <p className="text-[15px] text-gray-600 max-w-[600px] leading-relaxed">
                  Have questions about Boccia, registration, or getting involved? We would love to hear from you.
                </p>
              </div>
              <div className="hidden lg:block">
                <div className="rounded-2xl overflow-hidden shadow-xl border border-[#D4AF37]/20">
                  <img src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=800&q=80" alt="Contact JPBA" className="w-full h-[350px] object-cover" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-16 bg-[#F5F5DC]">
          <div className="mx-auto max-w-[1000px] px-6 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
              {/* Contact Info */}
              <div className="lg:col-span-2">
                <h2 className="text-[20px] font-bold text-[#1B5E20] mb-6">Contact Information</h2>
                <div className="space-y-4">
                  <div className="rounded-xl bg-white border border-[#D4AF37]/20 p-5">
                    <p className="text-[10px] text-gray-400 mb-1 uppercase tracking-wider">Email</p>
                    <a href="mailto:Bocciajharkhand@gmail.com" className="text-[14px] font-semibold text-[#1B5E20] hover:text-[#D4AF37] transition-colors">Bocciajharkhand@gmail.com</a>
                  </div>
                  <div className="rounded-xl bg-white border border-[#D4AF37]/20 p-5">
                    <p className="text-[10px] text-gray-400 mb-1 uppercase tracking-wider">Phone</p>
                    <a href="tel:+918510902424" className="text-[14px] font-semibold text-[#1B5E20] hover:text-[#D4AF37] transition-colors">+91 8510902424</a>
                  </div>
                  <div className="rounded-xl bg-white border border-[#D4AF37]/20 p-5">
                    <p className="text-[10px] text-gray-400 mb-1 uppercase tracking-wider">Affiliation</p>
                    <p className="text-[14px] font-semibold text-[#1B5E20]">Boccia Sports Federation of India (BSFI)</p>
                  </div>
                  <div className="rounded-xl bg-white border border-[#D4AF37]/20 p-5">
                    <p className="text-[10px] text-gray-400 mb-1 uppercase tracking-wider">Address</p>
                    <p className="text-[14px] font-semibold text-[#1B5E20]">Ranchi, Jharkhand - 834001</p>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-3">
                <h2 className="text-[20px] font-bold text-[#1B5E20] mb-6">Send a Message</h2>
                {sent ? (
                  <div className="rounded-xl bg-[#1B5E20]/10 border border-[#1B5E20]/30 p-8 text-center">
                    <p className="text-[20px] font-bold text-[#1B5E20] mb-2">Thank you!</p>
                    <p className="text-[14px] text-gray-600 mb-4">Your email client should have opened with the message. If it did not, please send your message directly to <strong>Bocciajharkhand@gmail.com</strong></p>
                    <button onClick={() => { setSent(false); setName(""); setEmail(""); setPhone(""); setSubject(""); setMessage(""); }} className="rounded-full bg-[#1B5E20] px-6 py-2 text-[13px] font-bold text-white hover:bg-[#1B5E20] transition-colors">Send Another Message</button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[12px] font-bold text-gray-600 mb-1">Your Name *</label>
                        <input type="text" required value={name} onChange={(e) => setName(e.target.value)} placeholder="Full name" className="w-full rounded-lg border border-[#D4AF37]/20 bg-white px-4 py-3 text-[14px] text-gray-800 placeholder:text-gray-400 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all" />
                      </div>
                      <div>
                        <label className="block text-[12px] font-bold text-gray-600 mb-1">Email Address *</label>
                        <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="your@email.com" className="w-full rounded-lg border border-[#D4AF37]/20 bg-white px-4 py-3 text-[14px] text-gray-800 placeholder:text-gray-400 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[12px] font-bold text-gray-600 mb-1">Phone (optional)</label>
                        <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+91 XXXXX XXXXX" className="w-full rounded-lg border border-[#D4AF37]/20 bg-white px-4 py-3 text-[14px] text-gray-800 placeholder:text-gray-400 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all" />
                      </div>
                      <div>
                        <label className="block text-[12px] font-bold text-gray-600 mb-1">Subject</label>
                        <select value={subject} onChange={(e) => setSubject(e.target.value)} className="w-full rounded-lg border border-[#D4AF37]/20 bg-white px-4 py-3 text-[14px] text-gray-800 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all">
                          <option value="">Select a topic...</option>
                          <option value="Athlete Registration">Athlete Registration</option>
                          <option value="Coaching Opportunities">Coaching Opportunities</option>
                          <option value="Volunteering">Volunteering</option>
                          <option value="School Programs">School Programs</option>
                          <option value="Partnership / Sponsorship">Partnership / Sponsorship</option>
                          <option value="General Inquiry">General Inquiry</option>
                        </select>
                      </div>
     
                    </div>
                    <div>
                      <label className="block text-[12px] font-bold text-gray-600 mb-1">Your Message *</label>
                      <textarea rows={5} required value={message} onChange={(e) => setMessage(e.target.value)} placeholder="How can we help you?" className="w-full rounded-lg border border-[#D4AF37]/20 bg-white px-4 py-3 text-[14px] text-gray-800 placeholder:text-gray-400 resize-none focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all" />
                    </div>
                    <button type="submit" className="rounded-full bg-[#1B5E20] px-8 py-3 text-[13px] font-bold text-white tracking-wide shadow-lg shadow-[#1B5E20]/25 hover:bg-[#1B5E20] transition-all active:scale-[0.97]">
                      Send Message
                    </button>
                    <p className="text-[12px] text-gray-400">This will open your email client with the message addressed to Bocciajharkhand@gmail.com</p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <RegistrationForm isOpen={showReg} onClose={() => setShowReg(false)} />
    </div>
  );
}
