import type { Metadata } from "next";
import MediaView from "./MediaView";

export const metadata: Metadata = {
  title: "আলোকচিত্র ও ভিডিও সংগ্রহশালা",
  description: "বিপ্লবী সাংস্কৃতিক ঐক্যের মঞ্চনাটক, গণসংগীত উৎসব, পথনাটক, আলপনা উৎসব ও গ্রামীণ লোকমেলার আলোকচিত্র এবং প্রামাণ্য ভিডিও সংগ্রহশালা।",
  alternates: {
    canonical: "/media",
  },
  openGraph: {
    title: "আলোকচিত্র ও ভিডিও সংগ্রহশালা | বিপ্লবী সাংস্কৃতিক ঐক্য",
    description: "সাংস্কৃতিক দৃশ্যমালা ও ভিডিও সংরক্ষণাগার। ক্যামেরার চোখে বাঙালির সাংস্কৃতিক লড়াইয়ের জীবন্ত মুহূর্ত।",
    url: "https://biplobisanskritik.org/media",
  },
};

export default function MediaPage() {
  return <MediaView />;
}
