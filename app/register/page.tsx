"use client";
import { useState } from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { useRegistrations } from "@/contexts/RegistrationContext";
import { RegistrationFormData } from "@/types/registration";

export default function RegisterPage() {
  const [showReg, setShowReg] = useState(false);
  const { addRegistration } = useRegistrations();
  
  const [formData, setFormData] = useState<RegistrationFormData>({
    fullName: "",
    dateOfBirth: "",
    gender: "",
    phone: "",
    email: "",
    address: "",
    district: "",
    underlyingCondition: "",
    impairmentType: "",
    micStatus: "",
    photoUrl: "",
    idProofUrl: "",
    medicalCertUrl: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (files && files.length > 0) {
      // Simulate file upload by storing the file name
      setFormData((prev) => ({ ...prev, [name]: files[0].name }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addRegistration(formData);
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#F5F5DC]">
      <Navbar onRegisterClick={() => setShowReg(true)} />
      <main className="flex-1">
        <section className="relative pt-[120px] pb-16 min-h-[280px] border-b border-[#D4AF37]/20" style={{ background: "linear-gradient(135deg, #FFF5EB 0%, #FFFFFF 50%, #F0FFF0 100%)" }}>
          <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-16 h-1 bg-[#D4AF37] rounded-full mb-6" />
                <p className="text-[#D4AF37] text-[11px] font-bold tracking-[0.3em] uppercase mb-3">REGISTRATION</p>
                <h1 className="text-[36px] sm:text-[44px] font-bold text-[#1B5E20] leading-tight mb-4">Register as an Athlete</h1>
                <p className="text-[15px] text-gray-600 max-w-[600px] leading-relaxed">
                  Complete the registration form below to join JPBA. Open to all eligible athletes across Jharkhand seeking to compete in Para Boccia.
                </p>
              </div>
              <div className="hidden lg:block">
                <div className="rounded-2xl overflow-hidden shadow-xl border border-[#D4AF37]/20">
                  <img src="https://images.unsplash.com/photo-1564769662533-4f00a87b4056?w=800&q=80" alt="Register" className="w-full h-[350px] object-cover" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="mx-auto max-w-[900px] px-6">
            {submitted ? (
              <div className="text-center py-16 bg-[#F0FFF0] rounded-xl border border-[#1B5E20]/20 shadow-lg">
                <div className="w-16 h-16 bg-[#1B5E20] rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </div>
                <h2 className="text-3xl font-bold text-[#1B5E20] mb-4">Registration Submitted!</h2>
                <p className="text-gray-600 mb-8">Thank you for registering. We will review your application and get back to you soon.</p>
                <button onClick={() => { setSubmitted(false); setFormData({
                    fullName: "", dateOfBirth: "", gender: "", phone: "", email: "", address: "", district: "", underlyingCondition: "", impairmentType: "", micStatus: "", photoUrl: "", idProofUrl: "", medicalCertUrl: "",
                })}} className="px-6 py-3 bg-[#D4AF37] text-white rounded-lg font-semibold hover:bg-[#b8962c] transition-colors">
                  Submit Another Application
                </button>
              </div>
            ) : (
              <div className="rounded-xl border border-[#D4AF37]/20 overflow-hidden shadow-lg bg-white p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h3 className="text-2xl font-bold text-[#1B5E20] mb-6 pb-2 border-b border-gray-100">Personal Information</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                      <input required type="text" name="fullName" value={formData.fullName} onChange={handleChange} className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-[#D4AF37] focus:ring-[#D4AF37] outline-none" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Date of Birth *</label>
                      <input required type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-[#D4AF37] focus:ring-[#D4AF37] outline-none" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Gender *</label>
                      <select required name="gender" value={formData.gender} onChange={handleChange} className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-[#D4AF37] focus:ring-[#D4AF37] outline-none">
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                      <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-[#D4AF37] focus:ring-[#D4AF37] outline-none" />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                      <input required type="email" name="email" value={formData.email} onChange={handleChange} className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-[#D4AF37] focus:ring-[#D4AF37] outline-none" />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Residential Address *</label>
                      <textarea required name="address" value={formData.address} onChange={handleChange} rows={3} className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-[#D4AF37] focus:ring-[#D4AF37] outline-none"></textarea>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">District *</label>
                      <input required type="text" name="district" value={formData.district} onChange={handleChange} placeholder="e.g. Ranchi" className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-[#D4AF37] focus:ring-[#D4AF37] outline-none" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-[#1B5E20] mt-10 mb-6 pb-2 border-b border-gray-100">Disability Information</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Underlying Condition *</label>
                      <select required name="underlyingCondition" value={formData.underlyingCondition} onChange={handleChange} className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-[#D4AF37] focus:ring-[#D4AF37] outline-none">
                        <option value="">Select Condition</option>
                        <option value="Cerebral-Palsy">Cerebral Palsy</option>
                        <option value="Muscular-Dystrophy">Muscular Dystrophy</option>
                        <option value="Spinal-Cord-Injury">Spinal Cord Injury</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Impairment Type *</label>
                      <input required type="text" name="impairmentType" value={formData.impairmentType} onChange={handleChange} placeholder="e.g. BC1, BC2, BC3, BC4" className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-[#D4AF37] focus:ring-[#D4AF37] outline-none" />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">MIC Status (Master International Classification)</label>
                      <select name="micStatus" value={formData.micStatus} onChange={handleChange} className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-[#D4AF37] focus:ring-[#D4AF37] outline-none">
                        <option value="">Select Status</option>
                        <option value="New">New / Not Classified</option>
                        <option value="Review">Review</option>
                        <option value="Confirmed">Confirmed</option>
                      </select>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-[#1B5E20] mt-10 mb-6 pb-2 border-b border-gray-100">Documents</h3>
                  
                  <div className="grid grid-cols-1 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Recent Photograph *</label>
                      <input required type="file" name="photoUrl" onChange={handleFileChange} className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#F0FFF0] file:text-[#1B5E20] hover:file:bg-[#e0f0e0]" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">ID Proof (Aadhar/Voter ID) *</label>
                      <input required type="file" name="idProofUrl" onChange={handleFileChange} className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#F0FFF0] file:text-[#1B5E20] hover:file:bg-[#e0f0e0]" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Medical Certificate *</label>
                      <input required type="file" name="medicalCertUrl" onChange={handleFileChange} className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#F0FFF0] file:text-[#1B5E20] hover:file:bg-[#e0f0e0]" />
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-gray-100">
                    <button type="submit" className="w-full py-4 px-6 bg-[#1B5E20] text-white rounded-xl font-bold text-lg hover:bg-[#154a19] shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5">
                      Submit Registration
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
