"use client";

import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Bot, Code2, Palette, Workflow, Lock, ShieldCheck, TrendingUp, CheckCircle2, Zap, Target } from "lucide-react";

const whatWeDo = [
  {
    title: "AI business agents",
    text: "Orvia and supporting agents that answer customers, book appointments, follow up, and collect payments across WhatsApp, web, and voice.",
  },
  {
    title: "Product-grade engineering",
    text: "Web, mobile, and backend systems built with proper architecture, testing, and performance tuning so they hold up under real usage.",
  },
  {
    title: "Experience and journey design",
    text: "Interfaces and flows that are easy to understand, fast to use, and built around business outcomes, not dribbble shots.",
  },
  {
    title: "Integration and automation layer",
    text: "Twilio, WhatsApp, CRMs, calendars, payment gateways, and internal tools wired together so data moves cleanly and actions can be automated end to end.",
  },
];

const stats = [
  { value: "250+", label: "projects shipped", description: "Production work across banking, insurance, health, retail, and services." },
  { value: "100+", label: "businesses served", description: "From solo founders to enterprises across GCC, India, US, Canada, and Australia." },
  { value: "10+", label: "years in GCC markets", description: "Deep familiarity with regulations, payment methods, and customer behavior." },
  { value: "8+", label: "years in banking and enterprise", description: "Background in performance, compliance, and risk-aware delivery." },
  { value: "8+", label: "industries with AI agents", description: "Clinics, spas, real estate, education, retail, professional services, and more." },
  { value: "1", label: "full-stack team", description: "Strategy, UX, engineering, AI, integrations, and automation under a single roof." },
];

const processSteps = [
  { step: "1", title: "Discovery & alignment", body: "Clarify goals, constraints, risks, and success metrics with your stakeholders." },
  { step: "2", title: "System & journey design", body: "Map flows, data, and responsibilities. Design the UX around real workflows." },
  { step: "3", title: "Engineering & implementation", body: "Build the agents, APIs, web or mobile frontends, and automations on a solid foundation." },
  { step: "4", title: "Integration & data wiring", body: "Connect CRMs, calendars, WhatsApp, Twilio, payment gateways, and internal tools." },
  { step: "5", title: "Testing & hardening", body: "Stress-test flows, failure states, and edge cases before they touch customers." },
  { step: "6", title: "Launch & iteration", body: "Go live, monitor real usage, and refine based on actual business outcomes." },
];

const values = [
  { icon: ShieldCheck, title: "Reliability", body: "We ship systems that work on Monday mornings, not just demo day." },
  { icon: CheckCircle2, title: "Ownership", body: "We act like an internal squad, not a vendor taking orders." },
  { icon: Lock, title: "Security-first thinking", body: "Data, access, and integrations are treated as production-critical from day one." },
  { icon: Zap, title: "Clarity and honesty", body: "No vague timelines or hand-wavy promises. Direct communication, real expectations." },
  { icon: TrendingUp, title: "Performance focus", body: "We care about latency, scalability, and stability as much as UI polish." },
  { icon: Target, title: "Customer outcomes over features", body: "We measure success by revenue, efficiency, and reduced manual work, not feature count." },
];


export default function WhoWeArePage() {
  return (
    <div className="relative min-h-screen bg-[var(--bg)] text-[var(--text-primary)]">
      <div className="global-noise" aria-hidden="true" />
      <div className="relative z-10 space-y-16 pb-20 pt-12">
        <AboutHero />
        <WhatWeDo />
        <StatsSection />
        <ProcessSection />
        <ValuesSection />
        <FounderSection />
        <LongFormNarrative />
        <CTA />
      </div>
    </div>
  );
}

function AboutHero() {
  return (
    <section className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-5xl px-6"
      >
        <div className="rounded-3xl bg-white/5 dark:bg-white/5 backdrop-blur-xl border border-white/10 dark:border-white/10 px-8 py-10 bg-white dark:bg-transparent shadow-lg dark:shadow-none border-gray-200 dark:border-white/10">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-[var(--text-secondary)] mb-4">
            The company behind Orvia
          </p>
          <h1 className="text-4xl font-semibold leading-tight text-[var(--text-primary)] md:text-5xl lg:text-6xl mb-6">
            We build intelligent systems that run your business, not just power it.
          </h1>
          <p className="text-lg leading-relaxed text-[var(--text-secondary)] max-w-4xl">
            VirtuProse is a product and engineering company focused on one thing: removing operational friction for modern businesses. We design and ship AI agents, automation, and infrastructure that handle revenue work reliably so teams can focus on decisions, not repetitive tasks.
          </p>
        </div>
      </motion.div>
    </section>
  );
}

