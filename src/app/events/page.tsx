import type { Metadata } from "next";
import EventsView from "./EventsView";

export const metadata: Metadata = {
  title: "সাংস্কৃতিক দিনপঞ্জি ও ইভেন্ট",
  description: "বিপ্লবী সাংস্কৃতিক ঐক্যের আসন্ন ও চলমান নাট্যোৎসব, গণসংগীত পদযাত্রা, কবিতা পাঠের আসর ও তরুণ নেতৃত্ব ক্যাম্পের পূর্ণাঙ্গ সূচি ও বিবরণ।",
  alternates: {
    canonical: "/events",
  },
  openGraph: {
    title: "সাংস্কৃতিক দিনপঞ্জি ও ইভেন্ট | বিপ্লবী সাংস্কৃতিক ঐক্য",
    description: "আসন্ন ও চলমান সাংস্কৃতিক অনুষ্ঠানমালা ও দিনপঞ্জি। বছরজুড়ে দেশব্যাপী আমাদের নিয়মিত আয়োজন।",
    url: "https://biplobisanskritik.org/events",
  },
};

export default function EventsPage() {
  return <EventsView />;
}
