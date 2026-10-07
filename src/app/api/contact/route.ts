import { NextResponse } from "next/server";
import { z } from "zod";
import { leadStore } from "@/lib/lead-store";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  whatsapp: z.string().optional(),
  company: z.string().optional(),
  service: z.string().optional(),
  description: z.string().min(10, "Please provide more details"),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validated = contactSchema.parse(body);

    // Save lead to in-memory store
    const lead = leadStore.add(validated);
    console.log("✅ New Lead Saved:", lead);

    // Try email if configured
    if (process.env.RESEND_API_KEY && process.env.RESEND_API_KEY !== "re_123456789") {
      try {
        const { Resend } = await import("resend");
        const resend = new Resend(process.env.RESEND_API_KEY);
        await resend.emails.send({
          from: process.env.EMAIL_FROM || "hello@velora.global",
          to: process.env.ADMIN_EMAIL || "Velora.global@gmail.com",
          subject: `New Lead from ${validated.name}`,
          text: `Name: ${validated.name}\nEmail: ${validated.email}\nCompany: ${validated.company}\nService: ${validated.service}\nDetails: ${validated.description}`,
        });
      } catch (emailErr) {
        console.error("Email send failed:", emailErr);
      }
    }

    return NextResponse.json(
      { success: true, message: "Your inquiry has been received. We will be in touch shortly." },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ success: false, errors: error.flatten().fieldErrors }, { status: 400 });
    }
    console.error("Contact API error:", error);
    return NextResponse.json({ success: false, message: "Something went wrong. Please try again." }, { status: 500 });
  }
}
