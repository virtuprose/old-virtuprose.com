import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const requiredEnv = ["SMTP_HOST", "SMTP_PORT", "SMTP_USER", "SMTP_PASS"] as const;

function missingEnvVars() {
  return requiredEnv.filter((key) => !process.env[key]);
}

async function verifyRecaptcha(token: string): Promise<boolean> {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;
  
  if (!secretKey) {
    console.warn("RECAPTCHA_SECRET_KEY not set, skipping verification");
    return true; // Allow in development if not configured
  }

  if (!token) {
    return false;
  }

  try {
    const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `secret=${encodeURIComponent(secretKey)}&response=${encodeURIComponent(token)}`,
    });

    const data = (await response.json()) as {
      success: boolean;
      score?: number;
      action?: string;
      challenge_ts?: string;
      hostname?: string;
      "error-codes"?: string[];
    };

    // For reCAPTCHA v3, check success and score (typically 0.5 is the threshold)
    if (data.success) {
      const score = data.score ?? 0;
      // Score should be above 0.5 for legitimate users
      return score >= 0.5;
    }

    return false;
  } catch (error) {
    console.error("[recaptcha-verification-error]", error);
    return false;
  }
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const recaptchaToken = String(formData.get("recaptchaToken") ?? "").trim();
    
    // Verify reCAPTCHA token
    const isRecaptchaValid = await verifyRecaptcha(recaptchaToken);
    if (!isRecaptchaValid) {
      return NextResponse.json(
        { error: "Security verification failed. Please try again." },
        { status: 400 }
      );
    }

    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const project = String(formData.get("project") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();
    const source = String(formData.get("source") ?? "Website form");
    const website = String(formData.get("website") ?? "").trim();
    const mobile = String(formData.get("mobile") ?? "").trim();
    const budget = String(formData.get("budget") ?? "").trim();
    const country = String(formData.get("country") ?? "").trim();

    if (!name || !email) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const missing = missingEnvVars();
    if (missing.length) {
      throw new Error(
        `Missing SMTP configuration: ${missing
          .map((key) => `process.env.${key}`)
          .join(", ")}`
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from:
        process.env.CONTACT_FROM ??
        `"VirtuProse Site" <${process.env.SMTP_USER as string}>`,
      to: process.env.CONTACT_TO ?? "info@virtuprose.com",
      subject: `New ${project || "project"} inquiry from ${name}`,
      replyTo: email,
      text: `Source: ${source}
Name: ${name}
Email: ${email}
Project: ${project}
Website: ${website}
Mobile: ${mobile}
Budget: ${budget}
Country: ${country}

Message:
${message}`,
      html: `
        <p><strong>Source:</strong> ${source}</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Project:</strong> ${project}</p>
        ${website ? `<p><strong>Website:</strong> ${website}</p>` : ""}
        ${mobile ? `<p><strong>Mobile:</strong> ${mobile}</p>` : ""}
        ${budget ? `<p><strong>Budget:</strong> ${budget}</p>` : ""}
        ${country ? `<p><strong>Country:</strong> ${country}</p>` : ""}
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br/>")}</p>
      `,
    });

    await transporter.sendMail({
      from:
        process.env.CONTACT_FROM ??
        `"VirtuProse Site" <${process.env.SMTP_USER as string}>`,
      to: email,
      subject: "We received your message",
      html: `
        <p>Hi ${name.split(" ")[0] || "there"},</p>
        <p>Thanks for reaching out to VirtuProse Solutions. Our team has received your request and will respond within 12 hours.</p>
        <p>In the meantime, feel free to share any additional context by replying to this email.</p>
        <p>— VirtuProse Solutions</p>
      `,
    });

    const redirectUrl = new URL("/contact?status=success", request.url);
    return NextResponse.redirect(redirectUrl);
  } catch (error) {
    console.error("[contact:POST]", error);
    
    // Return JSON error for client-side form submission
    if (request.headers.get("content-type")?.includes("application/x-www-form-urlencoded") || 
        request.headers.get("content-type")?.includes("multipart/form-data")) {
      const redirectUrl = new URL("/contact?status=error", request.url);
      return NextResponse.redirect(redirectUrl);
    }
    
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}
