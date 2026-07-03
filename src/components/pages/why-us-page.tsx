"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  HeartHandshake,
  Network,
  ClipboardCheck,
  Building2,
  Languages,
  Trophy,
  ShieldCheck,
  Wallet,
  Briefcase,
  Globe2,
  Check,
  X,
  Star,
  Quote,
  Sparkles,
  ArrowRight,
  BadgeCheck,
} from "lucide-react";
import { PageShell, PageHero, CTASection } from "@/components/pages/page-shell";
import { Reveal, StaggerGroup, staggerItem, SectionHeading } from "@/components/animation";
import { TESTIMONIALS, STATS } from "@/lib/data";

const DIFFERENTIATORS = [
  {
    icon: ShieldCheck,
    title: "Veteran-Led Integrity",
    desc: "Founded by a U.S. Army veteran, UCSG operates with the same discipline, accountability, and mission-first ethos you'd expect from someone who served. We don't cut corners, and we don't lie to make a sale.",
    points: [
      "Founded by a U.S. Army veteran",
      "Mission-first, mission-always",
      "Honesty even when it costs us a sale",
    ],
  },
  {
    icon: Wallet,
    title: "Low-Tuition Partnerships",
    desc: "We've spent years cultivating direct relationships with U.S. colleges where annual tuition starts below $10,000 — without sacrificing accreditation, CPT eligibility, or post-graduation outcomes.",
    points: [
      "Partner tuition starting under $10K/year",
      "Exclusive partner discounts up to 40%",
      "Transparent, no-surprise pricing",
    ],
  },
  {
    icon: Briefcase,
    title: "CPT/OPT Expertise",
    desc: "Day-1 CPT, STEM-OPT extensions, employer pathways — we know the work-authorization landscape better than anyone. Our counselors have helped hundreds of students turn a degree into a U.S. career.",
    points: [
      "Day-1 CPT program specialists",
      "STEM OPT extension guidance",
      "OPT-to-H1B transition planning",
    ],
  },
  {
    icon: Languages,
    title: "Multilingual Counselors",
    desc: "From Dhaka to Lagos to Shanghai, our counselors speak your language — literally. We understand not just your paperwork, but your family, your culture, and your fears about studying abroad.",
    points: [
      "Counselors in 8+ languages",
      "Cultural, not just linguistic, fluency",
      "Onshore & offshore availability",
    ],
  },
  {
    icon: Network,
    title: "End-to-End Support",
    desc: "From your first free consultation to your first day on campus and beyond — UCSG is there. Applications, essays, visas, housing, banking, SIM cards, mentorship. We don't disappear after admission.",
    points: [
      "Proprietary CRM tracks every step",
      "Onshore Delaware aftercare team",
      "Mentorship through graduation",
    ],
  },
  {
    icon: Trophy,
    title: "Proven Track Record",
    desc: "5,000+ students placed. 40+ countries served. 98% satisfaction rate. We don't just talk about results — we have the receipts, the verified reviews, and the alumni network to prove it.",
    points: [
      "5,000+ students placed",
      "98% satisfaction rate",
      "Verified 5-star student reviews",
    ],
  },
];

const COMPARISON_ROWS = [
  { feature: "Transparent pricing", ucsg: true, typical: false },
  { feature: "CPT / OPT programs", ucsg: true, typical: false },
  { feature: "Veteran-led", ucsg: true, typical: false },
  { feature: "Multilingual counselors", ucsg: true, typical: false },
  { feature: "Post-arrival onshore support", ucsg: true, typical: false },
  { feature: "Scholarship access", ucsg: true, typical: true },
  { feature: "Proprietary case CRM", ucsg: true, typical: false },
  { feature: "Free for students", ucsg: true, typical: false },
  { feature: "Day-1 CPT expertise", ucsg: true, typical: false },
  { feature: "Honest \"U.S. may not be right for you\"", ucsg: true, typical: false },
];

const GUARANTEES = [
  {
    icon: HeartHandshake,
    title: "Students-First Guarantee",
    desc: "If we ever recommend a school because it pays us more — and not because it's best for you — we'll refund every dollar and refer you to a competitor. That's our promise.",
  },
  {
    icon: ClipboardCheck,
    title: "Transparency Guarantee",
    desc: "Every fee, every deadline, every document — visible in our CRM from day one. No hidden charges, no surprise invoices, no opaque \"application fees.\"",
  },
  {
    icon: Network,
    title: "End-to-End Guarantee",
    desc: "We don't disappear after admission. From your first call to your first job interview, UCSG is with you — onshore, offshore, online, and on-call.",
  },
  {
    icon: Building2,
    title: "Onshore Guarantee",
    desc: "Land in the U.S. and someone from our Delaware office will be there to help — housing, banking, SIM cards, your first grocery run. We mean it.",
  },
];

