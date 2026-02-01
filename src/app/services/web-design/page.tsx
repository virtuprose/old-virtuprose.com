"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
    ArrowRight,
    Globe,
    Building2,
    LayoutDashboard,
    ShoppingCart,
    Users,
    Rocket,
    Palette,
    Target,
    Smartphone,
    BarChart3,
    Code2,
    Zap,
    Shield,
    Search,
    Settings,
    Lightbulb,
    PenTool,
    Wrench,
    FlaskConical,
    CheckCircle,
    Gauge,
    TrendingUp,
    Lock,
    Server,
} from "lucide-react";

// Static marketing page
export const dynamic = "force-static";

// ============================================
// DATA
// ============================================

const WHAT_WE_BUILD = [
    {
        icon: Globe,
        title: "Marketing Websites",
        desc: "Convert visitors into customers with pages built for speed and clarity.",
    },
    {
        icon: Building2,
        title: "Corporate & Enterprise",
        desc: "Scale with confidence. Built for performance and long-term growth.",
    },
    {
        icon: LayoutDashboard,
        title: "Web Applications",
        desc: "Custom dashboards and tools that solve real business problems.",
    },
    {
        icon: ShoppingCart,
        title: "E-commerce Platforms",
        desc: "Sell online with fast, secure, and conversion-optimized stores.",
    },
    {
        icon: Users,
        title: "Portals & Internal Tools",
        desc: "CRMs, client portals, and systems that streamline operations.",
    },
    {
        icon: Rocket,
        title: "Landing Pages",
        desc: "High-converting funnels designed for campaigns and launches.",
    },
];

const DESIGN_PHILOSOPHY = [
    { icon: Target, title: "UX-First Approach", desc: "Every decision starts with the user. Intuitive by design." },
    { icon: BarChart3, title: "Conversion-Driven", desc: "Layouts engineered to guide visitors toward action." },
    { icon: Smartphone, title: "Mobile-First", desc: "Responsive from the start. Accessible to everyone." },
    { icon: Palette, title: "Brand Consistency", desc: "Your identity, amplified. Cohesive across every touchpoint." },
    { icon: Lightbulb, title: "Data-Informed", desc: "Decisions backed by research, testing, and real analytics." },
];

const DEV_EXCELLENCE = [
    { icon: Code2, title: "Clean, Scalable Code", desc: "Maintainable architecture that grows with your business." },
    { icon: Zap, title: "Performance Optimized", desc: "Sub-second load times. Every millisecond matters." },
    { icon: Shield, title: "Security First", desc: "Best practices baked in. Protected by default." },
    { icon: Search, title: "SEO-Ready", desc: "Technical foundations that search engines love." },
    { icon: Settings, title: "Future-Proof", desc: "Built to evolve. Easy to extend and maintain." },
];

