"use client";

import * as React from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  PlayCircle,
  ShieldCheck,
  Star,
  GraduationCap,
  Sparkles,
  Globe2,
  Quote,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { COMPANY } from "@/lib/data";

export function Hero() {
  const ref = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const yContent = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-[100svh] overflow-hidden pt-28 pb-20 sm:pt-32"
    >
      {/* Animated mesh + grid background */}
      <motion.div style={{ y: yBg }} className="absolute inset-0 -z-10">
        <div className="absolute inset-0 mesh-bg" />
        <div className="absolute inset-0 grid-pattern opacity-60" />
        {/* Floating ambient blobs */}
        <motion.div
          aria-hidden
          className="absolute -left-20 top-24 h-72 w-72 rounded-full bg-primary/20 blur-3xl"
          animate={{ scale: [1, 1.18, 1], opacity: [0.5, 0.75, 0.5] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          aria-hidden
          className="absolute right-0 top-40 h-80 w-80 rounded-full bg-accent/25 blur-3xl"
          animate={{ scale: [1, 1.25, 1], opacity: [0.45, 0.7, 0.45] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          aria-hidden
          className="absolute bottom-10 left-1/3 h-64 w-64 rounded-full bg-primary/15 blur-3xl"
          animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.6, 0.4] }}
          transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      {/* Floating decorative shapes */}
      <motion.div
        aria-hidden
        className="absolute left-[8%] top-[28%] hidden lg:block"
        animate={{ y: [0, -16, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="glass flex h-16 w-16 rotate-6 items-center justify-center rounded-2xl shadow-premium">
          <GraduationCap className="h-7 w-7 text-primary" />
        </div>
      </motion.div>
      <motion.div
        aria-hidden
        className="absolute right-[10%] top-[22%] hidden lg:block"
        animate={{ y: [0, 18, 0] }}
        transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="glass flex h-14 w-14 -rotate-6 items-center justify-center rounded-2xl shadow-premium">
          <Globe2 className="h-6 w-6 text-primary" />
        </div>
      </motion.div>

      <motion.div
        style={{ y: yContent, opacity }}
        className="mx-auto max-w-7xl px-4 sm:px-6"
      >
        <div className="mx-auto max-w-4xl text-center">
          {/* Eyebrow badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-accent-foreground backdrop-blur"
          >
            <span className="flex h-2 w-2">
              <span className="absolute inline-flex h-2 w-2 animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Founded by a U.S. Army Veteran · Est. {COMPANY.founded}
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-7 font-serif text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-6xl md:text-7xl"
          >
            Your Gateway to a{" "}
            <span className="relative inline-block">
              <span className="text-gradient-emerald">U.S. Education</span>
              <motion.svg
                viewBox="0 0 320 18"
                className="absolute -bottom-2 left-0 h-3 w-full"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.9, ease: "easeInOut" }}
              >
                <motion.path
                  d="M2 14 C 80 4, 240 4, 318 12"
                  fill="none"
                  stroke="oklch(0.82 0.13 78)"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </motion.svg>
            </span>
          </motion.h1>

          {/* Sub-headline from real content */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-8 max-w-2xl text-lg font-medium leading-relaxed text-foreground/90 sm:text-xl"
          >
            {COMPANY.heroHeadline}{" "}
            <span className="font-serif italic text-gradient-gold">
              {COMPANY.heroHighlight}
            </span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground"
          >
            We connect international students to affordable, well-ranked U.S.
            colleges with hybrid programs, CPT/OPT opportunities, and real-world
            career pathways — with full support from application to arrival.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <Button
              asChild
              size="lg"
              className="group h-12 rounded-full bg-primary px-7 text-base shadow-premium hover:shadow-lg"
            >
              <Link href="#contact">
                <Sparkles className="h-4 w-4" />
                Take a Free Call Now
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 rounded-full border-border/70 bg-background/60 px-7 text-base backdrop-blur hover:border-primary/40 hover:bg-primary/5"
            >
              <Link href="#services">
                <PlayCircle className="h-4 w-4" />
                Explore Our Services
              </Link>
            </Button>
          </motion.div>

          {/* Trust row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-muted-foreground"
          >
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-primary" />
              Trusted by 5,000+ students
            </span>
            <span className="flex items-center gap-1.5">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-accent text-accent" />
                ))}
              </div>
              98% satisfaction rate
            </span>
            <span className="flex items-center gap-1.5">
              <Globe2 className="h-4 w-4 text-primary" />
              40+ countries served
            </span>
          </motion.div>
        </div>

        {/* Floating stats cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto mt-16 grid max-w-5xl grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6"
        >
          {[
            { value: "5,000+", label: "Students Guided", icon: GraduationCap },
            { value: "120+", label: "Partner Schools", icon: Globe2 },
            { value: "40+", label: "Countries", icon: ShieldCheck },
            { value: "98%", label: "Satisfaction", icon: Star },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="glass rounded-2xl p-4 text-center shadow-premium sm:p-5"
              style={{ marginTop: i % 2 === 1 ? "0.75rem" : 0 }}
            >
              <stat.icon className="mx-auto h-6 w-6 text-primary" />
              <div className="mt-2 font-serif text-2xl font-bold text-foreground sm:text-3xl">
                {stat.value}
              </div>
              <div className="mt-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Founder quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-14 flex max-w-2xl items-center justify-center gap-3 text-center"
        >
          <Quote className="h-8 w-8 shrink-0 text-accent/60" />
          <p className="font-serif text-base italic text-muted-foreground sm:text-lg">
            “{COMPANY.quote}”{" "}
            <span className="not-italic font-semibold text-foreground">
              — {COMPANY.quoteAuthor}
            </span>
          </p>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        style={{ opacity }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
        aria-hidden
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="flex h-9 w-6 items-start justify-center rounded-full border-2 border-primary/40 p-1.5"
        >
          <span className="h-2 w-1 rounded-full bg-primary/70" />
        </motion.div>
      </motion.div>
    </section>
  );
}
