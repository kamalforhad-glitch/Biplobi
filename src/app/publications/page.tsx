import type { Metadata } from "next";
import PublicationsView from "./PublicationsView";

export const metadata: Metadata = {
  title: "প্রকাশনা ও গবেষণা সাময়িকী",
  description: "বিপ্লবী সাংস্কৃতিক ঐক্যের প্রকাশিত গবেষণা গ্রন্থ, লিটল ম্যাগাজিন, প্রবন্ধ সংকলন ও নাট্য গবেষণা সাময়িকী। বিনামূল্যে ডিজিটাল সংস্করণ।",
  alternates: {
    canonical: "/publications",
  },
  openGraph: {
    title: "প্রকাশনা ও গবেষণা সাময়িকী | বিপ্লবী সাংস্কৃতিক ঐক্য",
    description: "জ্ঞান ও সাহিত্যের উন্মুক্ত ভাণ্ডার। বিপ্লবী সাংস্কৃতিক ঐক্যের গবেষণা গ্রন্থ, পত্রিকা ও সাহিত্য সাময়িকী।",
    url: "https://biplobisanskritik.org/publications",
  },
};

export default function PublicationsPage() {
  return <PublicationsView />;
}
