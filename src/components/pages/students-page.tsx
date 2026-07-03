"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Briefcase,
  Repeat,
  Globe2,
  Languages,
  TrendingUp,
  CheckCircle2,
  Star,
  ArrowRight,
  Sparkles,
  Plane,
  Award,
  BadgeCheck,
  HeartHandshake,
} from "lucide-react";
import { PageShell, PageHero, CTASection } from "@/components/pages/page-shell";
import { Reveal, StaggerGroup, staggerItem, SectionHeading } from "@/components/animation";

const PERSONAS = [
  {
    icon: GraduationCap,
    title: "High School Graduates",
    who: "First-time college seekers aiming for an affordable, well-ranked U.S. undergraduate start.",
    goals: [
      "Affordable tuition without sacrificing accreditation",
      "A clear path from admission to graduation",
      "A school that welcomes international students",
    ],
    howWeHelp: [
      "Shortlist 5–8 colleges matched to your grades & budget",
      "Handle applications, essays, and document prep",
      "Visa interview prep with a 98% approval rate",
    ],
    idealPrograms: ["Bachelor's degrees", "Pathway programs", "Hybrid undergrad"],
  },
  {
    icon: Briefcase,
    title: "Working Professionals",
    who: "Pursue a U.S. master's with day-1 CPT that lets you keep working while you study.",
    goals: [
      "Keep your current job while earning a U.S. degree",
      "Build U.S. work experience through CPT/OPT",
      "Network with U.S. employers in your field",
    ],
    howWeHelp: [
      "Match to Day-1 CPT graduate programs",
      "CPT authorization and compliance guidance",
      "STEM OPT extension planning for 36 months total",
    ],
    idealPrograms: ["Day-1 CPT MBA/MS", "STEM-designated degrees", "Hybrid master's"],
  },
  {
    icon: Repeat,
    title: "Transfer Students",
    who: "Already enrolled but looking for a better fit — we maximize your credits and minimize loss.",
    goals: [
      "Transfer with zero lost credits",
      "Continuous F1 status throughout the transfer",
      "A school that better fits your goals or major",
    ],
    howWeHelp: [
      "Course-by-course transcript evaluation",
      "Credit mapping against articulation agreements",
      "SEVIS record transfer and I-20 coordination",
    ],
    idealPrograms: ["Transfer-friendly partners", "Articulation agreements", "2+2 pathways"],
  },
  {
    icon: Globe2,
    title: "International Applicants",
    who: "From Bangladesh to Lagos to Kathmandu — multilingual counselors who understand your journey.",
    goals: [
      "Navigate U.S. admissions from abroad",
      "Secure an F1 visa on the first try",
      "Arrive with housing, banking, and orientation sorted",
    ],
    howWeHelp: [
      "DS-160 walkthrough and document checklist",
      "Mock visa interviews in your native language",
      "Onshore Delaware team meets you at the airport",
    ],
    idealPrograms: ["F1 visa pathways", "International-friendly schools", "Onshore aftercare"],
  },
  {
    icon: Languages,
    title: "English Learners",
    who: "Build fluency through pathway and ESL programs before stepping into a full degree.",
    goals: [
      "Reach TOEFL/IELTS readiness",
      "Adjust to U.S. academic culture",
      "Progress to a full degree with guaranteed admission",
    ],
    howWeHelp: [
      "Match to pathway/foundation programs",
      "Conditional admission to your target university",
      "ESL placement and test-prep coaching",
    ],
    idealPrograms: ["Pathway programs", "ESL/IEP placement", "Conditional admission"],
  },
  {
    icon: TrendingUp,
    title: "Career Changers",
    who: "Pivot into tech, business, or analytics with programs designed around real outcomes.",
    goals: [
      "Build new skills quickly and credibly",
      "Gain U.S. work experience through OPT",
      "Transition into a new industry or role",
    ],
    howWeHelp: [
      "STEM-designated programs for 36 months of OPT",
      "Resume and interview coaching",
      "Employer connections in your target industry",
    ],
    idealPrograms: ["STEM MS programs", "Bootcamp-aligned degrees", "Hybrid + CPT"],
  },
];

const ELIGIBILITY = [
  "A high school diploma or equivalent (for undergraduate) or a bachelor's degree (for graduate)",
  "A valid passport with at least 6 months of validity beyond your intended arrival",
  "Proof of financial support — bank statements, sponsor letters, or scholarship awards",
  "A genuine intent to study in the U.S. (the consular officer will ask about this)",
  "English proficiency — TOEFL, IELTS, Duolingo, or pathway/ESL placement",
  "A willingness to engage with our counselors and follow the process honestly",
];

type SuccessStory = {
  name: string;
  flag: string;
  initials: string;
  origin: string;
  destination: string;
  program: string;
  outcome: string;
  outcomeIcon: typeof Award;
  quote: string;
};

