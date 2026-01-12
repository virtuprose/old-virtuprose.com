"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

const quickSteps = [
  { title: "Share your goals", detail: "Growth KPIs, timelines, and current stack" },
  { title: "Pick a sprint", detail: "Experience Lab, Growth Intelligence, or Automation Blueprint" },
  { title: "See the plan", detail: "Receive a tailored roadmap with owners, tools, and timeframes" },
];

export default function StartPage() {
  return (
    <div className="relative min-h-screen bg-[var(--bg)] text-[var(--text-primary)]">
      <div className="global-noise" />
      <div className="container relative z-10 grid gap-10 py-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)]">
        <div className="space-y-6 rounded-[32px] border border-[var(--border)]/70 bg-[var(--bg-secondary)]/80 p-10 shadow-[0_40px_120px_rgba(15,23,42,0.08)]">
          <p className="text-xs uppercase tracking-[0.55em] text-[var(--text-secondary)]">Launch brief</p>
          <h1 className="text-3xl font-semibold md:text-4xl">Kick off your VirtuProse build</h1>
          <p className="text-lg text-[var(--text-secondary)]">
            Send a focused brief so we can respond with a calibrated roadmap—growth, experience, and automation in one
            pass. You’ll get a sequencing plan, team lineup, and the fastest way to ship.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg" className="rounded-full">
              <Link href="https://cal.com/info-virtuprose/live-demo" target="_blank" rel="noreferrer">
                Book via Cal.com
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full">
              <Link href="/contact">Submit the form</Link>
            </Button>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {quickSteps.map((step) => (
              <div
                key={step.title}
                className="rounded-2xl border border-[var(--border)]/70 bg-[var(--bg)]/80 p-4 text-sm text-[var(--text-secondary)]"
                data-interactive
              >
                <h3 className="text-base font-semibold text-[var(--text-primary)]">{step.title}</h3>
                <p>{step.detail}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-4 rounded-[32px] border border-[var(--border)]/70 bg-[var(--bg-secondary)]/80 p-10 shadow-[0_40px_120px_rgba(15,23,42,0.08)]">
          <p className="text-xs uppercase tracking-[0.55em] text-[var(--text-secondary)]">What happens next</p>
          <ul className="space-y-3 text-sm text-[var(--text-secondary)]">
            <li>• We acknowledge your brief within 2 business hours.</li>
            <li>• You’ll receive a tailored kickoff plan and the suggested sprint.</li>
            <li>• If you book Cal, the invite will auto-confirm from our Cal.com account.</li>
          </ul>
          <div className="rounded-2xl border border-[var(--border)]/60 bg-[var(--bg)]/70 p-4 text-sm text-[var(--text-secondary)]">
            Prefer WhatsApp? <br />
            <Link href="https://wa.me/16507059118" className="text-[var(--accent)]">
              Message the team →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
