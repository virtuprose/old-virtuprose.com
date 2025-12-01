"use client";

import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, BadgeCheck, HandHeart, Laptop, LineChart, Lock, MessageSquare, Rocket, ShieldCheck, Sparkles, Workflow, Linkedin, Instagram, MessageCircle } from "lucide-react";

const whyUs = [
  { icon: Sparkles, title: "Craftsmanship", body: "Premium visuals, systems, and flows built to convert." },
  { icon: Rocket, title: "Speed & Iteration", body: "Short cycles, clear checkpoints, and visible momentum." },
  { icon: ShieldCheck, title: "Engineering Discipline", body: "Secure, resilient builds ready for scale." },
  { icon: LineChart, title: "Revenue-Driven", body: "Every launch anchored to measurable business KPIs." },
  { icon: Workflow, title: "Automation-First", body: "Repeatable workflows that keep teams focused on outcomes." },
  { icon: MessageSquare, title: "Transparent Comms", body: "Frequent updates, shared dashboards, no surprises." },
];

const values = [
  { icon: ShieldCheck, title: "Reliability", body: "We deliver what we promise—on time and with care." },
  { icon: HandHeart, title: "Integrity", body: "Clear expectations, honest feedback, and shared wins." },
  { icon: Lock, title: "Security-First", body: "Best practices baked into every build and integration." },
  { icon: Award, title: "Quality", body: "Rigorous reviews across design, code, and customer journeys." },
  { icon: BadgeCheck, title: "Ownership", body: "We act like an embedded team, not a vendor." },
  { icon: Sparkles, title: "Client Obsession", body: "Your outcomes guide every decision we make." },
];

const process = [
  { step: "01", title: "Discovery & Strategy", body: "Align goals, constraints, and KPIs with your stakeholders." },
  { step: "02", title: "UX & System Design", body: "Map journeys, flows, and system architecture with prototypes." },
  { step: "03", title: "Engineering & Development", body: "Ship secure, performant builds ready for production." },
  { step: "04", title: "Automation & AI Integration", body: "Layer agents, triggers, and data syncing into your stack." },
  { step: "05", title: "QA & Testing", body: "Stress-test reliability, accessibility, and edge cases." },
  { step: "06", title: "Launch & Optimization", body: "Track impact, improve fast, and scale what works." },
];

const achievements = [
  { icon: Award, title: "Awarded AI Initiatives", body: "Recognized for AI-first customer experiences across GCC." },
  { icon: Laptop, title: "Enterprise Launches", body: "Dozens of mission-critical apps and automation rollouts." },
  { icon: Rocket, title: "Growth Impact", body: "Campaigns and funnels rebuilt to lift revenue quickly." },
  { icon: ShieldCheck, title: "Trusted Security", body: "Compliance-aware workflows and hardened infrastructure." },
];

const metrics = [
  { label: "Years in GCC", value: "10+" },
  { label: "Projects Delivered", value: "240+" },
  { label: "Banking & Enterprise Experience", value: "8+ yrs" },
  { label: "Multi-Country Delivery", value: "Kuwait · GCC · India" },
];

export default function WhoWeArePage() {
  return (
    <div className="relative min-h-screen bg-[var(--bg)] text-[var(--text-primary)]">
      <div className="global-noise" aria-hidden="true" />
      <div className="relative z-10 space-y-16 pb-20 pt-12">
        <HeroSection />
        <FounderSection />
        <WhyUs />
        <Values />
        <Process />
        <Achievements />
        <CTA />
      </div>
    </div>
  );
}

