"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Sparkles,
  Phone,
  MessageCircle,
  Plus,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PageShell, PageHero, CTASection } from "@/components/pages/page-shell";
import {
  Reveal,
  StaggerGroup,
  staggerItem,
  SectionHeading,
} from "@/components/animation";
import {
  SERVICE_DETAILS,
  type ServiceDetail,
} from "@/lib/service-details";
import { SERVICE_SLUGS, COMPANY } from "@/lib/data";
import { cn } from "@/lib/utils";

const WHATSAPP_HREF = `https://wa.me/1${COMPANY.phone.replace(/[^0-9]/g, "").slice(1)}`;

/* Reverse lookup: slug → display title (for breadcrumbs / related cards) */
const SLUG_TO_TITLE: Record<string, string> = Object.fromEntries(
  Object.entries(SERVICE_SLUGS).map(([title, slug]) => [slug, title])
);

export function ServicePage({ slug }: { slug: string }) {
  const detail: ServiceDetail | undefined = SERVICE_DETAILS[slug];

  // Fallback if an unknown slug slips through
  if (!detail) {
    return (
      <PageShell>
        <div className="mx-auto max-w-3xl px-4 py-32 text-center sm:px-6">
          <h1 className="font-serif text-4xl font-bold text-foreground">
            Service not found
          </h1>
          <p className="mt-4 text-muted-foreground">
            We couldn&apos;t find that service. Browse all our services instead.
          </p>
          <Link
            href="/?view=services"
            className="mt-8 inline-flex h-12 items-center gap-2 rounded-full bg-primary px-6 text-sm font-bold text-primary-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            All services
          </Link>
        </div>
      </PageShell>
    );
  }

  const Icon = detail.icon;

  return (
    <PageShell>
      {/* ---------- HERO ---------- */}
      <PageHero
        eyebrow={detail.tagline}
        title={
          <>
            <span className="text-gradient-emerald">{detail.title}</span>
          </>
        }
        subtitle={detail.heroSubtitle}
        crumbs={[
          { label: "Services", href: "/?view=services" },
          { label: detail.title },
        ]}
        badge={
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-primary" />
              Free for students
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-primary" />
              Multilingual counselors
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-primary" />
              End-to-end support
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
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center gap-2 rounded-full border border-border/70 bg-background/60 px-6 text-sm font-semibold text-foreground backdrop-blur transition-colors hover:border-primary/40"
          >
            <MessageCircle className="h-4 w-4" />
            Chat on WhatsApp
          </a>
        </div>
      </PageHero>

      {/* ---------- OVERVIEW + HIGHLIGHT ---------- */}
      <section className="relative py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <Reveal>
                <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-accent-foreground">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  Overview
                </span>
              </Reveal>
              <div className="mt-6 space-y-5">
                {detail.overview.map((para, i) => (
                  <Reveal key={i} delay={0.06 * i}>
                    <p className="text-base leading-relaxed text-foreground/85 sm:text-lg">
                      {para}
                    </p>
                  </Reveal>
                ))}
              </div>
            </div>

            {/* Highlight stat card */}
            <div className="lg:col-span-4">
              <Reveal delay={0.1}>
                <div className="relative overflow-hidden rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/10 via-accent/10 to-transparent p-8">
                  <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-primary/15 blur-3xl" />
                  <div className="relative">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary/70 text-primary-foreground shadow-lg">
                      <Icon className="h-7 w-7" />
                    </div>
                    <div className="mt-6 font-serif text-5xl font-extrabold tracking-tight text-foreground sm:text-6xl">
                      {detail.highlight.stat}
                    </div>
                    <p className="mt-3 text-sm font-medium leading-relaxed text-muted-foreground">
                      {detail.highlight.label}
                    </p>
                    <Link
                      href="/?view=contact"
                      className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-primary transition-colors hover:text-primary/80"
                    >
                      Start now
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- BENEFITS ---------- */}
      <section className="relative py-16 sm:py-20">
        <div className="absolute inset-0 -z-10 mesh-bg opacity-40" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Why It Matters"
            title={
              <>
                Key benefits of{" "}
                <span className="text-gradient-emerald">{detail.title}</span>
              </>
            }
            description="Every benefit below is designed around the real needs of international students — affordability, transparency, and a clear path forward."
          />

          <StaggerGroup className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {detail.benefits.map((b) => {
              const BIcon = b.icon;
              return (
                <motion.article
                  key={b.title}
                  variants={staggerItem}
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                  className="group relative flex flex-col overflow-hidden rounded-2xl border border-border/60 bg-card p-6 shadow-premium sm:p-7"
                >
                  <div className="pointer-events-none absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-primary/15 via-accent/10 to-primary/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/15 to-accent/15 text-primary transition-all duration-500 group-hover:from-primary group-hover:to-primary/70 group-hover:text-primary-foreground">
                    <BIcon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-serif text-lg font-bold text-foreground">
                    {b.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                    {b.desc}
                  </p>
                </motion.article>
              );
            })}
          </StaggerGroup>
        </div>
      </section>

      {/* ---------- WHO IT'S FOR + WHAT'S INCLUDED ---------- */}
      <section className="relative py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Who it's for */}
            <div>
              <Reveal>
                <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-accent-foreground">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  Who It&apos;s For
                </span>
              </Reveal>
              <Reveal delay={0.08}>
                <h2 className="mt-5 font-serif text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  Is this the right service for you?
                </h2>
              </Reveal>
              <StaggerGroup className="mt-8 space-y-4">
                {detail.whoItsFor.map((item) => (
                  <motion.div
                    key={item}
                    variants={staggerItem}
                    className="flex items-start gap-3 rounded-xl border border-border/50 bg-card/50 p-4"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span className="text-sm leading-relaxed text-foreground/85 sm:text-base">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </StaggerGroup>
            </div>

            {/* What's included */}
            <div>
              <Reveal>
                <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-accent-foreground">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  What&apos;s Included
                </span>
              </Reveal>
              <Reveal delay={0.08}>
                <h2 className="mt-5 font-serif text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  Everything in your package
                </h2>
              </Reveal>
              <StaggerGroup className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {detail.whatsIncluded.map((item) => (
                  <motion.div
                    key={item}
                    variants={staggerItem}
                    className="flex items-start gap-2.5 rounded-lg p-2"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span className="text-sm leading-relaxed text-foreground/80">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </StaggerGroup>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- PROCESS ---------- */}
      <section className="relative py-16 sm:py-20">
        <div className="absolute inset-0 -z-10 grid-pattern opacity-30" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="How It Works"
            title={
              <>
                The <span className="text-gradient-emerald">process</span>, step
                by step
              </>
            }
            description="A clear, transparent workflow — no surprises, no hidden steps. You'll always know what's happening and what's next."
          />

          <div className="mt-14 space-y-5">
            {detail.process.map((step, i) => (
              <Reveal key={step.step} delay={i * 0.05}>
                <div className="group relative grid grid-cols-1 items-start gap-5 rounded-2xl border border-border/60 bg-card p-6 shadow-sm transition-colors hover:border-primary/40 sm:grid-cols-[auto_1fr] sm:p-8">
                  <div className="flex items-center gap-4 sm:flex-col sm:items-start sm:gap-2">
                    <span className="font-serif text-5xl font-extrabold leading-none text-primary/30 transition-colors group-hover:text-primary/60 sm:text-6xl">
                      {step.step}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-foreground sm:text-2xl">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                      {step.desc}
                    </p>
                  </div>
                  {i < detail.process.length - 1 && (
                    <span
                      aria-hidden
                      className="absolute left-[3.25rem] top-full hidden h-5 w-px -translate-y-1/2 bg-border/60 sm:block"
                    />
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- FAQ ---------- */}
      <section className="relative py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="FAQ"
            title={
              <>
                Questions, <span className="text-gradient-emerald">answered</span>
              </>
            }
            description="Still curious? Talk to a counselor — the first call is always free."
          />

          <Reveal delay={0.1}>
            <Accordion
              type="single"
              collapsible
              className="mt-10 w-full space-y-3"
            >
              {detail.faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="overflow-hidden rounded-xl border border-border/60 bg-card px-5"
                >
                  <AccordionTrigger className="py-5 text-left font-serif text-base font-bold text-foreground hover:no-underline sm:text-lg">
                    <span className="flex items-start gap-3">
                      <Plus className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      {faq.q}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-8 flex flex-col items-center justify-between gap-4 rounded-2xl border border-primary/20 bg-primary/5 p-6 sm:flex-row">
              <div>
                <p className="font-serif text-lg font-bold text-foreground">
                  Still have questions?
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Talk directly with a UCSG project manager.
                </p>
              </div>
              <Link
                href="/?view=contact"
                className="inline-flex h-11 items-center gap-2 rounded-full bg-primary px-5 text-sm font-bold text-primary-foreground shadow-sm transition-all hover:shadow-md"
              >
                <MessageCircle className="h-4 w-4" />
                Ask a counselor
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- RELATED SERVICES ---------- */}
      <section className="relative py-16 sm:py-20">
        <div className="absolute inset-0 -z-10 mesh-bg opacity-30" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Explore More"
            title={
              <>
                Related <span className="text-gradient-emerald">services</span>
              </>
            }
            description="These services often go hand-in-hand. Combine them for a complete U.S. education journey."
          />
          <StaggerGroup className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {detail.relatedServices.map((relSlug) => {
              const rel = SERVICE_DETAILS[relSlug];
              if (!rel) return null;
              const RIcon = rel.icon;
              return (
                <motion.div key={relSlug} variants={staggerItem}>
                  <Link
                    href={`/?view=${relSlug}`}
                    className="group flex h-full flex-col rounded-2xl border border-border/60 bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-premium"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary/15 to-accent/15 text-primary transition-all duration-500 group-hover:from-primary group-hover:to-primary/70 group-hover:text-primary-foreground">
                      <RIcon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 font-serif text-base font-bold text-foreground">
                      {SLUG_TO_TITLE[relSlug] ?? rel.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {rel.tagline}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-primary">
                      Learn more
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Link>
                </motion.div>
              );
            })}
          </StaggerGroup>
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <CTASection
        title={
          <>
            Ready to start{" "}
            <span className="text-primary-foreground">
              {detail.title}
            </span>
            ?
          </>
        }
        subtitle="Book a free consultation with our multilingual counselors. We'll map out a personalized plan — no fees, no pressure, just honest guidance."
        primaryLabel="Take a Free Call Now"
      />
    </PageShell>
  );
}
