import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { 
  Heart, 
  Target, 
  Compass, 
  ShieldCheck, 
  Users, 
  Sparkles, 
  Award, 
  BookOpen,
  ArrowRight,
  Flame,
  CheckCircle2
} from "lucide-react";
import { Container } from "@/components/layout/Container";
import { PageBanner } from "@/components/ui/PageBanner";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "আমাদের সম্পর্কে",
  description: "বিপ্লবী সাংস্কৃতিক ঐক্যের ইতিহাস, রূপকল্প, মিশন, আদর্শ এবং সাংগঠনিক কাঠামো। অন্যায়ের বিরুদ্ধে আজীবন।",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "আমাদের সম্পর্কে | বিপ্লবী সাংস্কৃতিক ঐক্য",
    description: "বিপ্লবী সাংস্কৃতিক ঐক্যের ইতিহাস, রূপকল্প, মিশন, আদর্শ এবং সাংগঠনিক কাঠামো।",
    url: "https://biplobisanskritik.org/about",
  },
};

export default function AboutPage() {
  const values = [
    {
      icon: <Flame className="w-6 h-6 text-[#9E1B22]" />,
      title: "প্রতিবাদী চেতনা ও মুক্তচিন্তা",
      description: "যাবতীয় অন্যায়, অবিচার, সামাজিক বৈষম্য ও প্রতিক্রিয়াশীলতার বিরুদ্ধে সংস্কৃতির শাণিত হাতিয়ার নিয়ে দাঁড়ানো আমাদের আজন্ম ব্রত।",
    },
    {
      icon: <Heart className="w-6 h-6 text-[#195229]" />,
      title: "মানবপ্রেম ও সাম্যবাদ",
      description: "ধর্ম, বর্ণ, লিঙ্গ ও শ্রেণিনির্বিশেষে প্রতিটি মানুষের মৌলিক মর্যাদা ও সাংস্কৃতিক অধিকার সুরক্ষায় আমরা বিশ্বাসী।",
    },
    {
      icon: <Sparkles className="w-6 h-6 text-[#D97706]" />,
      title: "লোকঐতিহ্যের সংরক্ষণ",
      description: "বাঙালির লোকসংস্কৃতি, জারি-সারি-ভাটিয়ালি, আদি লোকশিল্প ও হারিয়ে যাওয়া কারুকলার বৈজ্ঞানিক সংরক্ষণ ও নবরূপায়ন।",
    },
    {
      icon: <Users className="w-6 h-6 text-[#047857]" />,
      title: "তৃণমূল সংহতি ও সংযোগ",
      description: "শহুরে বলয় ছাড়িয়ে প্রত্যন্ত অঞ্চলের কৃষক, শ্রমিক, জেলে ও আদিবাসী জনগোষ্ঠীর সাংস্কৃতিক স্বরকে জাতীয় মঞ্চে পৌঁছে দেওয়া।",
    },
    {
      icon: <BookOpen className="w-6 h-6 text-[#9A3412]" />,
      title: "সৃজনশীল গবেষণা ও প্রকাশনা",
      description: "সাংস্কৃতিক ইতিহাস, সমাজতত্ত্ব ও লোকসাহিত্যের গভীর পর্যালোচনায় নিয়মিত সাময়িকী, গবেষণাগ্রন্থ ও দলিল প্রকাশনা।",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#15803D]" />,
      title: "তারুণ্যের সাংস্কৃতিক নেতৃত্ব",
      description: "নতুন প্রজন্মকে কূপমণ্ডূকতা ও ডিজিটাল অবসাদ থেকে মুক্ত করে প্রগতিশীল শিল্পচর্চা ও সৃষ্টিশীল নেতৃত্বে উদ্বুদ্ধ করা।",
    },
  ];

  const milestones = [
    {
      year: "১৯৯২",
      title: "ঐক্যের উন্মেষ ও সূচনা",
      description: "স্বৈরাচারবিরোধী আন্দোলন-উত্তর বাংলাদেশে প্রগতিশীল তরুণ সংস্কৃতিকর্মীদের হাত ধরে যাত্রা শুরু।",
    },
    {
      year: "২০০০",
      title: "লোকসংস্কৃতি গবেষণা সেলের বিস্তার",
      description: "গ্রামাঞ্চলের বিলুপ্তপ্রায় লোকসংগীত ও লোকনাট্যের সংরক্ষণ ও মাঠপর্যায়ের আর্কাইভ গড়ে তোলা।",
    },
    {
      year: "২০১০",
      title: "জাতীয় সাংস্কৃতিক নেটওয়ার্ক গঠন",
      description: "দেশের আটটি বিভাগের জেলা ও উপজেলা পর্যায়ে শাখা ও সহযোগী নাট্য-সংগীত দলসমূহের সমন্বিত প্ল্যাটফর্ম প্রতিষ্ঠা।",
    },
    {
      year: "২০২৪",
      title: "গণঅভ্যুত্থান ও নবজাগরণ",
      description: "ছাত্র-জনতার ঐতিহাসিক আন্দোলনের রাজপথে গ্রাফিতি, প্রতিবাদী গান, নাটক ও মুক্ত কবিতা পাঠের মধ্য দিয়ে নতুন সাংস্কৃতিক জাগরণ।",
    },
  ];

  const councilMembers = [
    {
      name: "অধ্যাপক ড. রফিকুল ইসলাম",
      role: "আহ্বায়ক, জাতীয় পরিষদ",
      bio: "লোকসংস্কৃতি গবেষক ও শিক্ষাবিদ। বিগত তিন দশক ধরে সাংস্কৃতিক অধিকার আন্দোলনের শীর্ষ সংগঠক।",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "সুবর্ণা চৌধুরী",
      role: "যুগ্ম আহ্বায়ক ও নাট্য সম্পাদক",
      bio: "মঞ্চ ও পথনাটক নির্দেশক। সমাজসচেতন নাট্যোৎসব এবং তৃণমূল থিয়েটার কর্মশালার প্রধান সমন্বয়কারী।",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "কবির আনোয়ার",
      role: "সদস্য সচিব",
      bio: "গণসংগীতশিল্পী ও সাংস্কৃতিক অধিকার কর্মী। দেশব্যাপী ভ্রাম্যমাণ মুক্তমঞ্চ কর্মসূচির রূপকার।",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "তাসমিয়া আহমেদ",
      role: "গবেষণা ও প্রকাশনা সম্পাদক",
      bio: "সমাজবিজ্ঞানী ও প্রাবন্ধিক। লিটল ম্যাগাজিন আন্দোলন ও ত্রৈমাসিক সাংস্কৃতিক পত্রিকার প্রধান সম্পাদক।",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
    },
  ];

  return (
    <div>
      {/* 1. Page Banner */}
      <PageBanner
        badge="আমাদের পরিচিতি ও আদর্শ"
        title="বিপ্লবী সাংস্কৃতিক ঐক্য: শেকড় থেকে শিখরে"
        description="আমরা বিশ্বাস করি সংস্কৃতি কেবল বিনোদন নয়—সংস্কৃতি হলো সমাজ রূপান্তর, গণচেতনার জাগরণ এবং অন্যায়ের বিরুদ্ধে সোচ্চার হওয়ার সর্বশ্রেষ্ঠ অহিংস মাধ্যম।"
        breadcrumbs={[
          { label: "হোম", href: "/" },
          { label: "আমাদের সম্পর্কে" },
        ]}
        stats={[
          { label: "প্রতিষ্ঠা", value: "১৯৯২" },
          { label: "কার্যনির্বাহী উইং", value: "৮টি" },
          { label: "সংযুক্ত শিল্পী", value: "১২০০+" },
          { label: "জেলা নেটওয়ার্ক", value: "৬৪টি" },
        ]}
      />

      {/* 2. Mission & Vision Dual Card Section */}
      <section className="py-14 sm:py-20 bg-[#FAF6F0]">
        <Container size="wide">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Vision */}
            <div className="bg-[#FFFDF9] rounded-2xl border border-[#E6DCD1] p-6 sm:p-10 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#FEF2F2] border border-[#FECACA] flex items-center justify-center text-[#9E1B22] mb-6">
                  <Compass className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-[#1E1B18] font-serif-bengali">
                  আমাদের রূপকল্প (Vision)
                </h3>
                <p className="mt-4 text-[#554E45] leading-relaxed text-base">
                  একটি ধর্মনিরপেক্ষ, শোষণমুক্ত, বৈষম্যহীন ও সৃজনশীল বাংলাদেশ—যেখানে প্রতিটি নাগরিকের মতপ্রকাশের স্বাধীনতা সুরক্ষিত থাকবে এবং আবহমান বাংলার শিল্প-সংস্কৃতি মানুষের আত্মমর্যাদা ও আনন্দের ভিত্তি হবে।
                </p>
                <ul className="mt-6 space-y-3">
                  {[
                    "প্রতিটি জেলায় সাংস্কৃতিক মুক্তমঞ্চ ও পাঠাগার গড়ে তোলা",
                    "লুপ্তপ্রায় গ্রামীণ লোকশিল্পীদের সামাজিক ও আর্থিক সুরক্ষা নিশ্চিতকরণ",
                    "তরুণ প্রজন্মকে কূপমণ্ডূকতা ও ডিজিটাল বিচ্ছিন্নতা থেকে সৃজনশীলতায় ফেরানো",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-[#4E473F]">
                      <CheckCircle2 className="w-4 h-4 text-[#9E1B22] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Mission */}
            <div className="bg-[#FFFDF9] rounded-2xl border border-[#E6DCD1] p-6 sm:p-10 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#F0FDF4] border border-[#BBF7D0] flex items-center justify-center text-[#195229] mb-6">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-[#1E1B18] font-serif-bengali">
                  আমাদের মিশন (Mission)
                </h3>
                <p className="mt-4 text-[#554E45] leading-relaxed text-base">
                  সংস্কৃতির সকল শাখাকে (নাটক, গান, আবৃত্তি, নৃত্য, চিত্রকলা, চলচ্চিত্র) সমন্বয় করে তৃণমূল থেকে জাতীয় পর্যায়ে একটি সম্মিলিত মানবিক প্রতিরোধ ফ্রন্ট গড়ে তোলা এবং সৃজনশীল কর্মশালার মাধ্যমে নতুন প্রজন্মের শিল্পী তৈরি করা।
                </p>
                <ul className="mt-6 space-y-3">
                  {[
                    "বছরব্যাপী উন্মুক্ত উৎসব, পথনাটক ও গণসংগীত পদযাত্রা পরিচালনা",
                    "লোকঐতিহ্য ও সাংস্কৃতিক ইতিহাসের নিয়মিত গবেষণা প্রকাশনা",
                    "সুবিধাবঞ্চিত শিশুদের জন্য বিনামূল্যে চারুকলা ও সংগীত প্রশিক্ষণ প্রদান",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-[#4E473F]">
                      <CheckCircle2 className="w-4 h-4 text-[#195229] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. Core Values Grid */}
      <section className="py-14 sm:py-20 bg-[#F5ECE0]/60 border-t border-[#EFE8DF]">
        <Container size="wide">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <span className="text-xs font-bold text-[#9E1B22] tracking-wider uppercase bg-white/80 px-3 py-1 rounded-full border border-[#E6DCD1]">
              মূল আদর্শ ও নীতিমালা
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1E1B18] mt-3 font-serif-bengali">
              যে অঙ্গীকারে আমাদের পথচলা
            </h2>
            <div className="w-12 h-1 bg-[#9E1B22] rounded-full mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {values.map((val, idx) => (
              <div
                key={idx}
                className="bg-[#FFFDF9] rounded-2xl border border-[#E6DCD1] p-6 sm:p-7 shadow-xs hover:border-[#D5C2B0] hover:shadow-[0_8px_24px_rgba(40,25,15,0.06)] transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-[#FAF6F0] border border-[#EAE2D5] flex items-center justify-center mb-5">
                  {val.icon}
                </div>
                <h4 className="text-lg font-bold text-[#1E1B18] font-serif-bengali">
                  {val.title}
                </h4>
                <p className="mt-2 text-sm text-[#5C544B] leading-relaxed">
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 4. Organizational Journey / Timeline */}
      <section className="py-14 sm:py-20 bg-[#FAF6F0] border-t border-[#EFE8DF]">
        <Container size="wide">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <span className="text-xs font-bold text-[#195229] tracking-wider uppercase bg-white/80 px-3 py-1 rounded-full border border-[#E6DCD1]">
              ঐতিহাসিক পটভূমি
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1E1B18] mt-3 font-serif-bengali">
              সংগ্রাম ও সৃজনের তিন দশকের পদরেখা
            </h2>
            <div className="w-12 h-1 bg-[#195229] rounded-full mx-auto mt-4" />
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {milestones.map((m, idx) => (
              <div
                key={idx}
                className="flex flex-col sm:flex-row items-start gap-4 sm:gap-8 bg-[#FFFDF9] rounded-2xl border border-[#E6DCD1] p-6 sm:p-8"
              >
                <div className="shrink-0 px-4 py-2 rounded-xl bg-[#FAF2E8] border border-[#F0DFCD] text-[#9E1B22] font-bold text-xl sm:text-2xl font-serif-bengali">
                  {m.year}
                </div>
                <div className="flex-1">
                  <h4 className="text-lg sm:text-xl font-bold text-[#1E1B18] font-serif-bengali">
                    {m.title}
                  </h4>
                  <p className="mt-2 text-sm sm:text-base text-[#554E45] leading-relaxed">
                    {m.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 5. Leadership & Advisory Council */}
      <section className="py-14 sm:py-20 bg-[#F5ECE0]/60 border-t border-[#EFE8DF]">
        <Container size="wide">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <span className="text-xs font-bold text-[#9E1B22] tracking-wider uppercase bg-white/80 px-3 py-1 rounded-full border border-[#E6DCD1]">
              সাংগঠনিক নেতৃত্ব
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1E1B18] mt-3 font-serif-bengali">
              জাতীয় পরিষদ ও নির্বাহী সেল
            </h2>
            <div className="w-12 h-1 bg-[#9E1B22] rounded-full mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {councilMembers.map((person, idx) => (
              <div
                key={idx}
                className="bg-[#FFFDF9] rounded-2xl border border-[#E6DCD1] overflow-hidden p-6 flex flex-col items-center text-center hover:border-[#D5C2B0] hover:shadow-md transition-all"
              >
                <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-2 border-[#9E1B22]/30 p-0.5">
                  <img
                    src={person.avatar}
                    alt={person.name}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <h4 className="text-lg font-bold text-[#1E1B18] font-serif-bengali">
                  {person.name}
                </h4>
                <p className="text-xs font-semibold text-[#9E1B22] mt-0.5">
                  {person.role}
                </p>
                <p className="text-xs text-[#635C54] mt-3 leading-relaxed">
                  {person.bio}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 6. CTA to Join */}
      <section className="py-14 sm:py-20 bg-[#FAF6F0] border-t border-[#EFE8DF]">
        <Container size="default">
          <div className="bg-gradient-to-br from-[#9E1B22] to-[#7F141A] text-white rounded-3xl p-8 sm:p-12 text-center shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-2xl pointer-events-none" />
            <Award className="w-12 h-12 text-[#FDE047] mx-auto mb-4" />
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-serif-bengali">
              সাংস্কৃতিক জাগরণে আমাদের পাশে থাকুন
            </h2>
            <p className="mt-4 text-white/85 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
              আপনি শিল্পী, সংগঠক, লেখক বা সংস্কৃতিপ্রেমী যে কেউ হতে পারেন—বিপ্লবী সাংস্কৃতিক ঐক্যের পতাকা তলে আমরা সবাই এক।
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/membership">
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-white text-[#9E1B22] hover:bg-[#FAF4ED] border-none font-bold"
                  icon={<ArrowRight className="w-5 h-5" />}
                >
                  সদস্যপদ আবেদন করুন
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="ghost"
                  size="lg"
                  className="text-white border border-white/40 hover:bg-white/10"
                >
                  যোগাযোগ করুন
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

