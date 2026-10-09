import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://biplobisanskritik.org"),
  title: {
    default: "বিপ্লবী সাংস্কৃতিক ঐক্য | সংস্কৃতি, সৃজনশীলতা ও সামাজিক দায়বদ্ধতার প্ল্যাটফর্ম",
    template: "%s | বিপ্লবী সাংস্কৃতিক ঐক্য",
  },
  description: "বাঙালির লোকসংস্কৃতি, নাটক, আবৃত্তি, সঙ্গীত, নৃত্য ও শিল্পচর্চার জাতীয় মঞ্চ। অন্যায়ের বিরুদ্ধে আজীবন।",
  keywords: [
    "বিপ্লবী সাংস্কৃতিক ঐক্য", 
    "বাঙালি সংস্কৃতি", 
    "সাংস্কৃতিক সংগঠন", 
    "নাটক", 
    "আবৃত্তি", 
    "লোকগান", 
    "বাংলাদেশ", 
    "শিল্প সাহিত্য"
  ],
  authors: [{ name: "বিপ্লবী সাংস্কৃতিক ঐক্য" }],
  creator: "বিপ্লবী সাংস্কৃতিক ঐক্য",
  publisher: "বিপ্লবী সাংস্কৃতিক ঐক্য",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "বিপ্লবী সাংস্কৃতিক ঐক্য | অন্যায়ের বিরুদ্ধে আজীবন",
    description: "সংস্কৃতি, সৃজনশীলতা ও সামাজিক দায়বদ্ধতার প্ল্যাটফর্ম। বাঙালির লোকসংস্কৃতি, নাটক, সঙ্গীত ও গণআন্দোলনের মিলনমেলা।",
    url: "https://biplobisanskritik.org",
    siteName: "বিপ্লবী সাংস্কৃতিক ঐক্য",
    locale: "bn_BD",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "বিপ্লবী সাংস্কৃতিক ঐক্য",
    description: "সংস্কৃতি, সৃজনশীলতা ও সামাজিক দায়বদ্ধতার প্ল্যাটফর্ম। অন্যায়ের বিরুদ্ধে আজীবন।",
  },
};

const jsonLdOrganization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "বিপ্লবী সাংস্কৃতিক ঐক্য",
  "alternateName": "Biplobi Sanskritik Oikya",
  "url": "https://biplobisanskritik.org",
  "logo": "https://biplobisanskritik.org/hero-artwork.png",
  "email": "info@biplobisanskritik.org",
  "telephone": "+880 1712-345678",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "ঢাকা",
    "addressCountry": "BD"
  },
  "slogan": "অন্যায়ের বিরুদ্ধে আজীবন",
  "description": "সংস্কৃতি, সৃজনশীলতা ও সামাজিক দায়বদ্ধতার প্ল্যাটফর্ম"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="bn" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrganization) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#FAF6F0] text-[#1E1B18] selection:bg-[#9E1B22]/15 selection:text-[#9E1B22]">
        <Header />
        <main className="flex-1 flex flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
