"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Camera, ArrowRight, ChevronRight, Eye } from "lucide-react";
import { galleryData, GalleryItem } from "@/data/culturalData";
import { Modal } from "../ui/Modal";

export function MediaGallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null);

  return (
    <div className="flex flex-col h-full">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2.5">
          <Camera className="w-5 h-5 text-[#9E1B22]" />
          <h3 className="text-xl sm:text-2xl font-bold text-[#1E1B18] font-serif-bengali flex items-center">
            মিডিয়া ও গ্যালারি
            <span className="w-7 h-0.5 sm:h-1 bg-[#9E1B22] rounded-full inline-block ml-3 opacity-90" />
          </h3>
        </div>
        <Link
          href="/media"
          className="text-xs sm:text-sm font-semibold text-[#9E1B22] hover:text-[#7A1319] flex items-center gap-1 group cursor-pointer"
        >
          <span>সব দেখুন</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>

      {/* Editorial Masonry/Grid of 4 Photos + Arrow controller */}
      <div className="relative grid grid-cols-2 gap-3.5 flex-1">
        {galleryData.slice(0, 4).map((item) => (
          <div
            key={item.id}
            onClick={() => setSelectedPhoto(item)}
            className="group relative rounded-xl overflow-hidden bg-[#E8DFD5] border border-[#E6DCD1] cursor-pointer aspect-[4/3] shadow-xs hover:border-[#D0C0AF] transition-all"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
            />
            {/* Subtle Gradient & Hover Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="absolute inset-0 p-3 flex flex-col justify-end text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-[10px] font-semibold uppercase tracking-wider text-amber-200">
                {item.category}
              </span>
              <p className="text-xs sm:text-sm font-bold font-serif-bengali line-clamp-1 text-white">
                {item.title}
              </p>
            </div>

            <div className="absolute top-2.5 right-2.5 w-7 h-7 rounded-full bg-black/40 backdrop-blur-xs flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Eye className="w-3.5 h-3.5 text-white" />
            </div>
          </div>
        ))}

        {/* Floating Right Navigation Pill (Visual cue inspired by reference) */}
        <button
          onClick={() => setSelectedPhoto(galleryData[2])}
          aria-label="আরও ছবি দেখুন"
          className="absolute -right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white shadow-md border border-[#E6DCD1] flex items-center justify-center text-[#1E1B18] hover:bg-[#FAF6F0] hover:text-[#9E1B22] transition-colors cursor-pointer hidden sm:flex z-10"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Lightbox / Photo Modal */}
      <Modal
        isOpen={!!selectedPhoto}
        onClose={() => setSelectedPhoto(null)}
        title={selectedPhoto?.title}
        maxWidth="lg"
      >
        {selectedPhoto && (
          <div className="space-y-4">
            <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-black/5">
              <img
                src={selectedPhoto.image}
                alt={selectedPhoto.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <span className="inline-block px-2.5 py-1 text-xs font-semibold bg-[#FAF2E8] text-[#9E1B22] rounded-md border border-[#F0DFCD]">
                {selectedPhoto.category}
              </span>
              <p className="mt-2 text-sm sm:text-base text-[#4E473F] leading-relaxed">
                {selectedPhoto.caption}
              </p>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}

