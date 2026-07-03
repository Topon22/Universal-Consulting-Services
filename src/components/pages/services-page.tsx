"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Sparkles, Search, Target, ClipboardCheck, Plane, CheckCircle2 } from "lucide-react";
import { PageShell, PageHero, CTASection } from "@/components/pages/page-shell";
import { Reveal, StaggerGroup, staggerItem, SectionHeading } from "@/components/animation";
import { SERVICES, SERVICE_SLUGS, STATS } from "@/lib/data";

const DELIVERY_STEPS = [
  {
    icon: Search,
    step: "01",
    title: "Discover",
    desc: "A free consultation to understand your goals, budget, English level, and dream U.S. pathway.",
  },
  {
    icon: Target,
    step: "02",
    title: "Match",
    desc: "We shortlist affordable, well-ranked colleges with the right CPT/OPT and hybrid options for you.",
  },
  {
    icon: ClipboardCheck,
    step: "03",
    title: "Apply",
    desc: "Our counselors manage your case end-to-end in our proprietary CRM — applications, essays, documents.",
  },
  {
    icon: Plane,
    step: "04",
    title: "Arrive & Thrive",
    desc: "Land in the USA with our onshore team ready — aftercare, support, and mentorship every step forward.",
  },
];

export function ServicesPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="What We Do"
        title={
          <>
            Everything you need to{" "}
            <span className="text-gradient-emerald">study in the USA</span>
          </>
        }
        subtitle="From your first consultation to landing on campus and beyond — UCSG delivers end-to-end guidance across admissions, scholarships, visas, and career pathways. Explore each service in depth."
        crumbs={[{ label: "Services" }]}
        badge={
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-primary" />
              Free for students
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-primary" />
              120+ partner colleges
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-primary" />
              Multilingual counselors
            </span>
          </div>
        }
      >
        <div className="flex flex-wrap items-center gap-3">
          <Link
            href="/?view=contact"
            className="group inline-flex h-12 items-center gap-2 rounded-full bg-primary px-6 text-sm font-bold text-primary-foreground shadow-premium transition-all hover:shadow-lg"
          >
            <Sparkles className="h-4 w-4" />
            Book a free consultation
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <a
            href="tel:+13028935594"
            className="inline-flex h-12 items-center gap-2 rounded-full border border-border/70 bg-background/60 px-6 text-sm font-semibold text-foreground backdrop-blur transition-colors hover:border-primary/40"
          >
            +1 (302) 893-5594
          </a>
        </div>
      </PageHero>

      {/* Service intro paragraph */}
      <section className="relative py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <Reveal>
            <p className="text-lg leading-relaxed text-foreground/85 sm:text-xl">
              UCSG's service philosophy is simple:{" "}
              <span className="font-semibold text-foreground">
                students come first
              </span>
              . We're compensated by our institutional partners — not by you —
              which means every recommendation we make is in your best interest.
              Click any service below to dive into the full breakdown: who it's
              for, what's included, the process, FAQs, and how it connects to
              the rest of your U.S. journey.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Service cards grid */}
      <section className="relative pb-12 sm:pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <StaggerGroup className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service) => {
              const slug = SERVICE_SLUGS[service.title];
              const Icon = service.icon;
              const hasDetail = Boolean(slug);
              const href = slug ? `/?view=${slug}` : "/?view=services";
              return (
                <motion.article
                  key={service.title}
                  variants={staggerItem}
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                  className="group relative flex flex-col overflow-hidden rounded-2xl border border-border/60 bg-card shadow-premium"
                >
                  {/* Gradient ring on hover */}
                  <div className="pointer-events-none absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-primary/15 via-accent/10 to-primary/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="p-6 sm:p-7">
                    <div className="flex items-start justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/15 to-accent/15 text-primary transition-all duration-500 group-hover:from-primary group-hover:to-primary/70 group-hover:text-primary-foreground">
                        <Icon className="h-6 w-6" />
                      </div>
                      {service.tag && (
                        <span className="rounded-full bg-accent/15 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-accent-foreground">
                          {service.tag}
                        </span>
                      )}
                    </div>

                    <h3 className="mt-5 font-serif text-xl font-bold text-foreground">
                      {service.title}
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                      {service.description}
                    </p>

                    <ul className="mt-5 space-y-2">
                      {service.features.map((f) => (
                        <li
                          key={f}
                          className="flex items-center gap-2 text-sm text-foreground/80"
                        >
                          <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto border-t border-border/60 p-5">
                    {hasDetail ? (
                      <Link
                        href={href}
                        className="group/link inline-flex items-center gap-1.5 text-sm font-bold text-primary transition-colors hover:text-primary/80"
                        aria-label={`Learn more about ${service.title}`}
                      >
                        Learn more
                        <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                      </Link>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground">
                        <ArrowUpRight className="h-4 w-4" />
                        Talk to a counselor
                      </span>
                    )}
                  </div>
                </motion.article>
              );
            })}
          </StaggerGroup>
        </div>
      </section>

      {/* How we deliver — mini process teaser */}
      <section className="relative py-16 sm:py-20">
        <div className="absolute inset-0 -z-10 mesh-bg opacity-40" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="How We Deliver"
            title={
              <>
                A proven four-step{" "}
                <span className="text-gradient-emerald">delivery model</span>
              </>
            }
            description="Every UCSG service is delivered through the same transparent, four-step process — personalized to your goals and tracked end-to-end in our proprietary CRM."
          />

          <StaggerGroup className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {DELIVERY_STEPS.map((s) => (
              <motion.div
                key={s.step}
                variants={staggerItem}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card p-6 shadow-sm"
              >
                <span className="pointer-events-none absolute right-4 top-2 font-serif text-6xl font-bold text-foreground/5">
                  {s.step}
                </span>
                <div className="relative">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/15 to-accent/15 text-primary transition-all duration-500 group-hover:from-primary group-hover:to-primary/70 group-hover:text-primary-foreground">
                    <s.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-serif text-lg font-bold text-foreground">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {s.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </StaggerGroup>

          <Reveal delay={0.1}>
            <div className="mt-10 text-center">
              <Link
                href="/?view=process"
                className="group inline-flex h-12 items-center gap-2 rounded-full border border-border/70 bg-background/60 px-6 text-sm font-semibold text-foreground backdrop-blur transition-colors hover:border-primary/40 hover:text-primary"
              >
                See the full process
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Stats band — reuse the Stats component */}
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
        title="Ready to start your U.S. education journey?"
        subtitle="Take a free call with our multilingual counselors today. We'll match you to affordable, well-ranked colleges with the right CPT/OPT and hybrid options — and stand by you from application to arrival."
      />
    </PageShell>
  );
}
