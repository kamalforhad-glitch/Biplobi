"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Calendar as CalendarIcon, 
  MapPin, 
  Clock, 
  ArrowRight, 
  Filter
} from "lucide-react";
import { Container } from "@/components/layout/Container";
import { PageBanner } from "@/components/ui/PageBanner";
import { Modal } from "@/components/ui/Modal";
import { eventsData, EventItem } from "@/data/culturalData";

export default function EventsView() {
  const [selectedFilter, setSelectedFilter] = useState<string>("সব");
  const [activeModalEvent, setActiveModalEvent] = useState<EventItem | null>(null);

  // Extended events with past/upcoming
  const allEvents: EventItem[] = [
    ...eventsData,
    {
      id: "ev-5",
      month: "অক্টোবর",
      monthColor: "#047857",
      title: "জাতীয় নাট্য উৎসব ও সম্মেলন",
      category: "মঞ্চ নাটক | সম্মেলন | মতবিনিময়",
      tags: ["নাট্যোৎসব", "সম্মেলন", "পথনাটক"],
      dateString: "২৪-৩০ অক্টোবর, ২০২৬",
      venue: "বাংলাদেশ শিল্পকলা একাডেমি, সেগুনবাগিচা",
      time: "সন্ধ্যা ৬:০০ - রাত ৯:৩০",
      image: "data:image/svg+xml;charset=utf-8," + encodeURIComponent(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" width="100%" height="100%">
          <rect width="800" height="500" fill="#064E3B" />
          <circle cx="400" cy="220" r="140" fill="#FDE68A" opacity="0.3" />
          <rect x="250" y="200" width="300" height="200" rx="10" fill="#022C22" />
        </svg>
      `),
      description: "সারাদেশ থেকে নির্বাচিত ত্রিশটি নাট্যদলের অংশগ্রহণে সপ্তাহব্যাপী নাট্যোৎসব এবং সাংস্কৃতিক অধিকার বিষয়ক জাতীয় প্রতিনিধি সম্মেলন।"
    },
    {
      id: "ev-6",
      month: "ডিসেম্বর",
      monthColor: "#9E1B22",
      title: "বিজয় মেলা ও মুক্তিসংগ্রামের গান",
      category: "বিজয় উৎসব | গান | প্রদর্শনী",
      tags: ["বিজয় দিবস", "গণসংগীত", "আলোকচিত্র"],
      dateString: "১৪-১৬ ডিসেম্বর, ২০২৬",
      venue: "সোহরাওয়ার্দী উদ্যান উন্মুক্ত মঞ্চ",
      time: "বিকাল ৩:০০ - রাত ১০:০০",
      image: "data:image/svg+xml;charset=utf-8," + encodeURIComponent(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" width="100%" height="100%">
          <rect width="800" height="500" fill="#881337" />
          <circle cx="400" cy="200" r="160" fill="#F59E0B" opacity="0.4" />
        </svg>
      `),
      description: "একাত্তরের মহান মুক্তিযুদ্ধ এবং চব্বিশের গণজাগরণের স্মৃতি ও গান নিয়ে তিন দিনব্যাপী উন্মুক্ত বিজয় মেলা ও সাংস্কৃতিক সমাবেশ।"
    }
  ];

  const filterTabs = ["সব", "আসন্ন অনুষ্ঠান", "উৎসব ও মেলা", "প্রশিক্ষণ ও ক্যাম্প"];

  const filteredEvents = selectedFilter === "সব"
    ? allEvents
    : allEvents.filter(e => {
        if (selectedFilter === "উৎসব ও মেলা") return e.title.includes("উৎসব") || e.title.includes("মেলা");
        if (selectedFilter === "প্রশিক্ষণ ও ক্যাম্প") return e.title.includes("ক্যাম্প") || e.category.includes("প্রশিক্ষণ");
        return true;
      });

  return (
    <div>
      {/* 1. Page Banner */}
      <PageBanner
        badge="সাংস্কৃতিক দিনপঞ্জি"
        title="আসন্ন ও চলমান সাংস্কৃতিক অনুষ্ঠানমালা"
        description="বছরজুড়ে দেশব্যাপী আমাদের নিয়মিত নাট্যোৎসব, গণসংগীত পদযাত্রা, কবিতা পাঠের আসর ও তরুণ নেতৃত্ব ক্যাম্পের পূর্ণাঙ্গ সূচি ও বিবরণ।"
        breadcrumbs={[
          { label: "হোম", href: "/" },
          { label: "ইভেন্ট" },
        ]}
        stats={[
          { label: "আসন্ন ইভেন্ট", value: "৬টি" },
          { label: "ভেন্যু জেলা", value: "১২টি" },
          { label: "প্রত্যাশিত দর্শক", value: "১,০০,০০০+" },
          { label: "অংশগ্রহণকারী দল", value: "৫০+" },
        ]}
      />

      {/* 2. Filter Bar */}
      <section className="py-6 bg-[#FAF6F0] border-b border-[#EFE8DF] sticky top-18 sm:top-22 z-30 backdrop-blur-md bg-[#FAF6F0]/95">
        <Container size="wide">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            <Filter className="w-4 h-4 text-[#9E1B22] shrink-0 mr-1" />
            <span className="text-xs font-bold text-[#736A60] shrink-0 mr-2">ইভেন্ট ফিল্টার:</span>
            {filterTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setSelectedFilter(tab)}
                className={`px-4 py-1.5 text-xs sm:text-sm font-semibold rounded-full transition-all shrink-0 cursor-pointer ${
                  selectedFilter === tab
                    ? "bg-[#9E1B22] text-white shadow-xs"
                    : "bg-[#FFFDF9] text-[#554E45] border border-[#E6DCD1] hover:bg-[#F3ECE1]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </Container>
      </section>

      {/* 3. Event Cards Grid */}
      <section className="py-12 sm:py-16 bg-[#FAF6F0]">
        <Container size="wide">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredEvents.map((event) => (
              <article
                key={event.id}
                onClick={() => setActiveModalEvent(event)}
                className="group bg-[#FFFDF9] rounded-2xl border border-[#E6DCD1] overflow-hidden flex flex-col hover:border-[#D0C0AF] hover:shadow-[0_12px_30px_rgba(30,15,5,0.08)] transition-all cursor-pointer"
              >
                {/* Event Image & Month Tag */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#E8DFD5]">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <div
                    className="absolute top-3 left-3 px-3 py-1 text-xs font-bold text-white rounded-md shadow-xs"
                    style={{ backgroundColor: event.monthColor }}
                  >
                    {event.month}
                  </div>
                </div>

                {/* Event Content */}
                <div className="p-5 sm:p-6 flex flex-col flex-1">
                  <span className="text-xs font-bold text-[#9E1B22] mb-1">
                    {event.category}
                  </span>

                  <h3 className="text-lg sm:text-xl font-bold text-[#1E1B18] group-hover:text-[#9E1B22] transition-colors font-serif-bengali leading-snug">
                    {event.title}
                  </h3>

                  <div className="mt-4 space-y-2 text-xs sm:text-sm text-[#5C544B] bg-[#F7F2EA] p-3.5 rounded-xl border border-[#EFE5D8]">
                    <div className="flex items-center gap-2">
                      <CalendarIcon className="w-4 h-4 text-[#9E1B22] shrink-0" />
                      <span className="truncate"><strong>তারিখ:</strong> {event.dateString}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-[#195229] shrink-0" />
                      <span className="truncate"><strong>স্থান:</strong> {event.venue}</span>
                    </div>
                  </div>

                  <p className="mt-4 text-xs sm:text-sm text-[#635C54] leading-relaxed line-clamp-2 flex-1">
                    {event.description}
                  </p>

                  <div className="mt-5 pt-4 border-t border-[#F2ECE3] flex items-center justify-between">
                    <span className="text-xs sm:text-sm font-semibold text-[#9E1B22] group-hover:text-[#7F141A] flex items-center gap-1.5">
                      <span>পূর্ণাঙ্গ সূচি ও বিস্তারিত</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Event Details Modal */}
      <Modal
        isOpen={!!activeModalEvent}
        onClose={() => setActiveModalEvent(null)}
        title={activeModalEvent?.title}
        maxWidth="md"
      >
        {activeModalEvent && (
          <div className="space-y-5">
            <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden bg-[#EAE0D5]">
              <img
                src={activeModalEvent.image}
                alt={activeModalEvent.title}
                className="w-full h-full object-cover"
              />
              <div
                className="absolute top-3 left-3 px-3 py-1 text-xs font-bold text-white rounded-md shadow-xs"
                style={{ backgroundColor: activeModalEvent.monthColor }}
              >
                {activeModalEvent.month}
              </div>
            </div>

            <div className="space-y-2.5 bg-[#F7F2EA] p-4 rounded-xl border border-[#E8DFD5] text-sm text-[#4E473F]">
              <div className="flex items-center gap-2.5">
                <CalendarIcon className="w-4 h-4 text-[#9E1B22] shrink-0" />
                <span>তারিখ: <strong>{activeModalEvent.dateString}</strong></span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#D97706] shrink-0" />
                <span>সময়: <strong>{activeModalEvent.time}</strong></span>
              </div>
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-[#195229] shrink-0" />
                <span>স্থান: <strong>{activeModalEvent.venue}</strong></span>
              </div>
            </div>

            <div>
              <h5 className="text-sm font-bold text-[#1E1B18] font-serif-bengali mb-1.5">
                অনুষ্ঠানের বিস্তারিত বিবরণ:
              </h5>
              <p className="text-sm text-[#4E473F] leading-relaxed">
                {activeModalEvent.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-1.5">
              {activeModalEvent.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#EFE8DF] text-[#554E45]"
                >
                  #{tag}
                </span>
              ))}
            </div>

            <div className="pt-3 border-t border-[#EFE8DF] flex justify-end gap-3">
              <button
                onClick={() => setActiveModalEvent(null)}
                className="px-4 py-2 text-xs sm:text-sm font-semibold text-[#5C544B] hover:bg-[#EFE8DF] rounded-full transition-colors cursor-pointer"
              >
                বন্ধ করুন
              </button>
              <Link
                href="/membership"
                className="px-5 py-2 text-xs sm:text-sm font-semibold text-white bg-[#9E1B22] hover:bg-[#7F141A] rounded-full shadow-xs transition-colors cursor-pointer"
              >
                স্বেচ্ছাসেবক হিসেবে অংশ নিন
              </Link>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}

