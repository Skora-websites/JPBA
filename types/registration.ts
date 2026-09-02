export interface Registration {
  id: string;
  // Personal Info
  fullName: string;
  dateOfBirth: string;
  gender: string;
  phone: string;
  email: string;
  address: string;
  district: string;
  // Disability Info
  underlyingCondition: string;
  impairmentType: string;
  micStatus: string;
  // Documents (file names / base64 placeholders)
  photoUrl: string;
  idProofUrl: string;
  medicalCertUrl: string;
  // Meta
  status: "pending" | "approved" | "rejected";
  submittedAt: string;
  adminNotes: string;
}

export type RegistrationFormData = Omit<
  Registration,
  "id" | "status" | "submittedAt" | "adminNotes"
>;
