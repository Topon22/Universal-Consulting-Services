"use client";

import * as React from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Award,
  ShieldCheck,
  HeartHandshake,
  BadgeCheck,
  ArrowRight,
  Sparkles,
  Target,
  Eye,
  Scale,
  Globe2,
  Languages,
  Trophy,
  Building2,
  Network,
} from "lucide-react";
import { PageShell, PageHero, CTASection } from "@/components/pages/page-shell";
import { Reveal, StaggerGroup, staggerItem, SectionHeading } from "@/components/animation";
import { COMPANY, STATS, TEAM, LOCATIONS } from "@/lib/data";

const VALUES = [
  {
    icon: HeartHandshake,
    title: "Students First",
    desc: "Every decision is made with your future in mind — never our profit. Your success is the only metric that matters.",
  },
  {
    icon: ShieldCheck,
    title: "Trust & Transparency",
    desc: "Honest guidance, transparent pricing, and a proprietary CRM that lets you see every step of your case in real time.",
  },
  {
    icon: Scale,
    title: "Integrity",
    desc: "We say what we mean and do what we say. No hidden fees, no false promises — just straight talk from real counselors.",
  },
  {
    icon: Trophy,
    title: "Excellence",
    desc: "We hold ourselves to the highest standard — 98% student satisfaction and a track record built over thousands of cases.",
  },
  {
    icon: Languages,
    title: "Multilingual Care",
    desc: "Counselors who speak your language — literally. From Dhaka to Lagos, we meet you where you are.",
  },
  {
    icon: Globe2,
    title: "Global Reach",
    desc: "Students from 40+ countries, partners across 120+ U.S. institutions, and offices on two continents.",
  },
];

const TIMELINE = [
  {
    year: "2022",
    title: "UCSG is founded",
    desc: "Joy Chowdhury — U.S. Army veteran, multilingual community leader — founds Universal Consulting Services Group in Delaware, USA.",
  },
  {
    year: "2023",
    title: "First cohort lands",
    desc: "Our first cohort of 80 international students arrives at U.S. partner colleges. 100% visa approval rate. The CRM launches.",
  },
  {
    year: "2024",
    title: "Partnerships expand",
    desc: "We sign direct agreements with 80+ U.S. institutions. Day-1 CPT and STEM-OPT pathways become a UCSG specialty.",
  },
  {
    year: "2025",
    title: "5,000+ students guided",
    desc: "We cross 5,000 students placed, 40+ countries served, and a 98% satisfaction rate. The Dhaka regional office opens.",
  },
];

