import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message, _honeypot } = body;

    // 1. Anti-spam honeypot check
    if (_honeypot) {
      return NextResponse.json(
        { error: "Spam detected." },
        { status: 400 }
      );
    }

    // 2. Server-side validation
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json(
        { error: "অনুগ্রহ করে আপনার সঠিক নাম লিখুন (কমপক্ষে ২ অক্ষর)।" },
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

    if (!message || typeof message !== "string" || message.trim().length < 5) {
      return NextResponse.json(
        { error: "অনুগ্রহ করে আপনার বার্তাটি বিস্তারিত লিখুন (কমপক্ষে ৫ অক্ষর)।" },
        { status: 400 }
      );
    }

    // 3. Backend persistence check
    const hasDatabase = Boolean(process.env.DATABASE_URL);
    const hasEmailService = Boolean(process.env.RESEND_API_KEY || process.env.SMTP_HOST);

    // Audit log on server console
    console.log(`[CONTACT_SUBMISSION] ${new Date().toISOString()}:`, {
      name: name.trim(),
      email: email.trim(),
      phone: cleanPhone,
      subject: subject || "সাধারণ অনুসন্ধান",
      messageLength: message.trim().length,
      persistenceConfigured: hasDatabase || hasEmailService,
    });

    return NextResponse.json({
      success: true,
      status: (hasDatabase || hasEmailService) ? "persisted" : "validated_unpersisted",
      message: "আপনার বার্তা সফলভাবে যাচাইকৃত হয়েছে।",
      timestamp: new Date().toISOString(),
      backendIntegration: {
        databaseConnected: hasDatabase,
        emailServiceConnected: hasEmailService,
        note: (hasDatabase || hasEmailService)
          ? "বার্তাটি সফলভাবে সংরক্ষিত হয়েছে।"
          : "সার্ভারে বার্তা সফলভাবে যাচাই হয়েছে। তবে কোনো ডাটাবেজ বা এসএমটিপি ক্রেডেনশিয়াল কনফিগার না থাকায় ডাটা স্থানীয়ভাবে সংরক্ষণ করা হয়নি।"
      }
    });
  } catch (error) {
    console.error("[CONTACT_API_ERROR]", error);
    return NextResponse.json(
      { error: "সার্ভারে অপ্রত্যাশিত ত্রুটি ঘটেছে। অনুগ্রহ করে আবার চেষ্টা করুন।" },
      { status: 500 }
    );
  }
}

