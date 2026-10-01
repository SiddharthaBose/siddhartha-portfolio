import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validate fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    // Optional forward to FormSubmit or email handler
    try {
      await fetch("https://formsubmit.co/ajax/sid.bose115@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          _subject: `Portfolio Enquiry: ${subject}`,
          _cc: "bose.sid99@gmail.com",
          message,
          _captcha: "false",
        }),
      });
    } catch (forwardErr) {
      console.warn("External forwarding failed, handled gracefully:", forwardErr);
    }

    return NextResponse.json(
      { success: true, message: "Enquiry received successfully." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Failed to process contact submission." },
      { status: 500 }
    );
  }
}
