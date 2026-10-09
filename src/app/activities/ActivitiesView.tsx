"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Calendar, 
  MapPin, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Filter,
  Users,
  Compass
} from "lucide-react";
import { Container } from "@/components/layout/Container";
import { PageBanner } from "@/components/ui/PageBanner";
import { Badge } from "@/components/ui/Badge";
import { Modal } from "@/components/ui/Modal";
import { programsData, Program } from "@/data/culturalData";

export default function ActivitiesView() {
  const [selectedCategory, setSelectedCategory] = useState<string>("সব");
  const [activeModalProgram, setActiveModalProgram] = useState<Program | null>(null);

  // Extended programs catalog
  const extendedActivities: Program[] = [
    ...programsData,
    {
      id: "act-5",
      title: "ভ্রাম্যমাণ মুক্তমঞ্চ পদযাত্রা",
      category: "পথনাটক ও গণসংগীত",
      description: "শহরের বস্তি, শ্রমিক পল্লী ও হাটবাজারে ভ্রাম্যমাণ ট্রাকমঞ্চে সমাজসচেতন নাটক ও বাউল গানের উন্মুক্ত পরিবেশনা।",
      image: "data:image/svg+xml;charset=utf-8," + encodeURIComponent(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" width="100%" height="100%">
          <rect width="800" height="500" fill="#1C1917" />
          <circle cx="400" cy="200" r="160" fill="#DC2626" opacity="0.4" />
          <rect x="150" y="280" width="500" height="150" rx="10" fill="#78350F" />
          <line x1="150" y1="280" x2="650" y2="280" stroke="#FDE68A" stroke-width="4" />
          <circle cx="280" cy="240" r="25" fill="#FAF6F0" />
          <circle cx="520" cy="240" r="25" fill="#FAF6F0" />
        </svg>
      `),
      date: "প্রতি শুক্রবার ও শনিবার",
      location: "ঢাকা ও পার্শ্ববর্তী শিল্পাঞ্চল",
      highlights: ["উন্মুক্ত পথনাটক", "শ্রমিক জাগরণের গান", "মুক্ত প্রশ্নোত্তর"],
    },
    {
      id: "act-6",
      title: "সুবিধাবঞ্চিত শিশুদের শিল্পকলা স্কুল",
      category: "শিক্ষা ও প্রশিক্ষণ",
      description: "প্রান্তিক ও বস্তিবাসী শিশুদের বিনামূল্যে তুলি, রং, খাতা ও সংগীতযন্ত্রের সাথে পরিচিতি এবং সৃজনশীল মেধার বিকাশ।",
      image: "data:image/svg+xml;charset=utf-8," + encodeURIComponent(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" width="100%" height="100%">
          <rect width="800" height="500" fill="#047857" />
          <circle cx="400" cy="250" r="180" fill="#FDE047" opacity="0.35" />
          <polygon points="400,100 480,260 320,260" fill="#EA580C" />
          <circle cx="400" cy="330" r="40" fill="#FFFFFF" />
        </svg>
      `),
      date: "সাপ্তাহিক ক্লাস (রবি ও বৃহস্পতি)",
      location: "মিরপুর ও কামরাঙ্গীরচর কেন্দ্র",
      highlights: ["জলরং ও কাঠখোদাই", "স্বরলিপি ও বাঁশি", "শিশুনৃত্য"],
    },
  ];

  const categories = ["সব", "সাংস্কৃতিক অনুষ্ঠান", "বৈশাখী উৎসব", "প্রশিক্ষণ কর্মসূচি", "লোকসংস্কৃতি উৎসব", "পথনাটক ও গণসংগীত", "শিক্ষা ও প্রশিক্ষণ"];

  const filtered = selectedCategory === "সব"
    ? extendedActivities
    : extendedActivities.filter(a => a.category.includes(selectedCategory) || selectedCategory.includes(a.category));

  return (
    <div>
      {/* 1. Page Banner */}
      <PageBanner
        badge="আমাদের কর্মযজ্ঞ"
        title="সংস্কৃতি ও সামাজিক দায়বদ্ধতার বিস্তার"
        description="নাটক, সংগীত, আবৃত্তি ও লোকউৎসবের মধ্য দিয়ে মানুষের ভেতরে শুভবোধের উন্মেষ ঘটানো এবং অন্যায়ের বিরুদ্ধে সাংস্কৃতিক গণপ্রতিরোধ গড়ে তোলাই আমাদের প্রধান কাজ।"
        breadcrumbs={[
          { label: "হোম", href: "/" },
          { label: "কার্যক্রম" },
        ]}
        stats={[
          { label: "বার্ষিক আয়োজন", value: "৪০+" },
          { label: "অংশগ্রহণকারী", value: "৫০,০০০+" },
          { label: "কর্মশালা", value: "২৫টি" },
          { label: "প্রশিক্ষিত তরুণ", value: "৮৫০+" },
        ]}
      />

      {/* 2. Interactive Category Filter Bar */}
      <section className="py-8 bg-[#FAF6F0] border-b border-[#EFE8DF] sticky top-18 sm:top-22 z-30 backdrop-blur-md bg-[#FAF6F0]/95">
        <Container size="wide">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            <Filter className="w-4 h-4 text-[#9E1B22] shrink-0 mr-1" />
            <span className="text-xs font-bold text-[#736A60] shrink-0 mr-2">বিভাগ নির্বাচন:</span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 text-xs sm:text-sm font-semibold rounded-full transition-all shrink-0 cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-[#9E1B22] text-white shadow-xs"
                    : "bg-[#FFFDF9] text-[#554E45] border border-[#E6DCD1] hover:bg-[#F3ECE1]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </Container>
      </section>

      {/* 3. Activities Card Grid */}
      <section className="py-12 sm:py-16 bg-[#FAF6F0]">
        <Container size="wide">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filtered.map((act) => (
              <article
                key={act.id}
                className="group bg-[#FFFDF9] rounded-2xl border border-[#E6DCD1] overflow-hidden flex flex-col transition-all duration-300 hover:shadow-[0_12px_30px_rgba(40,25,15,0.08)] hover:-translate-y-1 hover:border-[#D5C2B0]"
              >
                {/* Image */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#EAE0D5]">
                  <img
                    src={act.image}
                    alt={act.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 text-xs font-bold bg-[#9E1B22] text-white rounded-md shadow-xs">
                      {act.category}
                    </span>
                  </div>
                </div>

                {/* Body */}
                <div className="p-5 sm:p-6 flex flex-col flex-1">
                  <h3 className="text-lg sm:text-xl font-bold text-[#1E1B18] group-hover:text-[#9E1B22] transition-colors font-serif-bengali">
                    {act.title}
                  </h3>

                  {act.date && (
                    <div className="flex items-center gap-1.5 text-xs text-[#8A8177] mt-2 font-medium">
                      <Calendar className="w-3.5 h-3.5 text-[#9E1B22]" />
                      <span>{act.date}</span>
                    </div>
                  )}

                  <p className="mt-3 text-sm text-[#5C544B] leading-relaxed line-clamp-3 flex-1">
                    {act.description}
                  </p>

                  <div className="mt-5 pt-4 border-t border-[#F2ECE3] flex items-center justify-between">
                    <button
                      onClick={() => setActiveModalProgram(act)}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#9E1B22] hover:text-[#7A1319] transition-colors group/btn cursor-pointer"
                    >
                      <span>বিস্তারিত দেখুন</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                    </button>
                    {act.location && (
                      <span className="text-xs text-[#8A8177] flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-[#195229]" />
                        <span className="truncate max-w-[140px]">{act.location}</span>
                      </span>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* 4. Special Initiatives Spotlight */}
      <section className="py-14 sm:py-20 bg-[#F5ECE0]/60 border-t border-[#EFE8DF]">
        <Container size="wide">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <span className="text-xs font-bold text-[#195229] tracking-wider uppercase bg-white/80 px-3 py-1 rounded-full border border-[#E6DCD1]">
              বিশেষ উদ্যোগ
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1E1B18] mt-3 font-serif-bengali">
              প্রান্তিক জনগোষ্ঠীর সংস্কৃতি সুরক্ষায় স্থায়ী প্রকল্প
            </h2>
            <div className="w-12 h-1 bg-[#195229] rounded-full mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-[#FFFDF9] rounded-2xl border border-[#E6DCD1] p-6 sm:p-8">
              <div className="w-12 h-12 rounded-xl bg-[#FEF2F2] text-[#9E1B22] flex items-center justify-center mb-5 border border-[#FECACA]">
                <Sparkles className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-[#1E1B18] font-serif-bengali">
                লোকশিল্পী সুরক্ষা তহবিল
              </h4>
              <p className="mt-2 text-sm text-[#5C544B] leading-relaxed">
                বয়োজ্যেষ্ঠ, অসুস্থ ও অর্থনৈতিক সংকটে থাকা গ্রামীণ বাউল, পটুয়া ও ঢাকিদের জন্য নিয়মিত স্বাস্থ্যসেবা ও জীবনধারণ অনুদান প্রকল্প।
              </p>
            </div>

            <div className="bg-[#FFFDF9] rounded-2xl border border-[#E6DCD1] p-6 sm:p-8">
              <div className="w-12 h-12 rounded-xl bg-[#F0FDF4] text-[#195229] flex items-center justify-center mb-5 border border-[#BBF7D0]">
                <Compass className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-[#1E1B18] font-serif-bengali">
                আবহমান পটচিত্র সংরক্ষণ
              </h4>
              <p className="mt-2 text-sm text-[#5C544B] leading-relaxed">
                বিলুপ্তপ্রায় গাজী কালু চম্পাবতীর পট, মনসামঙ্গলের পট ও পৌরাণিক লোকচিত্রের ডিজিটাল সংরক্ষণ এবং তরুণ চিত্রশিল্পীদের শিক্ষাদান।
              </p>
            </div>

            <div className="bg-[#FFFDF9] rounded-2xl border border-[#E6DCD1] p-6 sm:p-8">
              <div className="w-12 h-12 rounded-xl bg-[#FFFBEB] text-[#D97706] flex items-center justify-center mb-5 border border-[#FDE68A]">
                <Users className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-[#1E1B18] font-serif-bengali">
                তৃণমূল সাংস্কৃতিক পাঠাগার
              </h4>
              <p className="mt-2 text-sm text-[#5C544B] leading-relaxed">
                বিভিন্ন ইউনিয়ন ও প্রত্যন্ত জনপদে মুক্তচিন্তা, সাহিত্য ও নাট্যচর্চাকেন্দ্রিক উন্মুক্ত গণপাঠাগার নেটওয়ার্ক সম্প্রসারণ।
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Program Details Modal */}
      <Modal
        isOpen={!!activeModalProgram}
        onClose={() => setActiveModalProgram(null)}
        title={activeModalProgram?.title}
        maxWidth="lg"
      >
        {activeModalProgram && (
          <div className="space-y-6">
            <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden bg-[#EAE0D5]">
              <img
                src={activeModalProgram.image}
                alt={activeModalProgram.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3">
                <Badge variant="crimson" size="md">
                  {activeModalProgram.category}
                </Badge>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-[#5C544B] bg-[#F7F2EA] p-4 rounded-xl border border-[#E9DFD3]">
              {activeModalProgram.date && (
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#9E1B22] shrink-0" />
                  <span>তারিখ/সময়: <strong>{activeModalProgram.date}</strong></span>
                </div>
              )}
              {activeModalProgram.location && (
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#195229] shrink-0" />
                  <span>স্থান: <strong>{activeModalProgram.location}</strong></span>
                </div>
              )}
            </div>

            <div>
              <h4 className="text-base font-bold text-[#1E1B18] font-serif-bengali mb-2">
                কর্মসূচির বিস্তারিত রূপরেখা
              </h4>
              <p className="text-base text-[#4E473F] leading-relaxed">
                {activeModalProgram.description}
              </p>
            </div>

            {activeModalProgram.highlights && (
              <div>
                <h4 className="text-sm font-bold text-[#1E1B18] font-serif-bengali mb-2">
                  প্রধান আয়োজনসমূহ:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {activeModalProgram.highlights.map((h, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 text-sm text-[#4E473F] bg-white px-3 py-2 rounded-lg border border-[#E6DCD1]"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#195229] shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="pt-4 border-t border-[#EFE8DF] flex justify-end gap-3">
              <button
                onClick={() => setActiveModalProgram(null)}
                className="px-5 py-2 text-sm font-semibold text-[#5C544B] hover:bg-[#EFE8DF] rounded-full transition-colors cursor-pointer"
              >
                বন্ধ করুন
              </button>
              <Link
                href="/membership"
                className="px-6 py-2 text-sm font-semibold text-white bg-[#9E1B22] hover:bg-[#7F141A] rounded-full shadow-xs transition-colors cursor-pointer inline-flex items-center"
              >
                যুক্ত হতে সদস্য হন
              </Link>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}

