import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";

const services = {
  "growth-marketing": {
    metaTitle: "Growth Marketing Services | VirtuProse USA",
    metaDescription:
      "US-based growth marketing sprints combining AI, experimentation, paid media, and lifecycle automation to drive revenue.",
    keywords: ["growth marketing agency", "US demand gen", "digital marketing sprints", "AI marketing"],
    hero: {
      eyebrow: "Growth marketing",
      title: "Performance marketing designed for US revenue teams",
      description:
        "We build and run experimentation programs for SaaS, eCommerce, and service brands across the United States. Every sprint blends predictive analytics, creative, and automation to unlock compounding growth.",
    },
    stats: [
      { label: "Avg lift in qualified pipeline", value: "+28%" },
      { label: "Time to first insight", value: "14 days" },
      { label: "Channels", value: "Paid search, paid social, lifecycle, CRO" },
    ],
    pillars: [
      {
        title: "North America-ready research",
        detail: "ICP + persona mapping with market demand data, pricing intelligence, and brand voice alignment.",
      },
      {
        title: "Experimentation engine",
        detail: "Weekly tests across ads, landing pages, and funnel UX monitored in a shared Looker Studio dashboard.",
      },
      {
        title: "Revenue analytics",
        detail: "Attribution models, media mix modeling, and real-time KPI alerts connected to HubSpot, Salesforce, or GA4.",
      },
      {
        title: "Lifecycle orchestration",
        detail: "Email, SMS, and in-product journeys triggered off behavioral data to increase LTV and retention.",
      },
    ],
    process: [
      "Audit paid + lifecycle channels and benchmark against US competitors",
      "Co-create a 90-day roadmap with experiments prioritized by impact",
      "Launch media + lifecycle plays with live dashboards and AI-driven insights",
      "Run creative / copy accelerators, landing page builds, and CRO sprints",
      "Review quarterly business reviews with revenue modeling and next bets",
    ],
    deliverables: [
      "Full-funnel strategy + KPI map",
      "Paid media + lifecycle management",
      "Creative + landing page production",
      "Analytics + experimentation playbook",
      "Revenue-grade reporting aligned to finance",
    ],
    faqs: [
      {
        q: "How fast can we start seeing results?",
        a: "Most US clients see validated learnings within the first 14 days and compounding revenue impact inside 60 days.",
      },
      {
        q: "Do you integrate with our CRM?",
        a: "Yes, we connect to HubSpot, Salesforce, Pipedrive, or custom stacks using Segment and first-party data.",
      },
      {
        q: "Can you manage creative production?",
        a: "We ship ads, landing experiences, and motion assets in-house or work with your creative partners.",
      },
    ],
  },
  "web-design": {
    metaTitle: "Conversion Web Design & UI/UX | VirtuProse",
    metaDescription:
      "Design cinematic, conversion-focused websites and product experiences for US SaaS and service brands.",
    keywords: ["conversion web design", "SaaS website design USA", "UX agency"],
    hero: {
      eyebrow: "Design & experience",
      title: "Conversion-grade web design and UX systems",
      description:
        "We craft premium websites and product interfaces that behave like software—fast, accessible, and conversion obsessed for US buyers.",
    },
    stats: [
      { label: "Average lift in conversion", value: "+35%" },
      { label: "Design system launch", value: "6 weeks" },
      { label: "Accessibility", value: "WCAG 2.1 AA compliant" },
    ],
    pillars: [
      { title: "Research + positioning", detail: "Stakeholder interviews, heuristic reviews, and competitor mapping." },
      { title: "UX architecture", detail: "Journeys, information architecture, and low-fi prototyping." },
      { title: "UI & motion", detail: "High fidelity visuals, 3D, Lottie, and branded micro-interactions." },
      { title: "Conversion science", detail: "Copywriting, social proof, and analytics instrumentation baked in." },
    ],
    process: [
      "Discovery workshops with US sales + marketing leadership",
      "Wireframes and prototypes validated with user testing",
      "Design system + visual language creation",
      "Development-ready handoff (Next.js, WebGL, CMS) with QA",
      "Post-launch CRO roadmap and training",
    ],
    deliverables: [
      "Brand + UI kits",
      "Component libraries",
      "Responsive page templates",
      "Interaction + motion specs",
      "Content + SEO guidelines",
    ],
    faqs: [
      { q: "Do you develop the site as well?", a: "Yes—we ship in Webflow, Next.js, or headless stacks aligned to your infra." },
      { q: "Can you migrate our CMS?", a: "We migrate to Sanity, Contentful, or Webflow with zero downtime." },
      { q: "How do you ensure accessibility?", a: "Automated + manual testing, semantic HTML, and inclusive design reviews." },
    ],
  },
  "web-applications": {
    metaTitle: "Custom Web Application Development | VirtuProse",
    metaDescription:
      "Build secure, scalable web applications for US SaaS and enterprise teams using TypeScript, GraphQL, and edge deployments.",
    keywords: ["web application development USA", "TypeScript SaaS", "GraphQL engineering"],
    hero: {
      eyebrow: "Engineering",
      title: "Future-ready web applications and internal platforms",
      description:
        "From SaaS dashboards to internal tooling, we design and engineer cloud-native applications with security and scale baked in for US enterprises.",
    },
    stats: [
      { label: "Average launch timeline", value: "8–12 weeks" },
      { label: "Stack", value: "TypeScript, Next.js, GraphQL, Supabase" },
      { label: "Security", value: "SSO, SOC2-ready patterns" },
    ],
    pillars: [
      { title: "Product strategy", detail: "Roadmapping, user stories, and technical architecture." },
      { title: "Full-stack dev", detail: "APIs, integrations, and responsive interfaces engineered together." },
      { title: "Quality & security", detail: "Automated testing, observability, and compliance-ready pipelines." },
      { title: "Scale & handoff", detail: "Documentation, training, and phased releases with DevOps support." },
    ],
    process: [
      "Define success metrics and technical architecture",
      "Design UX flows + component libraries",
      "Sprint-based development with weekly demos",
      "Security + performance testing, load tests, and SOC2 alignment",
      "Launch, monitor, and optimize with your internal team",
    ],
    deliverables: [
      "Product requirements + architecture",
      "Design system + component library",
      "API + integration documentation",
      "Security + QA reports",
      "Launch + training playbook",
    ],
    faqs: [
      { q: "Do you offer ongoing maintenance?", a: "Yes, via retainers or knowledge transfer to your engineers." },
      { q: "What clouds do you deploy to?", a: "AWS, Vercel, Render, Azure, plus on-prem as needed." },
      { q: "Can you integrate AI features?", a: "We wire in OpenAI/Anthropic endpoints, vector stores, and workflow tools." },
    ],
  },
  "ai-automation": {
    metaTitle: "AI Agents & Automation (Orvia) | VirtuProse",
    metaDescription:
      "Deploy Orvia AI assistants that book, charge, and close for US clinics, real estate, eCommerce, and service providers.",
    keywords: ["AI agents USA", "WhatsApp automation", "Orvia assistant"],
    hero: {
      eyebrow: "AI automation",
      title: "Orvia agents that book, charge, and close for you",
      description:
        "Custom-trained AI assistants connect to your calendars, payments, and CRMs to run revenue operations across web, apps, and WhatsApp.",
    },
    stats: [
      { label: "Response time", value: "<10 seconds" },
      { label: "Booking uplift", value: "+20% avg" },
      { label: "Channels", value: "Web widget, WhatsApp, SMS" },
    ],
    pillars: [
      { title: "Use-case design", detail: "Identify high-impact flows (booking, ordering, support, lead capture)." },
      { title: "Data + workflow setup", detail: "Connect Airtable/Supabase, Stripe, Razorpay, Tap, Google Calendar, CRM." },
      { title: "LLM alignment", detail: "Tooling, guardrails, and testing with GPT-4o or Claude." },
      { title: "Analytics + governance", detail: "Dashboards, transcripts, and human handoff alerts." },
    ],
    process: [
      "Discovery + ROI modeling",
      "Data + workflow connections",
      "Agent training + QA",
      "Pilot launch with monitoring",
      "Scale + handoff to internal teams",
    ],
    deliverables: [
      "Blueprint + ROI model",
      "Knowledge base + prompt libraries",
      "Workflow automations",
      "Analytics + transcript reports",
      "Training + documentation",
    ],
    faqs: [
      { q: "Do you support HIPAA/GDPR?", a: "Yes—through data minimization, access controls, and compliant vendors." },
      { q: "How do human handoffs work?", a: "Low-confidence interactions route to your team through Slack, Teams, or CRM tasks." },
      { q: "Can Orvia speak multiple languages?", a: "Yes—English, Spanish, Arabic, and more with locale-specific flows." },
    ],
  },
} as const;

