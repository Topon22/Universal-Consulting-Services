"use client";

import * as React from "react";
import Link from "next/link";
import {
  Facebook,
  Linkedin,
  Twitter,
  Instagram,
  Youtube,
  Send,
  MapPin,
  Phone,
  Mail,
  ArrowUp,
  Heart,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { COMPANY, NAV_LINKS, SERVICES } from "@/lib/data";
import { toast } from "sonner";

export function Footer() {
  const [email, setEmail] = React.useState("");

  const onSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }
    toast.success("Subscribed!", {
      description: "You'll receive study-abroad insights from UCSG.",
    });
    setEmail("");
  };

  const socials = [
    { icon: Facebook, label: "Facebook", href: "https://facebook.com" },
    { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
    { icon: Twitter, label: "Twitter", href: "https://twitter.com" },
    { icon: Instagram, label: "Instagram", href: "https://instagram.com" },
    { icon: Youtube, label: "YouTube", href: "https://youtube.com" },
  ];

  const serviceLinks = SERVICES.slice(0, 6).map((s) => ({
    label: s.title,
    href: "#services",
  }));

  return (
    <footer className="relative mt-auto overflow-hidden border-t border-border/60 bg-secondary/40">
      <div className="absolute inset-0 -z-10 grid-pattern opacity-30" />
      <div className="absolute -top-24 left-1/2 -z-10 h-48 w-[80%] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />

      {/* Newsletter */}
      <div className="border-b border-border/60">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
          <div className="grid items-center gap-6 rounded-3xl border border-border/60 bg-card p-6 shadow-sm sm:p-8 lg:grid-cols-2 lg:gap-10">
            <div>
              <h3 className="font-serif text-2xl font-bold text-foreground sm:text-3xl">
                Stay ahead of your U.S. education journey
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Scholarship alerts, CPT/OPT updates, and admissions tips — straight
                to your inbox. No spam, ever.
              </p>
            </div>
            <form onSubmit={onSubscribe} className="flex flex-col gap-3 sm:flex-row">
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="h-12 flex-1"
                aria-label="Email address"
              />
              <Button
                type="submit"
                className="h-12 rounded-full bg-primary px-6 font-semibold shadow-premium hover:shadow-lg"
              >
                <Send className="h-4 w-4" />
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Main */}
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Link href="#home" className="flex items-center gap-2.5">
              <span className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary/70 shadow-md">
                <span className="font-serif text-lg font-bold text-primary-foreground">
                  U
                </span>
                <span className="absolute -right-0.5 -top-0.5 h-3 w-3 rounded-full bg-accent ring-2 ring-background" />
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-serif text-lg font-bold tracking-tight text-foreground">
                  UCS Group
                </span>
                <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
                  Universal Consulting Services
                </span>
              </span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Founded in {COMPANY.founded} by {COMPANY.founder}, UCSG is a trusted
              resource for international students pursuing their education in the
              United States — built on trust, transparency, and your success.
            </p>

            <div className="mt-6 space-y-2.5 text-sm">
              <a
                href={COMPANY.phoneHref}
                className="flex items-center gap-2.5 text-muted-foreground transition-colors hover:text-primary"
              >
                <Phone className="h-4 w-4 text-primary" />
                {COMPANY.phone}
              </a>
              <a
                href={`mailto:${COMPANY.email}`}
                className="flex items-center gap-2.5 text-muted-foreground transition-colors hover:text-primary"
              >
                <Mail className="h-4 w-4 text-primary" />
                {COMPANY.email}
              </a>
              <div className="flex items-center gap-2.5 text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                {COMPANY.address}
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-8">
            <FooterCol title="Navigate" links={NAV_LINKS.map((l) => ({ label: l.label, href: l.href }))} />
            <FooterCol title="Services" links={serviceLinks} />
            <div>
              <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-foreground">
                Connect
              </h4>
              <div className="mt-4 flex flex-wrap gap-2">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-border/70 bg-background/60 text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:bg-primary hover:text-primary-foreground"
                  >
                    <s.icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
              <div className="mt-6 rounded-xl border border-border/60 bg-background/50 p-4">
                <div className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Need help now?
                </div>
                <p className="mt-1 text-sm text-foreground">
                  Book a free consultation with a multilingual counselor today.
                </p>
                <Button
                  asChild
                  className="mt-3 h-9 w-full rounded-full text-sm"
                >
                  <Link href="#contact">Get Started</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border/60">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row sm:px-6">
          <p className="text-center text-xs text-muted-foreground sm:text-left">
            © {new Date().getFullYear()} Universal Consulting Services Group. All
            rights reserved.
          </p>
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            Built with
            <Heart className="h-3 w-3 fill-accent text-accent" />
            for international students
          </div>
          <a
            href="#home"
            className="flex items-center gap-1.5 rounded-full border border-border/70 px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
          >
            Back to top
            <ArrowUp className="h-3 w-3" />
          </a>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-foreground">
        {title}
      </h4>
      <ul className="mt-4 space-y-2.5">
        {links.map((l, i) => (
          <li key={`${l.label}-${i}`}>
            <Link
              href={l.href}
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
