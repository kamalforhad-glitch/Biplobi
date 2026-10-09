"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  BookOpen, 
  Download, 
  Search, 
  FileText, 
  Calendar, 
  User, 
  Eye, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  BookMarked, 
  Filter, 
  Layers, 
  Printer 
} from "lucide-react";
import { Container } from "@/components/layout/Container";
import { PageBanner } from "@/components/ui/PageBanner";
import { Modal } from "@/components/ui/Modal";
import { publicationsData, PublicationItem } from "@/data/culturalData";
import { publicationImages } from "@/data/culturalImages";

interface ExtendedPublication extends PublicationItem {
  pages: string;
  isbn?: string;
  tableOfContents: string[];
  pdfSize: string;
  publisher: string;
  edition: string;
}

export default function PublicationsView() {
  const [selectedFilter, setSelectedFilter] = useState<string>("সব");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeModalPub, setActiveModalPub] = useState<ExtendedPublication | null>(null);
  const [downloadSuccess, setDownloadSuccess] = useState<string | null>(null);

  const extendedPublications: ExtendedPublication[] = [
    {
      ...publicationsData[0],
      pages: "১২৮ পৃষ্ঠা",
      isbn: "৯৭৮-৯৮৪-৯১২৩৪-৫-৬",
      publisher: "বিপ্লবী সাংস্কৃতিক ঐক্য গবেষণা কোষ",
      edition: "১ম প্রকাশনা (২০২৬)",
      pdfSize: "৪.২ মেগাবাইট",
      tableOfContents: [
        "অধ্যায় ১: বঙ্গীয় গণসংস্কৃতির ঐতিহাসিক বিবর্তন",
        "অধ্যায় ২: একাত্তর থেকে চব্বিশ—সাংস্কৃতিক প্রতিরোধের ধারা",
        "অধ্যায় ৩: নাগরিক সমাজে শিল্পকর্মীদের দায়বদ্ধতা",
        "অধ্যায় ৪: তৃণমূলে সাংস্কৃতিক সংগঠনের ভবিষ্যৎ করণীয়",
      ]
    },
    {
      ...publicationsData[1],
      pages: "৯৬ পৃষ্ঠা",
      isbn: "৯৭৮-৯৮৪-৯১২৩৪-৭-৩",
      publisher: "লোকসংস্কৃতি সংরক্ষণ কেন্দ্র",
      edition: "পরিমার্জিত সংস্করণ (২০২৬)",
      pdfSize: "৩.৮ মেগাবাইট",
      tableOfContents: [
        "পর্ব ১: বাউল ও লালন দর্শনের সর্বজনীন সাম্য",
        "পর্ব ২: ভাটি অঞ্চলের জারি-সারি ও কৃষিজীবনের সুর",
        "পর্ব ৩: গ্রামীণ পটচিত্র ও পোড়ামাটির লোকশিল্প ঐতিহ্য",
        "পর্ব ৪: বিলুপ্তপ্রায় লোকবাদ্যযন্ত্র ও সংরক্ষণ উদ্যোগ",
      ]
    },
    {
      ...publicationsData[2],
      pages: "৬৪ পৃষ্ঠা",
      isbn: "৯৭৮-৯৮৪-৯১২৩৪-৮-০",
      publisher: "যুব সাংস্কৃতিক প্রকাশনালয়",
      edition: "১ম মুদ্রণ (২০২৬)",
      pdfSize: "২.১ মেগাবাইট",
      tableOfContents: [
        "প্রবন্ধ ১: তথ্যপ্রযুক্তির যুগে বাঙালির আত্মপরিচয়",
        "প্রবন্ধ ২: অপসংস্কৃতির আগ্রাসন রোধে তারুণ্যের ভূমিকা",
        "প্রবন্ধ ৩: ক্যাম্পাস সংস্কৃতি ও নতুন মূল্যবোধ গঠন",
      ]
    },
    {
      id: "pub-4",
      title: "বিপ্লবী সাংস্কৃতিক বার্তা — বিশেষ বৈশাখী সংখ্যা",
      category: "লিটল ম্যাগাজিন",
      date: "এপ্রিল ২০২৬",
      readTime: "১৫ মিনিট পাঠ",
      image: publicationImages.youthEssay,
      author: "সম্পাদনা পরিষদ",
      summary: "নববর্ষের লোকজ তাৎপর্য, সাম্প্রদায়িকতাবিরোধী প্রতিরোধ এবং সারা দেশের নবীন কবি-লেখকদের একগুচ্ছ মৌলিক কবিতা ও কথাসাহিত্য নিয়ে বিশেষ সংকলন।",
      pages: "১৪৪ পৃষ্ঠা",
      isbn: "আইএসএসএন: ২৬১৬-৯৮৭২",
      publisher: "বিপ্লবী প্রকাশনা পরিষদ",
      edition: "বৈশাখ ১৪৩৩ সংখ্যা",
      pdfSize: "৫.৫ মেগাবাইট",
      tableOfContents: [
        "সম্পাদকীয়: ঐতিহ্যের আলোয় নতুনের আবাহন",
        "প্রবন্ধ: আবহমান বাংলার মেলা ও সামাজিক মৈত্রী",
        "কবিতাগুচ্ছ: তারুণ্যের দ্রোহ ও ভালোবাসার কবিতা",
        "কথাসাহিত্য: নদীর বাঁকে মানুষের গল্প",
        "স্মৃতিকথা: মুক্তিসংগ্রামের চারণ কবিদের কথা",
      ]
    },
    {
      id: "pub-5",
      title: "গণমানুষের গান: চারণ কবিদের পদাবলী সংকলন",
      category: "লোকসংস্কৃতি ও সংগীত",
      date: "মে ২০২৬",
      readTime: "২০ মিনিট পাঠ",
      image: publicationImages.heritageCollection,
      author: "লোকসাহিত্য ও সংগীত সংকলন সেল",
      summary: "বাংলার অবহেলিত চারণ কবি ও গণসংগীত রচয়িতাদের হারিয়ে যেতে বসা শতাধিক প্রতিবাদী ও আধ্যাত্মিক গানের সুর ও বাণীর প্রামাণ্য গ্রন্থ।",
      pages: "১৮০ পৃষ্ঠা",
      isbn: "৯৭৮-৯৮৪-৯১২৩৪-৯-৭",
      publisher: "সুরলহরী সংগীত সংসদ",
      edition: "সংগ্রাক সংস্করণ (২০২৬)",
      pdfSize: "৬.৩ মেগাবাইট",
      tableOfContents: [
        "ভূমিকা: মাটির কান্না ও প্রতিবাদের সুর",
        "প্রথম খণ্ড: ফকির লালন, হাসন রাজা ও রাধারমণ",
        "দ্বিতীয় খণ্ড: চারণ কবি বিজয় সরকার ও রমেশ শীল",
        "তৃতীয় খণ্ড: আধুনিক গণজাগরণের গান ও স্বরলিপি",
      ]
    },
    {
      id: "pub-6",
      title: "পথনাটকের তিন দশক: মুক্তমঞ্চের স্মৃতি ও সংলাপ",
      category: "নাট্য গবেষণা",
      date: "জুন ২০২৬",
      readTime: "১০ মিনিট পাঠ",
      image: publicationImages.researchJournal,
      author: "রঙ্গমঞ্চ নাট্য গবেষক দল",
      summary: "খোলা চত্বরে, রাজপথে এবং কারখানার ফটকে সাধারণ মানুষের সামনে অভিনীত ঐতিহাসিক পথনাটকগুলোর নাট্যপত্র, পাণ্ডুলিপি ও নির্মাণ ইতিহাস।",
      pages: "১১২ পৃষ্ঠা",
      isbn: "৯৭৮-৯৮৪-৯১২৩৫-০-৩",
      publisher: "বাংলাদেশ নাট্য পর্ষদ",
      edition: "১ম প্রকাশ (২০২৬)",
      pdfSize: "৩.৪ মেগাবাইট",
      tableOfContents: [
        "অধ্যায় ১: পথনাটকের সূচনা ও উদ্দেশ্য",
        "অধ্যায় ২: স্বৈরাচারবিরোধী আন্দোলনের মঞ্চ রাজপথ",
        "অধ্যায় ৩: দর্শক ও অভিনেতার মুখোমুখি রসায়ন",
        "পরিশিষ্ট: ১০টি ঐতিহাসিক পথনাটকের পাণ্ডুলিপি",
      ]
    }
  ];

  const filterTabs = [
    "সব", 
    "গবেষণা প্রকাশনা", 
    "লিটল ম্যাগাজিন", 
    "প্রবন্ধ", 
    "লোকসংস্কৃতি ও সংগীত", 
    "নাট্য গবেষণা"
  ];

  const filteredPublications = extendedPublications.filter((pub) => {
    const matchesFilter = selectedFilter === "সব" || pub.category === selectedFilter;
    const matchesSearch = 
      pub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pub.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pub.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const handleDownloadSimulation = (title: string) => {
    setDownloadSuccess(`'${title}' সফলভাবে ডাউনলোডের জন্য প্রস্তুত হয়েছে!`);
    setTimeout(() => {
      setDownloadSuccess(null);
    }, 4000);
  };

  return (
    <div className="bg-[#FAF6F0] min-h-screen">
      {/* 1. Page Banner */}
      <PageBanner
        badge="জ্ঞান ও সাহিত্যের ভাণ্ডার"
        title="গবেষণা প্রকাশনা, পত্রিকা ও সাহিত্য সাময়িকী"
        description="সাংস্কৃতিক ইতিহাস, সমাজতত্ত্ব, লোকসাহিত্য ও আধুনিক শিল্পচর্চার তাত্ত্বিক বিশ্লেষণের জন্য আমাদের নিয়মিত গবেষণাপত্র, গ্রন্থ ও লিটল ম্যাগাজিনের উন্মুক্ত সংগ্রহশালা।"
        breadcrumbs={[
          { label: "হোম", href: "/" },
          { label: "প্রকাশনা" },
        ]}
        stats={[
          { label: "মোট প্রকাশিত গ্রন্থ", value: "৬০+" },
          { label: "গবেষণা জার্নাল", value: "১২টি" },
          { label: "লিটল ম্যাগাজিন", value: "২৫টি সংখ্যা" },
          { label: "মুক্ত পিডিএফ ডাউনলোড", value: "বিনামূল্যে" },
        ]}
      />

      {/* 2. Featured Publication Spotlight */}
      <section className="py-12 border-b border-[#EFE8DF] bg-gradient-to-b from-[#FAF6F0] to-[#F5EFE6]">
        <Container size="wide">
          <div className="bg-[#FFFFFF] border-2 border-[#195229]/20 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#195229]/5 rounded-bl-full pointer-events-none" />
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              
              {/* Cover Mockup */}
              <div className="lg:col-span-4 flex justify-center">
                <div className="relative group cursor-pointer" onClick={() => setActiveModalPub(extendedPublications[0])}>
                  <div className="w-56 sm:w-64 aspect-[3/4] rounded-xl overflow-hidden shadow-2xl border-4 border-[#FAF6F0] bg-[#064E3B] transition-transform duration-300 group-hover:scale-105 group-hover:rotate-1">
                    <img 
                      src={extendedPublications[0].image} 
                      alt={extendedPublications[0].title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-3 -right-3 bg-[#9E1B22] text-[#FAF6F0] text-xs font-bold px-3 py-1.5 rounded-full shadow-md flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    বিশেষ প্রকাশনা
                  </div>
                </div>
              </div>

              {/* Publication Details */}
              <div className="lg:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-2 bg-[#195229]/10 text-[#195229] px-3.5 py-1 rounded-full text-xs font-semibold">
                  <BookMarked className="w-3.5 h-3.5" />
                  চলতি সংখ্যা ও বিশেষ স্মারক গ্রন্থ
                </div>
                
                <h2 className="text-2xl sm:text-3xl font-bold text-[#1E1B18] font-bengali leading-snug">
                  {extendedPublications[0].title}
                </h2>
                
                <div className="flex flex-wrap gap-y-2 gap-x-6 text-sm text-[#736B63] font-bengali">
                  <span className="flex items-center gap-1.5">
                    <User className="w-4 h-4 text-[#9E1B22]" />
                    {extendedPublications[0].author}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-[#195229]" />
                    {extendedPublications[0].date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Layers className="w-4 h-4 text-[#736B63]" />
                    {extendedPublications[0].pages}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs bg-[#EFE8DF] px-2 py-0.5 rounded">
                    {extendedPublications[0].isbn}
                  </span>
                </div>

                <p className="text-[#403B36] font-bengali leading-relaxed text-base pt-1">
                  {extendedPublications[0].summary} বাংলাদেশের সামাজিক, রাজনৈতিক ও গণআন্দোলনের ইতিহাসে সাংস্কৃতিক শক্তির আত্মপ্রকাশের এক অনবদ্য দলিল এই গবেষণা সংকলন। এতে সংকলিত হয়েছে মাঠপর্যায়ের সমীক্ষা ও সমাজচিন্তাবিদদের গুরুত্বপূর্ণ বিশ্লেষণ।
                </p>

                <div className="flex flex-wrap items-center gap-3 pt-3">
                  <button 
                    onClick={() => setActiveModalPub(extendedPublications[0])}
                    className="inline-flex items-center gap-2 bg-[#9E1B22] hover:bg-[#80141A] text-[#FAF6F0] px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors font-bengali shadow-sm"
                  >
                    <Eye className="w-4 h-4" />
                    সূচিপত্র ও বিস্তারিত পড়ুন
                  </button>
                  <button 
                    onClick={() => handleDownloadSimulation(extendedPublications[0].title)}
                    className="inline-flex items-center gap-2 bg-[#FAF6F0] hover:bg-[#EFE8DF] text-[#1E1B18] border border-[#D5CBBF] px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors font-bengali"
                  >
                    <Download className="w-4 h-4 text-[#195229]" />
                    ডিজিটাল সংস্করণ ডাউনলোড ({extendedPublications[0].pdfSize})
                  </button>
                </div>
              </div>

            </div>
          </div>
        </Container>
      </section>

      {/* 3. Filter & Search Controls */}
      <section className="py-6 border-b border-[#EFE8DF] sticky top-18 sm:top-22 z-30 backdrop-blur-md bg-[#FAF6F0]/95">
        <Container size="wide">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            
            {/* Filter Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
              <Filter className="w-4 h-4 text-[#9E1B22] shrink-0 mr-1" />
              {filterTabs.map((tab) => {
                const isActive = selectedFilter === tab;
                return (
                  <button
                    key={tab}
                    onClick={() => setSelectedFilter(tab)}
                    className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all whitespace-nowrap font-bengali ${
                      isActive
                        ? "bg-[#9E1B22] text-[#FAF6F0] shadow-sm"
                        : "bg-[#FFFFFF] text-[#403B36] hover:bg-[#EFE8DF] border border-[#EFE8DF]"
                    }`}
                  >
                    {tab}
                  </button>
                );
              })}
            </div>

            {/* Search Input */}
            <div className="relative min-w-[240px] max-w-sm">
              <Search className="w-4 h-4 text-[#736B63] absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="শিরোনাম, লেখক বা বিষয় খুঁজুন..."
                className="w-full pl-9 pr-4 py-2 text-xs sm:text-sm rounded-lg bg-[#FFFFFF] border border-[#D5CBBF] text-[#1E1B18] placeholder-[#736B63] focus:outline-none focus:ring-2 focus:ring-[#9E1B22]/30 font-bengali"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-[#736B63] hover:text-[#1E1B18]"
                >
                  ✕
                </button>
              )}
            </div>

          </div>
        </Container>
      </section>

      {/* Download Alert notification */}
      {downloadSuccess && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#195229] text-[#FAF6F0] px-5 py-3 rounded-xl shadow-xl flex items-center gap-3 animate-fade-in font-bengali border border-[#FAF6F0]/20">
          <CheckCircle2 className="w-5 h-5 text-[#86EFAC]" />
          <span className="text-sm font-medium">{downloadSuccess}</span>
        </div>
      )}

      {/* 4. Publications Catalog Grid */}
      <section className="py-12 sm:py-16">
        <Container size="wide">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#1E1B18] font-bengali">
                উপলব্ধ প্রকাশনা ও সাময়িকী
              </h3>
              <p className="text-xs sm:text-sm text-[#736B63] font-bengali mt-1">
                {filteredPublications.length}টি প্রকাশনা প্রদর্শিত হচ্ছে
              </p>
            </div>
          </div>

          {filteredPublications.length === 0 ? (
            <div className="text-center py-16 bg-[#FFFFFF] rounded-2xl border border-[#EFE8DF] p-8 max-w-lg mx-auto">
              <BookOpen className="w-12 h-12 text-[#9E1B22]/40 mx-auto mb-3" />
              <p className="text-lg font-bold text-[#1E1B18] font-bengali">কোনো প্রকাশনা পাওয়া যায়নি</p>
              <p className="text-sm text-[#736B63] font-bengali mt-1">অনুসন্ধান শব্দ বা ফিল্টার পরিবর্তন করে আবার চেষ্টা করুন।</p>
              <button 
                onClick={() => { setSelectedFilter("সব"); setSearchQuery(""); }}
                className="mt-4 px-4 py-2 bg-[#9E1B22] text-[#FAF6F0] text-xs font-semibold rounded-lg font-bengali"
              >
                ফিল্টার রিসেট করুন
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredPublications.map((pub) => (
                <div 
                  key={pub.id}
                  className="bg-[#FFFFFF] rounded-xl border border-[#EFE8DF] overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col group hover:-translate-y-1"
                >
                  {/* Book Preview Top Section */}
                  <div className="p-5 pb-3 flex items-start gap-4 border-b border-[#F5EFE6] bg-gradient-to-b from-[#FAF6F0]/60 to-[#FFFFFF]">
                    <div 
                      onClick={() => setActiveModalPub(pub)}
                      className="w-24 sm:w-28 aspect-[3/4] shrink-0 rounded-lg overflow-hidden shadow-md border-2 border-[#FAF6F0] cursor-pointer group-hover:scale-105 transition-transform"
                    >
                      <img 
                        src={pub.image} 
                        alt={pub.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-[#9E1B22]/10 text-[#9E1B22] mb-1.5 font-bengali">
                        {pub.category}
                      </span>
                      <h4 
                        onClick={() => setActiveModalPub(pub)}
                        className="text-base sm:text-lg font-bold text-[#1E1B18] font-bengali leading-snug line-clamp-2 cursor-pointer hover:text-[#9E1B22] transition-colors"
                      >
                        {pub.title}
                      </h4>
                      <p className="text-xs text-[#736B63] font-bengali mt-1 line-clamp-1">
                        লেখক: {pub.author}
                      </p>
                      <div className="flex items-center gap-3 text-[11px] text-[#736B63] font-bengali mt-2">
                        <span>{pub.date}</span>
                        <span>•</span>
                        <span>{pub.pages}</span>
                      </div>
                    </div>
                  </div>

                  {/* Summary & Table of Contents Snippet */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <p className="text-xs sm:text-sm text-[#403B36] font-bengali leading-relaxed line-clamp-3 mb-4">
                      {pub.summary}
                    </p>

                    <div className="pt-3 border-t border-[#F5EFE6] flex items-center justify-between gap-2">
                      <button
                        onClick={() => setActiveModalPub(pub)}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#9E1B22] hover:text-[#80141A] font-bengali transition-colors"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        সূচিপত্র ও পূর্ণ বিবরণ
                      </button>

                      <button
                        onClick={() => handleDownloadSimulation(pub.title)}
                        className="inline-flex items-center gap-1 text-[11px] font-semibold bg-[#FAF6F0] hover:bg-[#EFE8DF] text-[#1E1B18] px-2.5 py-1.5 rounded border border-[#D5CBBF] font-bengali transition-colors"
                        title="পিডিএফ ডাউনলোড করুন"
                      >
                        <Download className="w-3 h-3 text-[#195229]" />
                        পিডিএফ ({pub.pdfSize})
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </Container>
      </section>

      {/* 5. Author Invitation / Submission CTA */}
      <section className="py-12 bg-[#F5EFE6] border-t border-[#EFE8DF]">
        <Container size="default">
          <div className="text-center space-y-4">
            <span className="inline-flex items-center gap-1.5 bg-[#9E1B22]/10 text-[#9E1B22] px-3.5 py-1 rounded-full text-xs font-semibold font-bengali">
              <Printer className="w-3.5 h-3.5" />
              লেখক ও গবেষকদের জন্য উন্মুক্ত আহ্বান
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#1E1B18] font-bengali">
              আপনার গবেষণাপত্র ও সাহিত্যকর্ম প্রকাশ করতে চান?
            </h3>
            <p className="text-sm sm:text-base text-[#403B36] font-bengali max-w-2xl mx-auto leading-relaxed">
              বিপ্লবী সাংস্কৃতিক ঐক্য তরুণ সমাজতাত্ত্বিক, গবেষক ও সাহিত্যকর্মীদের অপ্রকাশিত পাণ্ডুলিপি ও বিশ্লেষণধর্মী লেখা প্রকাশনায় সর্বাত্মক কারিগরি ও প্রাতিষ্ঠানিক সহায়তা দেয়।
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#9E1B22] hover:bg-[#80141A] text-[#FAF6F0] px-6 py-2.5 rounded-lg text-sm font-semibold transition-colors font-bengali"
              >
                পাণ্ডুলিপি জমার নিয়মাবলী
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-[#FFFFFF] hover:bg-[#FAF6F0] text-[#1E1B18] border border-[#D5CBBF] px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors font-bengali"
              >
                গবেষণা সেলের কার্যক্রম জানুন
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* 6. Publication Details & Reading Modal */}
      {activeModalPub && (
        <Modal
          isOpen={!!activeModalPub}
          onClose={() => setActiveModalPub(null)}
          title={activeModalPub.title}
          subtitle={`প্রকাশনা বিভাগ: ${activeModalPub.category}`}
          size="lg"
        >
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-6 items-start pb-4 border-b border-[#EFE8DF]">
              <div className="w-32 aspect-[3/4] shrink-0 rounded-lg overflow-hidden shadow-md border-2 border-[#FAF6F0] mx-auto sm:mx-0">
                <img 
                  src={activeModalPub.image} 
                  alt={activeModalPub.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-2.5 flex-1">
                <h4 className="text-xl font-bold text-[#1E1B18] font-bengali leading-snug">
                  {activeModalPub.title}
                </h4>
                <div className="grid grid-cols-2 gap-2 text-xs sm:text-sm text-[#403B36] font-bengali">
                  <div><strong>লেখক/সম্পাদক:</strong> {activeModalPub.author}</div>
                  <div><strong>প্রকাশকাল:</strong> {activeModalPub.date}</div>
                  <div><strong>প্রকাশক:</strong> {activeModalPub.publisher}</div>
                  <div><strong>সংস্করণ:</strong> {activeModalPub.edition}</div>
                  <div><strong>পৃষ্ঠা সংখ্যা:</strong> {activeModalPub.pages}</div>
                  <div><strong>আইএসবিএন:</strong> {activeModalPub.isbn || "অনুপলব্ধ"}</div>
                </div>
              </div>
            </div>

            {/* Summary */}
            <div className="space-y-2">
              <h5 className="text-sm font-bold text-[#1E1B18] font-bengali flex items-center gap-2">
                <FileText className="w-4 h-4 text-[#9E1B22]" />
                সংক্ষেপ ও প্রতিপাদ্য
              </h5>
              <p className="text-sm text-[#403B36] font-bengali leading-relaxed bg-[#FAF6F0] p-4 rounded-xl border border-[#EFE8DF]">
                {activeModalPub.summary}
              </p>
            </div>

            {/* Table of Contents */}
            <div className="space-y-2">
              <h5 className="text-sm font-bold text-[#1E1B18] font-bengali flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-[#195229]" />
                সূচিপত্র ও বিষয়বিন্যাস
              </h5>
              <div className="bg-[#FAF6F0] p-4 rounded-xl border border-[#EFE8DF] space-y-2">
                {activeModalPub.tableOfContents.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-[#403B36] font-bengali">
                    <span className="w-5 h-5 rounded-full bg-[#195229]/10 text-[#195229] font-bold text-[11px] flex items-center justify-center shrink-0">
                      {idx + 1}
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons in Modal */}
            <div className="pt-4 border-t border-[#EFE8DF] flex flex-wrap items-center justify-between gap-3">
              <button
                onClick={() => {
                  handleDownloadSimulation(activeModalPub.title);
                  setActiveModalPub(null);
                }}
                className="inline-flex items-center gap-2 bg-[#9E1B22] hover:bg-[#80141A] text-[#FAF6F0] px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors font-bengali shadow-sm"
              >
                <Download className="w-4 h-4" />
                সম্পূর্ণ কপি ডাউনলোড করুন ({activeModalPub.pdfSize})
              </button>
              <button
                onClick={() => setActiveModalPub(null)}
                className="px-4 py-2 text-sm text-[#736B63] hover:text-[#1E1B18] font-bengali"
              >
                বন্ধ করুন
              </button>
            </div>
          </div>
        </Modal>
      )}

    </div>
  );
}

