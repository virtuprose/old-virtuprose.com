import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { OrviaOpenChatButton } from "@/components/orvia-open-chat-button";
import type { LucideIcon } from "lucide-react";
import {
  AlertTriangle,
  BellRing,
  Bot,
  Briefcase,
  Building2,
  CalendarClock,
  CreditCard,
  DatabaseZap,
  Globe2,
  LaptopMinimal,
  LineChart,
  MessagesSquare,
  Search,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Stethoscope,
  Timer,
  Shield,
  Key,
  FileCheck,
  Activity,
  Server,
  UsersRound,
  Workflow,
} from "lucide-react";

const problemPoints = [
  { text: "Slow replies kill conversions", icon: Timer },
  { text: "Missed DMs and calls go unanswered", icon: BellRing },
  { text: "Manual booking workflows frustrate teams", icon: CalendarClock },
  { text: "Staff gets buried in repetitive questions", icon: MessagesSquare },
  { text: "Customers abandon outdated forms", icon: AlertTriangle },
  { text: "Revenue leaks because responses take too long", icon: LineChart },
];

type IconListItem = {
  label: string;
  icon: LucideIcon;
};

const automationHighlights: IconListItem[] = [
  { label: "Appointment booking with live availability checks", icon: CalendarClock },
  { label: "Payments inside chat via Stripe, Razorpay, or Tap", icon: CreditCard },
  { label: "Real-time product search and recommendations", icon: Search },
  { label: "Lead capture, qualification, and routing", icon: UsersRound },
  { label: "Automatic CRM, POS, and sheet updates", icon: DatabaseZap },
  { label: "Confidence-based handoff to humans", icon: MessagesSquare },
];

const whyDifferent: IconListItem[] = [
  { label: "Performs transactions (books, charges, confirms)", icon: ShieldCheck },
  { label: "Connects to live databases, inventory, and calendars", icon: DatabaseZap },
  { label: "Triggers workflows inside CRM/POS tools automatically", icon: Workflow },
];

const useCases: IconListItem[] = [
  { label: "Clinics & salons", icon: Stethoscope },
  { label: "Real estate teams", icon: Building2 },
  { label: "E-commerce brands", icon: ShoppingBag },
  { label: "Service businesses", icon: Briefcase },
];

const automationColumns: { title: string; icon: LucideIcon; items: IconListItem[] }[] = [
  {
    title: "What it automates",
    icon: CalendarClock,
    items: automationHighlights,
  },
  {
    title: "Why it’s different",
    icon: Sparkles,
    items: whyDifferent,
  },
  {
    title: "Real deployments",
    icon: LaptopMinimal,
    items: useCases,
  },
];

const featureBlocks = [
  { title: "Appointment booking", copy: "Checks live availability, books, reschedules, cancels, and sends reminders.", icon: CalendarClock },
  {
    title: "Payments inside chat",
    copy: "Stripe, Razorpay, and Tap send hosted checkout links inside the conversation—deposits or full payments.",
    icon: CreditCard,
  },
  { title: "Live product catalog search", copy: "Filters by price, size, or attributes and drops deep links with media.", icon: Search },
  { title: "Lead qualification & routing", copy: "Captures contact/budget, scores intent, and routes to CRM or sales chat.", icon: UsersRound },
  { title: "Human handoff", copy: "Escalates on low confidence, gives agents full transcripts, and logs outcomes.", icon: MessagesSquare },
  { title: "Multi-channel support", copy: "Embed on your site, inside apps, and across WhatsApp with one brain.", icon: Bot },
  { title: "Integrations everywhere", copy: "Connects to CRMs, databases, calendars, and payment gateways via APIs.", icon: Workflow },
  { title: "Analytics & reporting", copy: "Tracks sessions, bookings, revenue, top intents, and time saved in one panel.", icon: LineChart },
];

