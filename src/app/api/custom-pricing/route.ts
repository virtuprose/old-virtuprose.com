import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

function formatList(label: string, value?: string | string[]) {
  if (!value || (Array.isArray(value) && value.length === 0)) return `${label}: Not provided`;
  if (Array.isArray(value)) return `${label}: ${value.join(", ")}`;
  return `${label}: ${value}`;
}

export async function POST(request: Request) {
  try {
    if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
      return NextResponse.json({ error: "Email configuration missing." }, { status: 500 });
    }

    const body = await request.json();
    const requiredFields = [
      "services",
      "fullName",
      "email",
      "company",
      "projectTitle",
      "projectDescription",
      "timeline",
      "budget",
      "brandAssets",
      "techSpecs",
      "comments",
    ];

    const missing = requiredFields.filter((field) => {
      if (field === "services") return !Array.isArray(body[field]) || body[field].length === 0;
      return !body[field] || typeof body[field] !== "string" || !body[field].trim();
    });

    if (missing.length > 0) {
      return NextResponse.json(
        { error: "Please complete all required fields.", details: missing },
        { status: 400 },
      );
    }

    const minText = 10;
    if (typeof body.projectDescription === "string" && body.projectDescription.trim().length < minText) {
      return NextResponse.json(
        { error: `Project description must be at least ${minText} characters.` },
        { status: 400 },
      );
    }
    if (typeof body.comments === "string" && body.comments.trim().length < minText) {
      return NextResponse.json(
        { error: `Additional comments must be at least ${minText} characters.` },
        { status: 400 },
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT ?? 465),
      secure: Number(process.env.SMTP_PORT ?? 465) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const toAddress = process.env.CUSTOM_PRICING_TO ?? process.env.CONTACT_TO ?? "info@virtuprose.com";
    const fromAddress =
      process.env.CONTACT_FROM ?? `"VirtuProse Studio" <${process.env.SMTP_USER as string}>`;

    const summary = `
New custom pricing request:

${formatList("Services", body.services)}
${formatList("Full Name", body.fullName)}
${formatList("Email", body.email)}
${formatList("Phone", body.phone)}
${formatList("Company", body.company)}
${formatList("Website", body.website)}
${formatList("Project Title", body.projectTitle)}
${formatList("Timeline", body.timeline)}
${formatList("Budget", body.budget)}
${formatList("Brand Assets", body.brandAssets)}
${formatList("Technical Specs", body.techSpecs)}
${formatList("Referral Source", body.referralSource)}

Project Description:
${body.projectDescription}

Additional Comments:
${body.comments ?? "Not provided"}
`;

    await transporter.sendMail({
      from: fromAddress,
      to: toAddress,
      subject: `Custom pricing request – ${body.fullName}`,
      text: summary,
    });

    await transporter.sendMail({
      from: fromAddress,
      to: body.email,
      subject: "We received your custom pricing request",
      text: `Hi ${body.fullName},

Thank you for sharing the details of your project. Our team is reviewing everything and will send a custom proposal with pricing and timelines within 24 hours.

If you have any immediate questions, feel free to reply to this email or reach us at info@virtuprose.com.

— VirtuProse Solutions`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[custom-pricing]", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again or email info@virtuprose.com." },
      { status: 500 },
    );
  }
}
