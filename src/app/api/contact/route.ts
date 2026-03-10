import { EmailTemplate } from "@/components/email-template";
import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

const ContactSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    // Validate input
    const validation = ContactSchema.safeParse(body);
    if (!validation.success) {
      return Response.json(
        { error: validation.error.errors[0].message },
        { status: 400 }
      );
    }

    const { fullName, email, message } = validation.data;

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: ["raihanharismanzil@gmail.com"],
      subject: `New Contact Form Submission from ${fullName}`,
      react: EmailTemplate({
        fullName,
        email,
        message,
      }),
    });

    if (error) {
      console.error("Resend error:", error);
      return Response.json(
        { error: "Failed to send email. Please try again." },
        { status: 500 }
      );
    }

    return Response.json({ success: true, data });
  } catch (error) {
    console.error("Contact form error:", error);
    return Response.json(
      { error: "An unexpected error occurred. Please try again." },
      { status: 500 }
    );
  }
}