const SUCCESS_STORIES: SuccessStory[] = [
  {
    name: "Ayesha Rahman",
    flag: "🇧🇩",
    initials: "AR",
    origin: "Dhaka, Bangladesh",
    destination: "Wilmington, Delaware",
    program: "MS Information Systems · Harrisburg University",
    outcome: "F1 Visa Approved",
    outcomeIcon: Plane,
    quote:
      "From my first call to landing in Delaware — 11 weeks. UCSG matched me with a hybrid day-1 CPT program that fit my budget perfectly.",
  },
  {
    name: "Mohammed Tanvir",
    flag: "🇧🇩",
    initials: "MT",
    origin: "Chittagong, Bangladesh",
    destination: "Houston, Texas",
    program: "BS Computer Science Transfer · Trine University",
    outcome: "Transfer Accepted",
    outcomeIcon: GraduationCap,
    quote:
      "I had 64 credits and was terrified of losing them. UCSG's CRM mapped every credit — I transferred with zero lost time.",
  },
  {
    name: "Priya Sharma",
    flag: "🇳🇵",
    initials: "PS",
    origin: "Kathmandu, Nepal",
    destination: "New York, NY",
    program: "MBA · Monroe College",
    outcome: "$15k Scholarship Won",
    outcomeIcon: Award,
    quote:
      "The scholarship they secured covered nearly 40% of my MBA tuition. The counselors spoke my language — literally.",
  },
  {
    name: "Daniel Okoye",
    flag: "🇳🇬",
    initials: "DO",
    origin: "Lagos, Nigeria",
    destination: "San Jose, California",
    program: "MS Data Analytics · Westcliff University",
    outcome: "Day-1 CPT Secured",
    outcomeIcon: Briefcase,
    quote:
      "Day-1 CPT meant I could keep my remote SWE job while studying. UCSG knew exactly which programs qualified.",
  },
  {
    name: "Ling Wei",
    flag: "🇨🇳",
    initials: "LW",
    origin: "Shanghai, China",
    destination: "Boston, Massachusetts",
    program: "Pathway → MS Cybersecurity · Merrimack College",
    outcome: "OPT Extension Approved",
    outcomeIcon: Award,
    quote:
      "Started in the pathway program, transitioned to a STEM-designated MS, then got my OPT extension approved. Full circle with UCSG.",
  },
  {
    name: "Fatima Al-Sayed",
    flag: "🇦🇪",
    initials: "FA",
    origin: "Dubai, UAE",
    destination: "Daytona Beach, Florida",
    program: "BS Aviation · Daytona State College",
    outcome: "STEM OPT Approved",
    outcomeIcon: Plane,
    quote:
      "STEM OPT approved in 4 months. The onshore team handled every document — I just showed up to my interviews.",
  },
];

const STATS_INLINE = [
  { value: "5,000+", label: "Students Guided" },
  { value: "40+", label: "Countries Reached" },
  { value: "98%", label: "Satisfaction Rate" },
  { value: "120+", label: "Partner Institutions" },
];

