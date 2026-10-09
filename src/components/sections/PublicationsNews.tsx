"use client";

import React, { useState } from "react";
import Link from "next/link";
import { BookOpen, ArrowRight, ChevronRight, Clock, User } from "lucide-react";
import { publicationsData, PublicationItem } from "@/data/culturalData";
import { Modal } from "../ui/Modal";

export function PublicationsNews() {
  const [selectedPub, setSelectedPub] = useState<PublicationItem | null>(null);

  return (
    <div className="flex flex-col h-full">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2.5">
          <BookOpen className="w-5 h-5 text-[#9E1B22]" />
          <h3 className="text-xl sm:text-2xl font-bold text-[#1E1B18] font-serif-bengali flex items-center">
            প্রকাশনা ও সংবাদ
            <span className="w-7 h-0.5 sm:h-1 bg-[#9E1B22] rounded-full inline-block ml-3 opacity-90" />
          </h3>
        </div>
        <Link
          href="/publications"
          className="text-xs sm:text-sm font-semibold text-[#9E1B22] hover:text-[#7A1319] flex items-center gap-1 group cursor-pointer"
        >
          <span>সব দেখুন</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>

      {/* 3 Horizontal Editorial List Cards */}
      <div className="flex flex-col gap-3.5 flex-1 justify-between">
        {publicationsData.map((pub) => (
          <div
            key={pub.id}
            onClick={() => setSelectedPub(pub)}
            className="group bg-[#FFFDF9] rounded-xl border border-[#E6DCD1] p-3 sm:p-3.5 flex items-center gap-4 hover:border-[#D0C0AF] hover:shadow-[0_6px_18px_rgba(30,15,5,0.06)] transition-all cursor-pointer"
          >
            {/* Thumbnail */}
            <div className="relative w-16 h-16 sm:w-18 sm:h-18 rounded-lg overflow-hidden bg-[#EAE0D5] shrink-0 border border-[#E0D5C7]">
              <img
                src={pub.image}
                alt={pub.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-108"
              />
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
              <h4 className="text-sm sm:text-base font-bold text-[#1E1B18] group-hover:text-[#9E1B22] transition-colors font-serif-bengali line-clamp-1">
                {pub.title}
              </h4>
              <p className="text-xs text-[#8A8177] mt-0.5 font-medium">
                {pub.category}
              </p>
            </div>

            {/* Arrow on right */}
            <div className="shrink-0 p-1 rounded-full text-[#8A8177] group-hover:text-[#9E1B22] group-hover:translate-x-1 transition-all">
              <ChevronRight className="w-5 h-5" />
            </div>
          </div>
        ))}
      </div>

      {/* Publication Reader Modal */}
      <Modal
        isOpen={!!selectedPub}
        onClose={() => setSelectedPub(null)}
        title={selectedPub?.title}
        maxWidth="md"
      >
        {selectedPub && (
          <div className="space-y-4">
            <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden bg-[#E8DFD5]">
              <img
                src={selectedPub.image}
                alt={selectedPub.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex flex-wrap items-center gap-4 text-xs text-[#7A7166] border-b border-[#EFE8DF] pb-3">
              <span className="font-semibold text-[#9E1B22] bg-[#FAF2E8] px-2.5 py-0.5 rounded">
                {selectedPub.category}
              </span>
              <div className="flex items-center gap-1">
                <User className="w-3.5 h-3.5" />
                <span>{selectedPub.author}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                <span>{selectedPub.readTime}</span>
              </div>
            </div>

            <div>
              <h5 className="text-sm font-bold text-[#1E1B18] font-serif-bengali mb-1.5">
                প্রকাশনার সারসংক্ষেপ:
              </h5>
              <p className="text-sm sm:text-base text-[#4E473F] leading-relaxed">
                {selectedPub.summary}
              </p>
            </div>

            <p className="text-xs text-[#7A7166] italic bg-[#F7F2EA] p-3 rounded-lg border border-[#E9DFD3]">
              সম্পূর্ণ গবেষণা পত্র বা সাময়িকী সংগ্রহ করতে আমাদের কার্যালয়ে যোগাযোগ করুন অথবা অনলাইন কপি ডাউনলোড করুন।
            </p>

            <div className="pt-3 border-t border-[#EFE8DF] flex justify-end gap-3">
              <button
                onClick={() => setSelectedPub(null)}
                className="px-4 py-2 text-xs font-semibold text-[#5C544B] hover:bg-[#EFE8DF] rounded-full transition-colors cursor-pointer"
              >
                বন্ধ করুন
              </button>
              <button
                onClick={() => {
                  alert("প্রকাশনাটি সফলভাবে সংরক্ষণের অনুরোধ গ্রহণ করা হয়েছে।");
                  setSelectedPub(null);
                }}
                className="px-5 py-2 text-xs font-semibold text-white bg-[#9E1B22] hover:bg-[#7F141A] rounded-full shadow-xs transition-colors cursor-pointer"
              >
                পিডিএফ ডাউনলোড করুন
              </button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}

