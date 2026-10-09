import type { Metadata } from "next";
import MembershipView from "./MembershipView";

export const metadata: Metadata = {
  title: "সদস্যপদ নিবন্ধন",
  description: "বিপ্লবী সাংস্কৃতিক ঐক্যের সদস্য হোন। অন্যায়ের বিরুদ্ধে আজীবন লড়াইয়ে বাঙালির মানবিক, অসাম্প্রদায়িক ও প্রগতিশীল সাংস্কৃতিক নবজাগরণে অংশ নিন।",
  alternates: {
    canonical: "/membership",
  },
  openGraph: {
    title: "সদস্যপদ নিবন্ধন | বিপ্লবী সাংস্কৃতিক ঐক্য",
    description: "অনলাইন সদস্যপদ নিবন্ধন ফরম ও সদস্যপদের বিভিন্ন ধারা। বিপ্লবী সাংস্কৃতিক ঐক্যে যুক্ত হোন।",
    url: "https://biplobisanskritik.org/membership",
  },
};

export default function MembershipPage() {
  return <MembershipView />;
}
