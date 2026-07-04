"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, Home, Sparkles, ArrowRight, Phone } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { ScrollProgress } from "@/components/scroll-progress";
import { ContactDock } from "@/components/interactive/contact-dock";
import { ChatWidget } from "@/components/interactive/chat-widget";
import { cn } from "@/lib/utils";

/**
 * PageShell — the shared wrapper for every `?view=` sub-page.
 *
 * Provides:
 *   • ScrollProgress bar (top)
 *   • Sticky glass Navbar (reused)
 *   • <main> with top padding so the fixed navbar doesn't cover content
 *   • Footer (sticky to bottom via mt-auto)
 *   • Floating ContactDock (WhatsApp / Email / Back-to-top)
 *
 * The page hero (PageHero) is rendered as the first child by convention.
 */
export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div
      id="top"
      className="relative flex min-h-screen flex-col bg-background"
    >
      <ScrollProgress />
      <Navbar />
      <main className="flex-1 pt-20">{children}</main>
      <Footer />
      <ContactDock />
      <ChatWidget />
    </div>
  );
}

export type Crumb = { label: string; href?: string };

/**
 * PageHero — reusable sub-page hero with ambient background, breadcrumb,
 * eyebrow, big headline, subtitle, and optional CTA row.
 */
export function PageHero({
  eyebrow,
  title,
  subtitle,
  crumbs = [],
  badge,
  children,
  align = "left",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  crumbs?: Crumb[];
  badge?: React.ReactNode;
  children?: React.ReactNode;
  align?: "left" | "center";
}) {
  const isCenter = align === "center";
  return (
    <section className="relative overflow-hidden pt-10 pb-12 sm:pt-14 sm:pb-16">
      {/* Ambient background */}
      <div className="absolute inset-0 -z-10 mesh-bg opacity-60" />
      <div className="absolute inset-0 -z-10 grid-pattern opacity-30" />
      <motion.div
        aria-hidden
        className="absolute -left-20 top-10 -z-10 h-72 w-72 rounded-full bg-primary/20 blur-3xl"
        animate={{ scale: [1, 1.18, 1], opacity: [0.5, 0.75, 0.5] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute right-0 top-20 -z-10 h-80 w-80 rounded-full bg-accent/20 blur-3xl"
        animate={{ scale: [1, 1.25, 1], opacity: [0.45, 0.7, 0.45] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Breadcrumb */}
        {crumbs.length > 0 && (
          <motion.nav
            aria-label="Breadcrumb"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={cn(
              "flex flex-wrap items-center gap-1.5 text-xs font-medium text-muted-foreground",
              isCenter && "justify-center"
            )}
          >
            <Link
              href="/"
              className="inline-flex items-center gap-1 transition-colors hover:text-primary"
            >
              <Home className="h-3.5 w-3.5" />
              Home
            </Link>
            {crumbs.map((c) => (
              <React.Fragment key={c.label}>
                <ChevronRight className="h-3.5 w-3.5 text-muted-foreground/60" />
                {c.href ? (
                  <Link
                    href={c.href}
                    className="transition-colors hover:text-primary"
                  >
                    {c.label}
                  </Link>
                ) : (
                  <span className="text-foreground">{c.label}</span>
                )}
              </React.Fragment>
            ))}
          </motion.nav>
        )}

        <div
          className={cn(
            "mt-6 max-w-4xl",
            isCenter && "mx-auto text-center"
          )}
        >
          {eyebrow && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className={cn(
                "inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-accent-foreground backdrop-blur",
                isCenter && "mx-auto"
              )}
            >
              <span className="flex h-2 w-2">
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              {eyebrow}
            </motion.div>
          )}

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 font-serif text-4xl font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-5xl md:text-6xl"
          >
            {title}
          </motion.h1>

          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
              className={cn(
                "mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg",
                isCenter && "mx-auto"
              )}
            >
              {subtitle}
            </motion.p>
          )}

          {badge && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.28 }}
              className="mt-6"
            >
              {badge}
            </motion.div>
          )}

          {children && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.32 }}
              className="mt-8"
            >
              {children}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}

/**
 * CTASection — a reusable emerald-gradient CTA panel for the bottom of every
 * sub-page. Mirrors the landing page's CTA aesthetic.
 */
export function CTASection({
  title,
  subtitle,
  primaryHref = "/?view=contact",
  primaryLabel = "Take a Free Call Now",
}: {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  primaryHref?: string;
  primaryLabel?: string;
}) {
  return (
    <section className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-primary via-primary to-primary/80 px-6 py-14 shadow-premium sm:px-12 sm:py-20"
        >
          <div className="absolute inset-0 -z-0 bg-gradient-to-r from-accent/20 via-transparent to-accent/20 animate-aurora" />
          <div className="absolute inset-0 -z-0 grid-pattern opacity-20" />
          <motion.div
            aria-hidden
            className="absolute -left-10 top-0 h-52 w-52 rounded-full bg-accent/25 blur-3xl"
            animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            aria-hidden
            className="absolute -right-10 bottom-0 h-60 w-60 rounded-full bg-background/15 blur-3xl"
            animate={{ scale: [1, 1.25, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="relative z-10 mx-auto max-w-3xl text-center">
            <h2 className="font-serif text-3xl font-bold leading-tight tracking-tight text-primary-foreground sm:text-5xl">
              {title}
            </h2>
            {subtitle && (
              <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-primary-foreground/80 sm:text-lg">
                {subtitle}
              </p>
            )}
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href={primaryHref}
                className="group inline-flex h-12 items-center gap-2 rounded-full bg-accent px-7 text-base font-bold text-accent-foreground shadow-lg transition-all hover:shadow-xl hover:brightness-105"
              >
                <Sparkles className="h-4 w-4" />
                {primaryLabel}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href="tel:+13028935594"
                className="inline-flex h-12 items-center gap-2 rounded-full border border-primary-foreground/30 bg-background/10 px-7 text-base font-semibold text-primary-foreground backdrop-blur transition-colors hover:bg-background/20"
              >
                <Phone className="h-4 w-4" />
                +1 (302) 893-5594
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
