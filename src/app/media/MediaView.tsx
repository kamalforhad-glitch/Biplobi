"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Camera, 
  Play, 
  Maximize2, 
  Filter, 
  ChevronLeft, 
  ChevronRight, 
  X, 
  Calendar, 
  MapPin, 
  Film, 
  Sparkles, 
  ArrowRight
} from "lucide-react";
import { Container } from "@/components/layout/Container";
import { PageBanner } from "@/components/ui/PageBanner";
import { Modal } from "@/components/ui/Modal";
import { galleryData, GalleryItem } from "@/data/culturalData";
import { galleryImages, programImages, eventImages } from "@/data/culturalImages";

interface MediaPhotoItem extends GalleryItem {
  date: string;
  location: string;
  photographer?: string;
}

interface MediaVideoItem {
  id: string;
  title: string;
  category: string;
  duration: string;
  date: string;
  venue: string;
  thumbnail: string;
  description: string;
  director?: string;
}

export default function MediaView() {
  const [activeTab, setActiveTab] = useState<string>("সব");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [activeVideoModal, setActiveVideoModal] = useState<MediaVideoItem | null>(null);

  const mediaPhotos: MediaPhotoItem[] = [
    {
      ...galleryData[0],
      date: "১৫ জানুয়ারি, ২০২৬",
      location: "জাতীয় নাট্যশালা, সেগুনবাগিচা",
      photographer: "আহমেদ হাসান"
    },
    {
      ...galleryData[1],
      date: "১৪ এপ্রিল, ২০২৬",
      location: "চারুকলা অনুষদ চত্বর, ঢাকা বিশ্ববিদ্যালয়",
      photographer: "তানজিলা আক্তার"
    },
    {
      ...galleryData[2],
      date: "২১ ফেব্রুয়ারি, ২০২৬",
      location: "সোহরাওয়ার্দী উদ্যান উন্মুক্ত মঞ্চ",
      photographer: "সাকিব চৌধুরী"
    },
    {
      ...galleryData[3],
      date: "২৬ মার্চ, ২০২৬",
      location: "কেন্দ্রীয় শহীদ মিনার প্রাঙ্গণ",
      photographer: "ফারহানা হক"
    },
    {
      ...galleryData[4],
      date: "৫ মে, ২০২৬",
      location: "সোনারগাঁও লোক ও কারুশিল্প ফাউন্ডেশন",
      photographer: "রাকিবুল ইসলাম"
    },
    {
      id: "gal-6",
      title: "রাজপথে গণনাটক 'মুক্ত করো ভয়'",
      category: "মঞ্চ নাটক",
      image: programImages.theaterDrama,
      caption: "নাগরিক অধিকার ও অন্যায়ের বিরুদ্ধে প্রতিবাদে মুখরিত পথনাটকের শ্বাসরুদ্ধকর সমাপ্তি দৃশ্য।",
      date: "১০ জুন, ২০২৬",
      location: "শাহবাগ প্রজন্ম চত্বর",
      photographer: "মিজানুর রহমান"
    },
    {
      id: "gal-7",
      title: "ক্যাম্পাসজুড়ে গণসংগীত পদযাত্রা",
      category: "গণসংগীত ও সুর",
      image: eventImages.juneCampusTour,
      caption: "তরুণদের কণ্ঠে বাউল ও গণজাগরণের সমবেত সুরের সুরলহরী।",
      date: "১৮ জুন, ২০২৬",
      location: "টিএসসি ও কার্জন হল",
      photographer: "নাদিয়া পারভীন"
    },
    {
      id: "gal-8",
      title: "সাহিত্য ও লিটল ম্যাগাজিনের মুক্ত আসর",
      category: "সাহিত্য ও মেলা",
      image: eventImages.septemberLittleMag,
      caption: "দেশবরেণ্য লেখক ও তরুণ সাহিত্যকর্মীদের ভাবনা বিনিময়ের মুহূর্ত।",
      date: "১২ সেপ্টেম্বর, ২০২৬",
      location: "পাবলিক লাইব্রেরি সবুজ চত্বর",
      photographer: "আরিফ বিল্লাহ"
    }
  ];

  const mediaVideos: MediaVideoItem[] = [
    {
      id: "vid-1",
      title: "মুক্তির গান: রাজপথের গণসংগীত পরিক্রমা",
      category: "গণসংগীত",
      duration: "১২:৪০ মিনিট",
      date: "ফেব্রুয়ারি ২০২৬",
      venue: "ঢাকা বিশ্ববিদ্যালয় ও কেন্দ্রীয় শহীদ মিনার",
      thumbnail: galleryImages.baulConcert,
      description: "শ্রমজীবী মানুষের অধিকার ও তারুণ্যের জাগরণের গান নিয়ে সারা দেশের ক্যাম্পাসে অনুষ্ঠিত গণসংগীত কনসার্টের সেরা মুহূর্তগুলো।",
      director: "বিপ্লবী সাংস্কৃতিক মিডিয়া সেল"
    },
    {
      id: "vid-2",
      title: "পথনাটক 'জনতার আদালত': রাজপথের মুক্তমঞ্চ",
      category: "পথনাটক",
      duration: "১৮:১৫ মিনিট",
      date: "মার্চ ২০২৬",
      venue: "বাহাদুর শাহ পার্ক চত্বর",
      thumbnail: programImages.theaterDrama,
      description: "দুর্নীতি ও দুঃশাসনের বিরুদ্ধে জনতার ন্যায়বোধকে উপজীব্য করে রচিত ঐতিহাসিক পথনাটকের সরাসরি মঞ্চায়ন।",
      director: "রঙ্গমঞ্চ নাট্যদল"
    },
    {
      id: "vid-3",
      title: "মাটির সুর: বাংলার লোকবাউল ও ঐতিহ্যবাহী বাদ্যযন্ত্র",
      category: "প্রামাণ্যচিত্র",
      duration: "২৫:০০ মিনিট",
      date: "মে ২০২৬",
      venue: "কুষ্টিয়া ছেঁউড়িয়া ও সুনামগঞ্জ",
      thumbnail: programImages.folkMelaMasks,
      description: "একতারা, দোতারা, খমক ও সারিন্দার সুর সংরক্ষণ এবং প্রবীণ লোকশিল্পীদের জীবনসংগ্রাম নিয়ে বিশেষ তথ্যচিত্র।",
      director: "ঐতিহ্য গবেষণা কেন্দ্র"
    },
    {
      id: "vid-4",
      title: "রঙের খেলায় বাংলাদেশ: বৈশাখী আলপনা উৎসব",
      category: "ঐতিহ্য ও উৎসব",
      duration: "১৪:২০ মিনিট",
      date: "এপ্রিল ২০২৬",
      venue: "মানিক মিয়া এভিনিউ ও চারুকলা",
      thumbnail: galleryImages.alponaArt,
      description: "সারা রাতের জাগরণে রাজপথজুড়ে ঐতিহ্যবাহী আলপনা আঁকার নান্দনিক গল্প ও শিল্পীদের উচ্ছ্বাস।",
      director: "চারুশিল্পী পর্ষদ"
    }
  ];

  const filterTabs = [
    "সব", 
    "মঞ্চ নাটক", 
    "গণসংগীত ও সুর", 
    "লোকসংস্কৃতি ও মেলা", 
    "দৃশ্যশিল্প", 
    "সাহিত্য ও মেলা"
  ];

  const filteredPhotos = activeTab === "সব"
    ? mediaPhotos
    : mediaPhotos.filter(p => {
        if (activeTab === "গণসংগীত ও সুর") return p.category === "গণসংগীত" || p.category === "গণসংগীত ও সুর";
        if (activeTab === "লোকসংস্কৃতি ও মেলা") return p.category === "ঐতিহ্য ও উৎসব" || p.category === "লোকসংস্কৃতি" || p.category === "লোকসংস্কৃতি ও মেলা";
        return p.category === activeTab;
      });

  const currentLightboxPhoto = lightboxIndex !== null ? filteredPhotos[lightboxIndex] : null;

  const handleNextPhoto = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredPhotos.length);
    }
  };

  const handlePrevPhoto = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredPhotos.length) % filteredPhotos.length);
    }
  };

  return (
    <div className="bg-[#FAF6F0] min-h-screen">
      {/* 1. Page Banner */}
      <PageBanner
        badge="সাংস্কৃতিক দৃশ্যমালা"
        title="আলোকচিত্র ও ভিডিও সংগ্রহশালা"
        description="আমাদের মঞ্চনাটক, গণসংগীত উৎসব, পথনাটক, আলপনা উৎসব ও গ্রামীণ লোকমেলার অবিস্মরণীয় মুহূর্তগুলোর স্থিরচিত্র ও ভিডিও সংরক্ষণাগার।"
        breadcrumbs={[
          { label: "হোম", href: "/" },
          { label: "মিডিয়া" },
        ]}
        stats={[
          { label: "সংগৃহীত স্থিরচিত্র", value: "৫০০+" },
          { label: "প্রামাণ্যচিত্র ও ভিডিও", value: "৪০+" },
          { label: "আর্কাইভকৃত অনুষ্ঠান", value: "১২০+" },
          { label: "কভারেজ জেলা", value: "২৪টি" },
        ]}
      />

      {/* 2. Photo Gallery Section */}
      <section className="py-10 border-b border-[#EFE8DF]">
        <Container size="wide">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#9E1B22] bg-[#9E1B22]/10 px-3 py-1 rounded-full font-bengali">
                <Camera className="w-3.5 h-3.5" />
                স্থিরচিত্র প্রদর্শনী
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1E1B18] font-bengali mt-2">
                ক্যামেরার চোখে সাংস্কৃতিক আন্দোলন
              </h2>
            </div>

            {/* Filter Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
              <Filter className="w-4 h-4 text-[#9E1B22] shrink-0 mr-1" />
              {filterTabs.map((tab) => {
                const isActive = activeTab === tab;
                return (
                  <button
                    key={tab}
                    onClick={() => { setActiveTab(tab); setLightboxIndex(null); }}
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
          </div>

          {/* Photos Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredPhotos.map((photo, index) => (
              <div 
                key={photo.id}
                onClick={() => setLightboxIndex(index)}
                className="group relative bg-[#FFFFFF] rounded-xl overflow-hidden border border-[#EFE8DF] shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col hover:-translate-y-1"
              >
                {/* Image Container with 4:3 Aspect Ratio */}
                <div className="relative aspect-[4/3] overflow-hidden bg-[#1E1B18]/10">
                  <img 
                    src={photo.image} 
                    alt={photo.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1E1B18]/90 via-[#1E1B18]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div className="text-[#FAF6F0] space-y-1">
                      <span className="inline-block text-[10px] font-bold uppercase tracking-wider bg-[#9E1B22] px-2 py-0.5 rounded text-[#FAF6F0]">
                        {photo.category}
                      </span>
                      <p className="text-xs font-bengali text-[#EFE8DF] line-clamp-2">
                        {photo.caption}
                      </p>
                    </div>
                  </div>

                  {/* Corner Enlarge Icon */}
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-[#1E1B18]/60 text-[#FAF6F0] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>

                {/* Caption Strip */}
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] font-semibold text-[#9E1B22] font-bengali block mb-1">
                      {photo.category}
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-[#1E1B18] font-bengali line-clamp-1 group-hover:text-[#9E1B22] transition-colors">
                      {photo.title}
                    </h3>
                  </div>

                  <div className="flex items-center justify-between text-[11px] text-[#736B63] font-bengali pt-3 mt-2 border-t border-[#F5EFE6]">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-[#195229]" />
                      {photo.location.split(",")[0]}
                    </span>
                    <span>{photo.date.split(",")[0]}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 3. Video Documentary Section */}
      <section className="py-14 sm:py-16 bg-[#F5EFE6]">
        <Container size="wide">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#195229] bg-[#195229]/10 px-3 py-1 rounded-full font-bengali">
                <Film className="w-3.5 h-3.5" />
                ভিডিও ও প্রামাণ্যচিত্র
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1E1B18] font-bengali mt-2">
                ভিডিওতে জীবন্ত সাংস্কৃতিক মুহূর্ত
              </h2>
            </div>
            <Link
              href="/events"
              className="hidden sm:inline-flex items-center gap-2 text-xs font-bold text-[#9E1B22] hover:text-[#80141A] font-bengali"
            >
              ইভেন্ট সূচি দেখুন
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Video Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mediaVideos.map((video) => (
              <div 
                key={video.id}
                onClick={() => setActiveVideoModal(video)}
                className="bg-[#FFFFFF] rounded-xl overflow-hidden border border-[#EFE8DF] shadow-sm hover:shadow-lg transition-all duration-300 group cursor-pointer flex flex-col hover:-translate-y-1"
              >
                {/* Video Thumbnail with Play Button */}
                <div className="relative aspect-video overflow-hidden bg-[#1E1B18]">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                  />
                  <div className="absolute inset-0 bg-[#000000]/30 group-hover:bg-[#000000]/10 transition-colors flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-[#9E1B22] text-[#FAF6F0] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Play className="w-5 h-5 fill-current ml-0.5" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-[#1E1B18]/80 text-[#FAF6F0] text-[10px] font-mono px-2 py-0.5 rounded font-semibold">
                    {video.duration}
                  </div>
                </div>

                {/* Video Info */}
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-xs text-[#736B63] font-bengali mb-1.5">
                      <span className="font-semibold text-[#195229]">{video.category}</span>
                      <span>{video.date}</span>
                    </div>
                    <h3 className="text-sm font-bold text-[#1E1B18] font-bengali line-clamp-2 group-hover:text-[#9E1B22] transition-colors leading-snug">
                      {video.title}
                    </h3>
                  </div>

                  <p className="text-xs text-[#736B63] font-bengali line-clamp-2 mt-2 pt-2 border-t border-[#F5EFE6]">
                    {video.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 4. Cultural Archiving CTA */}
      <section className="py-12 bg-[#FAF6F0] border-t border-[#EFE8DF]">
        <Container size="default">
          <div className="bg-[#FFFFFF] rounded-2xl border-2 border-[#9E1B22]/15 p-6 sm:p-8 text-center space-y-4 shadow-sm">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#9E1B22] bg-[#9E1B22]/10 px-3 py-1 rounded-full font-bengali">
              <Sparkles className="w-3.5 h-3.5" />
              আপনার সংগ্রহ জমা দিন
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-[#1E1B18] font-bengali">
              আমাদের অনুষ্ঠানের আলোকচিত্র বা ভিডিও কি আপনার কাছে রয়েছে?
            </h3>
            <p className="text-sm text-[#403B36] font-bengali max-w-xl mx-auto leading-relaxed">
              বিপ্লবী সাংস্কৃতিক ঐক্যের যেকোনো অতীত বা সাম্প্রতিক অনুষ্ঠানের ছবি ও ভিডিও ফুটেজ আমাদের আর্কাইভ সেলে জমা দিয়ে ইতিহাস সংরক্ষণে অংশ নিন।
            </p>
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#9E1B22] hover:bg-[#80141A] text-[#FAF6F0] px-6 py-2.5 rounded-lg text-sm font-semibold transition-colors font-bengali"
              >
                মিডিয়া সেলের সাথে যোগাযোগ করুন
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* 5. Interactive Lightbox Modal */}
      {currentLightboxPhoto && (
        <div 
          className="fixed inset-0 z-50 bg-[#000000]/95 flex items-center justify-center p-4 backdrop-blur-md animate-fade-in"
          onClick={() => setLightboxIndex(null)}
        >
          <div 
            className="relative max-w-5xl w-full max-h-[90vh] flex flex-col bg-[#1E1B18] rounded-2xl overflow-hidden border border-[#FAF6F0]/20 text-[#FAF6F0]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Toolbar */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#FAF6F0]/10 bg-[#141210]">
              <div className="flex items-center gap-3">
                <span className="text-xs bg-[#9E1B22] text-[#FAF6F0] px-2.5 py-1 rounded font-bold font-bengali">
                  {currentLightboxPhoto.category}
                </span>
                <span className="text-xs text-[#FAF6F0]/60 font-bengali">
                  {lightboxIndex! + 1} / {filteredPhotos.length}
                </span>
              </div>
              <button 
                onClick={() => setLightboxIndex(null)}
                className="w-8 h-8 rounded-full bg-[#FAF6F0]/10 hover:bg-[#FAF6F0]/20 flex items-center justify-center transition-colors text-[#FAF6F0]"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Main Image Stage with Next/Prev Controls */}
            <div className="relative flex-1 min-h-[300px] sm:min-h-[460px] flex items-center justify-center bg-[#0C0B0A] p-2 sm:p-4">
              <img 
                src={currentLightboxPhoto.image} 
                alt={currentLightboxPhoto.title}
                className="max-h-[60vh] max-w-full object-contain rounded-lg shadow-2xl"
              />

              {/* Prev Button */}
              <button
                onClick={handlePrevPhoto}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#1E1B18]/80 hover:bg-[#9E1B22] text-[#FAF6F0] flex items-center justify-center transition-colors border border-[#FAF6F0]/20"
                aria-label="Previous"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Next Button */}
              <button
                onClick={handleNextPhoto}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#1E1B18]/80 hover:bg-[#9E1B22] text-[#FAF6F0] flex items-center justify-center transition-colors border border-[#FAF6F0]/20"
                aria-label="Next"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Bottom Caption Strip */}
            <div className="p-6 bg-[#141210] border-t border-[#FAF6F0]/10 space-y-2">
              <h3 className="text-lg sm:text-xl font-bold font-bengali text-[#FAF6F0]">
                {currentLightboxPhoto.title}
              </h3>
              <p className="text-sm font-bengali text-[#FAF6F0]/80 leading-relaxed">
                {currentLightboxPhoto.caption}
              </p>
              <div className="flex flex-wrap items-center gap-4 text-xs text-[#FAF6F0]/60 font-bengali pt-2">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#86EFAC]" />
                  স্থান: {currentLightboxPhoto.location}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-[#FDE68A]" />
                  তারিখ: {currentLightboxPhoto.date}
                </span>
                {currentLightboxPhoto.photographer && (
                  <span className="flex items-center gap-1">
                    <Camera className="w-3.5 h-3.5 text-[#F472B6]" />
                    আলোকচিত্রী: {currentLightboxPhoto.photographer}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 6. Video Player Modal */}
      {activeVideoModal && (
        <Modal
          isOpen={!!activeVideoModal}
          onClose={() => setActiveVideoModal(null)}
          title={activeVideoModal.title}
          subtitle={`ভিডিও আর্কাইভ • ${activeVideoModal.category} (${activeVideoModal.duration})`}
          size="lg"
        >
          <div className="space-y-4">
            {/* Video Player Display Container */}
            <div className="relative aspect-video rounded-xl overflow-hidden bg-[#0F0E0D] border-2 border-[#1E1B18]">
              <img 
                src={activeVideoModal.thumbnail} 
                alt={activeVideoModal.title}
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#000000]/40 p-4 text-center">
                <div className="w-16 h-16 rounded-full bg-[#9E1B22] text-[#FAF6F0] flex items-center justify-center shadow-2xl mb-3 animate-pulse">
                  <Play className="w-7 h-7 fill-current ml-1" />
                </div>
                <p className="text-sm font-bold text-[#FAF6F0] font-bengali">
                  ভিডিও প্রদর্শন সিমুলেশন (আর্কাইভ সংস্করণ)
                </p>
                <p className="text-xs text-[#EFE8DF]/80 font-bengali mt-1">
                  দৈর্ঘ্য: {activeVideoModal.duration} • পূর্ণাঙ্গ রেকর্ডিং সংরক্ষিত রয়েছে
                </p>
              </div>
            </div>

            <div className="p-4 bg-[#FAF6F0] rounded-xl border border-[#EFE8DF] space-y-2">
              <h4 className="text-sm font-bold text-[#1E1B18] font-bengali">
                বিবরণ ও প্রেক্ষাপট:
              </h4>
              <p className="text-xs sm:text-sm text-[#403B36] font-bengali leading-relaxed">
                {activeVideoModal.description}
              </p>
              <div className="grid grid-cols-2 gap-2 pt-2 text-xs text-[#736B63] font-bengali">
                <div><strong>ধারণস্থল:</strong> {activeVideoModal.venue}</div>
                <div><strong>প্রযোজনা:</strong> {activeVideoModal.director || "বিপ্লবী সাংস্কৃতিক ঐক্য"}</div>
              </div>
            </div>

            <div className="flex justify-end pt-2">
              <button
                onClick={() => setActiveVideoModal(null)}
                className="px-4 py-2 bg-[#9E1B22] text-[#FAF6F0] text-xs font-semibold rounded-lg font-bengali"
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

