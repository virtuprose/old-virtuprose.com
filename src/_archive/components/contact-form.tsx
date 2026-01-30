"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { CardContent } from "@/components/ui/card";
// import { servicesData } from "@/data/services";
const servicesData = [{ title: "Service 1" }, { title: "Service 2" }];
import { useReCaptcha } from "./recaptcha-provider";

interface ContactFormProps {
  showSuccess: boolean;
  showError: boolean;
}

export function ContactForm({ showSuccess, showError }: ContactFormProps) {
  const router = useRouter();
  const { executeRecaptcha, isLoaded } = useReCaptcha();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isLoaded) {
      setSubmitError("Security verification is loading. Please wait a moment and try again.");
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const formData = new FormData(e.currentTarget);

      // Execute reCAPTCHA
      const recaptchaToken = await executeRecaptcha("contact_form");

      if (!recaptchaToken) {
        throw new Error("Security verification failed. Please try again.");
      }

      // Add reCAPTCHA token to form data
      formData.append("recaptchaToken", recaptchaToken);

      // Submit form
      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || "Failed to send message. Please try again.");
      }

      // Redirect to success page
      router.push("/contact?status=success");
      router.refresh();
    } catch (error) {
      console.error("[contact-form-error]", error);
      setSubmitError(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again or email info@virtuprose.com directly."
      );
      setIsSubmitting(false);
    }
  };

  return (
    <CardContent className="p-8">
      <form onSubmit={handleSubmit} className="space-y-5">
        <input type="hidden" name="source" value="Contact page" />

        {showError || submitError ? (
          <div className="rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-600 dark:border-red-800 dark:bg-red-950 dark:text-red-400" role="alert">
            {submitError || "Something went wrong while sending your message. Please email "}
            {!submitError && (
              <>
                <a href="mailto:info@virtuprose.com" className="underline">info@virtuprose.com</a> directly.
              </>
            )}
          </div>
        ) : null}

        <div className="grid gap-4 md:grid-cols-2">
          <label className="flex flex-col gap-2 text-sm font-medium text-[var(--text-secondary)]">
            Name*
            <input
              className="rounded-2xl border border-[var(--border)] bg-[var(--bg)]/80 px-4 py-3 text-[var(--text-primary)] focus:border-[var(--accent)] focus:outline-none"
              type="text"
              name="name"
              required
              placeholder="Your name"
              disabled={isSubmitting}
            />
          </label>
          <label className="flex flex-col gap-2 text-sm font-medium text-[var(--text-secondary)]">
            Email*
            <input
              className="rounded-2xl border border-[var(--border)] bg-[var(--bg)]/80 px-4 py-3 text-[var(--text-primary)] focus:border-[var(--accent)] focus:outline-none"
              type="email"
              name="email"
              required
              placeholder="you@company.com"
              disabled={isSubmitting}
            />
          </label>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <label className="flex flex-col gap-2 text-sm font-medium text-[var(--text-secondary)]">
            Website if existing (optional)
            <input
              className="rounded-2xl border border-[var(--border)] bg-[var(--bg)]/80 px-4 py-3 text-[var(--text-primary)] focus:border-[var(--accent)] focus:outline-none"
              type="url"
              name="website"
              placeholder="https://yourcompany.com"
              disabled={isSubmitting}
            />
          </label>
          <label className="flex flex-col gap-2 text-sm font-medium text-[var(--text-secondary)]">
            Mobile (optional)
            <input
              className="rounded-2xl border border-[var(--border)] bg-[var(--bg)]/80 px-4 py-3 text-[var(--text-primary)] focus:border-[var(--accent)] focus:outline-none"
              type="tel"
              name="mobile"
              placeholder="+1 650 705 9118"
              disabled={isSubmitting}
            />
          </label>
        </div>

        <label className="flex flex-col gap-2 text-sm font-medium text-[var(--text-secondary)]">
          Service Type*
          <select
            name="project"
            required
            defaultValue=""
            className="rounded-2xl border border-[var(--border)] bg-[var(--bg)]/80 px-4 py-3 text-[var(--text-primary)] focus:border-[var(--accent)] focus:outline-none"
            disabled={isSubmitting}
          >
            <option value="">Select a service</option>
            {servicesData.map((service) => (
              <option key={service.title} value={service.title}>
                {service.title}
              </option>
            ))}
          </select>
        </label>

        <div className="grid gap-4 md:grid-cols-2">
          <label className="flex flex-col gap-2 text-sm font-medium text-[var(--text-secondary)]">
            Budget (optional)
            <select
              name="budget"
              defaultValue=""
              className="rounded-2xl border border-[var(--border)] bg-[var(--bg)]/80 px-4 py-3 text-[var(--text-primary)] focus:border-[var(--accent)] focus:outline-none"
              disabled={isSubmitting}
            >
              <option value="">Select budget (optional)</option>
              <option value="Under $25k">Under $25k</option>
              <option value="$25k - $50k">$25k - $50k</option>
              <option value="$50k - $100k">$50k - $100k</option>
              <option value="Above $100k">Above $100k</option>
            </select>
          </label>
          <label className="flex flex-col gap-2 text-sm font-medium text-[var(--text-secondary)]">
            Country
            <input
              className="rounded-2xl border border-[var(--border)] bg-[var(--bg)]/80 px-4 py-3 text-[var(--text-primary)] focus:border-[var(--accent)] focus:outline-none"
              type="text"
              name="country"
              placeholder="United States"
              disabled={isSubmitting}
            />
          </label>
        </div>

        <label className="flex flex-col gap-2 text-sm font-medium text-[var(--text-secondary)]">
          Tell us more (optional)
          <textarea
            name="message"
            rows={5}
            className="rounded-2xl border border-[var(--border)] bg-[var(--bg)]/80 px-4 py-3 text-[var(--text-primary)] focus:border-[var(--accent)] focus:outline-none"
            placeholder="Share timelines, KPIs, integrations, or handoff notes..."
            disabled={isSubmitting}
          />
        </label>

        <Button type="submit" className="w-full rounded-full" size="lg" disabled={isSubmitting || !isLoaded}>
          {isSubmitting ? "Sending..." : "Start Success Journey"}
        </Button>

        {showSuccess ? (
          <p className="text-center text-sm font-medium text-emerald-600 dark:text-emerald-400">
            Thank you, our team will get back to you.
          </p>
        ) : null}

        {/* reCAPTCHA v3 Badge - Required by Google */}
        <div className="flex items-center justify-center gap-1.5 pt-3 text-[10px] text-[var(--text-secondary)]">
          <span>This site is protected by reCAPTCHA and the Google</span>
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--accent)] hover:underline"
          >
            Privacy Policy
          </a>
          <span>and</span>
          <a
            href="https://policies.google.com/terms"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--accent)] hover:underline"
          >
            Terms of Service
          </a>
          <span>apply.</span>
        </div>
      </form>
    </CardContent>
  );
}

