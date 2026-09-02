"use client";
import { useState } from "react";
import { useRegistrations } from "@/contexts/RegistrationContext";
import { jharkhandDistricts } from "@/data/jharkhandDistricts";
import type { RegistrationFormData } from "@/types/registration";

interface Props { isOpen: boolean; onClose: () => void; }
const initialData: RegistrationFormData = { fullName: "", dateOfBirth: "", gender: "", phone: "", email: "", address: "", district: "", underlyingCondition: "", impairmentType: "", micStatus: "", photoUrl: "", idProofUrl: "", medicalCertUrl: "" };
const steps = ["Personal Info", "Disability Info", "Documents", "Review"];

export default function RegistrationForm({ isOpen, onClose }: Props) {
  const { addRegistration } = useRegistrations();
  const [step, setStep] = useState(0);
  const [data, setData] = useState<RegistrationFormData>(initialData);
  const [submitted, setSubmitted] = useState(false);
  if (!isOpen) return null;
  const update = (field: keyof RegistrationFormData, value: string) => setData((prev) => ({ ...prev, [field]: value }));
  const canNext = () => {
    if (step === 0) return data.fullName && data.dateOfBirth && data.gender && data.phone && data.district;
    if (step === 1) return data.underlyingCondition && data.impairmentType && data.micStatus;
    return true;
  };
  const handleSubmit = () => { addRegistration(data); setSubmitted(true); };
  const inputClass = "w-full rounded-lg border border-[#E5E7EB] bg-white px-4 py-3 text-sm text-[#1a1a2e] placeholder:text-[#9CA3AF] focus:border-[#FF9933] focus:outline-none focus:ring-2 focus:ring-[#FF9933]/10 transition-colors";

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 p-4">
      <div className="w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white border border-[#E5E7EB] shadow-2xl">
        <div className="flex items-center justify-between p-6 border-b border-[#E5E7EB]">
          <div>
            <h2 className="text-xl font-bold text-[#1a1a2e]">Player Registration</h2>
            <p className="text-sm text-[#9CA3AF] mt-1">{submitted ? "Registration submitted!" : "Step " + (step + 1) + " of " + steps.length + ": " + steps[step]}</p>
          </div>
          <button onClick={onClose} className="h-8 w-8 rounded-lg bg-[#F8F9FA] border border-[#E5E7EB] flex items-center justify-center text-[#9CA3AF] hover:text-[#1a1a2e] transition-colors">&times;</button>
        </div>
        {!submitted && (
          <div className="px-6 pt-4">
            <div className="flex gap-1">{steps.map((_, i) => (<div key={i} className={"h-1 flex-1 rounded-full transition-colors " + (i <= step ? "bg-[#FF9933]" : "bg-[#E5E7EB]")} />))}</div>
            <div className="flex justify-between mt-2">{steps.map((s, i) => (<span key={s} className={"text-[10px] " + (i <= step ? "text-[#FF9933] font-bold" : "text-[#9CA3AF]")}>{s}</span>))}</div>
          </div>
        )}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-8">
              <div className="mx-auto h-16 w-16 rounded-full bg-[#138808]/10 flex items-center justify-center mb-4"><span className="text-3xl text-[#138808]">&#10003;</span></div>
              <h3 className="text-xl font-bold text-[#1a1a2e] mb-2">Registration Submitted!</h3>
              <p className="text-[#4A5568] mb-2">Your ID: <span className="text-[#FF9933] font-mono font-bold">JPBA-{Date.now().toString(36).toUpperCase()}</span></p>
              <p className="text-sm text-[#9CA3AF]">You will be contacted by the JPBA team.</p>
              <button onClick={onClose} className="mt-6 rounded-full bg-[#FF9933] px-6 py-3 text-sm font-bold text-white hover:bg-[#E8850A] transition-colors shadow-sm">Close</button>
            </div>
          ) : (
            <>
              {step === 0 && (<div className="space-y-4">
                <div><label className="block text-xs text-[#4A5568] mb-1.5 font-medium">Full Name *</label><input type="text" className={inputClass} placeholder="Enter your full name" value={data.fullName} onChange={(e) => update("fullName", e.target.value)} /></div>
                <div className="grid grid-cols-2 gap-4">
                  <div><label className="block text-xs text-[#4A5568] mb-1.5 font-medium">Date of Birth *</label><input type="date" className={inputClass} value={data.dateOfBirth} onChange={(e) => update("dateOfBirth", e.target.value)} /></div>
                  <div><label className="block text-xs text-[#4A5568] mb-1.5 font-medium">Gender *</label><select className={inputClass} value={data.gender} onChange={(e) => update("gender", e.target.value)}><option value="">Select</option><option value="male">Male</option><option value="female">Female</option><option value="other">Other</option></select></div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div><label className="block text-xs text-[#4A5568] mb-1.5 font-medium">Phone *</label><input type="tel" className={inputClass} placeholder="+91-XXXX-XXXXXX" value={data.phone} onChange={(e) => update("phone", e.target.value)} /></div>
                  <div><label className="block text-xs text-[#4A5568] mb-1.5 font-medium">Email</label><input type="email" className={inputClass} placeholder="email@example.com" value={data.email} onChange={(e) => update("email", e.target.value)} /></div>
                </div>
                <div><label className="block text-xs text-[#4A5568] mb-1.5 font-medium">Address</label><textarea className={inputClass} rows={2} placeholder="Full address" value={data.address} onChange={(e) => update("address", e.target.value)} /></div>
                <div><label className="block text-xs text-[#4A5568] mb-1.5 font-medium">District *</label><select className={inputClass} value={data.district} onChange={(e) => update("district", e.target.value)}><option value="">Select District</option>{jharkhandDistricts.map((d) => (<option key={d.name} value={d.name}>{d.name}</option>))}</select></div>
              </div>)}
              {step === 1 && (<div className="space-y-4">
                <div><label className="block text-xs text-[#4A5568] mb-1.5 font-medium">Underlying Health Condition *</label><select className={inputClass} value={data.underlyingCondition} onChange={(e) => update("underlyingCondition", e.target.value)}><option value="">Select</option><option value="cerebral-palsy">Cerebral Palsy</option><option value="tbi-stroke">TBI / Stroke</option><option value="spinal-cord">Spinal Cord Injury</option><option value="muscular-dystrophy">Muscular Dystrophy</option><option value="spina-bifida">Spina Bifida</option><option value="limb-deficiency">Limb Deficiencies</option><option value="other">Other</option></select></div>
                <div><label className="block text-xs text-[#4A5568] mb-1.5 font-medium">Impairment Type *</label><select className={inputClass} value={data.impairmentType} onChange={(e) => update("impairmentType", e.target.value)}><option value="">Select</option><option value="hypertonia">Hypertonia</option><option value="ataxia">Ataxia</option><option value="athetosis">Athetosis</option><option value="impaired-muscle-power">Impaired Muscle Power</option><option value="limb-deficiency">Limb Deficiency</option><option value="other">Other</option></select></div>
                <div><label className="block text-xs text-[#4A5568] mb-1.5 font-medium">MIC Status *</label><select className={inputClass} value={data.micStatus} onChange={(e) => update("micStatus", e.target.value)}><option value="">Select</option><option value="classified">Classified (BC1-BC4)</option><option value="pending">Pending Classification</option><option value="not-yet">Not Yet Assessed</option></select></div>
              </div>)}
              {step === 2 && (<div className="space-y-4">
                {[{label:"Passport-size Photo",field:"photoUrl" as const},{label:"Identity Proof",field:"idProofUrl" as const},{label:"Medical Certificate",field:"medicalCertUrl" as const}].map((doc) => (
                  <div key={doc.field}>
                    <label className="block text-
-xs text-[#4A5568] mb-1.5 font-medium">{doc.label}</label>
                    <div className="flex items-center gap-3">
                      <input type="file" accept="image/*,.pdf" className="hidden" id={doc.field} onChange={(e) => { const f = e.target.files?.[0]; if (f) update(doc.field, f.name); }} />
                      <label htmlFor={doc.field} className="flex-1 rounded-lg border border-dashed border-[#E5E7EB] bg-[#F8F9FA] px-4 py-6 text-center cursor-pointer hover:border-[#FF9933] transition-colors text-sm text-[#9CA3AF]">{data[doc.field] || "Click to upload"}</label>
                      {data[doc.field] && <span className="text-xs text-[#138808] font-bold">&#10003;</span>}
                    </div>
                  </div>
                ))}
              </div>)}
              {step === 3 && (<div className="space-y-4">
                <h3 className="text-lg font-bold text-[#1a1a2e] mb-4">Review</h3>
                {[{label:"Personal",items:[{k:"Name",v:data.fullName},{k:"Phone",v:data.phone},{k:"District",v:data.district}]},{label:"Disability",items:[{k:"Condition",v:data.underlyingCondition},{k:"MIC",v:data.micStatus}]}].map((s) => (
                  <div key={s.label} className="rounded-lg bg-[#F8F9FA] border border-[#E5E7EB] p-4">
                    <p className="text-sm font-bold text-[#1a1a2e] mb-3">{s.label}</p>
                    {s.items.map((item) => (<div key={item.k} className="flex justify-between text-sm py-1"><span className="text-[#9CA3AF]">{item.k}</span><span className="text-[#1a1a2e] font-medium">{item.v}</span></div>))}
                  </div>
                ))}
              </div>)}
              <div className="flex justify-between mt-8 pt-6 border-t border-[#E5E7EB]">
                <button onClick={() => setStep((s) => Math.max(0, s - 1))} disabled={step === 0} className="rounded-full border border-[#E5E7EB] px-6 py-3 text-sm font-bold text-[#4A5568] hover:border-[#FF9933] disabled:opacity-30 disabled:cursor-not-allowed transition-colors">Back</button>
                {step < 3 ? (
                  <button onClick={() => setStep((s) => Math.min(3, s + 1))} disabled={!canNext()} className="rounded-full bg-[#FF9933] px-6 py-3 text-sm font-bold text-white hover:bg-[#E8850A] disabled:opacity-40 disabled:cursor-not-allowed shadow-sm transition-all">Next Step &rarr;</button>
                ) : (
                  <button onClick={handleSubmit} className="rounded-full bg-[#138808] px-6 py-3 text-sm font-bold text-white hover:bg-[#0E6606] shadow-sm transition-all">Submit &#10003;</button>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