type ServiceSlug = keyof typeof services;

interface ServicePageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return Object.keys(services).map((slug) => ({ slug }));
}

export function generateMetadata({ params }: ServicePageProps): Metadata {
  const service = services[params.slug as ServiceSlug];
  if (!service) {
    return { title: "VirtuProse Services" };
  }
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    keywords: [...service.keywords],
  };
}

export default function ServiceDetailPage({ params }: ServicePageProps) {
  const service = services[params.slug as ServiceSlug];
  if (!service) {
    return notFound();
  }

  return (
    <div className="page-wrapper" style={{ paddingTop: "4rem" }}>
      <section className="hero" style={{ minHeight: "auto", paddingTop: 0 }}>
        <div className="section-heading">
          <p className="eyebrow">{service.hero.eyebrow}</p>
          <h1>{service.hero.title}</h1>
          <p className="subline">{service.hero.description}</p>
        </div>
      </section>

      <section className="services">
        <div className="service-cards">
          {service.stats.map((stat) => (
            <article key={stat.label} className="service-card">
              <h3>{stat.value}</h3>
              <p>{stat.label}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="services">
        <div className="section-heading">
          <p className="eyebrow">What’s included</p>
          <h2>Pillars of the engagement</h2>
        </div>
        <div className="service-cards">
          {service.pillars.map((pillar) => (
            <article key={pillar.title} className="service-card">
              <h3>{pillar.title}</h3>
              <p>{pillar.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="services">
        <div className="section-heading">
          <p className="eyebrow">Process</p>
          <h2>How we work with your US team</h2>
        </div>
        <ol className="workflow">
          {service.process.map((step, index) => (
            <li key={step}>
              <strong>Step {index + 1}.</strong> {step}
            </li>
          ))}
        </ol>
      </section>

      <section className="services">
        <div className="section-heading">
          <p className="eyebrow">Deliverables</p>
          <h2>What your team receives</h2>
        </div>
        <div className="service-cards">
          {service.deliverables.map((deliverable) => (
            <article key={deliverable} className="service-card">
              <p>{deliverable}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="services">
        <div className="section-heading">
          <p className="eyebrow">FAQs</p>
          <h2>Answers for US marketing & ops teams</h2>
        </div>
        <div className="service-cards">
          {service.faqs.map((faq) => (
            <article key={faq.q} className="service-card">
              <h3>{faq.q}</h3>
              <p>{faq.a}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="cta-banner">
        <div className="cta-content">
          <h3>Ready to engage VirtuProse?</h3>
          <p>Book a call with our US strategy team to design your engagement.</p>
        </div>
        <Link className="btn primary" href="/contact">
          Talk to us
        </Link>
      </section>
    </div>
  );
}
