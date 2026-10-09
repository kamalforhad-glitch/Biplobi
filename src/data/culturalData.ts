import {
  programImages,
  eventImages,
  galleryImages,
  publicationImages
} from "./culturalImages";

export interface Program {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  date?: string;
  location?: string;
  highlights?: string[];
}

export interface WorkCategory {
  id: string;
  title: string;
  tagline: string;
  description: string;
  color: string;
  bgColor: string;
  badgeBg: string;
  borderColor: string;
  iconName: string;
  stat?: string;
}

export interface EventItem {
  id: string;
  month: string;
  monthColor: string;
  title: string;
  category: string;
  tags: string[];
  dateString: string;
  venue: string;
  image: string;
  description: string;
  time: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  aspect?: string;
  caption: string;
}

export interface MemberWing {
  id: string;
  name: string;
  category: string;
  iconName: string;
  memberCount: string;
  established: string;
}

export interface PublicationItem {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  author: string;
  summary: string;
}

export const navigationLinks = [
  { label: "হোম", href: "/" },
  { label: "আমাদের সম্পর্কে", href: "/about" },
  { label: "কার্যক্রম", href: "/activities" },
  { label: "ইভেন্ট", href: "/events" },
  { label: "প্রকাশনা", href: "/publications" },
  { label: "মিডিয়া", href: "/media" },
  { label: "সদস্য হন", href: "/membership" },
  { label: "যোগাযোগ", href: "/contact" },
];

export const programsData: Program[] = [
  {
    id: "prog-1",
    title: "মুক্ত করো ভয়",
    category: "সাংস্কৃতিক অনুষ্ঠান",
    description: "সমাজে ভয়, দীনতা ও দমনপীড়নের বিরুদ্ধে শিল্প ও সংস্কৃতির ভাষায় প্রতিরোধের আয়োজন।",
    image: programImages.theaterDrama,
    date: "১৫ মে, ২০২৬",
    location: "কেন্দ্রীয় শহীদ মিনার মুক্তমঞ্চ, ঢাকা",
    highlights: ["পথনাটক", "গণসংগীত পরিবেশনা", "মুক্ত আবৃত্তি"]
  },
  {
    id: "prog-2",
    title: "আদি নববর্ষ",
    category: "বৈশাখী উৎসব",
    description: "বাংলা নববর্ষকে ঘিরে বাংলা সংস্কৃতি, লোকগীতি, পহেলা বৈশাখের ঐতিহ্য ও আনন্দ উদযাপন।",
    image: programImages.boishakhFestive,
    date: "১ বৈশাখ, ২০২৬",
    location: "রমনা বটমূল ও চারুকলা প্রাঙ্গণ",
    highlights: ["লোকসঙ্গীতের আসর", "ঐতিহ্যবাহী মুখোশ মেলা", "পুতুলনাচ"]
  },
  {
    id: "prog-3",
    title: "আবৃত্তি-অভিনয়-সংগীত কর্মশালা",
    category: "প্রশিক্ষণ কর্মসূচি",
    description: "তরুণদের জন্য আবৃত্তি, অভিনয় ও সংগীতের উপর নিবিড় প্রশিক্ষণ ও সৃজনশীল অনুশীলন।",
    image: programImages.workshopVocal,
    date: "২০ জুন - ৫ জুলাই, ২০২৬",
    location: "শিল্পকলা একাডেমি প্রশিক্ষণ মিলনায়তন",
    highlights: ["উচ্চারণ বিজ্ঞান", "চরিত্রায়ণ কৌশল", "মঞ্চে পদচারণা"]
  },
  {
    id: "prog-4",
    title: "বাংলার পিঠা মেলা ও সাংস্কৃতিক অনুষ্ঠান",
    category: "লোকসংস্কৃতি উৎসব",
    description: "বাংলার লোকঐতিহ্য, কারুশিল্প ও লোকজ সংস্কৃতিকে কেন্দ্র করে বর্ণাঢ্য উৎসবের আয়োজন।",
    image: programImages.folkMelaMasks,
    date: "১০-১৭ আগস্ট, ২০২৬",
    location: "বাংলা একাডেমি প্রাঙ্গণ, ঢাকা",
    highlights: ["বাউল গান", "মৃৎশিল্প প্রদর্শনী", "শখের হাঁড়ির নকশা"]
  }
];

