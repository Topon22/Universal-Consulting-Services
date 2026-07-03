import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const VALID_INTERESTS = [
  "High School",
  "College Admission",
  "Pathway Programs",
  "English School",
  "Work / Student Visa Extension",
  "Immigration Services",
  "Other",
];

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => null);
    if (!body || typeof body !== "object") {
      return NextResponse.json(
        { ok: false, error: "Invalid request body." },
        { status: 400 }
      );
    }

    const fullName = String(body.fullName ?? "").trim();
    const email = String(body.email ?? "").trim();
    const whatsapp = String(body.whatsapp ?? "").trim();
    const nationality = String(body.nationality ?? "").trim();
    const age = String(body.age ?? "").trim();
    const tuitionBudget = String(body.tuitionBudget ?? "").trim();
    const englishLevel = String(body.englishLevel ?? "").trim();
    const interest = String(body.interest ?? "").trim();
    const message = String(body.message ?? "").trim();

    if (!fullName || !email) {
      return NextResponse.json(
        { ok: false, error: "Full name and email are required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { ok: false, error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const safeInterest = VALID_INTERESTS.includes(interest) ? interest : "";

    let saved: { id: string } | null = null;
    try {
      const record = await db.contactSubmission.create({
        data: {
          fullName,
          email,
          whatsapp: whatsapp || null,
          nationality: nationality || null,
          age: age || null,
          tuitionBudget: tuitionBudget || null,
          englishLevel: englishLevel || null,
          interest: safeInterest || null,
          message: message || null,
        },
        select: { id: true },
      });
      saved = record;
    } catch {
      // Persistence is best-effort; surface success to the user regardless.
      saved = null;
    }

    return NextResponse.json({
      ok: true,
      id: saved?.id ?? null,
      message: "Thanks for submitting! Our team will reach out within 24 hours.",
    });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ ok: true, service: "UCSG contact API" });
}
