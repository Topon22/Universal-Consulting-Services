"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";
import {
  MapPin,
  Phone,
  Mail,
  Send,
  Loader2,
  CheckCircle2,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { COMPANY, INTEREST_OPTIONS, ENGLISH_LEVELS, FAQS } from "@/lib/data";
import { Reveal } from "@/components/animation";
import { cn } from "@/lib/utils";

type FormState = {
  fullName: string;
  email: string;
  whatsapp: string;
  nationality: string;
  age: string;
  tuitionBudget: string;
  englishLevel: string;
  interest: string;
  message: string;
};

const empty: FormState = {
  fullName: "",
  email: "",
  whatsapp: "",
  nationality: "",
  age: "",
  tuitionBudget: "",
  englishLevel: "",
  interest: "",
  message: "",
};

export function Contact() {
  const [form, setForm] = React.useState<FormState>(empty);
  const [loading, setLoading] = React.useState(false);
  const [done, setDone] = React.useState(false);
  const [errors, setErrors] = React.useState<Partial<Record<keyof FormState, string>>>({});
  const [openFaq, setOpenFaq] = React.useState<number | null>(0);

  const update = (key: keyof FormState, value: string) => {
    setForm((p) => ({ ...p, [key]: value }));
    setErrors((p) => ({ ...p, [key]: undefined }));
  };

  const validate = () => {
    const e: Partial<Record<keyof FormState, string>> = {};
    if (!form.fullName.trim()) e.fullName = "Please enter your full name.";
    if (!form.email.trim()) e.email = "Please enter your email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Please enter a valid email address.";
    if (!form.interest) e.interest = "Please select an area of interest.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) {
      toast.error("Please fix the highlighted fields.");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json().catch(() => null);
      if (res.ok && data?.ok) {
        toast.success("Thanks for submitting!", {
          description: "Our team will reach out within 24 hours.",
        });
        setForm(empty);
        setDone(true);
      } else {
        toast.error(data?.error || "Something went wrong. Please try again.");
      }
    } catch {
      toast.error("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  const contactCards = [
    {
      icon: MapPin,
      label: "Visit Us",
      value: COMPANY.address,
      hint: "Onshore U.S. office",
    },
    {
      icon: Phone,
      label: "Call Us",
      value: COMPANY.phone,
      href: COMPANY.phoneHref,
      hint: "Mon–Fri, 9am–6pm EST",
    },
    {
      icon: Mail,
      label: "Email Us",
      value: COMPANY.email,
      href: `mailto:${COMPANY.email}`,
      hint: "We reply within 24h",
    },
  ];

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 -z-10 mesh-bg opacity-50" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: info + FAQ */}
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-accent-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                Get In Touch
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-5 font-serif text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl">
                Let's build your{" "}
                <span className="text-gradient-emerald">brighter future</span> in
                the United States
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                Fill out the form and a multilingual counselor will reach out
                within 24 hours. No fees, no pressure — just honest, transparent
                guidance.
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="mt-8 space-y-3">
                {contactCards.map((c) => {
                  const Inner = (
                    <div className="group flex items-start gap-4 rounded-2xl border border-border/60 bg-card p-4 shadow-sm transition-all hover:border-primary/30 hover:shadow-premium">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                        <c.icon className="h-5 w-5" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
                          {c.label}
                        </div>
                        <div className="truncate font-semibold text-foreground">
                          {c.value}
                        </div>
                        <div className="text-xs text-muted-foreground">{c.hint}</div>
                      </div>
                    </div>
                  );
                  return c.href ? (
                    <a key={c.label} href={c.href} className="block">
                      {Inner}
                    </a>
                  ) : (
                    <div key={c.label}>{Inner}</div>
                  );
                })}
              </div>
            </Reveal>

            {/* FAQ */}
            <Reveal delay={0.32}>
              <div className="mt-10">
                <h3 className="font-serif text-lg font-bold text-foreground">
                  Frequently asked
                </h3>
                <div className="mt-4 space-y-2">
                  {FAQS.map((faq, i) => {
                    const isOpen = openFaq === i;
                    return (
                      <div
                        key={faq.q}
                        className="overflow-hidden rounded-xl border border-border/60 bg-card"
                      >
                        <button
                          onClick={() => setOpenFaq(isOpen ? null : i)}
                          className="flex w-full items-center justify-between gap-3 px-4 py-3.5 text-left"
                          aria-expanded={isOpen}
                        >
                          <span className="text-sm font-semibold text-foreground">
                            {faq.q}
                          </span>
                          <ChevronDown
                            className={cn(
                              "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-300",
                              isOpen && "rotate-180 text-primary"
                            )}
                          />
                        </button>
                        <AnimatePresence initial={false}>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                            >
                              <p className="px-4 pb-4 text-sm leading-relaxed text-muted-foreground">
                                {faq.a}
                              </p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right: form */}
          <Reveal delay={0.2}>
            <div className="relative">
              <div className="absolute -inset-3 -z-10 rounded-3xl bg-gradient-to-br from-primary/15 via-accent/10 to-primary/5 blur-2xl" />
              <div className="rounded-3xl border border-border/60 bg-card p-6 shadow-premium sm:p-8">
                <AnimatePresence mode="wait">
                  {done ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex min-h-[420px] flex-col items-center justify-center text-center"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 260, damping: 18, delay: 0.1 }}
                        className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10"
                      >
                        <CheckCircle2 className="h-10 w-10 text-primary" />
                      </motion.div>
                      <h3 className="mt-6 font-serif text-2xl font-bold text-foreground">
                        Thank you!
                      </h3>
                      <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                        Your inquiry has been received. One of our multilingual
                        counselors will reach out within 24 hours.
                      </p>
                      <Button
                        className="mt-6 rounded-full"
                        variant="outline"
                        onClick={() => setDone(false)}
                      >
                        Submit another inquiry
                      </Button>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={onSubmit}
                      className="space-y-4"
                    >
                      <div className="mb-2 flex items-center justify-between">
                        <h3 className="font-serif text-xl font-bold text-foreground">
                          Tell us about you
                        </h3>
                        <span className="text-xs text-muted-foreground">
                          * Required
                        </span>
                      </div>

                      <Field label="Full Name" required error={errors.fullName}>
                        <Input
                          value={form.fullName}
                          onChange={(e) => update("fullName", e.target.value)}
                          placeholder="Jane Doe"
                          className="h-11"
                        />
                      </Field>

                      <Field label="Email" required error={errors.email}>
                        <Input
                          type="email"
                          value={form.email}
                          onChange={(e) => update("email", e.target.value)}
                          placeholder="jane@example.com"
                          className="h-11"
                        />
                      </Field>

                      <div className="grid gap-4 sm:grid-cols-2">
                        <Field label="WhatsApp Number">
                          <Input
                            value={form.whatsapp}
                            onChange={(e) => update("whatsapp", e.target.value)}
                            placeholder="+880 1XXX-XXXXXX"
                            className="h-11"
                          />
                        </Field>
                        <Field label="Nationality">
                          <Input
                            value={form.nationality}
                            onChange={(e) => update("nationality", e.target.value)}
                            placeholder="Bangladesh"
                            className="h-11"
                          />
                        </Field>
                      </div>

                      <div className="grid gap-4 sm:grid-cols-2">
                        <Field label="Age">
                          <Input
                            value={form.age}
                            onChange={(e) => update("age", e.target.value)}
                            placeholder="22"
                            className="h-11"
                          />
                        </Field>
                        <Field label="Tuition Budget / Year (USD)">
                          <Input
                            value={form.tuitionBudget}
                            onChange={(e) => update("tuitionBudget", e.target.value)}
                            placeholder="$15,000"
                            className="h-11"
                          />
                        </Field>
                      </div>

                      <Field label="English Level">
                        <Select
                          value={form.englishLevel}
                          onValueChange={(v) => update("englishLevel", v)}
                        >
                          <SelectTrigger className="h-11 w-full">
                            <SelectValue placeholder="Select your level" />
                          </SelectTrigger>
                          <SelectContent>
                            {ENGLISH_LEVELS.map((lvl) => (
                              <SelectItem key={lvl} value={lvl}>
                                {lvl}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </Field>

                      <Field
                        label="I Want To Know More About..."
                        required
                        error={errors.interest}
                      >
                        <Select
                          value={form.interest}
                          onValueChange={(v) => update("interest", v)}
                        >
                          <SelectTrigger className="h-11 w-full">
                            <SelectValue placeholder="Select an area of interest" />
                          </SelectTrigger>
                          <SelectContent>
                            {INTEREST_OPTIONS.map((opt) => (
                              <SelectItem key={opt} value={opt}>
                                {opt}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </Field>

                      <Field label="Anything else?">
                        <Textarea
                          value={form.message}
                          onChange={(e) => update("message", e.target.value)}
                          placeholder="Tell us about your goals, timeline, or any questions…"
                          className="min-h-[110px] resize-none"
                        />
                      </Field>

                      <Button
                        type="submit"
                        disabled={loading}
                        className="group h-12 w-full rounded-full bg-primary text-base font-semibold shadow-premium hover:shadow-lg disabled:opacity-70"
                      >
                        {loading ? (
                          <>
                            <Loader2 className="h-4 w-4 animate-spin" />
                            Sending…
                          </>
                        ) : (
                          <>
                            <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                            Send Inquiry
                          </>
                        )}
                      </Button>

                      <p className="text-center text-xs text-muted-foreground">
                        By submitting, you agree to be contacted by UCSG. We never
                        share your information.
                      </p>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  required,
  error,
  children,
}: {
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-1.5">
      <Label className="text-sm font-medium text-foreground">
        {label} {required && <span className="text-accent">*</span>}
      </Label>
      {children}
      {error && <p className="text-xs font-medium text-destructive">{error}</p>}
    </div>
  );
}