export const workCategoriesData: WorkCategory[] = [
  {
    id: "recitation",
    title: "আবৃত্তি",
    tagline: "কবিতা ও কণ্ঠের শিল্প",
    description: "শব্দ ও প্রতিবাদের সুষমায় কবিতার প্রাণবন্ত রূপায়ণ, স্বরপ্রক্ষেপণ ও ছন্দবদ্ধ আবৃত্তির প্রসার।",
    color: "#9E1B22",
    bgColor: "#FEF2F2",
    badgeBg: "#9E1B22",
    borderColor: "#FECACA",
    iconName: "Mic2",
    stat: "৫০+ কর্মশালা"
  },
  {
    id: "music",
    title: "সংগীত",
    tagline: "গানের ভুবনে মানুষের কথা",
    description: "লোকগান, দেশাত্মবোধক গান, গণসংগীত ও রাগসঙ্গীতের অনুশীলনের মাধ্যমে সংস্কৃতির সুর ছড়িয়ে দেওয়া।",
    color: "#D97706",
    bgColor: "#FFFBEB",
    badgeBg: "#D97706",
    borderColor: "#FDE68A",
    iconName: "Music",
    stat: "১০০+ সংগীতানুষ্ঠান"
  },
  {
    id: "theater",
    title: "নাটক",
    tagline: "মঞ্চ জীবনের প্রতিচ্ছবি",
    description: "সমাজসচেতন নাটক, পথনাটক ও ঐতিহ্যবাহী যাত্রাপালার মাধ্যমে মানবিক মূল্যবোধের নবজাগরণ।",
    color: "#195229",
    bgColor: "#F0FDF4",
    badgeBg: "#195229",
    borderColor: "#BBF7D0",
    iconName: "Drama",
    stat: "৩৫টি মৌলিক নাটক"
  },
  {
    id: "dance",
    title: "নৃত্য",
    tagline: "শরীরী ভাষার প্রকাশ",
    description: "সৃজনশীল নৃত্য, মণিপুরী, ভরতনাট্যম ও লোকনৃত্যের মেলবন্ধনে আবহমান বাংলার রূপ প্রকাশ।",
    color: "#C2410C",
    bgColor: "#FFF7ED",
    badgeBg: "#C2410C",
    borderColor: "#FED7AA",
    iconName: "Sparkles",
    stat: "৪০+ নৃত্যনাট্য"
  },
  {
    id: "folklore",
    title: "লোকসংস্কৃতি",
    tagline: "মাটির গানে, মানুষের জীবন",
    description: "বাউল, ভাটিয়ালি, জারি-সারি ও গ্রামীণ পালাগানের আদি শেকড় অনুসন্ধান ও বিলুপ্তপ্রায় ধারার সংরক্ষণ।",
    color: "#B45309",
    bgColor: "#FEF3C7",
    badgeBg: "#B45309",
    borderColor: "#FDE68A",
    iconName: "Radio",
    stat: "১২০+ গবেষক ও বাউল"
  },
  {
    id: "visual-arts",
    title: "চিত্রকলা ও দৃশ্যশিল্প",
    tagline: "রঙে রঙে প্রতিবাদের ভাষা",
    description: "জলরং, তেলরং, পটচিত্র ও আধুনিক দৃশ্যশিল্পের মাধ্যমে সমকালীন জীবনের সংকট ও সৌন্দর্যের প্রতিফলন।",
    color: "#047857",
    bgColor: "#ECFDF5",
    badgeBg: "#047857",
    borderColor: "#A7F3D0",
    iconName: "Palette",
    stat: "২৮টি শিল্প প্রদর্শনী"
  },
  {
    id: "film",
    title: "চলচ্চিত্র / ডকুমেন্টারি",
    tagline: "চোখে দেখা মানুষের গল্প",
    description: "স্বল্পদৈর্ঘ্য চলচ্চিত্র, প্রামাণ্যচিত্র ও মুক্তধারার সিনেমার মাধ্যমে বাস্তব জীবনের জীবন্ত উপস্থাপন।",
    color: "#9E1B22",
    bgColor: "#FFF1F2",
    badgeBg: "#9E1B22",
    borderColor: "#FECDD3",
    iconName: "Film",
    stat: "১৮টি প্রামাণ্যচিত্র"
  },
  {
    id: "research",
    title: "গবেষণা ও প্রকাশনা",
    tagline: "জ্ঞান, বিশ্লেষণ, নতুন ভাবনা",
    description: "সাংস্কৃতিক ইতিহাস, সমাজতত্ত্ব ও শিল্পসাহিত্য নিয়ে নিয়মিত সাময়িকী, গ্রন্থ ও প্রবন্ধ প্রকাশনা।",
    color: "#0F766E",
    bgColor: "#F0FDFA",
    badgeBg: "#0F766E",
    borderColor: "#99F6E4",
    iconName: "BookOpen",
    stat: "৬০+ গ্রন্থ প্রকাশনা"
  }
];

