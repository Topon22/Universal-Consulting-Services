"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import { SERVICES } from "@/lib/data";
import { SectionHeading, StaggerGroup, staggerItem } from "@/components/animation";
import { cn } from "@/lib/utils";

export function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="What We Do"
          title={
            <>
              Everything you need to{" "}
              <span className="text-gradient-emerald">study in the USA</span>
            </>
          }
          description="From your first consultation to landing on campus and beyond — UCSG delivers end-to-end guidance across admissions, scholarships, visas, and career pathways."
        />

        <StaggerGroup className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service) => (
            <motion.article
              key={service.title}
              variants={staggerItem}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-border/60 bg-card p-6 shadow-premium"
            >
              {/* hover gradient ring */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(400px circle at 50% 0%, oklch(0.44 0.095 172 / 0.08), transparent 70%)",
                }}
              />
              {service.tag && (
                <span className="absolute right-4 top-4 rounded-full bg-accent/15 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-accent-foreground">
                  {service.tag}
                </span>
              )}
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-500 group-hover:bg-primary group-hover:text-primary-foreground">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-serif text-lg font-bold text-foreground">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
              <ul className="mt-4 space-y-1.5">
                {service.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-2 text-xs font-medium text-foreground/80"
                  >
                    <Check className="h-3.5 w-3.5 shrink-0 text-accent" />
                    {f}
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex items-center gap-1 text-sm font-semibold text-primary opacity-0 transition-all duration-300 group-hover:opacity-100">
                Learn more
                <ArrowUpRight className="h-3.5 w-3.5" />
              </div>
            </motion.article>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
