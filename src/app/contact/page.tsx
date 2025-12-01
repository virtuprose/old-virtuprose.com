import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { servicesData } from "@/data/services";

const contactInfo = [
  {
    label: "Email",
    value: "info@virtuprose.com",
    href: "mailto:info@virtuprose.com",
  },
  {
    label: "US",
    value: "+1 415 230 2611",
    href: "tel:+14152302611",
    flag: "/assets/united-states.png",
  },
  {
    label: "India",
    value: "+91 76218 84841",
    href: "tel:+917621884841",
    flag: "/assets/India.png",
  },
  {
    label: "Kuwait",
    value: "+965 6998 4942",
    href: "tel:+96569984942",
    flag: "/assets/kuwait.png",
  },
];

type ContactPageProps = {
  searchParams?: {
    status?: string;
  };
};

export default function ContactPage({ searchParams }: ContactPageProps) {
  const status = searchParams?.status;
  const showSuccess = status === "success";
  const showError = status === "error";

  return (
    <div className="relative min-h-screen bg-[var(--bg)] text-[var(--text-primary)]">
      <div className="global-noise" />
      <div className="relative z-10 container space-y-12 py-16">
        <header className="rounded-[32px] border border-[var(--border)]/70 bg-[var(--bg-secondary)]/70 p-10 shadow-[0_40px_120px_rgba(15,23,42,0.08)] backdrop-blur-xl">
          <p className="text-xs uppercase tracking-[0.55em] text-[var(--text-secondary)]">Contact VirtuProse Solutions</p>
          <h1 className="mt-3 text-3xl font-semibold md:text-4xl">Let’s build the most intelligent growth engine in your space</h1>
          <p className="mt-4 max-w-3xl text-[var(--text-secondary)]">
            Virtuprose Solutions Private Limited plans, designs, and launches AI-native experiences for ambitious teams.
            Reach out with your objectives and we’ll assemble the strategy, talent, and technology to exceed them.
          </p>
          <div className="mt-6 flex flex-wrap gap-3" />
        </header>

        <section className="grid gap-8 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,0.45fr)]">
          <Card className="border-[var(--border)]/70 bg-[var(--bg-secondary)]/80 shadow-[0_40px_120px_rgba(15,23,42,0.08)]">
            <CardContent className="p-8">
              <form id="contact-form" action="/api/contact" method="POST" className="space-y-5">
                <input type="hidden" name="source" value="Contact page" />
                {showError ? (
                  <div className="rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-600" role="status">
                    Something went wrong while sending your message. Please email <a href="mailto:info@virtuprose.com" className="underline">info@virtuprose.com</a> directly.
                  </div>
                ) : null}
                <div className="grid gap-4 md:grid-cols-2">
                  <label className="flex flex-col gap-2 text-sm font-medium text-[var(--text-secondary)]">
                    Name*
                    <input
                      className="rounded-2xl border border-[var(--border)] bg-[var(--bg)]/80 px-4 py-3 text-[var(--text-primary)] focus:border-[var(--accent)] focus:outline-none"
                      type="text"
                      name="name"
                      required
                      placeholder="Your name"
                    />
                  </label>
                  <label className="flex flex-col gap-2 text-sm font-medium text-[var(--text-secondary)]">
                    Email*
                    <input
                      className="rounded-2xl border border-[var(--border)] bg-[var(--bg)]/80 px-4 py-3 text-[var(--text-primary)] focus:border-[var(--accent)] focus:outline-none"
                      type="email"
                      name="email"
                      required
                      placeholder="you@company.com"
                    />
                  </label>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <label className="flex flex-col gap-2 text-sm font-medium text-[var(--text-secondary)]">
                    Website if existing (optional)
                    <input
                      className="rounded-2xl border border-[var(--border)] bg-[var(--bg)]/80 px-4 py-3 text-[var(--text-primary)] focus:border-[var(--accent)] focus:outline-none"
                      type="url"
                      name="website"
                      placeholder="https://yourcompany.com"
                    />
                  </label>
                  <label className="flex flex-col gap-2 text-sm font-medium text-[var(--text-secondary)]">
                    Mobile (optional)
                    <input
                      className="rounded-2xl border border-[var(--border)] bg-[var(--bg)]/80 px-4 py-3 text-[var(--text-primary)] focus:border-[var(--accent)] focus:outline-none"
                      type="tel"
                      name="mobile"
                      placeholder="+1 415 230 2611"
                    />
                  </label>
                </div>
                <label className="flex flex-col gap-2 text-sm font-medium text-[var(--text-secondary)]">
                  Service Type*
                  <select
                    name="project"
                    required
                    defaultValue=""
                    className="rounded-2xl border border-[var(--border)] bg-[var(--bg)]/80 px-4 py-3 text-[var(--text-primary)] focus:border-[var(--accent)] focus:outline-none"
                  >
                    <option value="">Select a service</option>
                    {servicesData.map((service) => (
                      <option key={service.title} value={service.title}>
                        {service.title}
                      </option>
                    ))}
                  </select>
                </label>
                <div className="grid gap-4 md:grid-cols-2">
                  <label className="flex flex-col gap-2 text-sm font-medium text-[var(--text-secondary)]">
                    Budget (optional)
                    <select
                      name="budget"
                      defaultValue=""
                      className="rounded-2xl border border-[var(--border)] bg-[var(--bg)]/80 px-4 py-3 text-[var(--text-primary)] focus:border-[var(--accent)] focus:outline-none"
                    >
                      <option value="">Select budget (optional)</option>
                      <option value="Under $25k">Under $25k</option>
                      <option value="$25k - $50k">$25k - $50k</option>
                      <option value="$50k - $100k">$50k - $100k</option>
                      <option value="Above $100k">Above $100k</option>
                    </select>
                  </label>
                  <label className="flex flex-col gap-2 text-sm font-medium text-[var(--text-secondary)]">
                    Country
                    <input
                      className="rounded-2xl border border-[var(--border)] bg-[var(--bg)]/80 px-4 py-3 text-[var(--text-primary)] focus:border-[var(--accent)] focus:outline-none"
                      type="text"
                      name="country"
                      placeholder="United States"
                    />
                  </label>
                </div>
                <label className="flex flex-col gap-2 text-sm font-medium text-[var(--text-secondary)]">
                  Tell us more (optional)
                  <textarea
                    name="message"
                    rows={5}
                    className="rounded-2xl border border-[var(--border)] bg-[var(--bg)]/80 px-4 py-3 text-[var(--text-primary)] focus:border-[var(--accent)] focus:outline-none"
                    placeholder="Share timelines, KPIs, integrations, or handoff notes..."
                  />
                </label>
                <Button type="submit" className="w-full rounded-full" size="lg">
                  Start Success Journey
                </Button>
                {showSuccess ? (
                  <p className="text-center text-sm font-medium text-emerald-600">Thank you, our team will get back to you.</p>
                ) : null}
              </form>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="border-[var(--border)]/70 bg-[var(--bg-secondary)]/80">
              <CardContent className="space-y-4 p-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[var(--border)]/70 bg-[var(--bg)]">
                    <Image
                      src="/newbranding/light icon.svg"
                      alt="VirtuProse logo"
                      width={42}
                      height={42}
                      className="dark:hidden"
                    />
                    <Image
                      src="/newbranding/dark icon.svg"
                      alt="VirtuProse logo"
                      width={42}
                      height={42}
                      className="hidden dark:block"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Virtuprose Solutions Private Limited</p>
                    <p className="text-xs text-[var(--text-secondary)]">Remote-first studio · Global delivery</p>
                  </div>
                </div>
                <p className="text-sm text-[var(--text-secondary)]">
                  Legal business name & billing label: Virtuprose Solutions Private Limited. Serving clients globally from a remote-first studio.
                </p>
                <div className="grid gap-2 text-sm text-[var(--text-secondary)]">
                  {contactInfo.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 rounded-2xl border border-[var(--border)]/60 px-3 py-2 transition-colors hover:text-[var(--accent)]"
                    >
                      {item.flag ? (
                        <Image src={item.flag} alt={`${item.label} flag`} width={20} height={14} loading="lazy" />
                      ) : null}
                      <span>
                        {item.label}: {item.value}
                      </span>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}