export function StudentsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Who We Serve"
        title={
          <>
            Every student has a{" "}
            <span className="text-gradient-emerald">different story</span>
          </>
        }
        subtitle="Whatever your background or goal, we tailor a U.S. pathway that fits your budget, timeline, and ambition. Explore the six student personas we serve most often — and see if your story is among them."
        crumbs={[{ label: "Students" }]}
        badge={
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            {STATS_INLINE.map((s) => (
              <span key={s.label} className="flex items-center gap-1.5">
                <Star className="h-4 w-4 fill-accent text-accent" />
                <span className="font-bold text-foreground">{s.value}</span>
                {s.label}
              </span>
            ))}
          </div>
        }
      >
        <Link
          href="/?view=contact"
          className="group inline-flex h-12 items-center gap-2 rounded-full bg-primary px-6 text-sm font-bold text-primary-foreground shadow-premium transition-all hover:shadow-lg"
        >
          <Sparkles className="h-4 w-4" />
          Find your pathway — free call
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </PageHero>

      {/* Persona cards */}
      <section className="relative py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <StaggerGroup className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PERSONAS.map((p) => (
              <motion.article
                key={p.title}
                variants={staggerItem}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-border/60 bg-card p-7 shadow-premium"
              >
                <div className="pointer-events-none absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-primary/10 via-transparent to-accent/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="flex items-start justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/15 to-accent/15 text-primary transition-all duration-500 group-hover:from-primary group-hover:to-primary/70 group-hover:text-primary-foreground">
                    <p.icon className="h-7 w-7" />
                  </div>
                </div>
                <h3 className="mt-5 font-serif text-xl font-bold text-foreground">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {p.who}
                </p>

                <div className="mt-5">
                  <div className="text-[11px] font-semibold uppercase tracking-wide text-accent-foreground/80">
                    Their goals
                  </div>
                  <ul className="mt-2 space-y-1.5">
                    {p.goals.map((g) => (
                      <li
                        key={g}
                        className="flex items-start gap-2 text-xs leading-relaxed text-foreground/85"
                      >
                        <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                        {g}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-4">
                  <div className="text-[11px] font-semibold uppercase tracking-wide text-accent-foreground/80">
                    How we help
                  </div>
                  <ul className="mt-2 space-y-1.5">
                    {p.howWeHelp.map((h) => (
                      <li
                        key={h}
                        className="flex items-start gap-2 text-xs leading-relaxed text-muted-foreground"
                      >
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-5 border-t border-border/60 pt-4">
                  <div className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
                    Ideal programs
                  </div>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {p.idealPrograms.map((ip) => (
                      <span
                        key={ip}
                        className="rounded-full bg-secondary px-2.5 py-1 text-[10px] font-semibold text-secondary-foreground"
                      >
                        {ip}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Eligibility checklist */}
      <section className="relative bg-secondary/30 py-20 sm:py-28">
        <div className="absolute inset-0 -z-10 grid-pattern opacity-40" />
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Eligibility Checklist"
            title={
              <>
                Are you{" "}
                <span className="text-gradient-emerald">ready to start?</span>
              </>
            }
            description="UCSG serves students from all backgrounds. Here's the baseline of what you'll need to begin your U.S. education journey."
          />

          <Reveal delay={0.1}>
            <div className="mt-12 overflow-hidden rounded-2xl border border-border/60 bg-card p-6 shadow-premium sm:p-8">
              <div className="grid gap-4 sm:grid-cols-2">
                {ELIGIBILITY.map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.5, delay: i * 0.06 }}
                    className="flex items-start gap-3 rounded-xl border border-border/60 bg-background/50 p-4"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/15 text-xs font-bold text-primary">
                      {i + 1}
                    </span>
                    <span className="text-sm leading-relaxed text-foreground/90">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>
              <div className="mt-6 flex items-start gap-3 rounded-xl border border-accent/30 bg-accent/5 p-4">
                <HeartHandshake className="mt-0.5 h-5 w-5 shrink-0 text-accent-foreground" />
                <p className="text-sm leading-relaxed text-foreground/90">
                  <span className="font-bold">Not sure if you qualify?</span> Most
                  students check more boxes than they realize. Book a free
                  consultation and we'll honestly assess your situation — even if
                  the U.S. isn't the right fit, we'll tell you what is.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Success stories */}
      <section className="relative py-20 sm:py-28">
        <div className="absolute inset-0 -z-10 mesh-bg opacity-40" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Success Stories"
            title={
              <>
                Real students.{" "}
                <span className="text-gradient-emerald">Real outcomes.</span>
              </>
            }
            description="Six UCSG journeys — visas approved, scholarships won, CPT secured, transfers accepted. Each one started with a free call."
          />

          <StaggerGroup className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {SUCCESS_STORIES.map((s) => {
              const OutcomeIcon = s.outcomeIcon;
              return (
                <motion.article
                  key={s.name}
                  variants={staggerItem}
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                  className="group relative flex flex-col overflow-hidden rounded-2xl border border-border/60 bg-card shadow-premium"
                >
                  <div className="relative h-32 overflow-hidden bg-gradient-to-br from-primary/30 via-primary/20 to-accent/15">
                    <div className="absolute inset-0 grid-pattern opacity-25" />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                    <div className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-4 border-background/80 bg-gradient-to-br from-accent to-accent/70 font-serif text-2xl font-bold text-accent-foreground shadow-lg">
                      {s.initials}
                    </div>
                    <span className="absolute right-3 top-3 text-2xl" aria-hidden>
                      {s.flag}
                    </span>
                    <div className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-background/80 px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-primary backdrop-blur">
                      <BadgeCheck className="h-3 w-3" />
                      Verified
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-5">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="font-serif text-lg font-bold text-foreground">
                        {s.name}
                      </h3>
                      <div className="flex" aria-label="5 out of 5 stars">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star key={i} className="h-3.5 w-3.5 fill-accent text-accent" />
                        ))}
                      </div>
                    </div>
                    <div className="mt-1 text-xs font-medium text-muted-foreground">
                      {s.origin} → {s.destination}
                    </div>

                    <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-primary w-fit">
                      <OutcomeIcon className="h-3.5 w-3.5" />
                      {s.outcome}
                    </div>

                    <p className="mt-4 text-sm italic leading-relaxed text-foreground/90">
                      “{s.quote}”
                    </p>

                    <div className="mt-auto border-t border-border/60 pt-3">
                      <div className="text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">
                        Program
                      </div>
                      <div className="mt-0.5 text-sm font-bold text-foreground">
                        {s.program}
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </StaggerGroup>
        </div>
      </section>

      <CTASection
        title="Your story could be next."
        subtitle="Book a free consultation with a multilingual counselor today. In 30 minutes, you'll know exactly what your U.S. pathway looks like — and how to start."
        primaryLabel="Start your journey"
      />
    </PageShell>
  );
}