export const eventsData: EventItem[] = [
  {
    id: "ev-1",
    month: "ফেব্রুয়ারি",
    monthColor: "#9E1B22",
    title: "ভাষা ও মুক্তচিন্তা উৎসব",
    category: "আলোচনা | কবিতা | সাংস্কৃতিক অনুষ্ঠান",
    tags: ["আলোচনা", "কবিতা", "সাংস্কৃতিক অনুষ্ঠান"],
    dateString: "২১-২৩ ফেব্রুয়ারি, ২০২৬",
    venue: "কেন্দ্রীয় শহীদ মিনার ও সংস্কৃতি ভবন",
    time: "বিকাল ৩:০০ - রাত ৯:০০",
    image: eventImages.februaryLanguage,
    description: "মাতৃভাষার মর্যাদা রক্ষা ও চিন্তার স্বাধীনতার অঙ্গীকার নিয়ে তিন দিনব্যাপী উন্মুক্ত বইমেলা, কবিতা পাঠের আসর ও নাট্যোৎসব।"
  },
  {
    id: "ev-2",
    month: "মার্চ",
    monthColor: "#EA580C",
    title: "যুব সাংস্কৃতিক নেতৃত্ব ক্যাম্প",
    category: "প্রশিক্ষণ | কর্মশালা | নেটওয়ার্কিং",
    tags: ["প্রশিক্ষণ", "কর্মশালা", "নেটওয়ার্কিং"],
    dateString: "২৬-২৮ মার্চ, ২০২৬",
    venue: "সোনারগাঁও লোকশিল্প জাদুঘর চত্বর",
    time: "সকাল ৯:০০ - সন্ধ্যা ৬:০০",
    image: eventImages.marchYouthCamp,
    description: "দেশের আটটি বিভাগের তরুণ সাংস্কৃতিক সংগঠকদের নিয়ে সাংস্কৃতিক নেতৃত্ব, কর্মসূচি পরিকল্পনা ও গণসংযোগ বিষয়ক আবাসিক ক্যাম্প।"
  },
  {
    id: "ev-3",
    month: "জুন",
    monthColor: "#15803D",
    title: "গণসংগীত ক্যাম্পাস ট্যুর",
    category: "সংগীত | সংযোগ | গণমানুষের সুর",
    tags: ["সঙ্গীত", "সংযোগ", "গণআন্দোলন"],
    dateString: "১০-১৮ জুন, ২০২৬",
    venue: "ঢাকা বিশ্ববিদ্যালয়, জাহাঙ্গীরনগর ও রাজশাহী বিশ্ববিদ্যালয়",
    time: "বিকাল ৪:৩০",
    image: eventImages.juneCampusTour,
    description: "শিক্ষার্থী ও তরুণদের সাংস্কৃতিক বোধ জাগ্রত করতে ক্যাম্পাসভিত্তিক দ্রোহ ও ভালোবাসার মুক্ত কনসার্ট ও গণসংগীত পদযাত্রা।"
  },
  {
    id: "ev-4",
    month: "সেপ্টেম্বর",
    monthColor: "#831843",
    title: "লিটল ম্যাগাজিন মেলা",
    category: "লেখা | শিল্প | নতুন কণ্ঠ",
    tags: ["লেখা", "শিল্প", "নতুন কণ্ঠ"],
    dateString: "১২-১৪ সেপ্টেম্বর, ২০২৬",
    venue: "পাবলিক লাইব্রেরি চত্বর, শাহবাগ",
    time: "সকাল ১১:০০ - রাত ৮:০০",
    image: eventImages.septemberLittleMag,
    description: "দেশ-বিদেশের প্রায় দুই শতাধিক স্বাধীন লিটল ম্যাগাজিন, স্বতন্ত্র প্রকাশনা ও তরুণ লেখকদের এক মিলনমেলা।"
  }
];

export const galleryData: GalleryItem[] = [
  {
    id: "gal-1",
    title: "মঞ্চ নাটক 'রক্তকরবী'র দৃশ্য",
    category: "মঞ্চ নাটক",
    image: galleryImages.theatreStage,
    caption: "জাতীয় নাট্যশালা মিলনায়তনে রবীন্দ্রনাথ ঠাকুরের কালজয়ী নাটকের নবীন নাট্যরূপ।"
  },
  {
    id: "gal-2",
    title: "ঐতিহ্যবাহী লোকশিল্প ও আলপনা",
    category: "ঐতিহ্য ও উৎসব",
    image: galleryImages.alponaArt,
    caption: "পহেলা বৈশাখের প্রভাতে চারুকলার শিক্ষার্থীদের তুলিতে মাটির সোঁদা গন্ধমাখা আলপনা।"
  },
  {
    id: "gal-3",
    title: "গণমানুষের মুক্তমঞ্চের সঙ্গীত আসর",
    category: "গণসংগীত",
    image: galleryImages.baulConcert,
    caption: "শ্রমজীবী মানুষের অধিকারের পক্ষে মুক্তমঞ্চে একতারা ও খমকের সুর।"
  },
  {
    id: "gal-4",
    title: "তরুণ চিত্রশিল্পীদের ক্যানভাস কর্মশালা",
    category: "দৃশ্যশিল্প",
    image: galleryImages.canvasPainting,
    caption: "মুক্ত আকাশের নিচে রঙের খেলায় সমকালীন সমাজবাস্তবতার শৈল্পিক রূপায়ন।"
  },
  {
    id: "gal-5",
    title: "ঐতিহ্যবাহী লোকজ মেলা ও মুখোশ প্রদর্শনী",
    category: "লোকসংস্কৃতি",
    image: programImages.folkMelaMasks,
    caption: "সোনারগাঁওয়ে অনুষ্ঠিত ঐতিহ্যবাহী শখের হাঁড়ি ও পোড়ামাটির কারুশিল্প মেলা।"
  }
];

