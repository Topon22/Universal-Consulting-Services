"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Search,
  Target,
  ClipboardCheck,
  Plane,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  ChevronDown,
  Clock,
  FileText,
  Users,
  Send,
} from "lucide-react";
import { PageShell, PageHero, CTASection } from "@/components/pages/page-shell";
import { Reveal, StaggerGroup, staggerItem, SectionHeading } from "@/components/animation";
import { cn } from "@/lib/utils";

const STEPS = [
  {
    icon: Search,
    step: "01",
    title: "Discover",
    short: "Free 30-minute consultation",
    duration: "Day 1 — Free",
    overview:
      "A free consultation to understand your goals, budget, English level, and dream U.S. pathway. This is a two-way conversation — we want to make sure UCSG is the right fit for you, and we'll honestly tell you if we're not.",
    whatHappens: [
      "A free 30-minute consultation with a multilingual counselor",
      "Profile deep-dive: budget, English level, timeline, career goals",
      "Honest assessment — including whether the U.S. is right for you",
      "Q&A with your family — no question is too small",
    ],
    youProvide: [
      "Your academic transcripts (informal is fine to start)",
      "Your TOEFL/IELTS/Duolingo scores, if you have them",
      "An honest picture of your budget and family situation",
      "Your career goals — even if they're still fuzzy",
    ],
    weDeliver:
      "A personalized U.S. pathway roadmap — a clear, written plan that outlines your options, timelines, and likely costs. No pressure, no obligation.",
  },
  {
    icon: Target,
    step: "02",
    title: "Match",
    short: "Curated college shortlist",
    duration: "Week 1",
    overview:
      "We shortlist affordable, well-ranked colleges with the right CPT/OPT and hybrid options for you. This isn't a generic list — every recommendation is filtered against your profile, your budget, and your career goals.",
    whatHappens: [
      "Shortlist of 5–7 colleges matched to your goals & budget",
      "Filter for CPT-eligibility, hybrid options, STEM OPT, scholarships",
      "Compare tuition, location, and post-graduation outcomes side by side",
      "Review the shortlist with your counselor and refine",
    ],
    youProvide: [
      "Your reaction to the initial recommendations",
      "Any constraints we should know (location, climate, family nearby)",
      "Updated test scores or documents if needed",
    ],
    weDeliver:
      "A curated college shortlist with rationale — every school on the list has a written explanation of why it's there, what it costs, and what it offers you.",
  },
  {
    icon: ClipboardCheck,
    step: "03",
    title: "Apply",
    short: "End-to-end application management",
    duration: "Weeks 2–6",
    overview:
      "Our counselors manage your case end-to-end in our proprietary CRM — applications, essays, documents, deadlines. You see everything in one place; nothing slips through the cracks.",
    whatHappens: [
      "Every document, deadline & essay tracked in our proprietary CRM",
      "Essay coaching, interview prep, and document review by admissions experts",
      "Direct submission to partner universities — fast-tracked review",
      "Real-time status updates as decisions come back",
    ],
    youProvide: [
      "Your official transcripts and test scores",
      "Your passport and financial documents",
      "Your voice — in essays, interviews, and communications",
    ],
    weDeliver:
      "Accepted admission offer(s) in hand. Often multiple — so you can choose the best fit and negotiate the best financial aid package.",
  },
  {
    icon: Plane,
    step: "04",
    title: "Arrive & Thrive",
    short: "Onshore aftercare & mentorship",
    duration: "Ongoing",
    overview:
      "Land in the USA with our onshore team ready — aftercare, support, and mentorship every step forward. This is what separates UCSG from agencies that disappear after admission.",
    whatHappens: [
      "Visa interview prep, I-20 guidance, and travel logistics handled",
      "Onshore Delaware team meets you at the airport — housing & setup help",
      "Banking, SIM card, and orientation support in your first week",
      "Ongoing mentorship: CPT/OPT transitions, academics, career coaching",
    ],
    youProvide: [
      "Your travel itinerary and arrival details",
      "An open line of communication with your counselor",
      "Feedback on how things are going — good and bad",
    ],
    weDeliver:
      "You, thriving on a U.S. campus. Not just admitted — but supported, mentored, and set up for academic and career success from day one through graduation.",
  },
];

