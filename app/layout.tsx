import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { RegistrationProvider } from "@/contexts/RegistrationContext";
import Loader from "./components/Loader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "JPBA | Jharkhand Para Boccia Association",
    template: "%s | JPBA",
  },
  description:
    "Jharkhand Para Boccia Association (JPBA) — Precision. Strategy. Inclusion. The official governing body for Para Boccia in Jharkhand, India. Athlete development, classification, competition, and Paralympic pathway.",
  keywords: ["Boccia", "Para Boccia", "JPBA", "Jharkhand", "Paralympic sport", "disability sport", "classification", "BC1", "BC2", "BC3", "BC4"],
  openGraph: {
    title: "JPBA | Jharkhand Para Boccia Association",
    description: "Precision. Strategy. Inclusion. Official JPBA portal for Boccia in Jharkhand.",
    siteName: "JPBA",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Loader />
        <RegistrationProvider>
          {children}
        </RegistrationProvider>
      </body>
    </html>
  );
}
