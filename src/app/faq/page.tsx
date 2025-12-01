"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Badge } from "@/components/ui/badge";
import { orviaFaqs, generalFaqs } from "@/data/faqs";
import { useState } from "react";

type FAQ = {
  question: string;
  answer: string;
};

function FaqGroup({ title, faqs }: { title: string; faqs: FAQ[] }) {
  const [openQuestion, setOpenQuestion] = useState<string | null>(null);

  return (
    <Card className="border-[var(--border)]/70 bg-[var(--bg-secondary)]/80">
      <CardContent className="space-y-4 p-6">
        <div className="space-y-1">
          <p className="text-xs uppercase tracking-[0.55em] text-[var(--text-secondary)]">{title}</p>
          <h2 className="text-2xl font-semibold text-[var(--text-primary)]">{title === "Orvia" ? "Orvia FAQs" : "General FAQs"}</h2>
        </div>
        <div className="space-y-3">
          {faqs.map((faq) => {
            const isOpen = openQuestion === faq.question;
            return (
              <Collapsible
                key={faq.question}
                open={isOpen}
                onOpenChange={(open) => setOpenQuestion(open ? faq.question : null)}
                className="rounded-2xl border border-[var(--border)]/60 bg-[var(--bg)]/80"
              >
                <CollapsibleTrigger className="flex w-full items-center justify-between px-4 py-3 text-left text-sm font-semibold text-[var(--text-primary)]">
                  <span className="flex items-center gap-2">
                    <Badge variant="outline" className="rounded-full border-[var(--border)]/60 text-[var(--text-secondary)]">
                      Q
                    </Badge>
                    {faq.question}
                  </span>
                  <span className="text-lg text-[var(--accent)]">{isOpen ? "−" : "+"}</span>
                </CollapsibleTrigger>
                <CollapsibleContent className="px-4 pb-4 text-sm text-[var(--text-secondary)]">
                  {faq.answer}
                </CollapsibleContent>
              </Collapsible>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}

export default function FAQPage() {
  return (
    <div className="relative min-h-screen bg-[var(--bg)] text-[var(--text-primary)]">
      <div className="global-noise" aria-hidden="true" />
      <div className="relative z-10 container space-y-10 py-16">
        <header className="space-y-4 text-center md:text-left">
          <p className="text-xs uppercase tracking-[0.55em] text-[var(--text-secondary)]">FAQs & Help</p>
          <h1 className="text-4xl font-semibold md:text-5xl">Frequently Asked Questions</h1>
          <p className="max-w-3xl text-sm text-[var(--text-secondary)]">
            Answers to the questions we hear most from founders, growth teams, and operators exploring VirtuProse and
            Orvia. Still need help?{" "}
            <a href="mailto:info@virtuprose.com" className="text-[var(--accent)] underline">
              Email us anytime.
            </a>
          </p>
        </header>
        <div className="space-y-8">
          <FaqGroup title="Orvia" faqs={orviaFaqs} />
          <FaqGroup title="General" faqs={generalFaqs} />
        </div>
      </div>
    </div>
  );
}