const workflowSteps = [
  "User sends a question via WhatsApp, web, or app widget.",
  "Orvia identifies intent instantly.",
  "It pulls real-time data for availability, inventory, or pricing.",
  "It books, charges, or replies in under 10 seconds.",
  "If the scenario needs a human, it hands off with full context.",
];

const industries = [
  {
    label: "Clinics & Salons",
    bullets: ["Automatic booking & rescheduling", "Reminders + payments before visits", "Cuts front-desk workload"],
    icon: Stethoscope,
  },
  {
    label: "Real Estate",
    bullets: ["Property discovery + matching", "Tour scheduling & follow-ups", "Lead scoring with instant dossiers"],
    icon: Building2,
  },
  {
    label: "E-commerce",
    bullets: ["Product filtering + price checks", "Cart building + checkout links", "Post-purchase support 24/7"],
    icon: ShoppingBag,
  },
  {
    label: "Service Providers",
    bullets: ["Smart lead capture", "Calendar booking & reminders", "Deposits within the conversation"],
    icon: Briefcase,
  },
];

const differentiators = [
  { text: "Transaction-first design (far beyond FAQ bots)", icon: CreditCard },
  { text: "Multi-currency & localization ready", icon: Globe2 },
  { text: "White-label mode for agencies", icon: ShieldCheck },
  { text: "API-first architecture for POS/ERP/CRM", icon: Workflow },
  { text: "Real-time bookings + payments", icon: CalendarClock },
  { text: "Works across every platform you use", icon: LaptopMinimal },
  { text: "10-second average response time", icon: Timer },
  { text: "Enterprise-grade stack and hosting", icon: ShieldCheck },
];

const pricingPlans: {
  name: string;
  price: string;
  icon: LucideIcon;
  highlight?: boolean;
  badge?: string;
  cta: { label: string; href: string };
  features: { label: string; icon: LucideIcon }[];
}[] = [
  {
    name: "Starter Plan",
    price: "$300/month",
    icon: Sparkles,
    cta: { label: "Buy Now", href: "https://rzp.io/rzp/b2uLy2tC" },
    features: [
      { label: "Free website included", icon: Sparkles },
      { label: "200 conversations / month", icon: MessagesSquare },
      { label: "Web-based AI agent", icon: Bot },
      { label: "Full setup included", icon: Workflow },
    ],
  },
  {
    name: "Growth Plan",
    price: "$499/month",
    icon: LineChart,
    highlight: true,
    badge: "Most Popular",
    cta: { label: "Buy Now", href: "https://rzp.io/rzp/LNubLwT" },
    features: [
      { label: "Free website included", icon: Sparkles },
      { label: "500 conversations / month", icon: MessagesSquare },
      { label: "Web-based AI agent", icon: Bot },
      { label: "Full setup included", icon: Workflow },
    ],
  },
  {
    name: "Custom Package",
    price: "Custom pricing",
    icon: Workflow,
    cta: { label: "Contact Team", href: "/contact" },
    features: [
      { label: "Unlimited conversations", icon: MessagesSquare },
      { label: "WhatsApp integration", icon: Globe2 },
      { label: "Custom-built website", icon: LaptopMinimal },
      { label: "Enterprise features", icon: ShieldCheck },
    ],
  },
];

const testimonials = [
  "“Response time dropped to seconds and bookings jumped instantly.”",
  "“Sales team focuses on qualified leads—Orvia handles the rest.”",
  "“We replaced outdated forms and doubled conversion from DMs.”",
];

const securityPoints = [
  { icon: Shield, text: "Bank-level encryption protects every message and file in transit and at rest." },
  { icon: Key, text: "Role-based access controls ensure only approved teammates see sensitive data." },
  { icon: FileCheck, text: "Compliance-friendly logging keeps transcripts and payments audit-ready." },
  { icon: Activity, text: "Live monitoring alerts our team to suspicious behavior before it becomes a risk." },
  { icon: Server, text: "Hardened infrastructure and regional hosting keep your stack resilient." },
];