const ALL_TECHNOLOGIES = [
    // Languages & Core
    { name: "HTML5" },
    { name: "CSS3" },
    { name: "JavaScript" },
    { name: "TypeScript" },
    { name: "Python" },
    { name: "PHP" },
    { name: "Ruby" },
    { name: "Go" },
    { name: "Rust" },
    { name: "Java" },
    { name: "C#" },
    { name: "Swift" },
    { name: "Kotlin" },

    // Frontend Frameworks
    { name: "React" },
    { name: "Next.js" },
    { name: "Vue.js" },
    { name: "Nuxt.js" },
    { name: "Angular" },
    { name: "Svelte" },
    { name: "SvelteKit" },
    { name: "Astro" },
    { name: "Remix" },
    { name: "Gatsby" },
    { name: "Qwik" },
    { name: "Solid.js" },

    // Styling
    { name: "Tailwind CSS" },
    { name: "Sass/SCSS" },
    { name: "Styled Components" },
    { name: "CSS Modules" },
    { name: "Bootstrap" },
    { name: "Material UI" },
    { name: "Chakra UI" },
    { name: "Radix UI" },
    { name: "Framer Motion" },

    // Backend & Runtime
    { name: "Node.js" },
    { name: "Express.js" },
    { name: "Fastify" },
    { name: "Nest.js" },
    { name: "Django" },
    { name: "Flask" },
    { name: "FastAPI" },
    { name: "Laravel" },
    { name: "Ruby on Rails" },
    { name: ".NET" },
    { name: "Spring Boot" },
    { name: "Deno" },
    { name: "Bun" },

    // Databases
    { name: "PostgreSQL" },
    { name: "MySQL" },
    { name: "MongoDB" },
    { name: "Redis" },
    { name: "SQLite" },
    { name: "Supabase" },
    { name: "Firebase" },
    { name: "PlanetScale" },
    { name: "Neon" },
    { name: "DynamoDB" },
    { name: "Prisma" },
    { name: "Drizzle" },

    // CMS & E-commerce
    { name: "WordPress" },
    { name: "Shopify" },
    { name: "WooCommerce" },
    { name: "Magento" },
    { name: "Webflow" },
    { name: "Framer" },
    { name: "Sanity" },
    { name: "Contentful" },
    { name: "Strapi" },
    { name: "Ghost" },
    { name: "Payload CMS" },
    { name: "Directus" },

    // Cloud & Infrastructure
    { name: "Vercel" },
    { name: "Netlify" },
    { name: "AWS" },
    { name: "Google Cloud" },
    { name: "Azure" },
    { name: "DigitalOcean" },
    { name: "Cloudflare" },
    { name: "Railway" },
    { name: "Render" },
    { name: "Fly.io" },
    { name: "Docker" },
    { name: "Kubernetes" },

    // Tools & APIs
    { name: "GraphQL" },
    { name: "REST APIs" },
    { name: "tRPC" },
    { name: "WebSockets" },
    { name: "Stripe" },
    { name: "Auth0" },
    { name: "Clerk" },
    { name: "Twilio" },
    { name: "SendGrid" },
    { name: "Algolia" },

    // Testing & DevOps
    { name: "Jest" },
    { name: "Playwright" },
    { name: "Cypress" },
    { name: "Vitest" },
    { name: "GitHub Actions" },
    { name: "GitLab CI" },
    { name: "Jenkins" },
    { name: "Terraform" },
];

const PROCESS_STEPS = [
    { icon: Lightbulb, title: "Discovery", desc: "Understand your goals, audience, and competitive landscape." },
    { icon: PenTool, title: "Design", desc: "Craft intuitive interfaces that align with your brand." },
    { icon: Wrench, title: "Development", desc: "Build with clean code, performance, and scalability in mind." },
    { icon: FlaskConical, title: "Testing", desc: "Rigorous QA across devices, browsers, and edge cases." },
    { icon: Rocket, title: "Launch", desc: "Deploy with confidence. Ongoing support and optimization." },
];

const PERFORMANCE_METRICS = [
    { icon: Gauge, title: "Core Web Vitals", desc: "LCP, FID, CLS optimized for Google rankings." },
    { icon: TrendingUp, title: "Conversion Rate", desc: "Data-driven layouts that increase conversions." },
    { icon: Search, title: "SEO Foundations", desc: "Technical SEO built into every page." },
    { icon: BarChart3, title: "Analytics Ready", desc: "Tracking and insights from day one." },
];

// ============================================
// COMPONENTS
// ============================================

function SectionHeader({ eyebrow, title, description }: { eyebrow?: string; title: string; description?: string }) {
    return (
        <div className="text-center max-w-3xl mx-auto mb-16">
            {eyebrow && (
                <motion.p
                    className="text-sm font-medium text-[var(--primary)] uppercase tracking-widest mb-4"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    {eyebrow}
                </motion.p>
            )}
            <motion.h2
                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
            >
                {title}
            </motion.h2>
            {description && (
                <motion.p
                    className="text-lg text-[var(--foreground)]/60"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    {description}
                </motion.p>
            )}
        </div>
    );
}

// ============================================
// PAGE
// ============================================

