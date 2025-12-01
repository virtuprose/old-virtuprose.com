"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function SupportPage() {
  const [status, setStatus] = useState<{ success: string; error: string }>({ success: "", error: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus({ success: "", error: "" });
    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      setIsSubmitting(true);
      const response = await fetch("/api/support", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data?.error ?? "Unable to submit support request.");
      }
      setStatus({ success: "Thanks! Our support desk will reply within 24 hours.", error: "" });
      form.reset();
    } catch (error) {
      setStatus({
        success: "",
        error: error instanceof Error ? error.message : "Something went wrong. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-[var(--bg)] text-[var(--text-primary)]">
      <div className="global-noise" aria-hidden="true" />
      <div className="relative z-10 container space-y-12 py-16">
        <section className="space-y-3 text-center md:text-left">
          <p className="text-xs uppercase tracking-[0.55em] text-[var(--text-secondary)]">Support</p>
          <h1 className="text-4xl font-semibold md:text-5xl">Get Support</h1>
          <p className="max-w-3xl text-sm text-[var(--text-secondary)]">
            Need help with an active engagement or have a question about VirtuProse? Email us anytime at{" "}
            <a href="mailto:support@virturprose.com" className="text-[var(--accent)] underline">
              support@virturprose.com
            </a>{" "}
            and we’ll respond within 24 hours.
          </p>
        </section>

        <section className="grid gap-8 lg:grid-cols-2">
          <Card className="border-[var(--border)]/70 bg-[var(--bg-secondary)]/80">
            <CardContent className="space-y-5 p-8">
              <h2 className="text-2xl font-semibold">Email Support</h2>
              <p className="text-sm text-[var(--text-secondary)]">
                Have questions? Email us at{" "}
                <a href="mailto:support@virturprose.com" className="text-[var(--accent)] underline">
                  support@virturprose.com
                </a>
                . We typically respond within 24 hours, Monday through Saturday.
              </p>
              <div className="space-y-2 text-sm text-[var(--text-secondary)]">
                <p>Response time: within 24 hours</p>
                <p>Business hours: 9 AM – 7 PM (GMT+3)</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-[var(--border)]/70 bg-[var(--bg-secondary)]/80">
            <CardContent className="space-y-5 p-8">
              <h2 className="text-2xl font-semibold">Send a Message</h2>
              {status.error ? (
                <p className="rounded-2xl border border-red-200 bg-red-50 p-3 text-sm text-red-600">{status.error}</p>
              ) : null}
              {status.success ? (
                <p className="rounded-2xl border border-emerald-200 bg-emerald-50 p-3 text-sm text-emerald-700">{status.success}</p>
              ) : null}
              <form className="space-y-4" onSubmit={handleSubmit}>
                <label className="flex flex-col gap-2 text-sm font-medium text-[var(--text-secondary)]">
                  Name*
                  <input
                    name="name"
                    required
                    placeholder="Your name"
                    className="rounded-2xl border border-[var(--border)] bg-[var(--bg)]/80 px-4 py-3 text-[var(--text-primary)] focus:border-[var(--accent)] focus:outline-none"
                  />
                </label>
                <label className="flex flex-col gap-2 text-sm font-medium text-[var(--text-secondary)]">
                  Email*
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="you@company.com"
                    className="rounded-2xl border border-[var(--border)] bg-[var(--bg)]/80 px-4 py-3 text-[var(--text-primary)] focus:border-[var(--accent)] focus:outline-none"
                  />
                </label>
                <label className="flex flex-col gap-2 text-sm font-medium text-[var(--text-secondary)]">
                  Subject
                  <input
                    name="subject"
                    placeholder="How can we help?"
                    className="rounded-2xl border border-[var(--border)] bg-[var(--bg)]/80 px-4 py-3 text-[var(--text-primary)] focus:border-[var(--accent)] focus:outline-none"
                  />
                </label>
                <label className="flex flex-col gap-2 text-sm font-medium text-[var(--text-secondary)]">
                  Message*
                  <textarea
                    name="message"
                    rows={5}
                    required
                    placeholder="Share details about your request..."
                    className="rounded-2xl border border-[var(--border)] bg-[var(--bg)]/80 px-4 py-3 text-sm text-[var(--text-primary)] focus:border-[var(--accent)] focus:outline-none"
                  />
                </label>
                <Button type="submit" className="w-full rounded-full" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Submit"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
