import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_ADDRESS,
    pass: process.env.GMAIL_PASSKEY,
  },
});

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json({ success: false, message: "All fields are required." }, { status: 400 });
    }

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_ADDRESS}>`,
      to: process.env.EMAIL_ADDRESS,
      subject: `Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("Email send error:", err);
    return NextResponse.json({ success: false, message: "Server error." }, { status: 500 });
  }
}
