"use client";

import { useState } from "react";

type Message = {
  id: number;
  sender: "user" | "orvia";
  text: string;
};

const initialMessages: Message[] = [
  { id: 1, sender: "orvia", text: "Hi! I'm Orvia. Want to book a demo or check availability?" },
  { id: 2, sender: "user", text: "Show me open slots this week." },
  {
    id: 3,
    sender: "orvia",
    text: "You have Tuesday 11:00 AM PT or Wednesday 3:30 PM PT. Pick one and I’ll invite your team.",
  },
];

const replyMap: Array<{ match: RegExp; reply: string }> = [
  {
    match: /price|cost|plan/i,
    reply: "Pricing starts at $49/mo for Starter and scales with channels & usage. Want me to send the full matrix?",
  },
  {
    match: /book|slot|meeting|demo/i,
    reply: "I can book you instantly. Just tell me a time and I’ll drop a calendar invite + payment link if needed.",
  },
  {
    match: /integration|crm|api/i,
    reply: "Orvia connects to HubSpot, Salesforce, Zapier, Stripe, Razorpay, and custom APIs. Need a specific integration?",
  },
];

let idCounter = initialMessages.length + 1;

export function OrviaDemoWidget() {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  function getReply(text: string) {
    const found = replyMap.find((entry) => entry.match.test(text));
    return (
      found?.reply ??
      "On it! I can answer questions, book appointments, and take payments. Ask me anything about launching Orvia."
    );
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!input.trim()) return;
    const trimmed = input.trim();
    setMessages((prev) => [...prev, { id: ++idCounter, sender: "user", text: trimmed }]);
    setInput("");
    setIsTyping(true);

    const reply = getReply(trimmed);
    window.setTimeout(() => {
      setMessages((prev) => [...prev, { id: ++idCounter, sender: "orvia", text: reply }]);
      setIsTyping(false);
    }, 800);
  }

  return (
    <div className="demo-widget" aria-live="polite">
      <div className="demo-widget-header">
        <span className="dot" aria-hidden="true" />
        <div>
          <p>Orvia widget</p>
          <small>WhatsApp · Web · App</small>
        </div>
      </div>
      <div className="demo-messages">
        {messages.map((message) => (
          <div key={message.id} className={`demo-message ${message.sender}`}>
            {message.text}
          </div>
        ))}
        {isTyping ? <div className="demo-message typing">Orvia is typing…</div> : null}
      </div>
      <form className="demo-input" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ask Orvia about bookings, pricing, or integrations…"
          value={input}
          onChange={(event) => setInput(event.target.value)}
          aria-label="Send a message to the Orvia demo widget"
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