export default function WebDesignPage() {
    return (
        <main className="min-h-screen bg-[var(--bg)] text-[var(--foreground)] overflow-hidden">

            {/* ===== HERO SECTION ===== */}
            <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 px-6 overflow-hidden">
                {/* Animated Grid Background */}
                <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)`,
                        backgroundSize: '60px 60px',
                    }} />
                </div>

                <div className="container mx-auto max-w-5xl text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <p className="text-sm font-medium text-[var(--primary)] uppercase tracking-widest mb-6">
                            Website Design & Development
                        </p>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 leading-[1.1]">
                            Websites That Convert.<br />
                            <span className="text-[var(--primary)]">Code That Scales.</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-[var(--foreground)]/60 max-w-2xl mx-auto mb-12">
                            We design and build high-performance digital experiences for companies that demand speed, quality, and measurable results.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/contact"
                                className={cn(
                                    "inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full",
                                    "bg-[var(--primary)] text-white font-medium",
                                    "hover:bg-[var(--primary)]/90 transition-all duration-200",
                                    "shadow-lg shadow-[var(--primary)]/20"
                                )}
                            >
                                Start a Project
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                            <a
                                href="#what-we-build"
                                className={cn(
                                    "inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full",
                                    "border border-[var(--border)] bg-[var(--bg)]",
                                    "hover:bg-[var(--bg-secondary)] transition-all duration-200"
                                )}
                            >
                                View Capabilities
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ===== WHAT WE BUILD ===== */}
            <section id="what-we-build" className="py-24 md:py-32 px-6 bg-[var(--bg-secondary)]">
                <div className="container mx-auto max-w-6xl">
                    <SectionHeader
                        eyebrow="What We Build"
                        title="From Landing Pages to Enterprise Platforms"
                        description="We build digital experiences that solve real business problems."
                    />
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {WHAT_WE_BUILD.map((item, i) => (
                            <motion.div
                                key={item.title}
                                className={cn(
                                    "p-8 rounded-2xl border border-[var(--border)] bg-[var(--bg)]",
                                    "hover:border-[var(--primary)]/30 hover:shadow-lg transition-all duration-300"
                                )}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <item.icon className="w-10 h-10 text-[var(--primary)] mb-4" />
                                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                                <p className="text-[var(--foreground)]/60">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== DESIGN PHILOSOPHY ===== */}
            <section className="py-24 md:py-32 px-6">
                <div className="container mx-auto max-w-6xl">
                    <SectionHeader
                        eyebrow="Design Philosophy"
                        title="Beautiful by Design. Effective by Intent."
                        description="We don't just make things look good. We make them work."
                    />
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {DESIGN_PHILOSOPHY.map((item, i) => (
                            <motion.div
                                key={item.title}
                                className="flex gap-4"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[var(--primary)]/10 flex items-center justify-center">
                                    <item.icon className="w-6 h-6 text-[var(--primary)]" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                                    <p className="text-sm text-[var(--foreground)]/60">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== DEVELOPMENT EXCELLENCE ===== */}
            <section className="py-24 md:py-32 px-6 bg-[var(--bg-secondary)]">
                <div className="container mx-auto max-w-6xl">
                    <SectionHeader
                        eyebrow="Development Excellence"
                        title="Engineering That Stands the Test of Time"
                        description="Clean code. Fast sites. Secure systems. Built to last."
                    />
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {DEV_EXCELLENCE.map((item, i) => (
                            <motion.div
                                key={item.title}
                                className="flex gap-4"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[var(--primary)]/10 flex items-center justify-center">
                                    <item.icon className="w-6 h-6 text-[var(--primary)]" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                                    <p className="text-sm text-[var(--foreground)]/60">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== TECHNOLOGY STACK ===== */}
            <section className="py-24 md:py-32 px-6">
                <div className="container mx-auto max-w-6xl">
                    <SectionHeader
                        eyebrow="Technology Stack"
                        title="Modern Tools. Proven Results."
                        description="We master the full spectrum of web technologies to deliver the right solution for every project."
                    />
                    <motion.div
                        className="flex flex-wrap justify-center gap-3"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        {ALL_TECHNOLOGIES.map((tech, i) => (
                            <motion.div
                                key={tech.name}
                                className={cn(
                                    "px-4 py-2 rounded-full border border-[var(--border)] bg-[var(--bg-secondary)]",
                                    "hover:border-[var(--primary)]/40 hover:bg-[var(--primary)]/5 transition-all duration-200",
                                    "text-sm font-medium"
                                )}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.01 }}
                            >
                                {tech.name}
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ===== PROCESS ===== */}
            <section className="py-24 md:py-32 px-6 bg-[var(--bg-secondary)]">
                <div className="container mx-auto max-w-5xl">
                    <SectionHeader
                        eyebrow="Our Process"
                        title="From Idea to Launch. Seamlessly."
                        description="A proven process that removes risk and delivers results."
                    />
                    <div className="relative">
                        {/* Timeline line */}
                        <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-[var(--border)]" />

                        <div className="grid lg:grid-cols-5 gap-8">
                            {PROCESS_STEPS.map((step, i) => (
                                <motion.div
                                    key={step.title}
                                    className="text-center relative"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.15 }}
                                >
                                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[var(--primary)] flex items-center justify-center shadow-lg shadow-[var(--primary)]/20">
                                        <step.icon className="w-7 h-7 text-white" />
                                    </div>
                                    <span className="text-xs font-bold text-[var(--primary)] mb-2 block">0{i + 1}</span>
                                    <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                                    <p className="text-sm text-[var(--foreground)]/60">{step.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== CONVERSION & PERFORMANCE ===== */}
            <section className="py-24 md:py-32 px-6">
                <div className="container mx-auto max-w-5xl">
                    <SectionHeader
                        eyebrow="Performance Focused"
                        title="Built for Speed. Optimized for Growth."
                        description="We don't just build pretty sites. We build sites that perform."
                    />
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {PERFORMANCE_METRICS.map((item, i) => (
                            <motion.div
                                key={item.title}
                                className={cn(
                                    "p-6 rounded-2xl border border-[var(--border)] bg-[var(--bg-secondary)]",
                                    "text-center"
                                )}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <item.icon className="w-10 h-10 text-[var(--primary)] mx-auto mb-4" />
                                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                                <p className="text-sm text-[var(--foreground)]/60">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== TRUST SIGNALS ===== */}
            <section className="py-16 px-6 bg-[var(--bg-secondary)]">
                <div className="container mx-auto max-w-4xl">
                    <div className="flex flex-wrap justify-center gap-8 text-center">
                        <motion.div
                            className="flex items-center gap-2"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                        >
                            <CheckCircle className="w-5 h-5 text-green-500" />
                            <span className="text-sm text-[var(--foreground)]/70">Built for companies that value performance</span>
                        </motion.div>
                        <motion.div
                            className="flex items-center gap-2"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                        >
                            <Lock className="w-5 h-5 text-blue-500" />
                            <span className="text-sm text-[var(--foreground)]/70">Enterprise-grade security</span>
                        </motion.div>
                        <motion.div
                            className="flex items-center gap-2"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <Server className="w-5 h-5 text-purple-500" />
                            <span className="text-sm text-[var(--foreground)]/70">99.9% uptime reliability</span>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ===== FINAL CTA ===== */}
            <section className="py-24 md:py-32 px-6">
                <div className="container mx-auto max-w-3xl text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">
                            Let's Build Something That Works.
                        </h2>
                        <p className="text-lg text-[var(--foreground)]/60 mb-10 max-w-xl mx-auto">
                            Whether you're starting fresh or ready to scale, we'd love to hear about your project.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/contact"
                                className={cn(
                                    "inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full",
                                    "bg-[var(--primary)] text-white font-medium",
                                    "hover:bg-[var(--primary)]/90 transition-all duration-200",
                                    "shadow-lg shadow-[var(--primary)]/20"
                                )}
                            >
                                Start a Project
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link
                                href="/contact"
                                className={cn(
                                    "inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full",
                                    "border border-[var(--border)] bg-[var(--bg)]",
                                    "hover:bg-[var(--bg-secondary)] transition-all duration-200"
                                )}
                            >
                                Schedule a Consultation
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

        </main>
    );
}
