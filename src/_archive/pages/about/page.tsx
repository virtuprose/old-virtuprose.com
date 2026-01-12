import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const timeline = [
  { year: "2014", detail: "Reinvented the first enterprise web flagship" },
  { year: "2018", detail: "Scaled digital marketing programs across continents" },
  { year: "2021", detail: "Launched smart custom web applications" },
  { year: "2025", detail: "Global rollout of Orvia AI assistants" },
];

const visionStatement =
  "Vision 2030: build the world’s most trusted studio for intelligent, adaptive digital systems that think, guide, and transact on behalf of ambitious brands.";

export default function AboutPage() {
  return (
    <div className="relative min-h-screen bg-[var(--bg)] text-[var(--text-primary)]">
      <div className="global-noise" />
      <div className="relative z-10 container space-y-12 py-16">
        <section className="rounded-[32px] border border-[var(--border)]/70 bg-[var(--bg-secondary)]/70 p-10 shadow-[0_40px_120px_rgba(15,23,42,0.08)]">
          <p className="text-xs uppercase tracking-[0.55em] text-[var(--text-secondary)]">About</p>
          <h1 className="mt-4 text-3xl font-semibold md:text-4xl">VirtuProse Solutions is helmed by Zaid Anarwala</h1>
          <p className="mt-4 max-w-3xl text-[var(--text-secondary)]">
            We are Virtuprose Solutions Private Limited, an AI-native digital studio blending marketing science, product strategy, and automation.
          </p>
        </section>

        <section className="space-y-8 rounded-[32px] border border-[var(--border)]/70 bg-[var(--bg-secondary)]/75 p-8">
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.55em] text-[var(--text-secondary)]">The VPS story</p>
            <h2 className="text-3xl font-semibold text-[var(--text-primary)]">
              Human creativity meets machine precision
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="border border-[var(--border)]/70 bg-transparent" data-interactive>
              <CardContent className="space-y-4 p-6">
                <h3 className="text-lg font-semibold">Mission</h3>
                <p className="text-sm text-[var(--text-secondary)]">Merging intelligence and design for unstoppable growth.</p>
                <div className="flex flex-wrap gap-2 text-xs text-[var(--text-secondary)]">
                  {["Neural research", "Design language", "Automation ops", "Product velocity"].map((item) => (
                    <span key={item} className="rounded-full border border-[var(--border)]/70 px-3 py-1">
                      {item}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card className="border border-[var(--border)]/70 bg-transparent" data-interactive>
              <CardContent className="space-y-4 p-6">
                <h3 className="text-lg font-semibold">Vision</h3>
                <p className="text-sm text-[var(--text-secondary)]">{visionStatement}</p>
              </CardContent>
            </Card>
            <Card className="border border-[var(--border)]/70 bg-transparent" data-interactive>
              <CardContent className="space-y-4 p-6">
                <h3 className="text-lg font-semibold">Milestones</h3>
                <ul className="space-y-3 text-sm text-[var(--text-secondary)]">
                  {timeline.map((event) => (
                    <li key={event.year} className="flex items-start gap-3">
                      <span className="text-xs font-semibold uppercase tracking-[0.4em] text-[var(--text-secondary)]">
                        {event.year}
                      </span>
                      <p>{event.detail}</p>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,0.5fr)]">
          <Card className="border-[var(--border)]/70 bg-[var(--bg-secondary)]/80" data-interactive>
            <CardContent className="flex flex-col gap-6 p-6 md:flex-row">
              <div className="relative h-40 w-40 flex-shrink-0 overflow-hidden rounded-3xl border border-[var(--border)]/80">
                <Image
                  src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=400&q=80"
                  alt="Founder portrait"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl font-semibold">Zaid Anarwala</h3>
                <p className="text-sm uppercase tracking-[0.4em] text-[var(--text-secondary)]">Founder & Intelligent Experience Architect</p>
                <p className="text-sm text-[var(--text-secondary)]">
                  Zaid leads VirtuProse as an embedded partner for ambitious brands—mapping intelligence, orchestrating design systems, and assembling teams to launch revenue engines that never sleep.
                </p>
              </div>
            </CardContent>
          </Card>
          <Card className="border-[var(--border)]/70 bg-[var(--bg-secondary)]/80" data-interactive>
            <CardContent className="space-y-3 p-6">
              <p className="text-xs uppercase tracking-[0.4em] text-[var(--text-secondary)]">Vision</p>
              <h3 className="text-xl font-semibold">Build trusted intelligent systems</h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Build the most trusted studio for intelligent digital systems—products and agents that think, guide, and transact on behalf of ambitious brands.
              </p>
            </CardContent>
          </Card>
        </section>

        <section className="grid gap-6 md:grid-cols-2">
          <Card className="border-[var(--border)]/70 bg-[var(--bg-secondary)]/80" data-interactive>
            <CardContent className="space-y-3 p-6">
              <h3 className="text-lg font-semibold text-[var(--text-primary)]">Timeline</h3>
              <ul className="space-y-3 text-sm text-[var(--text-secondary)]">
                {timeline.map((event) => (
                  <li key={event.year} className="flex items-start gap-3">
                    <span className="text-xs font-semibold uppercase tracking-[0.4em] text-[var(--text-secondary)]">
                      {event.year}
                    </span>
                    <p>{event.detail}</p>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <Card className="border-[var(--border)]/70 bg-[var(--bg-secondary)]/80" data-interactive>
            <CardContent className="space-y-3 p-6">
              <h3 className="text-lg font-semibold text-[var(--text-primary)]">Operating mindset</h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Virtuprose operates at the intersection of neural research, design language, automation ops, and product velocity—running sprints that blend creative intuition with machine precision.
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
