import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { servicesData } from "@/data/services";

export default function ServicesPage() {
  return (
    <div className="relative min-h-screen bg-[var(--bg)] text-[var(--text-primary)]">
      <div className="global-noise" />
      <div className="relative z-10 container space-y-12 py-16">
        <section className="rounded-[32px] border border-[var(--border)]/70 bg-[var(--bg-secondary)]/70 p-10 shadow-[0_40px_120px_rgba(15,23,42,0.08)]">
          <p className="text-xs uppercase tracking-[0.55em] text-[var(--text-secondary)]">Services</p>
          <h1 className="mt-4 text-3xl font-semibold md:text-4xl">Our capabilities for end-to-end digital momentum</h1>
          <p className="mt-4 max-w-3xl text-[var(--text-secondary)]">
            End-to-end digital solutions to accelerate your business growth. From research and design to engineering,
            automation, and AI agents, our team operates as your embedded squad.
          </p>
        </section>

        <section className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {servicesData.map((service) => (
              <Card
                key={service.title}
                className={`border-[var(--border)]/70 bg-[var(--bg-secondary)]/85 transition duration-300 hover:-translate-y-1 hover:border-[var(--accent)]/60 ${
                  service.highlight ? "ring-2 ring-[var(--accent)]/50" : ""
                }`}
                data-interactive
              >
                <CardContent className="flex h-full flex-col space-y-5 p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--accent)]/15 text-[var(--accent)]">
                        <service.icon className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="text-xs uppercase tracking-[0.4em] text-[var(--text-secondary)]">Service</p>
                        <h3 className="text-xl font-semibold text-[var(--text-primary)]">{service.title}</h3>
                      </div>
                    </div>
                    {service.badge ? (
                      <span className="rounded-full border border-[var(--accent)]/40 bg-[var(--accent)]/10 px-3 py-1 text-xs font-semibold text-[var(--accent)]">
                        {service.badge}
                      </span>
                    ) : null}
                  </div>
                  <p className="text-sm text-[var(--text-secondary)]">{service.description}</p>
                  <ul className="flex-1 space-y-3 text-sm text-[var(--text-secondary)]">
                    {service.features.map((feature) => (
                      <li key={`${service.title}-${feature.label}`} className="flex items-start gap-3">
                        <span className="mt-0.5 flex h-7 w-7 items-center justify-center rounded-full bg-[var(--accent)]/12 text-[var(--accent)]">
                          <feature.icon className="h-4 w-4" />
                        </span>
                        <span>{feature.label}</span>
                      </li>
                    ))}
                  </ul>
                  {service.cta ? (
                    <Button asChild className="mt-auto rounded-full">
                      <Link href={service.cta.href}>{service.cta.label}</Link>
                    </Button>
                  ) : null}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="rounded-[32px] border border-[var(--border)]/70 bg-[var(--bg-secondary)]/70 p-10 text-center shadow-[0_40px_120px_rgba(15,23,42,0.08)]">
          <p className="text-xs uppercase tracking-[0.55em] text-[var(--text-secondary)]">Need a guided run?</p>
          <h2 className="mt-3 text-3xl font-semibold text-[var(--text-primary)]">Book a tailored service walkthrough</h2>
          <p className="mt-4 text-[var(--text-secondary)]">
            Walk through scope, pricing, and implementation timelines for every service line in one interactive call.
          </p>
          <Button asChild size="lg" className="mt-6 rounded-full px-8">
            <Link href="/contact">Talk to the team</Link>
          </Button>
        </section>
      </div>
    </div>
  );
}
