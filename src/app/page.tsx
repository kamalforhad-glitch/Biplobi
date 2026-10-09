import type { Metadata } from "next";
import HomeView from "./HomeView";

export const metadata: Metadata = {
  title: "বিপ্লবী সাংস্কৃতিক ঐক্য | অন্যায়ের বিরুদ্ধে আজীবন",
  description: "সংস্কৃতি, সৃজনশীলতা ও সামাজিক দায়বদ্ধতার প্ল্যাটফর্ম। বাঙালির লোকসংস্কৃতি, নাটক, আবৃত্তি, সঙ্গীত, নৃত্য ও শিল্পচর্চার জাতীয় মঞ্চ। অন্যায়ের বিরুদ্ধে আজীবন।",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "বিপ্লবী সাংস্কৃতিক ঐক্য | অন্যায়ের বিরুদ্ধে আজীবন",
    description: "সংস্কৃতি, সৃজনশীলতা ও সামাজিক দায়বদ্ধতার প্ল্যাটফর্ম। বাঙালির লোকসংস্কৃতি, নাটক, সঙ্গীত ও গণআন্দোলনের মিলনমেলা।",
    url: "https://biplobisanskritik.org",
  },
};

export default function Home() {
  return <HomeView />;
}
