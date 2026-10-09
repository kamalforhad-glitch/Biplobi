"use client";

import React, { useState } from "react";
import { workCategoriesData, WorkCategory } from "@/data/culturalData";
import { Container } from "../layout/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Modal } from "../ui/Modal";

// Handcrafted Cultural Icon Component
function CulturalIcon({ name, color }: { name: string; color: string }) {
  switch (name) {
    case "Mic2": // আবৃত্তি (Recitation / Voice / Poetry)
      return (
        <svg viewBox="0 0 40 40" className="w-6 h-6 sm:w-7 sm:h-7" fill="none">
          <circle cx="20" cy="14" r="6" fill={color} />
          <path d="M14 18 C14 24, 26 24, 26 18" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
          <path d="M20 24 L20 30 M15 30 L25 30" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" />
          <path d="M9 13 Q7 17 9 21 M31 13 Q33 17 31 21" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" strokeOpacity="0.8" />
        </svg>
      );
    case "Music": // সংগীত (Music / Ektara & Swar)
      return (
        <svg viewBox="0 0 40 40" className="w-6 h-6 sm:w-7 sm:h-7" fill="none">
          <circle cx="16" cy="27" r="4.5" fill="#FFFFFF" />
          <circle cx="28" cy="24" r="4" fill="#FFFFFF" />
          <path d="M20.5 27 L20.5 12 L32 9 L32 24" stroke="#FFFFFF" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M20.5 16 L32 13" stroke="#FFFFFF" strokeWidth="2" />
        </svg>
      );
    case "Drama": // নাটক (Theatre Masks)
      return (
        <svg viewBox="0 0 40 40" className="w-6 h-6 sm:w-7 sm:h-7" fill="none">
          <path d="M9 11 C9 8, 23 8, 23 11 C23 21, 9 21, 9 11 Z" fill="#FFFFFF" fillOpacity="0.9" />
          <circle cx="13" cy="13" r="1.5" fill={color} />
          <circle cx="19" cy="13" r="1.5" fill={color} />
          <path d="M13 17 Q16 20 19 17" stroke={color} strokeWidth="1.5" strokeLinecap="round" />

          <path d="M17 19 C17 16, 31 16, 31 19 C31 29, 17 29, 17 19 Z" fill="#FFFFFF" />
          <circle cx="21" cy="21" r="1.5" fill={color} />
          <circle cx="27" cy="21" r="1.5" fill={color} />
          <path d="M21 26 Q24 23 27 26" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case "Sparkles": // নৃত্য (Dance)
      return (
        <svg viewBox="0 0 40 40" className="w-6 h-6 sm:w-7 sm:h-7" fill="none">
          <circle cx="20" cy="10" r="3.2" fill="#FFFFFF" />
          <path d="M20 14 L20 22 M20 22 L15 31 M20 22 L26 29" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" />
          <path d="M12 16 Q20 19 28 15" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" />
          <path d="M28 15 Q31 11 29 9" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    case "Radio": // লোকসংস্কৃতি (Folk Heritage / Ektara)
      return (
        <svg viewBox="0 0 40 40" className="w-6 h-6 sm:w-7 sm:h-7" fill="none">
          <ellipse cx="20" cy="28" rx="8" ry="6" fill="#FFFFFF" />
          <path d="M16 28 L16 10 C16 8, 24 8, 24 10 L24 28" stroke="#FFFFFF" strokeWidth="2" />
          <line x1="20" y1="10" x2="20" y2="28" stroke={color} strokeWidth="1.6" />
          <circle cx="20" cy="8" r="2" fill="#FFFFFF" />
        </svg>
      );
    case "Palette": // চিত্রকলা ও দৃশ্যশিল্প (Visual Arts)
      return (
        <svg viewBox="0 0 40 40" className="w-6 h-6 sm:w-7 sm:h-7" fill="none">
          <path d="M20 9 C12 9, 8 14, 8 21 C8 27, 13 31, 18 31 C20 31, 21 29, 21 27 C21 25, 23 25, 25 25 C29 25, 32 22, 32 18 C32 13, 27 9, 20 9 Z" fill="#FFFFFF" />
          <circle cx="14" cy="17" r="1.8" fill={color} />
          <circle cx="19" cy="14" r="1.8" fill="#D97706" />
          <circle cx="25" cy="17" r="1.8" fill="#9E1B22" />
          <circle cx="20" cy="27" r="2.2" fill={color} />
        </svg>
      );
    case "Film": // চলচ্চিত্র / ডকুমেন্টারি (Film Reel)
      return (
        <svg viewBox="0 0 40 40" className="w-6 h-6 sm:w-7 sm:h-7" fill="none">
          <circle cx="20" cy="20" r="11" stroke="#FFFFFF" strokeWidth="2.5" />
          <circle cx="20" cy="20" r="4" fill="#FFFFFF" />
          <circle cx="20" cy="12" r="2" fill="#FFFFFF" />
          <circle cx="20" cy="28" r="2" fill="#FFFFFF" />
          <circle cx="12" cy="20" r="2" fill="#FFFFFF" />
          <circle cx="28" cy="20" r="2" fill="#FFFFFF" />
        </svg>
      );
    case "BookOpen": // গবেষণা ও প্রকাশনা (Research & Publications)
      return (
        <svg viewBox="0 0 40 40" className="w-6 h-6 sm:w-7 sm:h-7" fill="none">
          <path d="M10 28 C14 26, 18 26, 20 28 C22 26, 26 26, 30 28 L30 14 C26 12, 22 12, 20 14 C18 12, 14 12, 10 14 Z" fill="#FFFFFF" />
          <path d="M20 14 L20 28" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    default:
      return null;
  }
}

export function AreasOfWork() {
  const [selectedCategory, setSelectedCategory] = useState<WorkCategory | null>(null);

  return (
    <section id="areas" className="py-12 sm:py-16 lg:py-20 bg-[#FAF6F0]">
      <Container size="wide">
        <SectionHeading
          title="আমাদের কার্যক্রমের ক্ষেত্রসমূহ"
        />

        {/* 8 Categories Grid (2 cols mobile, 4 cols desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {workCategoriesData.map((category) => (
            <div
              key={category.id}
              onClick={() => setSelectedCategory(category)}
              className="group relative bg-[#FFFDF9] rounded-2xl p-4.5 sm:p-5.5 border border-[#E6DCD1] hover:border-[#D0C0AF] transition-all duration-300 hover:shadow-[0_10px_26px_rgba(40,25,15,0.06)] hover:-translate-y-1 cursor-pointer flex items-center gap-4"
            >
              {/* Distinctive Circular Handcrafted Icon */}
              <div
                className="w-13 h-13 sm:w-14 sm:h-14 rounded-full flex items-center justify-center shrink-0 shadow-sm transition-transform duration-300 group-hover:scale-108"
                style={{ backgroundColor: category.color }}
              >
                <CulturalIcon name={category.iconName} color={category.color} />
              </div>

              {/* Title & Tagline */}
              <div className="flex-1 min-w-0">
                <h3 className="text-base sm:text-lg font-bold text-[#1E1B18] group-hover:text-[#9E1B22] transition-colors font-serif-bengali truncate">
                  {category.title}
                </h3>
                <p className="text-xs sm:text-[13px] text-[#6A6258] mt-0.5 line-clamp-1 font-medium">
                  {category.tagline}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>

      {/* Category Details Modal */}
      <Modal
        isOpen={!!selectedCategory}
        onClose={() => setSelectedCategory(null)}
        title={selectedCategory?.title}
        maxWidth="md"
      >
        {selectedCategory && (
          <div className="space-y-5">
            <div className="flex items-center gap-4 p-4 rounded-xl" style={{ backgroundColor: selectedCategory.bgColor }}>
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center shrink-0 shadow-xs"
                style={{ backgroundColor: selectedCategory.color }}
              >
                <CulturalIcon name={selectedCategory.iconName} color={selectedCategory.color} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-[#1E1B18] font-serif-bengali">
                  {selectedCategory.title}
                </h4>
                <p className="text-sm font-medium" style={{ color: selectedCategory.color }}>
                  {selectedCategory.tagline}
                </p>
              </div>
            </div>

            <p className="text-base text-[#4E473F] leading-relaxed">
              {selectedCategory.description}
            </p>

            <div className="bg-[#FAF6F0] p-4 rounded-xl border border-[#E8DFD5] space-y-2">
              <p className="text-xs font-semibold text-[#635C54] uppercase tracking-wider">
                কার্যক্রমের অর্জিত মাত্রা:
              </p>
              <p className="text-lg font-bold text-[#9E1B22] font-serif-bengali">
                {selectedCategory.stat}
              </p>
              <p className="text-xs text-[#70685E]">
                নিয়মিত প্রশিক্ষণ কর্মশালা, সেমিনার ও দেশব্যাপী প্রদর্শনীর মাধ্যমে আমরা এ ধারাকে সক্রিয় রাখি।
              </p>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setSelectedCategory(null)}
                className="px-6 py-2 text-sm font-semibold text-white rounded-full transition-colors cursor-pointer"
                style={{ backgroundColor: selectedCategory.color }}
              >
                ঠিক আছে
              </button>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}

