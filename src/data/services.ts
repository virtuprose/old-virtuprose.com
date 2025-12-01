import type { ComponentType } from "react";
import {
  LineChart,
  Search,
  Megaphone,
  Gauge,
  Sparkles,
  Code2,
  ShoppingBag,
  Workflow,
  ShieldCheck,
  Palette,
  UsersRound,
  LayoutTemplate,
  Layers,
  CheckCircle,
  Smartphone,
  SquareStack,
  Bot,
  Brain,
  Globe2,
  MessageSquare,
  CreditCard,
  Timer,
} from "lucide-react";

export type ServiceFeature = {
  label: string;
  icon: ComponentType<{ className?: string }>;
};

export type ServiceOffering = {
  title: string;
  description: string;
  icon: ComponentType<{ className?: string }>;
  features: ServiceFeature[];
  badge?: string;
  highlight?: boolean;
  cta?: { label: string; href: string };
};

export const servicesData: ServiceOffering[] = [
  {
    title: "Digital Marketing & Growth Strategy",
    description:
      "Full-funnel marketing strategies powered by data, experimentation, and always-on optimization. We blend SEO, paid media, and lifecycle programs to accelerate revenue and retain customers.",
    icon: LineChart,
    features: [
      { label: "SEO strategy & content marketing", icon: Search },
      { label: "Paid advertising & campaign management", icon: Megaphone },
      { label: "Marketing analytics & performance tracking", icon: Gauge },
      { label: "Conversion rate optimization (CRO)", icon: Sparkles },
    ],
  },
  {
    title: "Web Development & Applications",
    description:
      "Secure, scalable websites and apps engineered with modern stacks. From marketing sites to complex portals, we ship performant builds that integrate with your ecosystem.",
    icon: Code2,
    features: [
      { label: "Custom website & web app development", icon: Code2 },
      { label: "E-commerce & CMS solutions", icon: ShoppingBag },
      { label: "API integration & backend systems", icon: Workflow },
      { label: "Performance optimization & security", icon: ShieldCheck },
    ],
  },
  {
    title: "UI/UX Design & Experience",
    description:
      "Conversion-focused design systems that delight users and drive outcomes. We combine research, interaction design, and prototyping to build intuitive experiences.",
    icon: Palette,
    features: [
      { label: "User research & journey mapping", icon: UsersRound },
      { label: "Interface design & interactive prototyping", icon: LayoutTemplate },
      { label: "Design systems & component libraries", icon: Layers },
      { label: "Usability testing & iteration", icon: CheckCircle },
    ],
  },
  {
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile apps with beautiful interfaces and reliable performance. We deliver iOS and Android products that scale with your roadmap.",
    icon: Smartphone,
    features: [
      { label: "iOS & Android native development", icon: Smartphone },
      { label: "Cross-platform React Native / Flutter builds", icon: SquareStack },
      { label: "App UI/UX & engagement features", icon: Palette },
      { label: "App store optimization & maintenance", icon: Sparkles },
    ],
  },
  {
    title: "AI Agents & Chatbots",
    description:
      "Custom AI-powered agents that automate conversations, support, and sales. We craft NLP models that understand context and mesh with your workflows.",
    icon: Bot,
    badge: "AI Expertise",
    highlight: true,
    features: [
      { label: "Custom chatbot development & training", icon: Bot },
      { label: "Natural language processing & AI models", icon: Brain },
      { label: "Multi-platform deployment", icon: Globe2 },
      { label: "CRM integrations & workflow automation", icon: Workflow },
    ],
  },
  {
    title: "Orvia – AI Concierge Platform",
    description:
      "An always-on AI teammate that qualifies leads, books appointments, and processes payments. Orvia plugs into your CRM, calendars, and payment rails to become a 24/7 revenue driver.",
    icon: MessageSquare,
    badge: "Featured",
    highlight: true,
    cta: { label: "Explore Orvia →", href: "/orvia" },
    features: [
      { label: "Web chat, WhatsApp & multi-channel deployment", icon: Globe2 },
      { label: "Intelligent lead qualification & booking", icon: Sparkles },
      { label: "In-chat payments & CRM sync", icon: CreditCard },
      { label: "24/7 support automation", icon: Timer },
    ],
  },
];
