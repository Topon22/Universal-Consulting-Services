"use client";

import * as React from "react";
import Link from "next/link";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, Phone, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetTitle,
} from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/theme-toggle";
import { NAV_LINKS, COMPANY } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const [active, setActive] = React.useState<string>("#home");
  const [open, setOpen] = React.useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (v) => {
    setScrolled(v > 24);
  });

  /* Scroll spy */
  React.useEffect(() => {
    const sections = NAV_LINKS.map((l) => document.querySelector(l.href)).filter(
      Boolean
    ) as HTMLElement[];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4"
    >
      <nav
        className={cn(
          "mx-auto flex max-w-7xl items-center justify-between rounded-2xl px-4 py-2.5 transition-all duration-500 sm:px-6",
          scrolled
            ? "glass shadow-premium"
            : "border border-transparent bg-transparent"
        )}
      >
        {/* Logo */}
        <Link href="#home" className="group flex items-center gap-2.5">
          <span className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary/70 shadow-md">
            <span className="font-serif text-lg font-bold text-primary-foreground">
              U
            </span>
            <span className="absolute -right-0.5 -top-0.5 h-3 w-3 rounded-full bg-accent ring-2 ring-background" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-serif text-base font-bold tracking-tight text-foreground">
              UCS Group
            </span>
            <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
              Study in the USA
            </span>
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors",
                active === link.href
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {link.label}
              {active === link.href && (
                <motion.span
                  layoutId="nav-active"
                  className="absolute inset-0 -z-10 rounded-full bg-primary/10"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href={COMPANY.phoneHref}
            className="hidden items-center gap-2 rounded-full border border-border/70 px-3.5 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary/40 hover:text-primary sm:flex"
          >
            <Phone className="h-3.5 w-3.5" />
            {COMPANY.phone}
          </a>
          <Button
            asChild
            className="hidden rounded-full bg-primary px-5 text-sm shadow-sm hover:shadow-md md:inline-flex"
          >
            <Link href="#contact">
              <Sparkles className="h-3.5 w-3.5" />
              Free Consultation
            </Link>
          </Button>

          {/* Mobile menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button
                aria-label="Open menu"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border/70 bg-background/60 text-foreground lg:hidden"
              >
                <Menu className="h-4 w-4" />
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[300px] border-l-primary/15 bg-background p-0"
            >
              <div className="flex items-center justify-between border-b border-border/60 p-5">
                <SheetTitle className="flex items-center gap-2.5">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary/70">
                    <span className="font-serif text-base font-bold text-primary-foreground">
                      U
                    </span>
                  </span>
                  <span className="font-serif text-base font-bold">UCS Group</span>
                </SheetTitle>
              </div>
              <div className="flex flex-col gap-1 p-4">
                {NAV_LINKS.map((link, i) => (
                  <SheetClose asChild key={link.href}>
                    <motion.div
                      initial={{ opacity: 0, x: 24 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 + i * 0.05 }}
                    >
                      <Link
                        href={link.href}
                        className="flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium text-foreground transition-colors hover:bg-primary/10 hover:text-primary"
                      >
                        {link.label}
                        <span className="text-xs text-muted-foreground">
                          0{i + 1}
                        </span>
                      </Link>
                    </motion.div>
                  </SheetClose>
                ))}
              </div>
              <div className="mt-auto space-y-3 border-t border-border/60 p-5">
                <Button asChild className="w-full rounded-xl">
                  <SheetClose asChild>
                    <Link href="#contact">
                      <Sparkles className="h-4 w-4" />
                      Free Consultation
                    </Link>
                  </SheetClose>
                </Button>
                <a
                  href={COMPANY.phoneHref}
                  className="flex items-center justify-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary"
                >
                  <Phone className="h-3.5 w-3.5" />
                  {COMPANY.phone}
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>

      <AnimatePresence>
        {scrolled && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="sr-only"
          />
        )}
      </AnimatePresence>
    </motion.header>
  );
}
