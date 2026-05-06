import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const data = await request.json()
    const { name, email, company, teamSize, city, message } = data

    // Send email notification using Resend
    const resendApiKey = process.env.RESEND_API_KEY

    if (resendApiKey) {
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Cremio <onboarding@resend.dev>",
          to: "work.nimishachanda@gmail.com",
          subject: `New Demo Request from ${name} at ${company}`,
          html: `
            <h2>New Demo Request</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Company:</strong> ${company}</p>
            <p><strong>Team Size:</strong> ${teamSize}</p>
            <p><strong>City:</strong> ${city}</p>
            ${message ? `<p><strong>Message:</strong> ${message}</p>` : ""}
            <hr />
            <p>Reply to this email or reach out to ${email} to schedule the call.</p>
          `,
          reply_to: email,
        }),
      })
    }

    // Also log to console for debugging
    console.log("New demo request:", { name, email, company, teamSize, city, message })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error processing demo request:", error)
    return NextResponse.json({ error: "Failed to process request" }, { status: 500 })
  }
}
