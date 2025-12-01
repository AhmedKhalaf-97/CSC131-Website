import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

const DEBUG = true;

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const fullName = formData.get("fullName")?.toString() || "Unknown";
    const email = formData.get("contactEmail")?.toString() || "Not provided";
    const phone = formData.get("contactPhone")?.toString() || "Not provided";
    const message = formData.get("message")?.toString() || "No message";
    const personalServices = formData.get("personalServices")?.toString() || "None";
    const businessServices = formData.get("businessServices")?.toString() || "None";

    const body = `
New customer inquiry received:

Contact Info:
Name: ${fullName}
Email: ${email}
Phone: ${phone}

Requested Personal Services:
${personalServices}

Requested Business Services:
${businessServices}

Message:
${message}
`;

    if(DEBUG) {
      console.log(body);
      return NextResponse.json({ success: true });
    }

    await resend.emails.send({
      from: process.env.RESEND_FROM!,
      to: process.env.RESEND_TO!,
      subject: `Customer Inquiry from ${fullName}`,
      text: body,
      headers: {
        "Reply-To": email
      }
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Resend error:", err);
    return NextResponse.json({ success: false, error: "Failed to send email" }, { status: 500 });
  }
}
