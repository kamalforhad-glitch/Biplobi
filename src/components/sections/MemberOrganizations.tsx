"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Users, ArrowRight, Drama, Music, Palette, Drum, BookOpen } from "lucide-react";
import { memberWingsData, MemberWing } from "@/data/culturalData";
import { Modal } from "../ui/Modal";

function getWingStyle(name: string) {
  switch (name) {
    case "Drama":
      return { bg: "bg-[#FEF2F2] border-[#FECACA]", iconColor: "text-[#9E1B22]" };
    case "Music":
      return { bg: "bg-[#F0FDF4] border-[#BBF7D0]", iconColor: "text-[#15803D]" };
    case "Palette":
      return { bg: "bg-[#F0FDF4] border-[#BBF7D0]", iconColor: "text-[#15803D]" };
    case "Drum":
      return { bg: "bg-[#FEF2F2] border-[#FECDD3]", iconColor: "text-[#991B1B]" };
    case "Users":
      return { bg: "bg-[#FEF2F2] border-[#FECACA]", iconColor: "text-[#9E1B22]" };
    case "BookOpen":
      return { bg: "bg-[#F0FDF4] border-[#BBF7D0]", iconColor: "text-[#15803D]" };
    default:
      return { bg: "bg-[#FAF4ED] border-[#EFE5D8]", iconColor: "text-[#9E1B22]" };
  }
}

function WingIcon({ name, className }: { name: string; className?: string }) {
  switch (name) {
    case "Drama":
      return <Drama className={className || "w-5 h-5"} />;
    case "Music":
      return <Music className={className || "w-5 h-5"} />;
    case "Palette":
      return <Palette className={className || "w-5 h-5"} />;
    case "Drum":
      return <Drum className={className || "w-5 h-5"} />;
    case "Users":
      return <Users className={className || "w-5 h-5"} />;
    case "BookOpen":
      return <BookOpen className={className || "w-5 h-5"} />;
    default:
      return <Users className={className || "w-5 h-5"} />;
  }
}

export function MemberOrganizations({ onJoinClick }: { onJoinClick: () => void }) {
  const [selectedWing, setSelectedWing] = useState<MemberWing | null>(null);

  return (
    <div className="flex flex-col h-full">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2.5">
          <Users className="w-5 h-5 text-[#9E1B22]" />
          <h3 className="text-xl sm:text-2xl font-bold text-[#1E1B18] font-serif-bengali flex items-center">
            সদস্য সংগঠন ও নেটওয়ার্ক
            <span className="w-7 h-0.5 sm:h-1 bg-[#9E1B22] rounded-full inline-block ml-3 opacity-90" />
          </h3>
        </div>
        <Link
          href="/membership"
          className="text-xs sm:text-sm font-semibold text-[#9E1B22] hover:text-[#7A1319] flex items-center gap-1 group cursor-pointer"
        >
          <span>সব দেখুন</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>

      {/* Grid of 6 Cultural Wings matching reference single row layout */}
      <div className="grid grid-cols-3 sm:grid-cols-6 gap-2.5 my-auto">
        {memberWingsData.map((wing) => {
          const style = getWingStyle(wing.iconName);
          return (
            <div
              key={wing.id}
              onClick={() => setSelectedWing(wing)}
              className="group bg-[#FFFDF9] rounded-xl border border-[#E6DCD1] p-3 sm:py-5 sm:px-2 flex flex-col items-center text-center justify-center hover:border-[#D0C0AF] hover:shadow-[0_6px_16px_rgba(30,15,5,0.05)] transition-all cursor-pointer"
            >
              {/* Color-Coded Icon Badge */}
              <div
                className={`w-10 h-10 sm:w-11 sm:h-11 rounded-full ${style.bg} ${style.iconColor} border flex items-center justify-center mb-2.5 group-hover:scale-110 transition-transform shadow-xs`}
              >
                <WingIcon name={wing.iconName} className="w-5 h-5" />
              </div>

              <h4 className="text-xs sm:text-sm font-bold text-[#1E1B18] group-hover:text-[#9E1B22] transition-colors font-serif-bengali leading-snug">
                {wing.category}
              </h4>
            </div>
          );
        })}
      </div>

      {/* Wing Details Modal */}
      <Modal
        isOpen={!!selectedWing}
        onClose={() => setSelectedWing(null)}
        title={selectedWing?.name}
        maxWidth="sm"
      >
        {selectedWing && (
          <div className="space-y-4">
            <div className="flex items-center gap-3 p-3 bg-[#FAF4ED] rounded-xl border border-[#EFE5D8]">
              <div className="w-12 h-12 rounded-full bg-white shadow-xs flex items-center justify-center shrink-0">
                <WingIcon name={selectedWing.iconName} />
              </div>
              <div>
                <h4 className="font-bold text-[#1E1B18] font-serif-bengali">
                  {selectedWing.name}
                </h4>
                <p className="text-xs text-[#9E1B22] font-semibold">
                  {selectedWing.category} • {selectedWing.established}
                </p>
              </div>
            </div>

            <p className="text-sm text-[#4E473F] leading-relaxed">
              এই সাংস্কৃতিক শাখাটি সারা দেশের প্রত্যন্ত অঞ্চল থেকে তৃণমূল পর্যায়ের শিল্পীদের ঐক্যবদ্ধ করে নিয়মিত কর্মশালা, মহড়া ও গণসংযোগ কর্মসূচি পরিচালনা করে থাকে।
            </p>

            <div className="pt-2 flex justify-end gap-2">
              <button
                onClick={() => setSelectedWing(null)}
                className="px-4 py-2 text-xs font-semibold text-[#5C544B] hover:bg-[#EFE8DF] rounded-full transition-colors cursor-pointer"
              >
                বন্ধ করুন
              </button>
              <button
                onClick={() => {
                  setSelectedWing(null);
                  onJoinClick();
                }}
                className="px-5 py-2 text-xs font-semibold text-white bg-[#9E1B22] hover:bg-[#7F141A] rounded-full shadow-xs transition-colors cursor-pointer"
              >
                শাখাটিতে যুক্ত হোন
              </button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}