const PROCESS_FAQS = [
  {
    q: "How long does the full process take?",
    a: "From your first consultation to enrolling on a U.S. campus typically takes 8–16 weeks, depending on application deadlines, visa interview availability, and your readiness. Urgent cases can move faster — pathway and Day-1 CPT programs sometimes admit students in as little as 4 weeks.",
  },
  {
    q: "What if I need to start next semester — is that possible?",
    a: "Often yes. Many of our partner programs have rolling admissions or multiple start dates per year (fall, spring, summer). Tell us your timeline in the first consultation and we'll only recommend programs that can meet it.",
  },
  {
    q: "Do I need to pay anything upfront?",
    a: "No. The initial consultation is free, and our core counseling and matching services are free for students — we're compensated by our institutional partners. Application fees, visa fees, and SEVIS fees charged by the U.S. government or the universities themselves are your responsibility, but we'll be transparent about every cost before you incur it.",
  },
  {
    q: "What if my English isn't good enough yet?",
    a: "That's exactly what our Pathway Programs service is for. We'll match you to a foundation year or conditional-admission program that builds your English and academic skills before you start your full degree. Many students enter with lower proficiency and graduate fluent.",
  },
  {
    q: "Can my family be involved in the process?",
    a: "We encourage it. Many of our students include parents, siblings, or spouses in consultations — especially in cultures where education decisions are family decisions. Our multilingual counselors are happy to switch languages mid-call if that helps.",
  },
  {
    q: "What happens if I'm denied a visa?",
    a: "We help you understand the reason, strengthen your case (stronger ties to home country, clearer academic plan, better financial evidence), and reapply. Many students are approved on their second interview. Our 98% first-time approval rate is no accident — we prepare you thoroughly.",
  },
];

