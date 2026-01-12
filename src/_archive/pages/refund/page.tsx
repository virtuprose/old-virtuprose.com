const sections = [
  {
    title: "Project Deposits",
    body:
      "Project deposits secure production bandwidth and are non-refundable once work has commenced. If you cancel before kickoff, we will refund the deposit minus any third-party fees already incurred.",
  },
  {
    title: "In-Progress Engagements",
    body:
      "When an engagement is canceled mid-stream, invoices are issued for all completed milestones, approved hours, and non-cancellable software or talent costs. Any unused pre-paid amount beyond those obligations is refunded within 15 business days.",
  },
  {
    title: "Retainers & Subscriptions",
    body:
      "Ongoing retainers renew monthly. You may pause or cancel with 30 days’ written notice. Work already scheduled inside the notice window will be completed and billed. Unused hours do not roll over unless stated otherwise in your agreement.",
  },
  {
    title: "Workshops & Strategy Sprints",
    body:
      "Workshops can be rescheduled once at no cost with at least five business days’ notice. Shorter notice or repeated reschedules incur a 25% rescheduling fee to cover committed experts.",
  },
  {
    title: "How to Request a Refund",
    body:
      "Email billing@virtuprose.com with your project name, invoice number, and reason for the request. Our finance team, operating under the legal and billing name Virtuprose Solutions Private Limited, will review and respond within five business days.",
  },
];

export default function RefundPage() {
  return (
    <div className="relative min-h-screen bg-[var(--bg)] text-[var(--text-primary)]">
      <div className="global-noise" />
      <div className="relative z-10 container space-y-12 py-16">
        <section className="rounded-[32px] border border-[var(--border)]/70 bg-[var(--bg-secondary)]/70 p-10 shadow-[0_40px_120px_rgba(15,23,42,0.08)]">
          <p className="text-xs uppercase tracking-[0.55em] text-[var(--text-secondary)]">Legal</p>
          <h1 className="mt-4 text-3xl font-semibold md:text-4xl">Refund &amp; Cancellation Policy</h1>
          <p className="mt-4 max-w-3xl text-[var(--text-secondary)]">
            Virtuprose Solutions Private Limited provides bespoke professional services. This policy clarifies how cancellations, refunds, and rescheduling are handled for retainers and project engagements.
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
