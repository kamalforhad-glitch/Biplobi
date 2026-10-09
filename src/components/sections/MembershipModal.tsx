"use client";

import React, { useState } from "react";
import { CheckCircle2, Send } from "lucide-react";
import { Modal } from "../ui/Modal";
import { Button } from "../ui/Button";

interface MembershipModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MembershipModal({ isOpen, onClose }: MembershipModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    category: "নাটক ও পথনাটক",
    type: "সক্রিয় সংস্কৃতিকর্মী",
    location: "ঢাকা",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      category: "নাটক ও পথনাটক",
      type: "সক্রিয় সংস্কৃতিকর্মী",
      location: "ঢাকা",
      notes: "",
    });
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={handleReset} title="বিপ্লবী সাংস্কৃতিক ঐক্যে যুক্ত হন" maxWidth="md">
      {submitted ? (
        <div className="text-center py-6 space-y-4">
          <div className="w-16 h-16 rounded-full bg-[#EDF7F0] text-[#195229] mx-auto flex items-center justify-center">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <h4 className="text-2xl font-bold text-[#1E1B18] font-serif-bengali">
            অভিনন্দন! আপনার আবেদন গৃহীত হয়েছে
          </h4>
          <p className="text-sm sm:text-base text-[#635C54] max-w-sm mx-auto leading-relaxed">
            ধন্যবাদ, <strong>{formData.name || "সাংস্কৃতিক সহযোদ্ধা"}</strong>। আমাদের কেন্দ্রীয় সমন্বয় সেল শীঘ্রই আপনার প্রদত্ত ফোন নম্বরে যোগাযোগ করবে।
          </p>
          <div className="pt-4">
            <Button variant="primary" onClick={handleReset} className="w-full sm:w-auto">
              ধন্যবাদ, সমাপ্ত করুন
            </Button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <p className="text-sm text-[#635C54]">
            বাঙালির মানবিক ও প্রগতিশীল সাংস্কৃতিক আন্দোলনে অংশীদার হতে নিচের তথ্যগুলো পূরণ করুন।
          </p>

          <div>
            <label className="block text-xs font-semibold text-[#1E1B18] mb-1">
              আপনার পুরো নাম <span className="text-[#9E1B22]">*</span>
            </label>
            <input
              type="text"
              required
              placeholder="যেমন: অনিক রহমান"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl border border-[#D5C7B8] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#9E1B22] focus:border-transparent"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-[#1E1B18] mb-1">
                মোবাইল নম্বর <span className="text-[#9E1B22]">*</span>
              </label>
              <input
                type="tel"
                required
                placeholder="০১৭১২-XXXXXX"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-[#D5C7B8] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#9E1B22] focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-[#1E1B18] mb-1">
                ইমেইল ঠিকানা
              </label>
              <input
                type="email"
                placeholder="example@mail.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-[#D5C7B8] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#9E1B22] focus:border-transparent"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-[#1E1B18] mb-1">
                আগ্রহের ক্ষেত্র
              </label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-[#D5C7B8] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#9E1B22]"
              >
                <option value="নাটক ও পথনাটক">নাটক ও পথনাটক</option>
                <option value="আবৃত্তি ও কণ্ঠশীলন">আবৃত্তি ও কণ্ঠশীলন</option>
                <option value="গণসংগীত ও লোকগান">গণসংগীত ও লোকগান</option>
                <option value="নৃত্য ও নৃত্যনাট্য">নৃত্য ও নৃত্যনাট্য</option>
                <option value="চিত্রকলা ও দৃশ্যশিল্প">চিত্রকলা ও দৃশ্যশিল্প</option>
                <option value="গবেষণা ও প্রকাশনা">গবেষণা ও প্রকাশনা</option>
                <option value="সাংগঠনিক সমন্বয়">সাংগঠনিক সমন্বয়</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-[#1E1B18] mb-1">
                সদস্যপদের ধরন
              </label>
              <select
                value={formData.type}
                onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-[#D5C7B8] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#9E1B22]"
              >
                <option value="সক্রিয় সংস্কৃতিকর্মী">সক্রিয় সংস্কৃতিকর্মী</option>
                <option value="শিক্ষার্থী কর্মী">শিক্ষার্থী কর্মী</option>
                <option value="স্বেচ্ছাসেবক">স্বেচ্ছাসেবক</option>
                <option value="গবেষক ও লেখক">গবেষক ও লেখক</option>
                <option value="আজীবন শুভাকাঙ্ক্ষী">আজীবন শুভাকাঙ্ক্ষী</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#1E1B18] mb-1">
              আপনার মতামত বা পূর্ব অভিজ্ঞতা (সংক্ষেপে)
            </label>
            <textarea
              rows={2}
              placeholder="আপনার অভিজ্ঞতা বা বিশেষ আগ্রহ থাকলে লিখুন..."
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              className="w-full px-3.5 py-2 rounded-xl border border-[#D5C7B8] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#9E1B22]"
            />
          </div>

          <div className="pt-3 border-t border-[#EFE8DF] flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2 text-sm font-semibold text-[#635C54] hover:bg-[#EFE8DF] rounded-full transition-colors cursor-pointer"
            >
              বাতিল
            </button>
            <Button
              type="submit"
              variant="primary"
              size="md"
              icon={<Send className="w-4 h-4" />}
            >
              আবেদন জমা দিন
            </Button>
          </div>
        </form>
      )}
    </Modal>
  );
}