function StepBlock({
  step,
  index,
}: {
  step: (typeof STEPS)[number];
  index: number;
}) {
  const reversed = index % 2 === 1;
  const Icon = step.icon;
  return (
    <div
      className="relative scroll-mt-32 py-10 lg:py-16"
      id={`process-step-${step.step}`}
    >
      <div className="grid gap-6 lg:grid-cols-12 lg:gap-12">
        {/* Left/right alternating */}
        <div className="lg:col-span-5">
          <div
            className={cn(
              "lg:sticky lg:top-32",
              reversed && "lg:order-2 lg:col-start-8"
            )}
          >
            <div className="flex items-center gap-4">
              <span className="font-serif text-6xl font-bold tabular-nums text-gradient-emerald sm:text-7xl">
                {step.step}
              </span>
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-border/60 bg-card shadow-premium">
                <Icon className="h-7 w-7 text-primary" />
              </div>
            </div>
            <h3 className="mt-5 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {step.title}
            </h3>
            <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-accent-foreground/80">
              {step.short}
            </p>
            <p className="mt-3 max-w-md text-base leading-relaxed text-muted-foreground">
              {step.overview}
            </p>
            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-accent-foreground">
              <Clock className="h-3.5 w-3.5" />
              {step.duration}
            </div>
          </div>
        </div>

        {/* Detailed content card */}
        <div className={cn("lg:col-span-7", reversed && "lg:order-1 lg:row-start-1")}>
          <div className="rounded-2xl border border-border/60 bg-card p-6 shadow-premium sm:p-8">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              What happens in this step
            </div>
            <ul className="mt-5 space-y-3">
              {step.whatHappens.map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span className="text-sm leading-relaxed text-foreground/90 sm:text-base">
                    {p}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  <Users className="h-3.5 w-3.5" />
                  What you provide
                </div>
                <ul className="mt-3 space-y-1.5">
                  {step.youProvide.map((p) => (
                    <li
                      key={p}
                      className="flex items-start gap-2 text-xs leading-relaxed text-muted-foreground"
                    >
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  <FileText className="h-3.5 w-3.5" />
                  What we deliver
                </div>
                <p className="mt-3 text-xs leading-relaxed text-foreground/90">
                  {step.weDeliver}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ProcessPage() {
  const [openFaq, setOpenFaq] = React.useState<number | null>(0);

  return (
    <PageShell>
      <PageHero
        eyebrow="How We Work"
        title={
          <>
            Your journey from{" "}
            <span className="text-gradient-emerald">application to arrival</span>
          </>
        }
        subtitle="A proven four-step process that turns the dream of studying in the U.S. into a clear, supported, and transparent path forward — Discover → Match → Apply → Arrive & Thrive."
        crumbs={[{ label: "Process" }]}
      >
        <Link
          href="/?view=contact"
          className="group inline-flex h-12 items-center gap-2 rounded-full bg-primary px-6 text-sm font-bold text-primary-foreground shadow-premium transition-all hover:shadow-lg"
        >
          <Sparkles className="h-4 w-4" />
          Start with a free consultation
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </PageHero>

      {/* Step rail (sticky on desktop) */}
      <section className="relative py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="hidden lg:block">
            <div className="sticky top-20 z-20 mb-6">
              <div className="flex flex-wrap items-center justify-center gap-2 rounded-full border border-border/60 bg-background/80 p-1.5 shadow-premium backdrop-blur">
                {STEPS.map((s) => (
                  <a
                    key={s.step}
                    href={`#process-step-${s.step}`}
                    className="flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-muted-foreground transition-all hover:bg-primary/10 hover:text-primary"
                  >
                    <span className="font-serif font-bold">{s.step}</span>
                    {s.title}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {STEPS.map((step, i) => (
            <StepBlock key={step.step} step={step} index={i} />
          ))}
        </div>
      </section>

      {/* Timeline visualization */}
      <section className="relative bg-secondary/30 py-20 sm:py-28">
        <div className="absolute inset-0 -z-10 grid-pattern opacity-40" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="What To Expect"
            title={
              <>
                A visual timeline of{" "}
                <span className="text-gradient-emerald">your first 16 weeks</span>
              </>
            }
            description="From the first call to your first day on campus — here's what the journey looks like, week by week."
          />

          <Reveal delay={0.1}>
            <div className="mt-14 overflow-hidden rounded-2xl border border-border/60 bg-card p-6 shadow-premium sm:p-8">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  { week: "Week 1", title: "Discover & Match", icon: Search, items: ["Free consultation", "Profile deep-dive", "College shortlist"] },
                  { week: "Weeks 2–6", title: "Apply", icon: ClipboardCheck, items: ["Applications packaged", "Essays coached", "Decisions received"] },
                  { week: "Weeks 7–10", title: "Visa & Prep", icon: FileText, items: ["I-20 issued", "Visa interview prep", "Travel booked"] },
                  { week: "Week 11+", title: "Arrive & Thrive", icon: Plane, items: ["Airport pickup", "Housing & banking", "First day on campus"] },
                ].map((phase, i) => (
                  <div
                    key={phase.week}
                    className="relative rounded-xl border border-border/60 bg-background/50 p-5"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <phase.icon className="h-5 w-5" />
                      </div>
                      <span className="font-serif text-2xl font-bold text-foreground/10">
                        0{i + 1}
                      </span>
                    </div>
                    <div className="mt-3 text-xs font-semibold uppercase tracking-wide text-accent-foreground/80">
                      {phase.week}
                    </div>
                    <div className="font-serif text-lg font-bold text-foreground">
                      {phase.title}
                    </div>
                    <ul className="mt-3 space-y-1.5">
                      {phase.items.map((it) => (
                        <li
                          key={it}
                          className="flex items-start gap-2 text-xs text-muted-foreground"
                        >
                          <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                          {it}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Process FAQ */}
      <section className="relative py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Process FAQ"
            title={
              <>
                Questions about{" "}
                <span className="text-gradient-emerald">how we work</span>
              </>
            }
            description="The most common questions families ask before starting their UCSG journey."
          />

          <div className="mt-12 space-y-3">
            {PROCESS_FAQS.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div
                  key={faq.q}
                  className="overflow-hidden rounded-xl border border-border/60 bg-card"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-serif text-base font-bold text-foreground sm:text-lg">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={cn(
                        "h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-300",
                        isOpen && "rotate-180 text-primary"
                      )}
                    />
                  </button>
                  <motion.div
                    initial={false}
                    animate={{
                      height: isOpen ? "auto" : 0,
                      opacity: isOpen ? 1 : 0,
                    }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className={cn("overflow-hidden", !isOpen && "h-0")}
                  >
                    <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">
                      {faq.a}
                    </p>
                  </motion.div>
                </div>
              );
            })}
          </div>

          <Reveal delay={0.1}>
            <div className="mt-10 flex flex-col items-center justify-between gap-4 rounded-2xl border border-border/40 bg-card p-6 shadow-sm sm:flex-row sm:p-7">
              <div className="text-center sm:text-left">
                <h3 className="font-serif text-xl font-bold text-foreground sm:text-2xl">
                  Still have questions?
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Book a free call — we answer every question, no pressure.
                </p>
              </div>
              <Link
                href="/?view=contact"
                className="group inline-flex h-12 items-center gap-2 rounded-full bg-primary px-6 text-sm font-bold text-primary-foreground shadow-premium transition-shadow hover:shadow-lg"
              >
                <Send className="h-4 w-4" />
                Book a free call
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection
        title="Ready to take the first step?"
        subtitle="The Discover consultation is free, multilingual, and obligation-free. In 30 minutes, you'll know whether UCSG is the right partner for your U.S. education journey."
        primaryLabel="Book your free Discover call"
      />
    </PageShell>
  );
}
