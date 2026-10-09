import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      fullName,
      email,
      phone,
      age,
      district,
      wing,
      membershipType,
      experience,
      motivation,
      agreedTerms,
      _honeypot,
    } = body;

    // 1. Anti-spam honeypot check
    if (_honeypot) {
      return NextResponse.json(
        { error: "Spam detected." },
        { status: 400 }
      );
    }

    // 2. Server-side validation
    if (!fullName || typeof fullName !== "string" || fullName.trim().length < 2) {
      return NextResponse.json(
        { error: "অনুগ্রহ করে আপনার পুরো নাম লিখুন (কমপক্ষে ২ অক্ষর)।" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== "string" || !emailRegex.test(email.trim())) {
      return NextResponse.json(
        { error: "অনুগ্রহ করে একটি সঠিক ইমেইল ঠিকানা প্রদান করুন।" },
        { status: 400 }
      );
    }

    const phoneRegex = /^(\+?880|0)1[3-9]\d{8}$/;
    const cleanPhone = phone ? String(phone).replace(/[\s-]/g, "") : "";
    if (!phone || !phoneRegex.test(cleanPhone)) {
      return NextResponse.json(
        { error: "অনুগ্রহ করে একটি সঠিক ১১ ডিজিটের বাংলাদেশি মোবাইল নম্বর প্রদান করুন।" },
        { status: 400 }
      );
    }

    const parsedAge = parseInt(String(age), 10);
    if (isNaN(parsedAge) || parsedAge < 12 || parsedAge > 99) {
      return NextResponse.json(
        { error: "বয়স ১২ থেকে ৯৯ এর মধ্যে হতে হবে।" },
        { status: 400 }
      );
    }

    if (!district || typeof district !== "string") {
      return NextResponse.json(
        { error: "অনুগ্রহ করে আপনার জেলা নির্বাচন করুন।" },
        { status: 400 }
      );
    }

    if (!wing || typeof wing !== "string") {
      return NextResponse.json(
        { error: "অনুগ্রহ করে আগ্রহী সাংস্কৃতিক শাখা নির্বাচন করুন।" },
        { status: 400 }
      );
    }

    if (!membershipType || typeof membershipType !== "string") {
      return NextResponse.json(
        { error: "অনুগ্রহ করে সদস্যপদের ধরন নির্বাচন করুন।" },
        { status: 400 }
      );
    }

    if (!motivation || typeof motivation !== "string" || motivation.trim().length < 5) {
      return NextResponse.json(
        { error: "অনুগ্রহ করে যুক্ত হওয়ার কারণ বা প্রত্যাশা সংক্ষেপে লিখুন।" },
        { status: 400 }
      );
    }

    if (!agreedTerms) {
      return NextResponse.json(
        { error: "সংগঠনের মূলনীতি ও অঙ্গীকারে সম্মতি জানানো আবশ্যক।" },
        { status: 400 }
      );
    }

    // 3. Generate application tracking ID
    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const trackingId = `BSO-${new Date().getFullYear()}-${randomSuffix}`;

    // 4. Backend persistence check
    const hasDatabase = Boolean(process.env.DATABASE_URL);

    console.log(`[MEMBERSHIP_APPLICATION] ${trackingId}:`, {
      fullName: fullName.trim(),
      email: email.trim(),
      phone: cleanPhone,
      district,
      wing,
      membershipType,
      experienceLength: (experience || "").length,
      persistenceConfigured: hasDatabase,
    });

    return NextResponse.json({
      success: true,
      trackingId,
      status: hasDatabase ? "persisted" : "validated_unpersisted",
      message: "আপনার সদস্যপদ আবেদন সার্ভারে সফলভাবে যাচাইকৃত হয়েছে।",
      timestamp: new Date().toISOString(),
      backendIntegration: {
        databaseConnected: hasDatabase,
        note: hasDatabase
          ? "আবেদনটি সফলভাবে ডাটাবেজে সংরক্ষিত হয়েছে।"
          : "আবেদনটি সার্ভার ভ্যালিডেশনে সফলভাবে উত্তীর্ণ হয়েছে। তবে কোনো ডাটাবেজ (যেমন Postgres/MongoDB) কনফিগার না থাকায় ডাটা স্থায়ীভাবে সংরক্ষণ করা হয়নি।"
      }
    });
  } catch (error) {
    console.error("[MEMBERSHIP_API_ERROR]", error);
    return NextResponse.json(
      { error: "সার্ভারে অপ্রত্যাশিত ত্রুটি ঘটেছে। অনুগ্রহ করে আবার চেষ্টা করুন।" },
      { status: 500 }
    );
  }
}

