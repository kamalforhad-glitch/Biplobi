"use client";

import React, { useState } from "react";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  MessageSquare, 
  Building2, 
  Compass,
  AlertCircle,
  Loader2,
  Info
} from "lucide-react";
import { Container } from "@/components/layout/Container";
import { PageBanner } from "@/components/ui/PageBanner";

export default function ContactView() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "সাধারণ অনুসন্ধান",
    message: "",
    _honeypot: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [serverNote, setServerNote] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "বার্তা পাঠাতে সমস্যা হয়েছে।");
      }

      setServerNote(data.backendIntegration?.note || null);
      setSubmitted(true);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setErrorMessage(err.message);
      } else {
        setErrorMessage("সার্ভারের সাথে সংযোগ স্থাপন করা যায়নি।");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setErrorMessage(null);
    setServerNote(null);
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "সাধারণ অনুসন্ধান",
      message: "",
      _honeypot: "",
    });
  };

  const departments = [
    {
      title: "সাধারণ প্রশাসন ও কেন্দ্রীয় সচিবালয়",
      description: "সাংগঠনিক নীতিমালা, সম্মেলন এবং জাতীয় কর্মসূচি সমন্বয়।",
      email: "info@biplobisanskritik.org",
      phone: "+880 1712-345678",
    },
    {
      title: "অনুষ্ঠান ও নাট্যমঞ্চ পরিষদ",
      description: "মঞ্চনাটক, পথনাটক ও গণসংগীত অনুষ্ঠানের সময়সূচি ও আয়োজন।",
      email: "info@biplobisanskritik.org",
      phone: "+880 1712-345678",
    },
    {
      title: "গবেষণা, প্রকাশনা ও মিডিয়া সেল",
      description: "পুস্তিকা, সাময়িকী, লিটল ম্যাগাজিন এবং গণমাধ্যম যোগাযোগ।",
      email: "info@biplobisanskritik.org",
      phone: "+880 1712-345678",
    },
    {
      title: "সদস্য সমন্বয় ও তৃণমূল শাখা",
      description: "সারাদেশের জেলা ইউনিট ও নতুন সদস্য নিবন্ধন সমন্বয়।",
      email: "info@biplobisanskritik.org",
      phone: "+880 1712-345678",
    }
  ];

  return (
    <div className="bg-[#FAF6F0] min-h-screen">
      {/* 1. Page Banner */}
      <PageBanner
        badge="সরাসরি সংযোগ"
        title="আমাদের সাথে যোগাযোগ করুন"
        description="যেকোনো সাংস্কৃতিক আয়োজন, যৌথ উদ্যোগ, প্রকাশনা বা সদস্যপদ সংক্রান্ত তথ্যের জন্য আমাদের কেন্দ্রীয় কার্যালয় বা নির্দিষ্ট সেলে যোগাযোগ করুন।"
        breadcrumbs={[
          { label: "হোম", href: "/" },
          { label: "যোগাযোগ" },
        ]}
      />

      {/* 2. Core Contact Info Cards Grid (4 Distinct Cards) */}
      <section className="py-12 border-b border-[#EFE8DF] bg-gradient-to-b from-[#FAF6F0] to-[#F5EFE6]">
        <Container size="wide">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Card 1: Location */}
            <div className="bg-[#FFFFFF] rounded-2xl border border-[#EFE8DF] p-6 shadow-sm flex flex-col items-center text-center hover:shadow-md transition-shadow">
              <div className="w-13 h-13 rounded-2xl bg-[#9E1B22]/10 text-[#9E1B22] flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6" />
              </div>
              <span className="text-xs font-semibold text-[#736B63] font-bengali uppercase tracking-wider mb-1">
                প্রধান কার্যালয়
              </span>
              <h3 className="text-lg font-bold text-[#1E1B18] font-bengali mb-2">
                ঢাকা, বাংলাদেশ
              </h3>
              <p className="text-xs text-[#736B63] font-bengali leading-relaxed mt-auto pt-2 border-t border-[#F5EFE6] w-full">
                ঐতিহ্যবাহী সাংস্কৃতিক প্রাঙ্গণ, সেগুনবাগিচা ও শাহবাগ সংলগ্ন অঞ্চল
              </p>
            </div>

            {/* Card 2: Phone */}
            <div className="bg-[#FFFFFF] rounded-2xl border border-[#EFE8DF] p-6 shadow-sm flex flex-col items-center text-center hover:shadow-md transition-shadow">
              <div className="w-13 h-13 rounded-2xl bg-[#195229]/10 text-[#195229] flex items-center justify-center mb-4">
                <Phone className="w-6 h-6" />
              </div>
              <span className="text-xs font-semibold text-[#736B63] font-bengali uppercase tracking-wider mb-1">
                সরাসরি ফোন
              </span>
              <a 
                href="tel:+8801712345678"
                className="text-base font-bold text-[#9E1B22] hover:underline mb-2 font-mono block"
              >
                +880 1712-345678
              </a>
              <p className="text-xs text-[#736B63] font-bengali leading-relaxed mt-auto pt-2 border-t border-[#F5EFE6] w-full">
                জরুরি সাংস্কৃতিক সহায়তা ও হেল্পলাইন ডেস্ক
              </p>
            </div>

            {/* Card 3: Email */}
            <div className="bg-[#FFFFFF] rounded-2xl border border-[#EFE8DF] p-6 shadow-sm flex flex-col items-center text-center hover:shadow-md transition-shadow">
              <div className="w-13 h-13 rounded-2xl bg-[#D97706]/10 text-[#D97706] flex items-center justify-center mb-4">
                <Mail className="w-6 h-6" />
              </div>
              <span className="text-xs font-semibold text-[#736B63] font-bengali uppercase tracking-wider mb-1">
                অফিসিয়াল ইমেইল
              </span>
              <a 
                href="mailto:info@biplobisanskritik.org"
                className="text-xs sm:text-[13px] font-bold text-[#195229] hover:underline mb-2 font-mono break-all block"
              >
                info@biplobisanskritik.org
              </a>
              <p className="text-xs text-[#736B63] font-bengali leading-relaxed mt-auto pt-2 border-t border-[#F5EFE6] w-full">
                যেকোনো আনুষ্ঠানিক প্রস্তাবনা ও প্রেস রিলিজের জন্য
              </p>
            </div>

            {/* Card 4: Office Hours / Working Days */}
            <div className="bg-[#FFFFFF] rounded-2xl border border-[#EFE8DF] p-6 shadow-sm flex flex-col items-center text-center hover:shadow-md transition-shadow">
              <div className="w-13 h-13 rounded-2xl bg-[#0F766E]/10 text-[#0F766E] flex items-center justify-center mb-4">
                <Clock className="w-6 h-6" />
              </div>
              <span className="text-xs font-semibold text-[#736B63] font-bengali uppercase tracking-wider mb-1">
                কার্যদিবস ও সময়
              </span>
              <h3 className="text-base sm:text-lg font-bold text-[#1E1B18] font-bengali mb-2">
                সপ্তাহে ৬ দিন
              </h3>
              <p className="text-xs text-[#736B63] font-bengali leading-relaxed mt-auto pt-2 border-t border-[#F5EFE6] w-full">
                শনি – বৃহস্পতি (সকাল ১০:০০ – রাত ৮:০০)
              </p>
            </div>

          </div>
        </Container>
      </section>

      {/* 3. Main Form & Office Information */}
      <section className="py-12 sm:py-16">
        <Container size="wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Interactive Contact Form (7 cols) */}
            <div className="lg:col-span-7 bg-[#FFFFFF] rounded-2xl border border-[#EFE8DF] p-6 sm:p-8 shadow-sm">
              {submitted ? (
                <div className="text-center py-10 space-y-4 animate-fade-in">
                  <div className="w-16 h-16 rounded-full bg-[#195229]/10 text-[#195229] mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1E1B18] font-bengali">
                    বার্তা সফলভাবে প্রেরিত হয়েছে!
                  </h3>
                  <p className="text-sm text-[#736B63] font-bengali max-w-md mx-auto leading-relaxed">
                    ধন্যবাদ, <strong>{formData.name}</strong>। আপনার বার্তাটি সার্ভারে ভ্যালিডেট হয়ে গৃহীত হয়েছে।
                  </p>
                  
                  {serverNote && (
                    <div className="bg-[#FAF6F0] p-4 rounded-xl border border-[#EFE8DF] text-xs text-[#736B63] font-bengali max-w-md mx-auto text-left flex items-start gap-2">
                      <Info className="w-4 h-4 text-[#D97706] shrink-0 mt-0.5" />
                      <span>{serverNote}</span>
                    </div>
                  )}

                  <div className="pt-4">
                    <button
                      onClick={handleReset}
                      className="px-6 py-2.5 bg-[#9E1B22] text-[#FAF6F0] rounded-lg text-sm font-semibold font-bengali hover:bg-[#80141A] transition-colors"
                    >
                      আরেকটি বার্তা পাঠান
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Honeypot field for spam prevention */}
                  <input
                    type="text"
                    name="_honeypot"
                    value={formData._honeypot}
                    onChange={(e) => setFormData({ ...formData, _honeypot: e.target.value })}
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  <div>
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#9E1B22] bg-[#9E1B22]/10 px-3 py-1 rounded-full font-bengali">
                      <MessageSquare className="w-3.5 h-3.5" />
                      বার্তা পাঠান
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#1E1B18] font-bengali mt-2">
                      আমাদের সাথে সরাসরি কথা বলুন
                    </h3>
                    <p className="text-xs sm:text-sm text-[#736B63] font-bengali mt-1">
                      নিচের ফরমটি পূরণ করুন, আমরা দ্রুততম সময়ে আপনার সাথে যোগাযোগ করব।
                    </p>
                  </div>

                  {errorMessage && (
                    <div className="bg-[#FEF2F2] border border-[#FECDD3] text-[#9E1B22] p-3.5 rounded-xl text-xs sm:text-sm font-bengali flex items-start gap-2.5">
                      <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#1E1B18] font-bengali mb-1.5">
                        আপনার নাম <span className="text-[#9E1B22]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="আপনার পুরো নাম"
                        disabled={isSubmitting}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-[#D5CBBF] text-sm focus:outline-none focus:ring-2 focus:ring-[#9E1B22]/30 font-bengali bg-[#FAF6F0]/40 disabled:opacity-50"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#1E1B18] font-bengali mb-1.5">
                        মোবাইল নম্বর <span className="text-[#9E1B22]">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="০১৭১২-৩৪৫৬৭৮"
                        disabled={isSubmitting}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-[#D5CBBF] text-sm focus:outline-none focus:ring-2 focus:ring-[#9E1B22]/30 font-bengali bg-[#FAF6F0]/40 disabled:opacity-50"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#1E1B18] font-bengali mb-1.5">
                        ইমেইল ঠিকানা <span className="text-[#9E1B22]">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="example@mail.com"
                        disabled={isSubmitting}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-[#D5CBBF] text-sm focus:outline-none focus:ring-2 focus:ring-[#9E1B22]/30 font-bengali bg-[#FAF6F0]/40 disabled:opacity-50"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#1E1B18] font-bengali mb-1.5">
                        যোগাযোগের বিষয়
                      </label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        disabled={isSubmitting}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-[#D5CBBF] text-sm focus:outline-none focus:ring-2 focus:ring-[#9E1B22]/30 font-bengali bg-[#FAF6F0]/40 disabled:opacity-50"
                      >
                        <option value="সাধারণ অনুসন্ধান">সাধারণ অনুসন্ধান</option>
                        <option value="অনুষ্ঠান ও নাট্যমঞ্চ আয়োজন">অনুষ্ঠান ও নাট্যমঞ্চ আয়োজন</option>
                        <option value="প্রকাশনা ও লিটল ম্যাগাজিন">প্রকাশনা ও লিটল ম্যাগাজিন</option>
                        <option value="সদস্যপদ সংক্রান্ত">সদস্যপদ সংক্রান্ত</option>
                        <option value="যৌথ সাংস্কৃতিক উদ্যোগ">যৌথ সাংস্কৃতিক উদ্যোগ</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#1E1B18] font-bengali mb-1.5">
                      আপনার বার্তা <span className="text-[#9E1B22]">*</span>
                    </label>
                    <textarea
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="আপনার বক্তব্য বা প্রশ্নটি বিস্তারিত লিখুন..."
                      disabled={isSubmitting}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-[#D5CBBF] text-sm focus:outline-none focus:ring-2 focus:ring-[#9E1B22]/30 font-bengali bg-[#FAF6F0]/40 disabled:opacity-50"
                    />
                  </div>

                  <div className="flex justify-end">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center gap-2 bg-[#9E1B22] hover:bg-[#80141A] text-[#FAF6F0] px-7 py-3 rounded-lg text-sm font-semibold transition-colors font-bengali shadow-sm disabled:opacity-60 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          বার্তা পাঠানো হচ্ছে...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          বার্তা পাঠান
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Right Column: Office Schedule & Map Card (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Office Schedule Card */}
              <div className="bg-[#FFFFFF] rounded-2xl border border-[#EFE8DF] p-6 shadow-sm space-y-4">
                <div className="flex items-center gap-3 border-b border-[#F5EFE6] pb-3">
                  <div className="w-10 h-10 rounded-xl bg-[#195229]/10 text-[#195229] flex items-center justify-center">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-[#1E1B18] font-bengali">
                      কার্যালয় সময়সূচি
                    </h4>
                    <p className="text-xs text-[#736B63] font-bengali">
                      সরাসরি সাক্ষাত ও মহড়ার সময়
                    </p>
                  </div>
                </div>

                <div className="space-y-2.5 text-xs sm:text-sm font-bengali">
                  <div className="flex justify-between items-center py-1 border-b border-[#FAF6F0]">
                    <span className="text-[#403B36]">শনিবার – বুধবার:</span>
                    <strong className="text-[#1E1B18]">সকাল ১০:০০ – রাত ৮:০০</strong>
                  </div>
                  <div className="flex justify-between items-center py-1 border-b border-[#FAF6F0]">
                    <span className="text-[#403B36]">বৃহস্পতিবার:</span>
                    <strong className="text-[#1E1B18]">সকাল ১০:০০ – সন্ধ্যা ৬:০০</strong>
                  </div>
                  <div className="flex justify-between items-center py-1 border-b border-[#FAF6F0]">
                    <span className="text-[#403B36]">শুক্রবার (মহড়া ও আসর):</span>
                    <strong className="text-[#9E1B22]">বিকাল ৩:০০ – রাত ৯:০০</strong>
                  </div>
                </div>

                <p className="text-xs text-[#736B63] font-bengali pt-2 leading-relaxed">
                  * জাতীয় ছুটির দিনগুলোতে বিশেষ অনুষ্ঠান ব্যতিরেকে সাধারণ সচিবালয় বন্ধ থাকে।
                </p>
              </div>

              {/* Cultural Center Visual Map Card */}
              <div className="bg-[#1E1B18] text-[#FAF6F0] rounded-2xl p-6 shadow-md relative overflow-hidden space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Compass className="w-5 h-5 text-[#F59E0B]" />
                    <span className="text-xs font-bold uppercase tracking-wider text-[#F59E0B]">
                      অবস্থান নির্দেশিকা
                    </span>
                  </div>
                  <span className="text-xs bg-[#FAF6F0]/10 px-2 py-0.5 rounded text-[#FAF6F0]">
                    ঢাকা, বাংলাদেশ
                  </span>
                </div>

                {/* Stylized Minimal Vector Map Canvas */}
                <div className="h-40 rounded-xl overflow-hidden bg-[#2A2420] border border-[#FAF6F0]/10 relative flex items-center justify-center p-4">
                  <svg className="absolute inset-0 w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
                    <pattern id="grid" width="24" height="24" patternUnits="userSpaceOnUse">
                      <path d="M 24 0 L 0 0 0 24" fill="none" stroke="#FAF6F0" strokeWidth="0.5" />
                    </pattern>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                    {/* Stylized River Buriganga Curve */}
                    <path d="M-20 120 Q120 70 200 130 T400 110" fill="none" stroke="#0284C7" strokeWidth="6" opacity="0.6" />
                  </svg>

                  {/* Pulsing Center Pin */}
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="relative">
                      <div className="w-8 h-8 rounded-full bg-[#9E1B22] text-[#FAF6F0] flex items-center justify-center shadow-lg border-2 border-[#FAF6F0]">
                        <Building2 className="w-4 h-4" />
                      </div>
                      <span className="absolute -inset-1 rounded-full bg-[#9E1B22] animate-ping opacity-40"></span>
                    </div>
                    <span className="mt-2 text-xs font-bold text-[#FAF6F0] font-bengali bg-[#1E1B18]/90 px-3 py-1 rounded shadow">
                      বিপ্লবী সাংস্কৃতিক ঐক্য • ঢাকা
                    </span>
                  </div>
                </div>

                <div className="text-xs text-[#FAF6F0]/80 font-bengali space-y-1">
                  <p><strong>যোগাযোগ কেন্দ্র:</strong> ঢাকা, বাংলাদেশ</p>
                  <p><strong>নিকটস্থ ল্যান্ডমার্ক:</strong> চারুকলা, কেন্দ্রীয় শহীদ মিনার ও জাতীয় নাট্যশালা সংলগ্ন</p>
                </div>
              </div>

            </div>

          </div>
        </Container>
      </section>

      {/* 4. Departmental Wings Directory */}
      <section className="py-12 bg-[#F5EFE6] border-t border-[#EFE8DF]">
        <Container size="wide">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#195229] bg-[#195229]/10 px-3 py-1 rounded-full font-bengali">
              <Building2 className="w-3.5 h-3.5" />
              বিভাগীয় সমন্বয় সেল
            </span>
            <h3 className="text-2xl font-bold text-[#1E1B18] font-bengali mt-2">
              নির্দিষ্ট বিষয়ে সরাসরি যোগাযোগ
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {departments.map((dept, index) => (
              <div 
                key={index}
                className="bg-[#FFFFFF] rounded-xl border border-[#EFE8DF] p-5 shadow-sm space-y-3 flex flex-col justify-between"
              >
                <div>
                  <h4 className="text-sm font-bold text-[#1E1B18] font-bengali leading-snug">
                    {dept.title}
                  </h4>
                  <p className="text-xs text-[#736B63] font-bengali mt-1.5 leading-relaxed">
                    {dept.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#F5EFE6] space-y-1.5 text-xs font-bengali">
                  <div className="flex items-center gap-1.5 text-[#195229]">
                    <Mail className="w-3 h-3 shrink-0" />
                    <span className="font-mono text-[11px] truncate">{dept.email}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[#9E1B22]">
                    <Phone className="w-3 h-3 shrink-0" />
                    <span className="font-mono text-[11px]">{dept.phone}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

    </div>
  );
}

