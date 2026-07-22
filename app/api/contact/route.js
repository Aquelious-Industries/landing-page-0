import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const { name, email, company, phone, message } = await req.json();

    // Required fields
    if (!name || !email || !message) {
      return Response.json(
        {
          success: false,
          message: "Please fill all required fields.",
        },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "Aquelious Website <onboarding@resend.dev>", // Change later to hello@aquelious.com
      to: process.env.CONTACT_EMAIL,
      replyTo: email,
      subject: `New Contact Request from ${name}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:650px;margin:auto;padding:20px;">
          
          <h2 style="color:#0B6BFF;">New Contact Form Submission</h2>

          <table cellpadding="8" cellspacing="0" style="border-collapse:collapse;">
            <tr>
              <td><strong>Name</strong></td>
              <td>${name}</td>
            </tr>

            <tr>
              <td><strong>Email</strong></td>
              <td>${email}</td>
            </tr>

            <tr>
              <td><strong>Company</strong></td>
              <td>${company || "N/A"}</td>
            </tr>

            <tr>
              <td><strong>Phone</strong></td>
              <td>${phone || "N/A"}</td>
            </tr>
          </table>

          <hr style="margin:25px 0;" />

          <h3>Message</h3>

          <p style="line-height:1.7;">
            ${message.replace(/\n/g, "<br/>")}
          </p>

          <hr style="margin:25px 0;" />

          <small>
            Submitted via https://www.aquelious.com
          </small>

        </div>
      `,
    });

    return Response.json({
      success: true,
      message: "Message sent successfully.",
    });
  } catch (error) {
    console.error(error);

    return Response.json(
      {
        success: false,
        message: "Failed to send message.",
      },
      { status: 500 }
    );
  }
}