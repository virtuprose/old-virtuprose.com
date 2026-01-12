const sections = [
  {
    title: "Information We Collect",
    body:
      "We collect contact details, company information, project goals, analytics data, and files you voluntarily share. For client engagements we may also gather product telemetry, marketing metrics, and knowledge-base exports needed to deliver contracted work.",
  },
  {
    title: "How We Use Data",
    body:
      "Data powers discovery workshops, proposals, onboarding, product delivery, billing, and support. We never sell data. When we integrate partners (hosting providers, analytics platforms, communication tools) they only receive the minimum information required to perform their purpose under strict confidentiality obligations.",
  },
  {
    title: "Security & Retention",
    body:
      "We store project files within encrypted cloud services with access limited to authorized VirtuProse Solutions personnel. Engagement data is retained for as long as necessary to perform the services and meet regulatory requirements, after which it is archived or securely deleted.",
  },
  {
    title: "Your Rights",
    body:
      "You may request access, updates, or deletion of your data at any time. Email info@virtuprose.com and we will respond within ten business days. Certain data may need to be retained to comply with legal or contractual obligations.",
  },
  {
    title: "International Transfers & Updates",
    body:
      "As a remote-first team we may process data outside your country. Whenever we do, we rely on secure processors that meet global compliance frameworks. We will post updates to this policy on this page with a revised effective date. Continued use of our services after changes constitutes acceptance.",
  },
];

export default function PrivacyPage() {
  return (
    <div className="relative min-h-screen bg-[var(--bg)] text-[var(--text-primary)]">
      <div className="global-noise" />
      <div className="relative z-10 container space-y-12 py-16">
        <section className="rounded-[32px] border border-[var(--border)]/70 bg-[var(--bg-secondary)]/70 p-10 shadow-[0_40px_120px_rgba(15,23,42,0.08)]">
          <p className="text-xs uppercase tracking-[0.55em] text-[var(--text-secondary)]">Legal</p>
          <h1 className="mt-4 text-3xl font-semibold md:text-4xl">Privacy Policy</h1>
          <p className="mt-4 max-w-3xl text-[var(--text-secondary)]">
            Virtuprose Solutions Private Limited respects your privacy. This policy explains the data we collect, why we collect it, and how we protect it across websites, forms, workshops, and paid engagements.
          </p>
        </section>

        <section className="grid gap-6 md:grid-cols-2">
          {sections.map((section) => (
            <div key={section.title} className="rounded-[28px] border border-[var(--border)]/70 bg-[var(--bg-secondary)]/80 p-6" data-interactive>
              <h3 className="text-lg font-semibold text-[var(--text-primary)]">{section.title}</h3>
              <p className="mt-3 text-sm text-[var(--text-secondary)]">{section.body}</p>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