export const memberWingsData: MemberWing[] = [
  {
    id: "wing-1",
    name: "রঙ্গমঞ্চ নাট্যদল",
    category: "নাট্যদল",
    iconName: "Drama",
    memberCount: "১২০+ সদস্য",
    established: "স্থাপিত: ১৯৯৮"
  },
  {
    id: "wing-2",
    name: "সুরলহরী সংগীত সংসদ",
    category: "সংগীত সমিতি",
    iconName: "Music",
    memberCount: "২০০+ শিল্পী",
    established: "স্থাপিত: ২০০২"
  },
  {
    id: "wing-3",
    name: "রঙতুলি চারুশিল্পী পর্ষদ",
    category: "চিত্রকলা গোষ্ঠী",
    iconName: "Palette",
    memberCount: "৮৫+ চিত্রশিল্পী",
    established: "স্থাপিত: ২০১০"
  },
  {
    id: "wing-4",
    name: "মাটির সুর লোকদল",
    category: "লোকসংস্কৃতি দল",
    iconName: "Drum",
    memberCount: "১৫০+ বাউল-সাধক",
    established: "স্থাপিত: ১৯৯৫"
  },
  {
    id: "wing-5",
    name: "অগ্রগামী যুব মোর্চা",
    category: "যুব সংগঠন",
    iconName: "Users",
    memberCount: "৫০০+ তরুণ কর্মী",
    established: "স্থাপিত: ২০১৩"
  },
  {
    id: "wing-6",
    name: "ঐতিহ্য গবেষণা কেন্দ্র",
    category: "গবেষণা ফোরাম",
    iconName: "BookOpen",
    memberCount: "৪৫+ গবেষক",
    established: "স্থাপিত: ২০০৮"
  }
];

export const publicationsData: PublicationItem[] = [
  {
    id: "pub-1",
    title: "সংস্কৃতি ও সমাজ পরিবর্তন: একটি পর্যালোচনা",
    category: "গবেষণা প্রকাশনা",
    date: "জানুয়ারি ২০২৬",
    readTime: "১২ মিনিট পাঠ",
    image: publicationImages.researchJournal,
    author: "ড. শফিউল আলম ও গবেষণা সেল",
    summary: "বাংলাদেশে বিগত পাঁচ দশকের সাংস্কৃতিক আন্দোলন কীভাবে নাগরিক অধিকার ও চেতনার পুনর্জাগরণ ঘটিয়েছে তার প্রাতিষ্ঠানিক গবেষণা।"
  },
  {
    id: "pub-2",
    title: "লোকসংস্কৃতির ধারায় আমাদের ঐতিহ্য",
    category: "প্রবন্ধ",
    date: "ফেব্রুয়ারি ২০২৬",
    readTime: "৮ মিনিট পাঠ",
    image: publicationImages.heritageCollection,
    author: "অধ্যাপিকা নাসরিন সুলতানা",
    summary: "ভাটি অঞ্চলের জারি-সারি গান এবং লালন সাঁইজির বাউল দর্শন কীভাবে আধুনিক সমাজেও সাম্যের বীজ বপন করে চলেছে।"
  },
  {
    id: "pub-3",
    title: "নতুন প্রজন্ম ও সাংস্কৃতিক চর্চা",
    category: "মতামত",
    date: "মার্চ ২০২৬",
    readTime: "৫ মিনিট পাঠ",
    image: publicationImages.youthEssay,
    author: "কাজী তানভীর আহমেদ",
    summary: "ডিজিটাল অ্যালগরিদম ও অগভীর বিনোদনের যুগে মানবিক চেতনা রক্ষায় তরুণদের সরাসরি শিল্পচর্চায় যুক্ত হওয়ার সময়োপযোগী আহ্বান।"
  }
];