function HeroSection() {
  return (
    <section className="container">
      <Card className="relative overflow-hidden rounded-[36px] border border-[var(--border)]/70 bg-gradient-to-br from-[var(--bg-secondary)]/90 via-[var(--bg-secondary)]/70 to-[var(--bg)]/80 shadow-[0_40px_140px_rgba(10,14,30,0.35)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.25),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(56,189,248,0.2),transparent_25%)] blur-3xl" />
        <CardContent className="relative p-10 space-y-6">
          <p className="text-xs uppercase tracking-[0.55em] text-[var(--text-secondary)] animate-fade-in">Who we are</p>
          <h1 className="text-4xl font-semibold leading-tight md:text-5xl">About VirtuProse Solutions Private Limited</h1>
          <p className="max-w-5xl text-sm text-[var(--text-secondary)] leading-relaxed">
            VirtuProse Solutions Private Limited (CIN: U47912GJ2025PTC162443) is a leading digital transformation agency
            specializing in AI-powered solutions, web development, mobile applications, and growth-driven digital marketing
            strategies. Operating across the GCC (Kuwait), United States, Canada, Australia, and India, we deliver
            enterprise-grade services that combine cutting-edge technology with strategic business outcomes. Our core
            expertise spans custom web development, e-commerce solutions, UI/UX design, mobile app development for iOS and
            Android, SEO and content marketing, paid advertising campaigns, and AI agent development. As pioneers in
            conversational AI, we&apos;ve developed Orvia – an intelligent AI concierge platform that automates lead
            qualification, appointment booking, payment processing, and customer support across multiple channels including
            web chat, WhatsApp, and CRM integrations. With a proven track record of over 250 successfully delivered projects
            for more than 100 companies worldwide, VirtuProse transforms businesses through scalable websites, performant
            applications, conversion-focused design systems, and data-driven marketing strategies that accelerate revenue
            growth and customer retention.
          </p>
          <div className="flex flex-wrap gap-3 text-sm text-[var(--text-secondary)]">
            {["AI-native", "Embedded squads", "Design + Engineering + Growth", "Transparent delivery"].map((pill) => (
              <span
                key={pill}
                className="rounded-full border border-[var(--border)]/60 bg-[var(--bg)]/70 px-3 py-1 transition hover:border-[var(--accent)]/60 hover:text-[var(--accent)]"
              >
                {pill}
              </span>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
}

function WhyUs() {
  return (
    <section className="container space-y-6" data-section>
      <div className="space-y-2">
        <p className="text-xs uppercase tracking-[0.55em] text-[var(--text-secondary)]">Why clients work with us</p>
        <h2 className="text-3xl font-semibold">Proof in how we operate</h2>
      </div>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {whyUs.map((item) => (
          <Card
            key={item.title}
            className="border-[var(--border)]/70 bg-[var(--bg-secondary)]/75 transition duration-300 hover:-translate-y-1 hover:border-[var(--accent)]/50"
            data-interactive
          >
            <CardContent className="flex h-full flex-col gap-3 p-5">
              <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[var(--accent)]/15 text-[var(--accent)]">
                <item.icon className="h-5 w-5" />
              </span>
              <p className="text-base font-semibold text-[var(--text-primary)]">{item.title}</p>
              <p className="text-sm text-[var(--text-secondary)]">{item.body}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

function FounderSection() {
  return (
    <section className="container" data-section>
      <div className="rounded-[32px] border border-[var(--border)]/70 bg-gradient-to-br from-[var(--bg-secondary)]/80 via-[var(--bg-secondary)]/60 to-[var(--bg)]/80 p-10 shadow-[0_40px_120px_rgba(10,12,26,0.28)]">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.55fr)_minmax(0,1fr)]">
          <div className="flex justify-center">
            <Card className="w-full max-w-sm border-[var(--border)]/70 bg-[var(--bg)]/85 shadow-[0_20px_80px_rgba(10,12,26,0.25)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_100px_rgba(10,12,26,0.28)]">
              <CardContent className="space-y-5 p-6 text-center">
                <div className="mx-auto h-44 w-44 overflow-hidden rounded-full border border-[var(--border)]/60 shadow-[0_10px_40px_rgba(10,12,26,0.25)]">
                  <Image
                    src="/assets/zaid.webp"
                    alt="Mohammad Zaid portrait"
                    width={320}
                    height={320}
                    className="h-full w-full object-cover transition duration-500 hover:scale-105"
                  />
                </div>
                <div className="space-y-1">
                  <span className="inline-flex items-center rounded-full border border-[var(--border)]/60 bg-[var(--bg-secondary)]/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-[var(--text-secondary)]">
                    Founder & CEO
                  </span>
                  <h3 className="text-2xl font-semibold text-[var(--text-primary)]">Mohammad Zaid</h3>
                </div>
                <div className="grid grid-cols-2 gap-3 text-sm text-[var(--text-secondary)]">
                  {metrics.map((metric) => (
                    <div key={metric.label} className="rounded-2xl border border-[var(--border)]/60 bg-[var(--bg-secondary)]/60 p-3">
                      <p className="text-xl font-semibold text-[var(--text-primary)]">{metric.value}</p>
                      <p className="text-xs">{metric.label}</p>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-center gap-3 pt-2">
                  <SocialIcon href="https://www.linkedin.com/in/mohammadzaid" label="LinkedIn" icon={<Linkedin className="h-4 w-4" />} />
                  <SocialIcon href="https://www.instagram.com/" label="Instagram" icon={<Instagram className="h-4 w-4" />} />
                  <SocialIcon href="https://wa.me/96569984942" label="WhatsApp" icon={<MessageCircle className="h-4 w-4" />} />
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="space-y-4 text-[var(--text-secondary)]">
            <h2 className="text-4xl font-semibold leading-tight md:text-5xl text-[var(--text-primary)]">
              Founder’s Story: Muhammad Zaid Anarwala
            </h2>
            <div className="space-y-3 leading-relaxed">
              <p>
                Muhammad Zaid Anarwala, Founder and CEO of VirtuProse Solutions, began as a freelance digital strategist and full-stack developer, building his expertise one client at a time across the GCC, especially Kuwait. What started as a solo mission has grown into a registered multinational agency serving five continents.
              </p>
              <p>
                With 250+ projects delivered for 100+ companies, Zaid saw a gap: businesses needed intelligent systems that drove revenue 24/7—not just pretty sites or basic apps. That insight sparked Orvia, our AI revenue assistant that qualifies leads, books appointments, processes payments, and supports customers through NLP and seamless CRM integrations.
              </p>
              <p>
                Under his leadership, VirtuProse leads in AI-powered business automation—combining React Native mobile builds, API integrations, backend systems, performance tuning, and CRO with strategic growth marketing.
              </p>
              <p>
                Today, VirtuProse Solutions Private Limited operates as a fully registered entity with specialists in digital marketing, web and mobile development, UI/UX, and AI—helping businesses across the United States, Canada, Australia, GCC nations, and India achieve sustainable transformation and revenue acceleration.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SocialIcon({ href, label, icon }: { href: string; label: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)]/70 bg-[var(--bg-secondary)]/80 text-[var(--text-secondary)] transition hover:-translate-y-0.5 hover:text-[var(--accent)]"
    >
      {icon}
    </a>
  );
}

function Values() {
  return (
    <section className="container space-y-6" data-section>
      <div className="space-y-2">
        <p className="text-xs uppercase tracking-[0.55em] text-[var(--text-secondary)]">Values</p>
        <h2 className="text-3xl font-semibold">How we show up</h2>
      </div>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {values.map((item) => (
          <Card
            key={item.title}
            className="border-[var(--border)]/70 bg-[var(--bg-secondary)]/70 transition duration-300 hover:-translate-y-1 hover:border-[var(--accent)]/50"
            data-interactive
          >
            <CardContent className="flex gap-3 p-5">
              <span className="mt-1 flex h-10 w-10 items-center justify-center rounded-2xl bg-[var(--accent)]/15 text-[var(--accent)]">
                <item.icon className="h-5 w-5" />
              </span>
              <div className="space-y-1">
                <p className="text-sm font-semibold text-[var(--text-primary)]">{item.title}</p>
                <p className="text-xs text-[var(--text-secondary)]">{item.body}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="container space-y-6" data-section>
      <div className="space-y-2">
        <p className="text-xs uppercase tracking-[0.55em] text-[var(--text-secondary)]">How we work</p>
        <h2 className="text-3xl font-semibold">A clear, accountable process</h2>
      </div>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {process.map((step) => (
          <Card
            key={step.step}
            className="border-[var(--border)]/70 bg-[var(--bg-secondary)]/70 transition duration-300 hover:-translate-y-1 hover:border-[var(--accent)]/50"
            data-interactive
          >
            <CardContent className="space-y-2 p-5">
              <p className="text-xs uppercase tracking-[0.3em] text-[var(--text-secondary)]">{step.step}</p>
              <p className="text-sm font-semibold text-[var(--text-primary)]">{step.title}</p>
              <p className="text-sm text-[var(--text-secondary)]">{step.body}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

function Achievements() {
  return (
    <section className="container space-y-6" data-section>
      <div className="space-y-2">
        <p className="text-xs uppercase tracking-[0.55em] text-[var(--text-secondary)]">Impact</p>
        <h2 className="text-3xl font-semibold">Signals of trust</h2>
      </div>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {achievements.map((item) => (
          <Card
            key={item.title}
            className="border-[var(--border)]/70 bg-[var(--bg-secondary)]/70 transition duration-300 hover:-translate-y-1 hover:border-[var(--accent)]/50"
            data-interactive
          >
            <CardContent className="space-y-2 p-5">
              <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[var(--accent)]/15 text-[var(--accent)]">
                <item.icon className="h-5 w-5" />
              </span>
              <p className="text-sm font-semibold text-[var(--text-primary)]">{item.title}</p>
              <p className="text-sm text-[var(--text-secondary)]">{item.body}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="container" data-section>
      <div className="relative overflow-hidden rounded-[32px] border border-[var(--border)]/70 bg-gradient-to-r from-[var(--accent)]/15 via-[#8c9bff]/20 to-transparent p-10 shadow-[0_40px_120px_rgba(10,14,30,0.28)]">
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--accent)]/10 to-transparent" />
        <div className="relative flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.55em] text-[var(--text-secondary)]">Let’s talk</p>
            <h3 className="text-3xl font-semibold text-[var(--text-primary)]">Let’s build something intelligent together</h3>
            <p className="text-sm text-[var(--text-secondary)]">We reply within 12 hours.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg" className="rounded-full px-8">
              <Link href="/contact">Start Your Project</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-8"
              onClick={() => window.dispatchEvent(new Event("open-orvia-chat"))}
            >
              Chat with Orvia
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