export function AboutPage() {
  const storyRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: storyRef,
    offset: ["start end", "end start"],
  });
  const yImg = useTransform(scrollYProgress, [0, 1], ["-6%", "8%"]);

  return (
    <PageShell>
      <PageHero
        eyebrow="About UCSG"
        title={
          <>
            A trusted resource for{" "}
            <span className="text-gradient-emerald">international students</span>
          </>
        }
        subtitle={`Founded ${COMPANY.founded} · Delaware, USA. We make U.S. education accessible to every international student — built on trust, transparency, and your success.`}
        crumbs={[{ label: "About" }]}
        badge={
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <BadgeCheck className="h-4 w-4 text-primary" />
              U.S. Army Veteran-Led
            </span>
            <span className="flex items-center gap-1.5">
              <Building2 className="h-4 w-4 text-primary" />
              Delaware HQ · Dhaka Office
            </span>
            <span className="flex items-center gap-1.5">
              <Globe2 className="h-4 w-4 text-primary" />
              40+ countries served
            </span>
          </div>
        }
      />

      {/* Story + founder spotlight */}
      <section ref={storyRef} className="relative py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Visual */}
            <Reveal className="relative order-2 lg:order-1">
              <div className="relative">
                <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-primary/20 via-accent/15 to-primary/10 blur-2xl" />
                <motion.div
                  style={{ y: yImg }}
                  className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-border/60 shadow-premium"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/85 to-primary/60" />
                  <div className="absolute inset-0 opacity-30 mix-blend-overlay grid-pattern" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />

                  {/* Founder glass quote card */}
                  <div className="absolute inset-x-6 bottom-6">
                    <div className="glass rounded-2xl p-5 shadow-premium">
                      <div className="flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-accent to-accent/70 font-serif text-lg font-bold text-accent-foreground">
                          JC
                        </div>
                        <div>
                          <div className="font-serif text-base font-bold text-foreground">
                            {COMPANY.founder}
                          </div>
                          <div className="text-xs font-medium text-muted-foreground">
                            Founder & Managing Director
                          </div>
                        </div>
                      </div>
                      <p className="mt-3 font-serif text-sm italic leading-relaxed text-foreground/80">
                        “We are committed to trust, transparency, and your
                        success. Let UCSG be your trusted partner in building a
                        brighter future.”
                      </p>
                    </div>
                  </div>

                  <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-background/80 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-primary backdrop-blur">
                    <BadgeCheck className="h-3.5 w-3.5" />
                    U.S. Army Veteran
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -right-3 top-10 glass rounded-2xl p-4 shadow-premium sm:-right-6"
                >
                  <div className="font-serif text-3xl font-bold text-primary">5K+</div>
                  <div className="text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
                    Students Guided
                  </div>
                </motion.div>
              </div>
            </Reveal>

            {/* Text */}
            <div className="order-1 lg:order-2">
              <Reveal>
                <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-accent-foreground">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  Our Story
                </span>
              </Reveal>
              <Reveal delay={0.08}>
                <h2 className="mt-5 font-serif text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl">
                  Built by a veteran.{" "}
                  <span className="text-gradient-emerald">Run for you.</span>
                </h2>
              </Reveal>
              <Reveal delay={0.16}>
                <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
                  Founded in {COMPANY.founded} by {COMPANY.founder} — a multilingual
                  U.S. Army veteran, former student government president, and
                  respected community leader — Universal Consulting Services Group
                  (UCSG) is built on a simple promise: students come first.
                </p>
              </Reveal>
              <Reveal delay={0.24}>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  Having walked the path of an international student himself, Joy
                  understood the gaps in the system — the confusion of
                  applications, the opacity of visa rules, the loneliness of
                  arriving alone in a new country. UCSG was created to close
                  those gaps: a partner who is honest when others aren't,
                  transparent when others hide, and present when others
                  disappear.
                </p>
              </Reveal>
              <Reveal delay={0.32}>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  With a proven track record of guiding thousands of students
                  through their U.S. educational journey, we specialize in
                  connecting you to affordable, well-ranked colleges and
                  universities that offer hybrid programs, CPT/OPT
                  opportunities, and real-world career pathways.
                </p>
              </Reveal>

              <Reveal delay={0.4}>
                <div className="mt-8 grid gap-3 sm:grid-cols-3">
                  {[
                    { icon: Award, label: "Founded 2022", value: "By a U.S. Army Veteran" },
                    { icon: HeartHandshake, label: "Our Promise", value: "Students always come first" },
                    { icon: ShieldCheck, label: "Trust & Transparency", value: "End-to-end guidance" },
                  ].map((h) => (
                    <div
                      key={h.label}
                      className="rounded-xl border border-border/60 bg-card p-4 shadow-sm"
                    >
                      <h.icon className="h-5 w-5 text-primary" />
                      <div className="mt-2 text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
                        {h.label}
                      </div>
                      <div className="text-sm font-bold text-foreground">
                        {h.value}
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="relative bg-secondary/30 py-20 sm:py-28">
        <div className="absolute inset-0 -z-10 grid-pattern opacity-40" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Mission & Vision"
            title={
              <>
                Three commitments that shape{" "}
                <span className="text-gradient-emerald">every decision</span>
              </>
            }
            description="Our mission is the work we do every day. Our vision is the future we're building — one student at a time."
          />

          <StaggerGroup className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3">
            {[
              {
                icon: Network,
                title: "Partnerships of Mutual Benefit",
                desc: "Build an extensive network of institutional partnerships grounded in mutual benefits and long-term trust — so students get the best programs and partners get the best students.",
              },
              {
                icon: Sparkles,
                title: "Continual Innovation",
                desc: "Continually develop new ideas, tools, and projects — including our proprietary CRM — to improve and surpass our partners' evolving needs.",
              },
              {
                icon: HeartHandshake,
                title: "Students & Families First",
                desc: "Always put the students and their families first. Their success is the measure of ours — full stop.",
              },
            ].map((m) => (
              <motion.div
                key={m.title}
                variants={staggerItem}
                className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card to-secondary/40 p-7 shadow-sm"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/15 text-accent-foreground">
                  <m.icon className="h-5 w-5" />
                </div>
                <h4 className="mt-4 font-serif text-lg font-bold text-foreground">
                  {m.title}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {m.desc}
                </p>
              </motion.div>
            ))}
          </StaggerGroup>

          {/* Vision two-column */}
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <Reveal>
              <div className="relative h-full overflow-hidden rounded-2xl border border-border/60 bg-card p-7 shadow-premium">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 text-primary">
                    <Target className="h-5 w-5" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-foreground">Our Mission</h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  To make U.S. education accessible to every international
                  student — regardless of budget, background, or English level —
                  by pairing them with affordable, well-ranked colleges that
                  offer real career pathways, and by standing beside them from
                  the first hello to the first day on campus.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="relative h-full overflow-hidden rounded-2xl border border-border/60 bg-card p-7 shadow-premium">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/15 text-accent-foreground">
                    <Eye className="h-5 w-5" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-foreground">Our Vision</h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  A world where geography is never a barrier to opportunity —
                  where every motivated student, no matter where they were born,
                  can access the U.S. education system with a trusted partner by
                  their side, and graduate into a career that changes their
                  family's trajectory for generations.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Core values */}
      <section className="relative py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Core Values"
            title={
              <>
                The principles we{" "}
                <span className="text-gradient-emerald">refuse to compromise</span>
              </>
            }
            description="These aren't posters on a wall. They're the rules we fire ourselves over when we break them."
          />

          <StaggerGroup className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {VALUES.map((v, i) => (
              <motion.article
                key={v.title}
                variants={staggerItem}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card p-7 shadow-premium"
              >
                <span className="pointer-events-none absolute right-4 top-2 font-serif text-6xl font-bold text-foreground/5">
                  0{i + 1}
                </span>
                <div className="relative">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/15 to-accent/15 text-primary transition-all duration-500 group-hover:from-primary group-hover:to-primary/70 group-hover:text-primary-foreground">
                    <v.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-serif text-lg font-bold text-foreground">
                    {v.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                    {v.desc}
                  </p>
                </div>
                <div className="mt-6 h-px w-full bg-gradient-to-r from-accent/50 via-primary/20 to-transparent" />
              </motion.article>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Timeline */}
      <section className="relative py-20 sm:py-28">
        <div className="absolute inset-0 -z-10 mesh-bg opacity-40" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Our Journey"
            title={
              <>
                From one veteran's vision to{" "}
                <span className="text-gradient-emerald">5,000+ students</span>
              </>
            }
            description="A short history of UCSG — the milestones that shaped who we are today."
          />

          <div className="relative mt-16">
            {/* Vertical line */}
            <div className="absolute left-[27px] top-4 bottom-4 w-px bg-gradient-to-b from-primary via-accent to-primary sm:left-1/2 sm:-translate-x-1/2" />
            <div className="space-y-10 sm:space-y-0">
              {TIMELINE.map((t, i) => (
                <motion.div
                  key={t.year}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  className={`relative flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8 ${
                    i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                  }`}
                >
                  <div className="flex-1 sm:px-8">
                    <div className="rounded-2xl border border-border/60 bg-card p-6 shadow-premium">
                      <div className="font-serif text-3xl font-bold text-gradient-emerald">
                        {t.year}
                      </div>
                      <h3 className="mt-2 font-serif text-xl font-bold text-foreground">
                        {t.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {t.desc}
                      </p>
                    </div>
                  </div>
                  <div className="absolute left-[27px] top-6 z-10 flex h-3 w-3 -translate-x-1/2 items-center justify-center rounded-full bg-accent ring-4 ring-background sm:left-1/2" />
                  <div className="hidden flex-1 sm:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats band */}
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

      {/* Team preview */}
      <section className="relative py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Leadership"
            title={
              <>
                The people who{" "}
                <span className="text-gradient-emerald">guide your journey</span>
              </>
            }
            description="Multilingual counselors, U.S. veterans, and admissions strategists — united by one mission: your success in the United States."
          />

          <StaggerGroup className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {TEAM.map((member) => (
              <motion.article
                key={member.name}
                variants={staggerItem}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card shadow-premium"
              >
                <div className="relative h-40 overflow-hidden bg-gradient-to-br from-primary to-primary/60">
                  <div className="absolute inset-0 grid-pattern opacity-20" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="flex h-24 w-24 items-center justify-center rounded-full border-4 border-background/90 bg-gradient-to-br from-accent to-accent/70 font-serif text-3xl font-bold text-accent-foreground shadow-lg">
                      {member.initials}
                    </div>
                  </div>
                  <div className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-background/80 px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-primary backdrop-blur">
                    <BadgeCheck className="h-3 w-3" />
                    Verified
                  </div>
                </div>
                <div className="p-5 text-center">
                  <h3 className="font-serif text-lg font-bold text-foreground">
                    {member.name}
                  </h3>
                  <div className="text-xs font-semibold uppercase tracking-wide text-primary">
                    {member.role}
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {member.bio}
                  </p>
                  <div className="mt-4 flex flex-wrap justify-center gap-1.5">
                    {member.highlights.map((h) => (
                      <span
                        key={h}
                        className="rounded-full bg-secondary px-2.5 py-1 text-[10px] font-semibold text-secondary-foreground"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </StaggerGroup>

          {/* Locations strip */}
          <Reveal delay={0.1}>
            <div className="mt-14 grid gap-5 sm:grid-cols-2">
              {LOCATIONS.map((loc) => (
                <div
                  key={loc.label}
                  className="flex items-center gap-4 rounded-2xl border border-border/60 bg-card p-6 shadow-sm"
                >
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-3xl">
                    {loc.flag}
                  </span>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                      {loc.role}
                    </div>
                    <div className="font-serif text-xl font-bold text-foreground">
                      {loc.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection
        title="Want to meet the team in person?"
        subtitle="Book a free consultation with a multilingual counselor today. We'll match you to affordable, well-ranked colleges and stand by you from application to arrival."
        primaryLabel="Book a free consultation"
      />
    </PageShell>
  );
}
