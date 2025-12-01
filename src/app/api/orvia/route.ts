import { NextResponse } from "next/server";
import OpenAI from "openai";
import { ORVIA_SYSTEM_PROMPT } from "@/lib/orvia-config";
import nodemailer from "nodemailer";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

const emailRegex = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/gi;
const phoneRegex = /(\+?\d[\d\s().-]{6,}\d)/g;

async function sendLeadNotification({
  email,
  phone,
  latestMessage,
  history,
}: {
  email?: string;
  phone?: string;
  latestMessage: string;
  history: ChatMessage[];
}) {
  if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
    console.warn("Skipping lead notification: SMTP env vars missing.");
    return;
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

  const toAddress = process.env.LEAD_INBOX ?? process.env.CONTACT_TO ?? process.env.SMTP_USER;
  const fromAddress =
    process.env.CONTACT_FROM ?? `"Orvia Assistant" <${process.env.SMTP_USER as string}>`;

  const transcript = history
    .map((msg) => `${msg.role === "user" ? "Prospect" : "Orvia"}: ${msg.content}`)
    .join("\n");

  await transporter.sendMail({
    from: fromAddress,
    to: toAddress,
    subject: `New Orvia lead${email ? ` - ${email}` : ""}`,
    text: `A new prospect shared contact details via Orvia.

Email: ${email ?? "Not provided"}
Phone: ${phone ?? "Not provided"}

Latest message:
${latestMessage}

Conversation transcript:
${transcript}
`,
  });
}

export async function POST(request: Request) {
  try {
    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        { error: "Missing OPENAI_API_KEY env variable." },
        { status: 500 },
      );
    }

    const body = await request.json();
    const messages: ChatMessage[] = Array.isArray(body?.messages) ? body.messages : [];

    const response = await client.responses.create({
      model: "gpt-4o-mini",
      input: [
        { role: "system", content: ORVIA_SYSTEM_PROMPT },
        ...messages.slice(-10).map((message) => ({
          role: message.role,
          content: message.content,
        })),
      ],
      temperature: 0.6,
    });

    const outputTextArray =
      typeof response.output_text === "string"
        ? [response.output_text]
        : Array.isArray(response.output_text)
          ? response.output_text
          : [];

    const reply =
      (outputTextArray.filter(Boolean).join("\n")) ||
      (Array.isArray(response.output)
        ? (response.output as Array<{ content?: Array<{ text?: string } | Record<string, unknown>> | null }>)
            .flatMap((block) =>
              Array.isArray(block?.content)
                ? block.content
                    .map((chunk) =>
                      chunk && typeof chunk === "object" && "text" in chunk ? (chunk as { text?: string }).text ?? "" : "",
                    )
                    .filter(Boolean)
                : [],
            )
            .join("\n")
        : "") ||
      "I'm sorry, I didn't catch that. Could you please repeat?";

    const lastUserMessage = [...messages].reverse().find((msg) => msg.role === "user");
    if (lastUserMessage) {
      const foundEmails = lastUserMessage.content.match(emailRegex) ?? undefined;
      const foundPhones = lastUserMessage.content.match(phoneRegex) ?? undefined;
      if (foundEmails?.length || foundPhones?.length) {
        sendLeadNotification({
          email: foundEmails?.[0],
          phone: foundPhones?.[0],
          latestMessage: lastUserMessage.content,
          history: messages,
        }).catch((error) => console.error("[orvia-lead-email]", error));
      }
    }

    return NextResponse.json({ reply });
  } catch (error) {
    console.error("[ orvia-chat ]", error);
    return NextResponse.json(
      { error: "Unable to reach Orvia right now. Please try again in a moment." },
      { status: 500 },
    );
  }
}
