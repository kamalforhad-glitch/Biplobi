import type { Metadata } from "next";
import ActivitiesView from "./ActivitiesView";

export const metadata: Metadata = {
  title: "কার্যক্রম ও কর্মসূচি",
  description: "বিপ্লবী সাংস্কৃতিক ঐক্যের মাঠপর্যায়ের সাংস্কৃতিক অনুষ্ঠান, বৈশাখী উৎসব, প্রশিক্ষণ কর্মসূচি, লোকউৎসব এবং বিশেষ উদ্যোগসমূহ।",
  alternates: {
    canonical: "/activities",
  },
  openGraph: {
    title: "কার্যক্রম ও কর্মসূচি | বিপ্লবী সাংস্কৃতিক ঐক্য",
    description: "নাটক, সংগীত, আবৃত্তি ও লোকউৎসবের মধ্য দিয়ে মানুষের ভেতরে শুভবোধের উন্মেষ ঘটানো এবং অন্যায়ের বিরুদ্ধে সাংস্কৃতিক গণপ্রতিরোধ গড়ে তোলাই আমাদের প্রধান কাজ।",
    url: "https://biplobisanskritik.org/activities",
  },
};

export default function ActivitiesPage() {
  return <ActivitiesView />;
}
