"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Lottie from "lottie-react";
import orviaAnimation from "@/AI Robot.json";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

const welcomeMessage =
  "Hey there! I'm Orvia, VirtuProse's AI sales consultant. What are you working on and how can I help today?";

export function OrviaChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([{ role: "assistant", content: welcomeMessage }]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const sendText = useCallback(
    async (text: string) => {
      const trimmed = text.trim();
      if (!trimmed || isLoading) return;
      setIsOpen(true);
      const userMessage: ChatMessage = { role: "user", content: trimmed };
      setMessages((prev) => [...prev, userMessage]);
      setIsLoading(true);
      setInput("");

      try {
        const response = await fetch("/api/orvia", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ messages: [...messages, userMessage] }),
        });
        if (!response.ok) {
          throw new Error("Failed to reach Orvia");
        }
        const data = (await response.json()) as { reply?: string };
        const reply: ChatMessage = {
          role: "assistant",
          content: data.reply ?? "I'm here, but something went wrong. Could you please try again?",
        };
        setMessages((prev) => [...prev, reply]);
      } catch (error) {
        console.error(error);
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content: "I couldn't connect just now, but I'm still here. Mind trying again?",
          },
        ]);
      } finally {
        setIsLoading(false);
      }
    },
    [isLoading, messages],
  );

  useEffect(() => {
    const handleOpen = (event: Event) => {
      const initial = (event as CustomEvent<string>).detail;
      setIsOpen(true);
      if (initial) {
        void sendText(initial);
      }
    };
    window.addEventListener("open-orvia-chat", handleOpen as EventListener);
    const tooltipTimer = window.setTimeout(() => setShowTooltip(false), 60000);
    const handleResize = () => setIsFullScreen(window.innerWidth <= 640);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.clearTimeout(tooltipTimer);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("open-orvia-chat", handleOpen as EventListener);
    };
  }, [sendText]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [messages, isOpen]);

  async function sendMessage(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!input.trim() || isLoading) return;
    void sendText(input);
  }

  const panelClassName = useMemo(
    () => `orvia-chat-panel${isOpen ? " open" : ""}${isFullScreen ? " full" : ""}`,
    [isOpen, isFullScreen],
  );

  return (
    <>
      <button
        type="button"
        className="orvia-launcher"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-controls="orvia-chat-panel"
      >
        <span className="sr-only">{isOpen ? "Hide Orvia chat" : "Chat with Orvia"}</span>
        {!isOpen ? (
          <div className="orvia-launcher-lottie">
            <Lottie animationData={orviaAnimation} loop autoplay aria-hidden="true" />
          </div>
        ) : null}
        <Image
          src="/assets/orvia-logo-black.svg"
          alt="Orvia logo"
          width={70}
          height={20}
          className="orvia-launcher-logo"
          priority
        />
        {!isOpen && showTooltip ? <span className="orvia-launcher-tooltip">Hi, I&#39;m Orvia. Need help?</span> : null}
      </button>
      <div className={panelClassName} id="orvia-chat-panel" role="dialog" aria-label="Orvia live chat">
        <div className="orvia-chat-header">
          <div className="orvia-avatar">
            <Lottie animationData={orviaAnimation} loop autoplay aria-hidden="true" />
          </div>
          <div className="orvia-header-text">
            <p>Orvia · Sales AI</p>
            <small>Hi, I’m Orvia. I can help you choose the right service.</small>
          </div>
          <div className="typing-indicator" aria-live="polite">
            <span />
            <span />
            <span />
          </div>
          <button type="button" onClick={() => setIsOpen(false)} aria-label="Close Orvia chat">
            ×
          </button>
        </div>
        <div className="orvia-chat-messages">
          {messages.map((message, index) => (
            <div
              key={`${message.role}-${index}-${message.content}`}
              className={`chat-bubble ${message.role} bubble-in`}
            >
              {message.content}
            </div>
          ))}
          {isLoading ? (
            <div className="chat-bubble assistant typing-bubble">
              <div className="typing-indicator inline">
                <span />
                <span />
                <span />
              </div>
            </div>
          ) : null}
          <div ref={messagesEndRef} />
        </div>
        <form className="orvia-chat-input" onSubmit={sendMessage}>
          <input
            ref={inputRef}
            type="text"
            placeholder="Tell me about your project…"
            value={input}
            onChange={(event) => setInput(event.target.value)}
            aria-label="Your message"
          />
          <button type="submit" disabled={isLoading} className={isLoading ? "sending" : ""}>
            {isLoading ? "…" : "Send"}
          </button>
        </form>
        <p className="chat-footnote">
          Need a human? <Link href="/contact">Contact the VirtuProse team</Link>
        </p>
      </div>
    </>
  );
}