const FLAG_BY_ORIGIN: Record<string, string> = {
  Dhaka: "🇧🇩",
  Chittagong: "🇧🇩",
  Kathmandu: "🇳🇵",
  Lagos: "🇳🇬",
  Shanghai: "🇨🇳",
  Dubai: "🇦🇪",
};
function flagFor(location: string): string {
  const city = location.split("→")[0]?.trim().split(",")[0]?.trim() ?? "";
  return FLAG_BY_ORIGIN[city] ?? "🌍";
}

export function WhyUsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="How Are We Different"
        title={
          <>
            Built different.{" "}
            <span className="text-gradient-emerald">Built for you.</span>
          </>
        }
        subtitle="We're not just another agency. UCSG was engineered from the ground up to put students first — with proprietary tooling, onshore support, and counselors who genuinely care."
        crumbs={[{ label: "Why Us" }]}
        badge={
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Star className="h-4 w-4 fill-accent text-accent" />
              4.9/5 student reviews
            </span>
            <span className="flex items-center gap-1.5">
              <BadgeCheck className="h-4 w-4 text-primary" />
              98% satisfaction rate
            </span>
          </div>
        }
      >
        <Link
          href="/?view=contact"
          className="group inline-flex h-12 items-center gap-2 rounded-full bg-primary px-6 text-sm font-bold text-primary-foreground shadow-premium transition-all hover:shadow-lg"
        >
          <Sparkles className="h-4 w-4" />
          See for yourself — book a call
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </PageHero>

      {/* 6 differentiators */}
      <section className="relative py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Our Differentiators"
            title={
              <>
                Six reasons families{" "}
                <span className="text-gradient-emerald">choose UCSG</span>
              </>
            }
            description="Anyone can call themselves an education consultant. These are the things we actually do differently — and the receipts to prove it."
          />

          <StaggerGroup className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
            {DIFFERENTIATORS.map((d, i) => (
              <motion.article
                key={d.title}
                variants={staggerItem}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card p-7 shadow-premium"
              >
                <span className="pointer-events-none absolute right-5 top-2 font-serif text-7xl font-bold text-foreground/5">
                  0{i + 1}
                </span>
                <div className="relative grid gap-4 sm:grid-cols-[auto_1fr] sm:gap-5">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/15 to-accent/15 text-primary transition-all duration-500 group-hover:from-primary group-hover:to-primary/70 group-hover:text-primary-foreground">
                    <d.icon className="h-7 w-7" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-foreground">
                      {d.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {d.desc}
                    </p>
                    <ul className="mt-4 space-y-1.5">
                      {d.points.map((p) => (
                        <li
                          key={p}
                          className="flex items-start gap-2 text-sm text-foreground/85"
                        >
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.article>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Comparison table */}
      <section className="relative bg-secondary/30 py-20 sm:py-28">
        <div className="absolute inset-0 -z-10 grid-pattern opacity-40" />
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="UCSG vs Typical Agencies"
            title={
              <>
                The differences,{" "}
                <span className="text-gradient-emerald">side by side</span>
              </>
            }
            description="We're not afraid of the comparison. Here's exactly what sets UCSG apart from a typical international education agency."
          />

          <Reveal delay={0.1}>
            <div className="mt-12 overflow-hidden rounded-2xl border border-border/60 bg-card shadow-premium">
              <div className="grid grid-cols-[1fr_auto_auto] gap-0">
                {/* Header row */}
                <div className="border-b border-border/60 p-5 sm:p-6">
                  <div className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Feature
                  </div>
                </div>
                <div className="border-b border-l border-border/60 bg-primary/5 p-5 text-center sm:p-6">
                  <div className="font-serif text-base font-bold text-foreground sm:text-lg">
                    UCSG
                  </div>
                </div>
                <div className="border-b border-l border-border/60 p-5 text-center sm:p-6">
                  <div className="font-serif text-base font-bold text-muted-foreground sm:text-lg">
                    Typical Agency
                  </div>
                </div>

                {/* Body rows */}
                {COMPARISON_ROWS.map((row, idx) => (
                  <React.Fragment key={row.feature}>
                    <div
                      className={`p-5 sm:p-6 ${
                        idx % 2 === 1 ? "bg-secondary/30" : ""
                      }`}
                    >
                      <div className="text-sm font-medium text-foreground sm:text-base">
                        {row.feature}
                      </div>
                    </div>
                    <div
                      className={`flex items-center justify-center border-l border-border/60 p-5 sm:p-6 ${
                        idx % 2 === 1 ? "bg-primary/[0.04]" : "bg-primary/5"
                      }`}
                    >
                      {row.ucsg ? (
                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/15 text-primary">
                          <Check className="h-5 w-5" />
                        </span>
                      ) : (
                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-muted-foreground">
                          <X className="h-5 w-5" />
                        </span>
                      )}
                    </div>
                    <div
                      className={`flex items-center justify-center border-l border-border/60 p-5 sm:p-6 ${
                        idx % 2 === 1 ? "bg-secondary/30" : ""
                      }`}
                    >
                      {row.typical ? (
                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                          <Check className="h-5 w-5" />
                        </span>
                      ) : (
                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-muted-foreground">
                          <X className="h-5 w-5" />
                        </span>
                      )}
                    </div>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Guarantees */}
      <section className="relative py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Our Guarantees"
            title={
              <>
                Promises we{" "}
                <span className="text-gradient-emerald">put in writing</span>
              </>
            }
            description="These aren't marketing slogans. They're commitments we make to every student and family we work with — and we hold ourselves to them."
          />

          <StaggerGroup className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {GUARANTEES.map((g) => (
              <motion.div
                key={g.title}
                variants={staggerItem}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="group relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card to-secondary/40 p-7 shadow-premium"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/15 text-accent-foreground">
                  <g.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-serif text-xl font-bold text-foreground">
                  {g.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                  {g.desc}
                </p>
              </motion.div>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Testimonials preview */}
      <section className="relative py-20 sm:py-28">
        <div className="absolute inset-0 -z-10 mesh-bg opacity-40" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Student Reviews"
            title={
              <>
                Real journeys.{" "}
                <span className="text-gradient-emerald">Real success.</span>
              </>
            }
            description="Thousands of students have trusted UCSG with their U.S. education. Here's what a few of them have to say — all verified 5-star reviews."
          />

          <StaggerGroup className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {TESTIMONIALS.slice(0, 6).map((t) => (
              <motion.article
                key={t.name}
                variants={staggerItem}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="group relative flex flex-col rounded-2xl border border-border/60 bg-card p-6 shadow-premium"
              >
                <Quote className="absolute right-5 top-5 h-10 w-10 text-accent/15 transition-colors group-hover:text-accent/30" />
                <div className="flex gap-1" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground/90">
                  “{t.quote}”
                </blockquote>
                <div className="mt-5 flex items-center gap-3 border-t border-border/60 pt-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary/70 font-serif text-sm font-bold text-primary-foreground">
                    {t.initials}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="truncate font-bold text-foreground">
                      {t.name}
                    </div>
                    <div className="truncate text-xs text-muted-foreground">
                      {t.role}
                    </div>
                  </div>
                  <span
                    className="text-xl"
                    aria-label={`From ${t.location}`}
                    title={t.location}
                  >
                    {flagFor(t.location)}
                  </span>
                </div>
                <div className="mt-3 flex items-center gap-1.5 text-xs font-medium text-primary">
                  <Globe2 className="h-3 w-3" />
                  {t.location}
                </div>
              </motion.article>
            ))}
          </StaggerGroup>

          <Reveal delay={0.1}>
            <div className="mt-10 text-center">
              <Link
                href="/?view=students"
                className="group inline-flex h-12 items-center gap-2 rounded-full border border-border/70 bg-background/60 px-6 text-sm font-semibold text-foreground backdrop-blur transition-colors hover:border-primary/40 hover:text-primary"
              >
                Read more student stories
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Stats */}
      <section className="relative overflow-hidden border-y border-border/40 py-16 sm:py-20">
        <div className="absolute inset-0 -z-10 bg-background" />
        <div className="absolute inset-0 -z-10 grid-pattern opacity-30" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/[0.04] via-accent/[0.04] to-primary/[0.04] animate-aurora" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="mb-10 text-center"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
              By the Numbers
            </span>
            <h3 className="mt-2 font-serif text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              A track record built on trust
            </h3>
          </motion.div>
          <div className="grid grid-cols-2 gap-y-10 lg:grid-cols-4">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative px-4 text-center sm:px-6"
              >
                {i > 0 && (
                  <span
                    aria-hidden
                    className="absolute left-0 top-1/2 hidden h-16 w-px -translate-y-1/2 bg-border/60 lg:block"
                  />
                )}
                <stat.icon className="mx-auto h-7 w-7 text-accent" />
                <div className="mt-4 font-serif text-5xl font-bold tracking-tight text-foreground sm:text-6xl">
                  {stat.value.toLocaleString("en-US")}
                  {stat.suffix}
                </div>
                <div className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Experience the UCSG difference firsthand"
        subtitle="Take a free call with our multilingual counselors today. We'll prove — in 15 minutes — why families in 40+ countries trust us with their U.S. education journey."
      />
    </PageShell>
  );
}
