"use client";

import React, { useState } from "react";
import { ArrowRight, MapPin, Calendar, CheckCircle2 } from "lucide-react";
import { programsData, Program } from "@/data/culturalData";
import { Container } from "../layout/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Badge } from "../ui/Badge";
import { Modal } from "../ui/Modal";

export function RecentPrograms() {
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);

  return (
    <section id="programs" className="py-12 sm:py-16 lg:py-20 bg-[#FAF6F0] border-t border-[#EFE8DF]">
      <Container size="wide">
        <SectionHeading
          title="সাম্প্রতিক কার্যক্রম"
          linkText="সব কার্যক্রম দেখুন"
          linkHref="/activities"
        />

        {/* 4 Cards in a Row on Desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {programsData.map((prog) => (
            <article
              key={prog.id}
              className="group bg-[#FFFDF9] rounded-2xl border border-[#E6DCD1] overflow-hidden flex flex-col transition-all duration-300 hover:shadow-[0_12px_30px_rgba(40,25,15,0.08)] hover:-translate-y-1 hover:border-[#D5C2B0]"
            >
              {/* Image Container with Aspect Ratio */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#EAE0D5]">
                <img
                  src={prog.image}
                  alt={prog.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Card Body */}
              <div className="p-4 sm:p-5 flex flex-col flex-1">
                <h3 className="text-base sm:text-lg font-bold text-[#1E1B18] group-hover:text-[#9E1B22] transition-colors font-serif-bengali line-clamp-2 min-h-[2.8rem] sm:min-h-[3.25rem] leading-snug">
                  {prog.title}
                </h3>
                <p className="text-xs text-[#8A8177] font-medium mt-0.5">
                  {prog.category}
                </p>

                <p className="mt-2.5 text-xs sm:text-sm text-[#5C544B] leading-relaxed line-clamp-3 flex-1 font-normal">
                  {prog.description}
                </p>

                {/* Card Action Link */}
                <div className="mt-3 flex items-center justify-between gap-2">
                  <button
                    onClick={() => setSelectedProgram(prog)}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#9E1B22] hover:text-[#7A1319] transition-colors group/btn cursor-pointer shrink-0"
                  >
                    <span>বিস্তারিত দেখুন</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>

      {/* Program Details Modal */}
      <Modal
        isOpen={!!selectedProgram}
        onClose={() => setSelectedProgram(null)}
        title={selectedProgram?.title}
        maxWidth="lg"
      >
        {selectedProgram && (
          <div className="space-y-6">
            <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden bg-[#EAE0D5]">
              <img
                src={selectedProgram.image}
                alt={selectedProgram.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3">
                <Badge variant="crimson" size="md">
                  {selectedProgram.category}
                </Badge>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-[#5C544B] bg-[#F7F2EA] p-4 rounded-xl border border-[#E9DFD3]">
              {selectedProgram.date && (
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#9E1B22] shrink-0" />
                  <span>তারিখ: <strong>{selectedProgram.date}</strong></span>
                </div>
              )}
              {selectedProgram.location && (
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#195229] shrink-0" />
                  <span>স্থান: <strong>{selectedProgram.location}</strong></span>
                </div>
              )}
            </div>

            <div>
              <h4 className="text-base font-bold text-[#1E1B18] font-serif-bengali mb-2">
                কর্মসূচির বিবরণ
              </h4>
              <p className="text-base text-[#4E473F] leading-relaxed">
                {selectedProgram.description}
              </p>
            </div>

            {selectedProgram.highlights && (
              <div>
                <h4 className="text-sm font-bold text-[#1E1B18] font-serif-bengali mb-2">
                  প্রধান আয়োজনসমূহ:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {selectedProgram.highlights.map((h, i) => (
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
                onClick={() => setSelectedProgram(null)}
                className="px-5 py-2 text-sm font-semibold text-[#5C544B] hover:bg-[#EFE8DF] rounded-full transition-colors cursor-pointer"
              >
                বন্ধ করুন
              </button>
              <button
                onClick={() => {
                  alert("আবেদনের ফর্ম শীঘ্রই সক্রিয় হবে। আমাদের সাথে যুক্ত থাকতে সদস্য হন ট্যাবে যান।");
                }}
                className="px-6 py-2 text-sm font-semibold text-white bg-[#9E1B22] hover:bg-[#7F141A] rounded-full shadow-xs transition-colors cursor-pointer"
              >
                অংশগ্রহণ করুন
              </button>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}
