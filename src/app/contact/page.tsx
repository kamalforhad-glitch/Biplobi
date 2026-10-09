import type { Metadata } from "next";
import ContactView from "./ContactView";

export const metadata: Metadata = {
  title: "যোগাযোগ ও সচিবালয়",
  description: "বিপ্লবী সাংস্কৃতিক ঐক্যের কেন্দ্রীয় কার্যালয় (ঢাকা, বাংলাদেশ), হেল্পলাইন +880 1712-345678, অফিসিয়াল ইমেইল info@biplobisanskritik.org এবং কার্যদিবস সময়সূচি।",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "যোগাযোগ ও সচিবালয় | বিপ্লবী সাংস্কৃতিক ঐক্য",
    description: "আমাদের সাথে সরাসরি যোগাযোগ করুন। অফিসিয়াল ইমেইল, ফোন ও অবস্থান নির্দেশিকা।",
    url: "https://biplobisanskritik.org/contact",
  },
};

export default function ContactPage() {
  return <ContactView />;
}
