import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "বিপ্লবী সাংস্কৃতিক ঐক্য | সংস্কৃতি, সৃজনশীলতা ও সামাজিক দায়বদ্ধতার প্ল্যাটফর্ম",
  description: "বাঙালির লোকসংস্কৃতি, নাটক, আবৃত্তি, সঙ্গীত, নৃত্য ও শিল্পচর্চার জাতীয় মঞ্চ। অন্যায়ের বিরুদ্ধে আজীবন।",
  keywords: ["বিপ্লবী সাংস্কৃতিক ঐক্য", "বাঙালি সংস্কৃতি", "সাংস্কৃতিক সংগঠন", "নাটক", "আবৃত্তি", "লোকগান", "বাংলাদেশ", "শিল্প সাহিত্য"],
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
      </head>
      <body className="min-h-screen flex flex-col bg-[#FAF6F0] text-[#1E1B18] selection:bg-[#9E1B22]/15 selection:text-[#9E1B22]">
        {children}
      </body>
    </html>
  );
}
