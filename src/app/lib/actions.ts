'use server';

import {Resend} from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function createCustomerInquiry(formData: FormData) {
  const fullName = formData.get("fullName") || "Unknown";
  const email = formData.get("contactEmail") || "Not provided";
  const phone = formData.get("contactPhone") || "Not provided";
  const message = formData.get("message") || "No message";
  const selectedServices = formData.getAll("services") as string[];

  const body = `
New customer inquiry received:

Name: ${fullName}
Email: ${email}
Phone: ${phone}
Selected Services: ${selectedServices.join(", ") || "None"}

Message:
${message}
`;

  try {
    await resend.emails.send({
      from: process.env.RESEND_FROM!,
      to: process.env.RESEND_TO!,
      subject: `Customer Inquiry from ${fullName}`,
      text: body,
      headers: {
        "Reply-To": email as string
      }
    });

  } catch (err) {
    console.error("Resend error:", err);
  }
}


export interface ScheduledEvent {
  name: string | null,
  start_time: string,
  end_time: string,
  location: {
    type: string,
    location: string,
    additional_info: string
  },
  invitees_counter: {
    total: number,
    limit: number
  }
}

export async function getCalendlyEvents() {

  const personalAccessToken = process.env.CALENDLY_PRIVATE_TOKEN;
  const organization_url = process.env.CALENDLY_ORGANIZATION_URL;

  if(!personalAccessToken || !organization_url) return;

  const requestUrl = new URL("https://api.calendly.com/scheduled_events");
  requestUrl.searchParams.set("organization", organization_url);
  requestUrl.searchParams.set("status", "active");

  const data = await fetch(
    requestUrl,
    { headers: { "Authorization": `Bearer ${personalAccessToken}`, "Content-Type": "application/json" } }
  );

  const jsonRes = await data.json();
  const evs = jsonRes["collection"] as any[];

  return evs.map((e) => {

    const x: ScheduledEvent = {
      name: e.name,
      start_time: e.start_time,
      end_time: e.end_time,
      location: e.location,
      invitees_counter: {
        total: e.invitees_counter.total,
        limit: e.invitees_counter.limit
      }
    }

    return x;
  });
}
