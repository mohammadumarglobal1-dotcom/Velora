"use server";

import { z } from "zod";
import { PrismaClient } from "@/lib/prisma-mock";
import { Resend } from "resend";

const prisma = new PrismaClient();
const resend = new Resend(process.env.RESEND_API_KEY);

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  company: z.string().optional(),
  service: z.string().optional(),
  budget: z.string().optional(),
  timeline: z.string().optional(),
  description: z.string().min(10, "Please provide more details about your project"),
});

export async function submitContactForm(prevState: any, formData: FormData) {
  try {
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: (formData.get("phone") as string) || undefined,
      company: (formData.get("company") as string) || undefined,
      service: (formData.get("service") as string) || undefined,
      budget: (formData.get("budget") as string) || undefined,
      timeline: (formData.get("timeline") as string) || undefined,
      description: formData.get("description") as string,
    };

    const validated = contactSchema.parse(data);

    // Save to Database
    const lead = await prisma.lead.create({
      data: {
        ...validated,
        source: "Website Contact Form",
        status: "NEW",
      },
    });

    // Send Email Notification to Admin
    if (process.env.RESEND_API_KEY) {
      await resend.emails.send({
        from: process.env.EMAIL_FROM || "hello@velora.global",
        to: process.env.ADMIN_EMAIL || "Velora.global@gmail.com",
        subject: `New Lead: ${validated.name} from ${validated.company || "Website"}`,
        text: `New lead received.\n\nName: ${validated.name}\nEmail: ${validated.email}\nPhone: ${validated.phone}\nService: ${validated.service}\nBudget: ${validated.budget}\nTimeline: ${validated.timeline}\nDescription: ${validated.description}`,
      });
    }

    return { success: true, message: "Your inquiry has been received. We will be in touch shortly." };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { success: false, errors: error.flatten().fieldErrors };
    }
    console.error("Contact form error:", error);
    return { success: false, message: "An unexpected error occurred. Please try again." };
  }
}