export default function OrviaPage() {
  return (
    <div className="relative min-h-screen bg-[var(--bg)] text-[var(--text-primary)]">
      <div className="global-noise" />
      <div className="relative z-10 space-y-16 pb-20 pt-10 text-[var(--text-primary)]">
        <section className="container grid gap-10 rounded-[32px] border border-[var(--border)]/70 bg-[var(--bg-secondary)]/70 p-10 shadow-[0_40px_120px_rgba(15,23,42,0.08)] text-[var(--text-primary)] lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <div className="space-y-6">
            <div className="orvia-hero-logo">
              <Image src="/assets/orvia-logo-black.svg" alt="Orvia logo" width={160} height={40} priority />
              <span>AI Revenue Assistant</span>
            </div>
            <h1 className="text-4xl font-semibold leading-tight text-[var(--text-primary)] md:text-5xl">The AI assistant that books, charges, and closes for you</h1>
            <p className="text-lg text-[var(--text-secondary)]">
              Orvia connects to your live databases, calendars, inventory, and CRM so it can book appointments, take payments, and run workflows across WhatsApp, websites, and apps.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-full px-6">
                <Link href="#pricing">Pricing</Link>
              </Button>
              <OrviaOpenChatButton
                label="See Live Demo"
                variant="outline"
                size="lg"
                className="rounded-full px-6"
                presetMessage="Show me a live Orvia demo"
              />
            </div>
            <p className="uppercase tracking-[0.4em] text-[var(--text-secondary)]">10-second responses · 24/7 accuracy · 15–30% more bookings & sales</p>
          </div>
        </section>

        <section id="pricing" className="container space-y-6">
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.55em] text-[var(--text-secondary)]">Where teams struggle</p>
            <h2 className="text-3xl font-semibold">The real problems Orvia wipes out</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {problemPoints.map((point) => (
              <Card key={point.text} className="border-[var(--border)]/70 bg-[var(--bg-secondary)]/80" data-interactive>
                <CardContent className="flex items-center gap-3 p-4 text-sm text-[var(--text-secondary)]">
                  <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[var(--accent)]/15 text-[var(--accent)]">
                    <point.icon className="h-5 w-5" />
                  </span>
                  <span>{point.text}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="container space-y-6">
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.55em] text-[var(--text-secondary)]">Orvia snapshot</p>
            <h2 className="text-3xl font-semibold text-[var(--text-primary)]">Automation built for clinics, real estate, e-commerce, and services</h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {automationColumns.map((block) => (
              <Card
                key={block.title}
                className="group relative overflow-hidden border-[var(--border)]/70 bg-[var(--bg-secondary)]/80 transition duration-300 hover:-translate-y-1 hover:border-[var(--accent)]/50 before:absolute before:inset-0 before:bg-gradient-to-br before:from-[var(--accent)]/15 before:via-transparent before:to-transparent before:opacity-0 before:transition before:duration-500 before:content-[''] hover:before:opacity-100"
                data-interactive
              >
                <CardContent className="relative z-10 space-y-4 p-6">
                  <div className="flex items-center gap-3 text-[var(--accent)]">
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--bg)]/80 text-[var(--accent)] shadow-[0_12px_40px_rgba(15,23,42,0.12)]">
                      <block.icon className="h-5 w-5" />
                    </span>
                    <h3 className="text-xl font-semibold text-[var(--text-primary)]">{block.title}</h3>
                  </div>
                  <ul className="space-y-3 text-sm text-[var(--text-secondary)]">
                    {block.items.map((item) => (
                      <li
                        key={item.label}
                        className="flex items-center gap-3 rounded-2xl border border-[var(--border)]/50 bg-[var(--bg)]/75 px-3 py-2 transition duration-300 group-hover:border-[var(--accent)]/40 group-hover:text-[var(--text-primary)]"
                      >
                        <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-[var(--bg-secondary)]/80 text-[var(--accent)] shadow-[0_10px_30px_rgba(15,23,42,0.12)]">
                          <item.icon className="h-4 w-4" />
                        </span>
                        <span>{item.label}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="container space-y-6">
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.55em] text-[var(--text-secondary)]">Core capabilities</p>
            <h2 className="text-3xl font-semibold text-[var(--text-primary)]">Feature blocks that power every interaction</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {featureBlocks.map((feature) => (
              <Card
                key={feature.title}
                className="group relative overflow-hidden border-[var(--border)]/70 bg-[var(--bg-secondary)]/80 transition duration-300 hover:-translate-y-1 hover:border-[var(--accent)]/50 before:absolute before:inset-0 before:bg-gradient-to-tr before:from-[var(--accent)]/12 before:via-transparent before:to-transparent before:opacity-0 before:transition before:duration-500 before:content-[''] hover:before:opacity-100"
                data-interactive
              >
                <CardContent className="relative z-10 space-y-3 p-5">
                  <div className="flex items-center gap-3 text-[var(--accent)]">
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--bg)]/70 text-[var(--accent)] shadow-[0_12px_30px_rgba(15,23,42,0.12)]">
                      <feature.icon className="h-5 w-5" />
                    </span>
                    <h3 className="text-lg font-semibold text-[var(--text-primary)]">{feature.title}</h3>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] transition duration-300 group-hover:text-[var(--text-primary)]">{feature.copy}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="container grid gap-6 rounded-[32px] border border-[var(--border)]/70 bg-[var(--bg-secondary)]/70 p-8 md:grid-cols-[minmax(0,0.45fr)_minmax(0,1fr)]">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.55em] text-[var(--text-secondary)]">How it works</p>
            <h2 className="text-3xl font-semibold text-[var(--text-primary)]">Five steps from query to booked & paid</h2>
          </div>
          <ol className="space-y-3 text-sm text-[var(--text-secondary)]">
            {workflowSteps.map((step, index) => (
              <li key={step} className="flex items-start gap-3">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-[var(--border)]/80 text-xs font-semibold text-[var(--text-secondary)]">
                  {index + 1}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </section>

        <section className="container space-y-6">
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.55em] text-[var(--text-secondary)]">Industries</p>
            <h2 className="text-3xl font-semibold text-[var(--text-primary)]">Orvia delivers across sectors</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {industries.map((industry) => (
            <Card key={industry.label} className="border-[var(--border)]/70 bg-[var(--bg-secondary)]/80" data-interactive>
              <CardContent className="space-y-3 p-5">
                  <div className="flex items-center gap-2 text-[var(--accent)]">
                    <industry.icon className="h-5 w-5" />
                    <h3 className="text-lg font-semibold text-[var(--text-primary)]">{industry.label}</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
                    {industry.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="container space-y-6">
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.55em] text-[var(--text-secondary)]">Why Orvia wins</p>
            <h2 className="text-3xl font-semibold text-[var(--text-primary)]">Differentiators teams feel immediately</h2>
          </div>
          <ScrollArea className="rounded-[28px] border border-[var(--border)]/70 bg-[var(--bg-secondary)]/80">
            <div className="grid gap-3 p-6 text-sm text-[var(--text-secondary)] md:grid-cols-2">
              {differentiators.map((diff) => (
                <div key={diff.text} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-2xl bg-[var(--accent)]/15 text-[var(--accent)]">
                    <diff.icon className="h-4 w-4" />
                  </span>
                  <span>{diff.text}</span>
                </div>
              ))}
            </div>
          </ScrollArea>
        </section>

        <section className="container space-y-6">
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.55em] text-[var(--text-secondary)]">Pricing</p>
            <h2 className="text-3xl font-semibold text-[var(--text-primary)]">Transparent tiers built to scale</h2>
            <p className="text-sm text-[var(--text-secondary)]">
              Every package includes a free website, Orvia’s AI agent, and white-glove setup. Choose the plan that fits your growth pace.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {pricingPlans.map((plan) => (
              <Card
                key={plan.name}
                className={`relative border-[var(--border)]/70 bg-[var(--bg-secondary)]/80 ${plan.highlight ? "ring-2 ring-[var(--accent)]" : ""}`}
                data-interactive
              >
                <CardContent className="space-y-5 p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--accent)]/15 text-[var(--accent)]">
                        <plan.icon className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="text-lg font-semibold text-[var(--text-primary)]">{plan.name}</p>
                        <p className="text-sm text-[var(--text-secondary)]">{plan.price}</p>
                      </div>
                    </div>
                    {plan.badge ? (
                      <span className="rounded-full border border-[var(--accent)]/60 bg-[var(--accent)]/10 px-3 py-1 text-xs font-semibold text-[var(--accent)]">
                        {plan.badge}
                      </span>
                    ) : null}
                  </div>
                  <ul className="space-y-3 text-sm text-[var(--text-secondary)]">
                    {plan.features.map((feature) => (
                      <li key={`${plan.name}-${feature.label}`} className="flex items-start gap-3">
                        <span className="mt-0.5 flex h-7 w-7 items-center justify-center rounded-full bg-[var(--accent)]/12 text-[var(--accent)]">
                          <feature.icon className="h-4 w-4" />
                        </span>
                        <span>{feature.label}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    asChild
                    className="w-full rounded-full"
                    variant={plan.highlight ? "default" : "outline"}
                  >
                    <Link href={plan.cta.href}>{plan.cta.label}</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="container space-y-6">
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.55em] text-[var(--text-secondary)]">Testimonials</p>
            <h2 className="text-3xl font-semibold">Orvia in the field</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {testimonials.map((quote) => (
              <Card key={quote} className="border-[var(--border)]/70 bg-[var(--bg-secondary)]/80">
                <CardContent className="space-y-2 p-5 text-sm text-[var(--text-secondary)]">{quote}</CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="container space-y-6">
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.55em] text-[var(--text-secondary)]">Security</p>
            <h2 className="text-3xl font-semibold">Enterprise-grade controls</h2>
          </div>
          <ScrollArea className="rounded-[28px] border border-[var(--border)]/70 bg-[var(--bg-secondary)]/80">
            <div className="grid gap-4 p-6 text-sm text-[var(--text-secondary)] md:grid-cols-2">
              {securityPoints.map((point) => (
                <div key={point.text} className="flex items-start gap-3 rounded-2xl border border-[var(--border)]/60 bg-[var(--bg)]/70 p-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[var(--accent)]/15 text-[var(--accent)]">
                    <point.icon className="h-4 w-4" />
                  </span>
                  <span className="text-sm text-[var(--text-secondary)]">{point.text}</span>
                </div>
              ))}
            </div>
          </ScrollArea>
        </section>

        <section className="container rounded-[32px] border border-[var(--border)]/70 bg-[var(--bg-secondary)]/70 p-8 text-center shadow-[0_40px_120px_rgba(15,23,42,0.08)]">
          <div className="flex flex-col items-center space-y-4">
            <div className="orvia-watermark">
              <Image src="/assets/orvia-logo-black.svg" alt="Orvia crest" width={96} height={26} />
            </div>
            <h3 className="text-3xl font-semibold">Deploy Orvia and capture every opportunity</h3>
            <p className="text-sm text-[var(--text-secondary)]">Book a full walkthrough or chat with our sales desk on WhatsApp.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button asChild className="rounded-full">
                <Link href="/contact">Book Demo</Link>
              </Button>
              <Button asChild variant="outline" className="rounded-full">
                <a href="https://wa.me/96569984942" target="_blank" rel="noopener noreferrer">
                  Talk to Sales on WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
