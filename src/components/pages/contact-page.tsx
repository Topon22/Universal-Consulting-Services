"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  MessageCircle,
  Clock,
  ArrowRight,
  Building2,
  Mail,
} from "lucide-react";
import { PageShell, PageHero } from "@/components/pages/page-shell";
import { Reveal, SectionHeading } from "@/components/animation";
import { Contact } from "@/components/sections/contact";
import { COMPANY, LOCATIONS } from "@/lib/data";

const WHATSAPP_HREF = `https://wa.me/1${COMPANY.phone.replace(/[^0-9]/g, "").slice(1)}`;

export function ContactPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Get In Touch"
        title={
          <>
            Talk to a counselor{" "}
            <span className="text-gradient-emerald">today</span>
          </>
        }
        subtitle="Book a free consultation with a multilingual UCSG counselor and start your U.S. education journey. No fees, no pressure — just honest, transparent guidance from people who've walked this path themselves."
        crumbs={[{ label: "Contact" }]}
        badge={
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4 text-primary" />
              24-hour reply guarantee
            </span>
            <span className="flex items-center gap-1.5">
              <MessageCircle className="h-4 w-4 text-primary" />
              Multilingual counselors
            </span>
            <span className="flex items-center gap-1.5">
              <Mail className="h-4 w-4 text-primary" />
              {COMPANY.email}
            </span>
          </div>
        }
      >
        <div className="flex flex-wrap items-center gap-3">
          <a
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex h-12 items-center gap-2 rounded-full bg-[#25D366] px-6 text-sm font-bold text-white shadow-premium transition-all hover:shadow-lg hover:brightness-105"
          >
            <MessageCircle className="h-4 w-4" />
            Chat on WhatsApp
          </a>
          <a
            href={COMPANY.phoneHref}
            className="inline-flex h-12 items-center gap-2 rounded-full border border-border/70 bg-background/60 px-6 text-sm font-semibold text-foreground backdrop-blur transition-colors hover:border-primary/40"
          >
            <Phone className="h-4 w-4" />
            {COMPANY.phone}
          </a>
        </div>
      </PageHero>

      {/* Form + sidebar info (reuses the existing Contact section's form & FAQ) */}
      <Contact />

      {/* Locations block + Map placeholder */}
      <section className="relative bg-secondary/30 py-20 sm:py-28">
        <div className="absolute inset-0 -z-10 grid-pattern opacity-40" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Our Locations"
            title={
              <>
                Two offices,{" "}
                <span className="text-gradient-emerald">one mission</span>
              </>
            }
            description="A Delaware HQ for onshore U.S. aftercare, and a Dhaka regional office for South Asian students and families. Wherever you are, we're nearby."
          />

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {LOCATIONS.map((loc, i) => (
              <motion.div
                key={loc.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative overflow-hidden rounded-2xl border border-border/60 bg-card p-6 shadow-premium sm:p-8"
              >
                <div className="flex items-start gap-5">
                  <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-4xl">
                    {loc.flag}
                  </span>
                  <div className="min-w-0">
                    <div className="text-xs font-semibold uppercase tracking-wide text-accent-foreground/80">
                      {loc.role}
                    </div>
                    <h3 className="mt-1 font-serif text-2xl font-bold text-foreground">
                      {loc.label}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {loc.role === "Global Headquarters"
                        ? "Our onshore U.S. office — meet our team in person, get help with aftercare, banking, SIM cards, and your first weeks on the ground."
                        : "Our regional partner office — multilingual counselors available online and onsite to serve students and families across South Asia."}
                    </p>
                  </div>
                </div>

                {/* Map placeholder */}
                <div className="relative mt-6 h-40 overflow-hidden rounded-xl border border-border/60 bg-gradient-to-br from-primary/15 via-accent/10 to-primary/5">
                  <div className="absolute inset-0 grid-pattern opacity-40" />
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="flex flex-col items-center gap-2">
                      <motion.div
                        animate={{ y: [0, -8, 0] }}
                        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                        className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg"
                      >
                        <MapPin className="h-6 w-6" />
                      </motion.div>
                      <div className="rounded-full bg-background/80 px-3 py-1 text-xs font-bold text-foreground backdrop-blur">
                        {loc.label}
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-full bg-background/70 px-2.5 py-1 text-[10px] font-medium text-muted-foreground backdrop-blur">
                    <Building2 className="h-3 w-3" />
                    UCSG Office
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WhatsApp + quick contact CTA */}
      <section className="relative py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-[#25D366]/30 bg-gradient-to-br from-[#25D366]/15 via-primary/10 to-accent/10 p-8 shadow-premium sm:p-10">
              <div className="absolute inset-0 -z-10 grid-pattern opacity-20" />
              <div className="grid items-center gap-6 lg:grid-cols-[1fr_auto]">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-[#25D366]/15 px-3 py-1 text-xs font-bold uppercase tracking-wide text-[#25D366]">
                    <MessageCircle className="h-3.5 w-3.5" />
                    Quick Contact
                  </div>
                  <h3 className="mt-4 font-serif text-2xl font-bold text-foreground sm:text-3xl">
                    Prefer to chat? Hit us on WhatsApp.
                  </h3>
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
                    Our multilingual counselors are standing by. Drop us a
                    message on WhatsApp and we'll get back to you within hours —
                    no form-filling required.
                  </p>
                </div>
                <a
                  href={WHATSAPP_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex h-12 items-center gap-2 rounded-full bg-[#25D366] px-7 text-base font-bold text-white shadow-lg transition-all hover:shadow-xl hover:brightness-105"
                >
                  <MessageCircle className="h-5 w-5" />
                  Open WhatsApp
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
