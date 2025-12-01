const sections = [
  {
    title: "1. Services and Scope",
    body:
      "Virtuprose Solutions Private Limited delivers digital strategy, growth marketing, product design, web applications, and AI automation services. The specific deliverables, timelines, and success metrics are outlined within each Statement of Work (SOW) or proposal. Any change in scope must be documented in writing and may affect pricing or schedules.",
  },
  {
    title: "2. Engagement & Responsibilities",
    body:
      "We operate as a strategic partner and rely on timely access to your stakeholders, systems, and data. You are responsible for ensuring you own or have licensed all assets you request we use. We may reference completed work in our portfolio unless an NDA prevents it.",
  },
  {
    title: "3. Fees, Billing & Taxes",
    body:
      "Fees are billed under the legal and billing name Virtuprose Solutions Private Limited. Unless stated otherwise, 50% of project fees are due at kickoff and 50% at delivery. Retainers, accelerators, or media budgets are billed in advance. Late invoices accrue a 1.5% monthly finance charge. Clients are responsible for applicable taxes, bank fees, or currency conversion costs.",
  },
  {
    title: "4. Intellectual Property",
    body:
      "You own final deliverables once invoices are paid in full. VirtuProse retains ownership of pre-existing tools, accelerators, training data, and frameworks, and grants you a non-exclusive license to use them within the delivered work.",
  },
  {
    title: "5. Confidentiality & Data",
    body:
      "Both parties agree to safeguard confidential information with the same care used to protect their own sensitive data and will not disclose it unless required by law. We follow least-privilege access practices and can sign mutual NDAs upon request.",
  },
  {
    title: "6. Warranties & Liability",
    body:
      "Services are provided on an “as-is” basis. While we stand behind our craftsmanship, we cannot guarantee specific business outcomes. To the fullest extent permitted by law, our aggregate liability is limited to the amount you paid for the specific services giving rise to a claim.",
  },
  {
    title: "7. Termination",
    body:
      "Either party may terminate an engagement with 14 days’ written notice. You are responsible for payment of all work completed and non-cancellable expenses incurred up to the termination date.",
  },
  {
    title: "8. Governing Law & Contact",
    body:
      "These Terms are governed by the laws of India, without regard to conflict-of-law provisions. Questions can be directed to info@virtuprose.com.",
  },
];

export default function TermsPage() {
  return (
    <div className="relative min-h-screen bg-[var(--bg)] text-[var(--text-primary)]">
      <div className="global-noise" />
      <div className="relative z-10 container space-y-12 py-16">
        <section className="rounded-[32px] border border-[var(--border)]/70 bg-[var(--bg-secondary)]/70 p-10 shadow-[0_40px_120px_rgba(15,23,42,0.08)]">
          <p className="text-xs uppercase tracking-[0.55em] text-[var(--text-secondary)]">Legal</p>
          <h1 className="mt-4 text-3xl font-semibold md:text-4xl">Terms &amp; Conditions</h1>
          <p className="mt-4 max-w-3xl text-[var(--text-secondary)]">
            These Terms & Conditions govern every engagement with Virtuprose Solutions Private Limited (“VirtuProse Solutions,” “we,” “our,” or “us”). By approving a proposal, submitting a purchase order, or using our website you agree to the terms below.
          </p>
        </section>

        <section className="grid gap-6 md:grid-cols-2">
          {sections.map((section) => (
            <div key={section.title} className="rounded-[28px] border border-[var(--border)]/70 bg-[var(--bg-secondary)]/80 p-6" data-interactive>
              <h3 className="text-lg font-semibold">{section.title}</h3>
              <p className="mt-3 text-sm text-[var(--text-secondary)]">{section.body}</p>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
