import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Inquiry from "@/models/Inquiry";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, role, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, error: "Name, email and message are required." },
        { status: 400 }
      );
    }

    await connectDB();

    const inquiry = await Inquiry.create({
      name,
      role,
      email,
      message,
    });

    return NextResponse.json(
      { ok: true, inquiryId: inquiry._id.toString() },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { ok: false, error: error.message || "Server error" },
      { status: 500 }
    );
  }
}