function WhatWeDo() {
  return (
    <section className="container space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="space-y-2"
      >
        <h2 className="text-3xl font-semibold text-[var(--text-primary)] md:text-4xl">
          What VirtuProse actually does
        </h2>
        <p className="text-lg text-[var(--text-secondary)] max-w-3xl">
          We combine AI agents, product engineering, and integration work into one stack so you don't juggle ten vendors.
        </p>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
        {whatWeDo.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <Card className="rounded-2xl bg-white/5 dark:bg-white/5 backdrop-blur-lg border border-white/10 dark:border-white/10 p-6 bg-white dark:bg-transparent border-gray-200 dark:border-white/10 shadow-sm dark:shadow-none h-full">
              <CardContent className="space-y-3 p-0">
                <h3 className="text-xl font-semibold text-[var(--text-primary)]">{item.title}</h3>
                <p className="text-sm leading-relaxed text-[var(--text-secondary)]">{item.text}</p>
              </CardContent>
            </Card>
          </motion.div>
            ))}
          </div>
    </section>
  );
}

function StatsSection() {
  return (
    <section className="container space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="space-y-2"
      >
        <h2 className="text-3xl font-semibold text-[var(--text-primary)] md:text-4xl">
          Why operators trust VirtuProse
        </h2>
        <p className="text-lg text-[var(--text-secondary)] max-w-3xl">
          You are not buying hours. You are buying systems that must work every day.
        </p>
      </motion.div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <Card className="rounded-2xl bg-white/5 dark:bg-white/5 border border-white/10 dark:border-white/10 p-6 bg-white dark:bg-transparent border-gray-200 dark:border-white/10 shadow-sm dark:shadow-none">
              <CardContent className="space-y-2 p-0">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-[var(--text-primary)]">{stat.value}</span>
                  <span className="text-sm font-medium text-[var(--text-secondary)]">{stat.label}</span>
                </div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{stat.description}</p>
        </CardContent>
      </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section className="container space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="space-y-2"
      >
        <p className="text-xs uppercase tracking-[0.55em] text-[var(--text-secondary)]">How we work</p>
        <h2 className="text-3xl font-semibold text-[var(--text-primary)] md:text-4xl">
          A clear, accountable build process
        </h2>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {processSteps.map((step, index) => (
          <motion.div
            key={step.step}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <Card className="border-[var(--border)]/70 bg-[var(--bg-secondary)]/70 transition duration-300 hover:-translate-y-1 hover:border-[var(--accent)]/50">
              <CardContent className="space-y-2 p-5">
                <p className="text-xs uppercase tracking-[0.3em] text-[var(--text-secondary)]">{step.step}</p>
                <p className="text-sm font-semibold text-[var(--text-primary)]">{step.title}</p>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{step.body}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function ValuesSection() {
  return (
    <section className="container space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="space-y-2"
      >
        <p className="text-xs uppercase tracking-[0.55em] text-[var(--text-secondary)]">Principles</p>
        <h2 className="text-3xl font-semibold text-[var(--text-primary)] md:text-4xl">
          How we show up as a partner
        </h2>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {values.map((value, index) => (
          <motion.div
            key={value.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <Card className="rounded-2xl bg-white/5 dark:bg-white/5 backdrop-blur-lg border border-white/10 dark:border-white/10 p-6 bg-white dark:bg-transparent border-gray-200 dark:border-white/10 shadow-sm dark:shadow-none">
              <CardContent className="flex gap-3 p-0">
                <span className="mt-1 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-2xl bg-[var(--accent)]/15 text-[var(--accent)]">
                  <value.icon className="h-5 w-5" />
              </span>
                <div className="space-y-1">
                  <p className="text-sm font-semibold text-[var(--text-primary)]">{value.title}</p>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{value.body}</p>
                </div>
            </CardContent>
          </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function FounderSection() {
  const stats = [
    { value: "10+", label: "years in GCC" },
    { value: "240+", label: "projects delivered" },
    { value: "100+", label: "companies served" },
  ];

  return (
    <section className="py-16 md:py-28" data-section>
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 md:gap-16 lg:grid-cols-2 lg:items-start">
          {/* Left Column: Portrait + Name + Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-6 md:space-y-8"
          >
            {/* Leadership Label */}
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-[var(--text-secondary)]">
              Leadership
            </p>

            {/* Portrait */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative h-40 w-40 md:h-48 md:w-48 overflow-hidden rounded-full shadow-[0_0_40px_rgba(0,0,0,0.4)] ring-1 ring-white/10">
                  <Image
                    src="/assets/zaid.webp"
                  alt="Mohammad Zaid Anarwala"
                  width={200}
                  height={200}
                  className="h-full w-full object-cover"
                  priority
                  />
                </div>
            </div>

            {/* Name and Role */}
            <div className="space-y-2 text-center lg:text-left">
              <h3 className="text-2xl md:text-3xl font-semibold text-[var(--text-primary)]">
                Muhammad Zaid Anarwala
              </h3>
              <p className="text-base text-[var(--text-secondary)]">
                    Founder & CEO
              </p>
            </div>

            {/* Stats Grid */}
            <div className="flex flex-col gap-4 pt-6 border-t border-[var(--border)]/30">
              {stats.map((stat) => (
                <div key={stat.label} className="flex items-center gap-8">
                  <span className="text-xl font-medium text-[var(--text-primary)]">
                    {stat.value}
                  </span>
                  <span className="text-sm tracking-wide text-[var(--text-secondary)]">
                    {stat.label}
                  </span>
                    </div>
                  ))}
                </div>
          </motion.div>

          {/* Right Column: Story */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight text-[var(--text-primary)]">
                Founder's Story
            </h2>
              <p className="text-lg md:text-xl font-medium text-[var(--text-primary)]">
                Muhammad Zaid Anarwala, Founder & CEO
              </p>
            </div>

            <div className="space-y-4 text-lg leading-relaxed text-[var(--text-secondary)]">
              <p>
                Muhammad Zaid Anarwala began his career building digital systems across banking, insurance, health, and retail in the GCC. Over nearly a decade, he delivered products that supported customer acquisition, automated workflows, and transformed manual processes into scalable operations.
              </p>
              <p>
                Working with more than 100 businesses revealed a pattern: companies were overwhelmed by tools but still dependent on people to chase leads, schedule appointments, and keep revenue moving. That gap led to Orvia — an AI business agent designed to run conversations, bookings, payments, and follow-ups automatically.
              </p>
              <p>
                Today, Zaid leads VirtuProse as a product-driven AI engineering company built on a simple belief: technology should remove friction, not create more of it.
              </p>
            </div>

            <p className="text-base italic text-[var(--text-secondary)] pt-4 opacity-70">
              Technology should remove friction, not create management.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function LongFormNarrative() {
  return (
    <section className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-4xl px-6"
      >
        <h2 className="text-3xl font-semibold text-[var(--text-primary)] mb-6 text-center md:text-left">
          VirtuProse in detail
        </h2>
        <div className="prose prose-lg max-w-none text-[var(--text-secondary)] dark:text-gray-300 text-center md:text-left">
          <p className="leading-relaxed mb-4">
            VirtuProse Solutions Private Limited (CIN: U47912GJ2025PTC162443) exists for one reason: remove the friction that slows businesses down. Every product we build and every service we deliver is designed to automate work, eliminate manual tasks, and help companies operate at a pace their competitors can't match.
          </p>
          <p className="leading-relaxed mb-4">
            We're the team behind Orvia, our AI agent platform that handles conversations, booking, follow ups, payments, and support without human involvement. Orvia sits inside websites, WhatsApp, CRM systems, and internal tools, turning slow, inconsistent processes into automated revenue engines.
          </p>
          <p className="leading-relaxed mb-4">
            Our work spans the GCC, United States, Canada, Australia, and India. The stack is wide, but tightly aligned with one outcome: business acceleration.
          </p>
          <p className="leading-relaxed mb-4">
            We've delivered more than 250 projects for over 100 companies, from startups to enterprise teams. The pattern is always the same: simplify the system, automate the repetitive work, and build digital experiences that drive measurable growth.
          </p>
          <p className="leading-relaxed">
            If a business wants to reduce workload, increase conversions, or operate with fewer manual steps, that's where VirtuProse fits. We build the tools that let modern companies run leaner, faster, and smarter.
          </p>
              </div>
      </motion.div>
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
            <p className="text-xs uppercase tracking-[0.55em] text-[var(--text-secondary)]">Let's talk</p>
            <h3 className="text-3xl font-semibold text-[var(--text-primary)]">Let's build something intelligent together</h3>
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
