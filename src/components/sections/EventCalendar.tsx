"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Calendar as CalendarIcon, MapPin, Clock, ArrowRight } from "lucide-react";
import { eventsData, EventItem } from "@/data/culturalData";
import { Modal } from "../ui/Modal";

export function EventCalendar() {
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);

  return (
    <div className="flex flex-col h-full">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2.5">
          <CalendarIcon className="w-5 h-5 text-[#9E1B22]" />
          <h3 className="text-xl sm:text-2xl font-bold text-[#1E1B18] font-serif-bengali flex items-center">
            ইভেন্ট ক্যালেন্ডার
            <span className="w-7 h-0.5 sm:h-1 bg-[#9E1B22] rounded-full inline-block ml-3 opacity-90" />
          </h3>
        </div>
        <Link
          href="/events"
          className="text-xs sm:text-sm font-semibold text-[#9E1B22] hover:text-[#7A1319] flex items-center gap-1 group cursor-pointer"
        >
          <span>সব ইভেন্ট দেখুন</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>

      {/* 4 Event Cards Grid in a Single Row matching reference */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 flex-1">
        {eventsData.map((event) => (
          <div
            key={event.id}
            onClick={() => setSelectedEvent(event)}
            className="group bg-[#FFFDF9] rounded-xl border border-[#E6DCD1] overflow-hidden flex flex-col hover:border-[#D0C0AF] hover:shadow-[0_8px_20px_rgba(30,15,5,0.06)] transition-all duration-300 cursor-pointer"
          >
            {/* Top Image with Month Badge Overlay */}
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#E8DFD5]">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              
              {/* Colored Month Badge */}
              <div
                className="absolute top-2 left-2 px-2 py-0.5 text-[10px] sm:text-xs font-bold text-white rounded shadow-xs"
                style={{ backgroundColor: event.monthColor }}
              >
                {event.month}
              </div>
            </div>

            {/* Event Body */}
            <div className="p-2 sm:p-2.5 flex flex-col flex-1 justify-center">
              <h4 className="text-xs sm:text-[13px] font-bold text-[#1E1B18] group-hover:text-[#9E1B22] transition-colors font-serif-bengali line-clamp-2 min-h-[2.2rem] sm:min-h-[2.4rem] leading-snug">
                {event.title}
              </h4>
              <p className="text-[10px] sm:text-[11px] text-[#736A60] mt-0.5 line-clamp-1 font-medium">
                {event.category}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Event Details Modal */}
      <Modal
        isOpen={!!selectedEvent}
        onClose={() => setSelectedEvent(null)}
        title={selectedEvent?.title}
        maxWidth="md"
      >
        {selectedEvent && (
          <div className="space-y-5">
            <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden bg-[#EAE0D5]">
              <img
                src={selectedEvent.image}
                alt={selectedEvent.title}
                className="w-full h-full object-cover"
              />
              <div
                className="absolute top-3 left-3 px-3 py-1 text-xs font-bold text-white rounded-md shadow-xs"
                style={{ backgroundColor: selectedEvent.monthColor }}
              >
                {selectedEvent.month}
              </div>
            </div>

            <div className="space-y-2 bg-[#F7F2EA] p-4 rounded-xl border border-[#E8DFD5] text-sm text-[#4E473F]">
              <div className="flex items-center gap-2">
                <CalendarIcon className="w-4 h-4 text-[#9E1B22] shrink-0" />
                <span>তারিখ: <strong>{selectedEvent.dateString}</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#D97706] shrink-0" />
                <span>সময়: <strong>{selectedEvent.time}</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#195229] shrink-0" />
                <span>স্থান: <strong>{selectedEvent.venue}</strong></span>
              </div>
            </div>

            <div>
              <h5 className="text-sm font-bold text-[#1E1B18] font-serif-bengali mb-1.5">
                ইভেন্টের উদ্দেশ্য ও রূপরেখা:
              </h5>
              <p className="text-sm sm:text-base text-[#4E473F] leading-relaxed">
                {selectedEvent.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-1.5">
              {selectedEvent.tags.map((tag, idx) => (
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
                onClick={() => setSelectedEvent(null)}
                className="px-4 py-2 text-xs sm:text-sm font-semibold text-[#5C544B] hover:bg-[#EFE8DF] rounded-full transition-colors cursor-pointer"
              >
                বন্ধ করুন
              </button>
              <button
                onClick={() => {
                  alert("আপনার আসন নিশ্চিত করার জন্য নিবন্ধন গৃহীত হয়েছে। ধন্যবাদ!");
                  setSelectedEvent(null);
                }}
                className="px-5 py-2 text-xs sm:text-sm font-semibold text-white bg-[#9E1B22] hover:bg-[#7F141A] rounded-full shadow-xs transition-colors cursor-pointer"
              >
                আসনে যোগ দিন
              </button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}

