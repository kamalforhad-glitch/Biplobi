"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Users, 
  UserCheck, 
  CheckCircle2, 
  HelpCircle, 
  ShieldCheck, 
  Send, 
  HeartHandshake, 
  GraduationCap, 
  Palette, 
  ChevronDown, 
  ChevronUp, 
  FileCheck, 
  Check,
  AlertCircle,
  Loader2,
  Info
} from "lucide-react";
import { Container } from "@/components/layout/Container";
import { PageBanner } from "@/components/ui/PageBanner";

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  age: string;
  gender: string;
  district: string;
  address: string;
  occupation: string;
  institution: string;
  wing: string;
  membershipType: string;
  experience: string;
  motivation: string;
  agreedTerms: boolean;
  _honeypot: string;
}

export default function MembershipView() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    age: "",
    gender: "পুরুষ",
    district: "ঢাকা",
    address: "",
    occupation: "",
    institution: "",
    wing: "নাটক ও পথনাটক",
    membershipType: "শিল্পী ও সংস্কৃতিকর্মী",
    experience: "",
    motivation: "",
    agreedTerms: false,
    _honeypot: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<FormData | null>(null);
  const [applicationId, setApplicationId] = useState<string>("");
  const [serverNote, setServerNote] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const districts = [
    "ঢাকা", "চট্টগ্রাম", "রাজশাহী", "খুলনা", "বরিশাল", "সিলেট", "রংপুর", "ময়মনসিংহ",
    "গাজীপুর", "নারায়ণগঞ্জ", "কুমিল্লা", "বগুড়া", "কুষ্টিয়া", "যশোর", "দিনাজপুর", "অন্যান্য"
  ];

  const wingsList = [
    "নাটক ও পথনাটক",
    "গণসংগীত ও লোকসুর",
    "চিত্রকলা ও দৃশ্যশিল্প",
    "সাহিত্য, আবৃত্তি ও লিটল ম্যাগাজিন",
    "লোকসংস্কৃতি ও বাউল ঐতিহ্য",
    "গবেষণা ও প্রকাশনা সেল",
    "চলচ্চিত্র ও প্রামাণ্যচিত্র",
    "যুব ও সাংগঠনিক সমন্বয়"
  ];

  const membershipTiers = [
    {
      id: "general",
      title: "সাধারণ সদস্য",
      badge: "জনসংহতি",
      icon: Users,
      color: "#195229",
      bgLight: "#F0FDF4",
      borderColor: "#BBF7D0",
      description: "প্রগতিশীল সাংস্কৃতিক চর্চার সমর্থক এবং সংগঠনের কর্মসূচি ও আলোচনা সভায় সক্রিয় অংশগ্রহণকারী সচেতন নাগরিক।",
      benefits: [
        "কেন্দ্রীয় অনুষ্ঠান ও সেমিনারে অগ্রাধিকার প্রবেশাধিকার",
        "বার্ষিক প্রকাশনা ও সাময়িকীতে বিশেষ ছাড়",
        "স্থানীয় জেলা ইউনিটের কার্যক্রমে অংশগ্রহণের সুযোগ",
        "ডিজিটাল সদস্য পরিচয়পত্র"
      ]
    },
    {
      id: "artist",
      title: "শিল্পী ও সংস্কৃতিকর্মী",
      badge: "সৃজনশীল উইং",
      icon: Palette,
      color: "#9E1B22",
      bgLight: "#FFF1F2",
      borderColor: "#FECDD3",
      description: "অভিনয়, সংগীত, চারুকলা, আবৃত্তি বা লেখালেখির সাথে সক্রিয়ভাবে যুক্ত নাট্যকর্মী, কণ্ঠশিল্পী ও চিত্রশিল্পী।",
      benefits: [
        "মঞ্চনাটক, পথনাটক ও গণসংগীত দলে সরাসরি অংশগ্রহণের সুযোগ",
        "জাতীয় পর্যায়ের শিল্প ও নাট্য কর্মশালায় বিনামূল্যে প্রশিক্ষণ",
        "সংগঠনের প্রকাশনা ও প্রদর্শনীতে কাজ উপস্থাপনের সুযোগ",
        "সাংস্কৃতিক কাউন্সিলে ভোটাধিকার"
      ]
    },
    {
      id: "student",
      title: "শিক্ষার্থী ও যুব সদস্য",
      badge: "তারুণ্য শক্তি",
      icon: GraduationCap,
      color: "#D97706",
      bgLight: "#FFFBEB",
      borderColor: "#FDE68A",
      description: "স্কুল, কলেজ ও বিশ্ববিদ্যালয়ের শিক্ষার্থী যারা ক্যাম্পাসে সাংস্কৃতিক আন্দোলন ছড়িয়ে দিতে আগ্রহী।",
      benefits: [
        "তরুণ সাংস্কৃতিক নেতৃত্ব ও সংগঠক ক্যাম্পে অংশগ্রহণের সুযোগ",
        "ক্যাম্পাস ভিত্তিক সংগীত ও বিতর্ক দলের সদস্যপদ",
        "অভিজ্ঞ সাংস্কৃতিক ব্যক্তিত্বদের সরাসরি দিকনির্দেশনা",
        "স্বেচ্ছাসেবী অভিজ্ঞতা ও অবদানের স্বীকৃতি সনদ"
      ]
    },
    {
      id: "supporter",
      title: "আজীবন শুভানুধ্যায়ী",
      badge: "স্থায়ী পৃষ্ঠপোষক",
      icon: HeartHandshake,
      color: "#0F766E",
      bgLight: "#F0FDFA",
      borderColor: "#99F6E4",
      description: "সাংস্কৃতিক আন্দোলনকে সুসংহত রাখতে আর্থিক, বুদ্ধিবৃত্তিক বা অবকাঠামোগত সহায়তা প্রদানকারী শুভানুধ্যায়ী।",
      benefits: [
        "কেন্দ্রীয় জাতীয় সম্মেলন ও বিশেষ অধিবেশনে সম্মানিত অতিথি",
        "প্রকাশিত সকল গবেষণা গ্রন্থ ও স্মারক কপির প্রথম সংস্করণ সৌজন্য উপহার",
        "সংগঠনের স্থায়ী উপদেষ্টা মণ্ডলীর সাথে নিয়মিত মতবিনিময়",
        "বিশেষ আজীবন সম্মাননা স্মারক"
      ]
    }
  ];

  const faqs = [
    {
      q: "সদস্য হতে কোনো নির্দিষ্ট সাংস্কৃতিক পূর্ব অভিজ্ঞতার প্রয়োজন আছে কি?",
      a: "না, সাধারণ ও শিক্ষার্থী সদস্য হওয়ার জন্য কোনো পূর্ব অভিজ্ঞতার প্রয়োজন নেই। সংস্কৃতিমনস্কতা, অসাম্প্রদায়িক দৃষ্টিভঙ্গি এবং মানবিক মূল্যবোধের প্রতি অঙ্গীকার থাকলেই যে কেউ যুক্ত হতে পারেন। তবে 'শিল্পী ও সংস্কৃতিকর্মী' বিভাগের জন্য প্রাথমিক অডিশন বা কাজ মূল্যায়নের সুযোগ রাখা হয়।"
    },
    {
      q: "আবেদন করার পর সদস্যপদ চূড়ান্ত হতে কত সময় লাগে?",
      a: "অনলাইনে ফরম পূরণের পর ৩ থেকে ৫ কার্যদিবসের মধ্যে কেন্দ্রীয় বা সংশ্লিষ্ট জেলা সমন্বয় সেল থেকে আপনার মোবাইল ফোনে যোগাযোগ করা হবে এবং একটি পরিচিতিমূলক অনলাইন বা অফলাইন মতবিনিময়ের মাধ্যমে সদস্যপদ নিশ্চিত করা হবে।"
    },
    {
      q: "ঢাকা শহরের বাইরে জেলা ও উপজেলা পর্যায় থেকে কি সদস্য হওয়া যায়?",
      a: "অবশ্যই! দেশের ৮টি বিভাগীয় শহর এবং প্রায় সকল প্রধান জেলায় আমাদের সহযোগী নাট্যদল, সংগীত পরিষদ ও জেলা সমন্বয় সেল রয়েছে। আপনার জেলার ইউনিটের সাথে আপনাকে যুক্ত করে দেওয়া হবে।"
    },
    {
      q: "শিক্ষার্থীরা পড়াশোনার পাশাপাশি কীভাবে সংগঠনে সময় দিতে পারে?",
      a: "আমাদের অনুষ্ঠান ও মহড়াগুলো সাধারণত সাপ্তাহিক ছুটির দিনে বা সন্ধ্যায় অনুষ্ঠিত হয়। শিক্ষার্থীদের একাডেমিক ক্যালেন্ডার ও পরীক্ষার সময়সূচি বিবেচনা করেই সাংগঠনিক দায়িত্ব বণ্টন করা হয়।"
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.agreedTerms) {
      setErrorMessage("অনুগ্রহ করে সংগঠনের ঘোষণাপত্র ও নীতিমালার শর্তে সম্মতি জানান।");
      return;
    }

    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const res = await fetch("/api/membership", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "আবেদন জমা দিতে সমস্যা হয়েছে।");
      }

      setApplicationId(data.trackingId || `BSO-2026-${Math.floor(1000 + Math.random() * 9000)}`);
      setServerNote(data.backendIntegration?.note || null);
      setSubmittedData({ ...formData });
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
    setSubmittedData(null);
    setErrorMessage(null);
    setServerNote(null);
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      age: "",
      gender: "পুরুষ",
      district: "ঢাকা",
      address: "",
      occupation: "",
      institution: "",
      wing: "নাটক ও পথনাটক",
      membershipType: "শিল্পী ও সংস্কৃতিকর্মী",
      experience: "",
      motivation: "",
      agreedTerms: false,
      _honeypot: "",
    });
  };

  return (
    <div className="bg-[#FAF6F0] min-h-screen">
      {/* 1. Page Banner */}
      <PageBanner
        badge="জনতার সাংস্কৃতিক ঐক্য"
        title="বিপ্লবী সাংস্কৃতিক ঐক্যের সদস্য হোন"
        description="অন্যায়ের বিরুদ্ধে আজীবন লড়াইয়ে বাঙালির মানবিক, অসাম্প্রদায়িক ও প্রগতিশীল সাংস্কৃতিক নবজাগরণে অংশ নিন। আপনার সৃজনশীল মেধা ও মানবিক দায়বদ্ধতা দিয়ে সমাজ পরিবর্তনের অংশীদার হোন।"
        breadcrumbs={[
          { label: "হোম", href: "/" },
          { label: "সদস্য হন" },
        ]}
        stats={[
          { label: "সক্রিয় সদস্য", value: "১,৫০০+" },
          { label: "সাংস্কৃতিক শাখা", value: "৮টি বিভাগ" },
          { label: "বিভাগীয় নেটওয়ার্ক", value: "৮টি বিভাগ" },
          { label: "সদস্যপদ প্রক্রিয়া", value: "সম্পূর্ণ উন্মুক্ত" },
        ]}
      />

      {/* 2. Membership Tiers Section */}
      <section className="py-12 sm:py-16 border-b border-[#EFE8DF] bg-gradient-to-b from-[#FAF6F0] to-[#F5EFE6]">
        <Container size="wide">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#9E1B22] bg-[#9E1B22]/10 px-3 py-1 rounded-full font-bengali">
              <UserCheck className="w-3.5 h-3.5" />
              সদস্যপদের বিভিন্ন ধারা
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E1B18] font-bengali mt-2">
              আপনার আগ্রহের ধরন অনুযায়ী যুক্ত হোন
            </h2>
            <p className="text-sm text-[#736B63] font-bengali mt-2">
              আপনি সাধারণ সংস্কৃতি অনুরাগী হোন কিংবা পেশাদার শিল্পী—সবার জন্যই আমাদের দুয়ার উন্মুক্ত
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {membershipTiers.map((tier) => {
              const IconComp = tier.icon;
              return (
                <div
                  key={tier.id}
                  className="bg-[#FFFFFF] rounded-2xl border p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                  style={{ borderColor: tier.borderColor }}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div 
                        className="w-12 h-12 rounded-xl flex items-center justify-center"
                        style={{ backgroundColor: tier.bgLight, color: tier.color }}
                      >
                        <IconComp className="w-6 h-6" />
                      </div>
                      <span 
                        className="text-[11px] font-bold px-2.5 py-1 rounded-full font-bengali"
                        style={{ backgroundColor: tier.bgLight, color: tier.color }}
                      >
                        {tier.badge}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-[#1E1B18] font-bengali mb-2">
                      {tier.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#403B36] font-bengali leading-relaxed mb-4">
                      {tier.description}
                    </p>

                    <div className="space-y-2 pt-2 border-t border-[#F5EFE6]">
                      <span className="text-[11px] font-bold text-[#736B63] font-bengali uppercase tracking-wider block mb-2">
                        সুযোগ-সুবিধা:
                      </span>
                      {tier.benefits.map((b, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-[#403B36] font-bengali">
                          <Check className="w-3.5 h-3.5 shrink-0 text-[#195229] mt-0.5" />
                          <span>{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 mt-4">
                    <button
                      onClick={() => {
                        setFormData((prev) => ({ ...prev, membershipType: tier.title }));
                        const formElem = document.getElementById("application-form");
                        if (formElem) formElem.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="w-full py-2 rounded-lg text-xs font-bold font-bengali transition-colors text-center block cursor-pointer"
                      style={{ 
                        backgroundColor: tier.bgLight, 
                        color: tier.color,
                        border: `1px solid ${tier.borderColor}`
                      }}
                    >
                      এই ক্যাটাগরিতে আবেদন করুন
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* 3. Application Form Section */}
      <section id="application-form" className="py-12 sm:py-16">
        <Container size="default">
          <div className="bg-[#FFFFFF] rounded-2xl border-2 border-[#EFE8DF] shadow-md p-6 sm:p-10">
            
            {submittedData ? (
              /* Success State */
              <div className="text-center py-8 space-y-6 animate-fade-in">
                <div className="w-20 h-20 rounded-full bg-[#195229]/10 text-[#195229] mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-12 h-12" />
                </div>

                <div>
                  <span className="inline-block px-3 py-1 rounded-full bg-[#195229] text-[#FAF6F0] text-xs font-bold mb-2 font-bengali">
                    আবেদন সফলভাবে গৃহীত হয়েছে
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#1E1B18] font-bengali">
                    অভিনন্দন, {submittedData.fullName}!
                  </h3>
                  <p className="text-sm sm:text-base text-[#736B63] font-bengali mt-2 max-w-lg mx-auto">
                    বিপ্লবী সাংস্কৃতিক ঐক্যের সদস্যপদের জন্য আপনার আবেদনটি সার্ভারে সফলভাবে ভ্যালিডেট হয়েছে।
                  </p>
                </div>

                {/* Receipt Card */}
                <div className="bg-[#FAF6F0] p-6 rounded-xl border border-[#EFE8DF] text-left max-w-md mx-auto space-y-3 font-bengali text-xs sm:text-sm">
                  <div className="flex justify-between border-b border-[#EFE8DF] pb-2">
                    <span className="text-[#736B63]">আবেদন ট্র্যাকিং নম্বর:</span>
                    <strong className="text-[#9E1B22] font-mono font-bold text-sm">{applicationId}</strong>
                  </div>
                  <div className="flex justify-between border-b border-[#EFE8DF] pb-2">
                    <span className="text-[#736B63]">সদস্যপদের ধরন:</span>
                    <strong className="text-[#1E1B18]">{submittedData.membershipType}</strong>
                  </div>
                  <div className="flex justify-between border-b border-[#EFE8DF] pb-2">
                    <span className="text-[#736B63]">নির্বাচিত সাংস্কৃতিক শাখা:</span>
                    <strong className="text-[#195229]">{submittedData.wing}</strong>
                  </div>
                  <div className="flex justify-between border-b border-[#EFE8DF] pb-2">
                    <span className="text-[#736B63]">যোগাযোগের মোবাইল:</span>
                    <strong className="text-[#1E1B18]">{submittedData.phone}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#736B63]">বর্তমান জেলা:</span>
                    <strong className="text-[#1E1B18]">{submittedData.district}</strong>
                  </div>
                </div>

                {serverNote && (
                  <div className="bg-[#FAF6F0] p-4 rounded-xl border border-[#EFE8DF] text-xs text-[#736B63] font-bengali max-w-md mx-auto text-left flex items-start gap-2">
                    <Info className="w-4 h-4 text-[#D97706] shrink-0 mt-0.5" />
                    <span>{serverNote}</span>
                  </div>
                )}

                <div className="bg-[#FFFBEB] border border-[#FDE68A] p-4 rounded-xl text-xs sm:text-sm text-[#92400E] font-bengali max-w-md mx-auto text-left flex items-start gap-2.5">
                  <ShieldCheck className="w-5 h-5 shrink-0 mt-0.5 text-[#D97706]" />
                  <span>
                    আমাদের কেন্দ্রীয় সদস্য সমন্বয় সেল আগামী ৩ কার্যদিবসের মধ্যে আপনার মোবাইল নম্বরে যোগাযোগ করে পরিচিতি পর্ব ও আইডি কার্ড বিতরণের সূচি জানিয়ে দেবে।
                  </span>
                </div>

                <div className="pt-4 flex flex-wrap justify-center gap-3">
                  <button
                    onClick={handleReset}
                    className="px-6 py-2.5 bg-[#FAF6F0] hover:bg-[#EFE8DF] text-[#1E1B18] border border-[#D5CBBF] rounded-lg text-sm font-semibold font-bengali transition-colors cursor-pointer"
                  >
                    নতুন আবেদন করুন
                  </button>
                  <Link
                    href="/"
                    className="px-6 py-2.5 bg-[#9E1B22] hover:bg-[#80141A] text-[#FAF6F0] rounded-lg text-sm font-semibold font-bengali transition-colors shadow-sm"
                  >
                    নীড়পাতায় ফিরে যান
                  </Link>
                </div>
              </div>
            ) : (
              /* Membership Form */
              <form onSubmit={handleSubmit} className="space-y-8">
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
                    <FileCheck className="w-3.5 h-3.5" />
                    আবেদন ফরম
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#1E1B18] font-bengali mt-2">
                    অনলাইন সদস্যপদ নিবন্ধন ফরম
                  </h3>
                  <p className="text-sm text-[#736B63] font-bengali mt-1">
                    তারকা চিহ্নিত (<span className="text-[#9E1B22] font-bold">*</span>) ঘরগুলো পূরণ করা বাধ্যতামূলক।
                  </p>
                </div>

                {errorMessage && (
                  <div className="bg-[#FEF2F2] border border-[#FECDD3] text-[#9E1B22] p-3.5 rounded-xl text-xs sm:text-sm font-bengali flex items-start gap-2.5">
                    <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* Section 1: Personal Info */}
                <div className="space-y-4">
                  <h4 className="text-base font-bold text-[#1E1B18] font-bengali border-b border-[#EFE8DF] pb-2 flex items-center gap-2">
                    <Users className="w-4 h-4 text-[#9E1B22]" />
                    ১. ব্যক্তিগত তথ্য
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#1E1B18] font-bengali mb-1.5">
                        আপনার পুরো নাম <span className="text-[#9E1B22]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        disabled={isSubmitting}
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="যেমন: অনিক রহমান"
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
                        disabled={isSubmitting}
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="০১৭XXXXXXXX"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-[#D5CBBF] text-sm focus:outline-none focus:ring-2 focus:ring-[#9E1B22]/30 font-bengali bg-[#FAF6F0]/40 disabled:opacity-50"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#1E1B18] font-bengali mb-1.5">
                        ইমেইল ঠিকানা <span className="text-[#9E1B22]">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        disabled={isSubmitting}
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="example@mail.com"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-[#D5CBBF] text-sm focus:outline-none focus:ring-2 focus:ring-[#9E1B22]/30 font-bengali bg-[#FAF6F0]/40 disabled:opacity-50"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#1E1B18] font-bengali mb-1.5">
                        বয়স <span className="text-[#9E1B22]">*</span>
                      </label>
                      <input
                        type="number"
                        required
                        min="12"
                        max="90"
                        disabled={isSubmitting}
                        value={formData.age}
                        onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                        placeholder="যেমন: ২৫"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-[#D5CBBF] text-sm focus:outline-none focus:ring-2 focus:ring-[#9E1B22]/30 font-bengali bg-[#FAF6F0]/40 disabled:opacity-50"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#1E1B18] font-bengali mb-1.5">
                        লিঙ্গ
                      </label>
                      <select
                        value={formData.gender}
                        disabled={isSubmitting}
                        onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-[#D5CBBF] text-sm focus:outline-none focus:ring-2 focus:ring-[#9E1B22]/30 font-bengali bg-[#FAF6F0]/40 disabled:opacity-50"
                      >
                        <option value="পুরুষ">পুরুষ</option>
                        <option value="নারী">নারী</option>
                        <option value="অন্যান্য">অন্যান্য</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#1E1B18] font-bengali mb-1.5">
                        জেলা <span className="text-[#9E1B22]">*</span>
                      </label>
                      <select
                        value={formData.district}
                        disabled={isSubmitting}
                        onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-[#D5CBBF] text-sm focus:outline-none focus:ring-2 focus:ring-[#9E1B22]/30 font-bengali bg-[#FAF6F0]/40 disabled:opacity-50"
                      >
                        {districts.map((dist) => (
                          <option key={dist} value={dist}>{dist}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#1E1B18] font-bengali mb-1.5">
                        বর্তমান ঠিকানা
                      </label>
                      <input
                        type="text"
                        disabled={isSubmitting}
                        value={formData.address}
                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                        placeholder="রোড, এলাকা ও থানা"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-[#D5CBBF] text-sm focus:outline-none focus:ring-2 focus:ring-[#9E1B22]/30 font-bengali bg-[#FAF6F0]/40 disabled:opacity-50"
                      />
                    </div>
                  </div>
                </div>

                {/* Section 2: Profession & Cultural Affinity */}
                <div className="space-y-4">
                  <h4 className="text-base font-bold text-[#1E1B18] font-bengali border-b border-[#EFE8DF] pb-2 flex items-center gap-2">
                    <Palette className="w-4 h-4 text-[#195229]" />
                    ২. পেশা ও সাংস্কৃতিক আগ্রহের ক্ষেত্র
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#1E1B18] font-bengali mb-1.5">
                        পেশা / কর্মসংস্থান
                      </label>
                      <input
                        type="text"
                        disabled={isSubmitting}
                        value={formData.occupation}
                        onChange={(e) => setFormData({ ...formData, occupation: e.target.value })}
                        placeholder="যেমন: শিক্ষার্থী / শিক্ষক / আইনজীবী"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-[#D5CBBF] text-sm focus:outline-none focus:ring-2 focus:ring-[#9E1B22]/30 font-bengali bg-[#FAF6F0]/40 disabled:opacity-50"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#1E1B18] font-bengali mb-1.5">
                        শিক্ষাপ্রতিষ্ঠান / প্রতিষ্ঠান
                      </label>
                      <input
                        type="text"
                        disabled={isSubmitting}
                        value={formData.institution}
                        onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                        placeholder="যেমন: ঢাকা বিশ্ববিদ্যালয়"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-[#D5CBBF] text-sm focus:outline-none focus:ring-2 focus:ring-[#9E1B22]/30 font-bengali bg-[#FAF6F0]/40 disabled:opacity-50"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#1E1B18] font-bengali mb-1.5">
                        সদস্যপদের ধরন <span className="text-[#9E1B22]">*</span>
                      </label>
                      <select
                        value={formData.membershipType}
                        disabled={isSubmitting}
                        onChange={(e) => setFormData({ ...formData, membershipType: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-[#D5CBBF] text-sm focus:outline-none focus:ring-2 focus:ring-[#9E1B22]/30 font-bengali bg-[#FAF6F0]/40 disabled:opacity-50"
                      >
                        <option value="শিল্পী ও সংস্কৃতিকর্মী">শিল্পী ও সংস্কৃতিকর্মী</option>
                        <option value="সাধারণ সদস্য">সাধারণ সদস্য</option>
                        <option value="শিক্ষার্থী ও যুব সদস্য">শিক্ষার্থী ও যুব সদস্য</option>
                        <option value="আজীবন শুভানুধ্যায়ী">আজীবন শুভানুধ্যায়ী</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#1E1B18] font-bengali mb-1.5">
                        আগ্রহের সাংস্কৃতিক শাখা <span className="text-[#9E1B22]">*</span>
                      </label>
                      <select
                        value={formData.wing}
                        disabled={isSubmitting}
                        onChange={(e) => setFormData({ ...formData, wing: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-[#D5CBBF] text-sm focus:outline-none focus:ring-2 focus:ring-[#9E1B22]/30 font-bengali bg-[#FAF6F0]/40 disabled:opacity-50"
                      >
                        {wingsList.map((w) => (
                          <option key={w} value={w}>{w}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#1E1B18] font-bengali mb-1.5">
                      পূর্ব অভিজ্ঞতা (যদি থাকে)
                    </label>
                    <textarea
                      rows={2}
                      disabled={isSubmitting}
                      value={formData.experience}
                      onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                      placeholder="কোনো নাট্যদল, গানের দল, সাহিত্য সংগঠন বা সাংস্কৃতিক মঞ্চে পূর্বের কাজের বিবরণ..."
                      className="w-full px-3.5 py-2.5 rounded-lg border border-[#D5CBBF] text-sm focus:outline-none focus:ring-2 focus:ring-[#9E1B22]/30 font-bengali bg-[#FAF6F0]/40 disabled:opacity-50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#1E1B18] font-bengali mb-1.5">
                      যুক্ত হওয়ার কারণ ও আপনার প্রত্যাশা <span className="text-[#9E1B22]">*</span>
                    </label>
                    <textarea
                      rows={3}
                      required
                      disabled={isSubmitting}
                      value={formData.motivation}
                      onChange={(e) => setFormData({ ...formData, motivation: e.target.value })}
                      placeholder="বিপ্লবী সাংস্কৃতিক ঐক্যের আন্দোলনের সাথে যুক্ত হয়ে আপনি কীভাবে ভূমিকা রাখতে চান..."
                      className="w-full px-3.5 py-2.5 rounded-lg border border-[#D5CBBF] text-sm focus:outline-none focus:ring-2 focus:ring-[#9E1B22]/30 font-bengali bg-[#FAF6F0]/40 disabled:opacity-50"
                    />
                  </div>
                </div>

                {/* Section 3: Declaration Checkbox */}
                <div className="bg-[#FAF6F0] p-4 rounded-xl border border-[#EFE8DF] space-y-3">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      required
                      disabled={isSubmitting}
                      checked={formData.agreedTerms}
                      onChange={(e) => setFormData({ ...formData, agreedTerms: e.target.checked })}
                      className="mt-1 w-4 h-4 text-[#9E1B22] rounded focus:ring-[#9E1B22]"
                    />
                    <span className="text-xs sm:text-sm text-[#403B36] font-bengali leading-relaxed">
                      আমি অঙ্গীকার করছি যে, বিপ্লবী সাংস্কৃতিক ঐক্যের অসাম্প্রদায়িক, মানবিক ও প্রগতিশীল মূলনীতি মেনে চলব এবং যেকোনো প্রকার বৈষম্য ও অন্যায়ের বিরুদ্ধে সাংস্কৃতিক সংগ্রামে সক্রিয় থাকব।
                    </span>
                  </label>
                </div>

                {/* Submit Button */}
                <div className="flex justify-end pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center gap-2 bg-[#9E1B22] hover:bg-[#80141A] text-[#FAF6F0] px-8 py-3 rounded-xl text-sm font-bold transition-all shadow-md font-bengali hover:scale-[1.01] disabled:opacity-60 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        আবেদন পাঠানো হচ্ছে...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        আবেদনপত্র জমা দিন
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}

          </div>
        </Container>
      </section>

      {/* 4. Frequently Asked Questions (FAQ) */}
      <section className="py-12 bg-[#F5EFE6] border-t border-[#EFE8DF]">
        <Container size="default">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#195229] bg-[#195229]/10 px-3 py-1 rounded-full font-bengali">
              <HelpCircle className="w-3.5 h-3.5" />
              সচরাচর জিজ্ঞাসা
            </span>
            <h3 className="text-2xl font-bold text-[#1E1B18] font-bengali mt-2">
              সদস্যপদ সংক্রান্ত সাধারণ তথ্যাবলী
            </h3>
          </div>

          <div className="space-y-3 max-w-2xl mx-auto">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="bg-[#FFFFFF] rounded-xl border border-[#EFE8DF] overflow-hidden transition-all shadow-sm"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bengali cursor-pointer"
                  >
                    <span className="text-sm sm:text-base font-bold text-[#1E1B18]">
                      {faq.q}
                    </span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-[#9E1B22] shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-[#736B63] shrink-0" />
                    )}
                  </button>
                  {isOpen && (
                    <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-[#403B36] font-bengali leading-relaxed border-t border-[#F5EFE6]">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </Container>
      </section>

    </div>
  );
}

