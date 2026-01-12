"use client";

import { ContactHero } from "@/components/contact/contact-hero";
import { BookCallSection } from "@/components/contact/book-call-section";
import { ContactFooterNote } from "@/components/contact/contact-footer-note";

export default function ContactPage() {
  return (
    <div className="relative min-h-screen bg-[var(--bg)] text-[var(--text-body)]">
      <div className="global-noise" />
      <div className="relative z-10">
        <ContactHero />
        <BookCallSection />
        <ContactFooterNote />
      </div>
    </div>
  );
}
