"use client";

import * as React from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { ArrowUp, Mail, MessageCircle, Plus, X } from "lucide-react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { COMPANY } from "@/lib/data";
import { cn } from "@/lib/utils";

/**
 * Floating contact dock — bottom-right expandable stack with:
 *   • WhatsApp (green)
 *   • Email (emerald)
 *   • Back-to-top (gold) with a circular scroll-progress ring
 *
 * Always-visible on mobile (compact), expands into a vertical stack on hover
 * (desktop). Honors `prefers-reduced-motion`. Replaces the standalone
 * `ScrollToTop` component.
 */
export function ContactDock() {
  const reduced = useReducedMotion();
  const [open, setOpen] = React.useState(false);
  const [showTop, setShowTop] = React.useState(false);

  // Scroll progress (0–1) for the circular progress ring.
  const progressMv = useMotionValue(0);
  const progress = useSpring(progressMv, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  React.useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docH =
        document.documentElement.scrollHeight - window.innerHeight;
      const p = docH > 0 ? scrollTop / docH : 0;
      progressMv.set(p);
      setShowTop(scrollTop > 600);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [progressMv]);

  const scrollTop = () => {
    if (reduced) {
      window.scrollTo(0, 0);
      return;
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Ring geometry
  const R = 22;
  const C = 2 * Math.PI * R;
  const offset = useTransform(progress, (v) => C * (1 - v));

  const whatsappHref = `https://wa.me/1${COMPANY.phone.replace(/[^0-9]/g, "").slice(1)}`;
  const emailHref = `mailto:${COMPANY.email}`;

  const actions = [
    {
      key: "whatsapp",
      label: "Chat on WhatsApp",
      href: whatsappHref,
      icon: MessageCircle,
      className:
        "bg-[#25D366] text-white hover:brightness-110 shadow-[0_8px_24px_-6px_oklch(0.7_0.2_145/0.6)]",
      external: true,
    },
    {
      key: "email",
      label: "Email UCSG",
      href: emailHref,
      icon: Mail,
      className:
        "bg-primary text-primary-foreground hover:brightness-110 shadow-[0_8px_24px_-6px_oklch(0.55_0.11_165/0.6)]",
      external: false,
    },
  ];

  return (
    <div
      className="fixed bottom-5 right-5 z-[70] flex flex-col items-end gap-2.5 lg:bottom-7 lg:right-7"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {/* Action stack — reveals on hover (desktop) */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col items-end gap-2.5"
          >
            {actions.map((a, i) => (
              <motion.a
                key={a.key}
                href={a.href}
                target={a.external ? "_blank" : undefined}
                rel={a.external ? "noopener noreferrer" : undefined}
                aria-label={a.label}
                initial={{ opacity: 0, y: 12, scale: 0.6 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 12, scale: 0.6 }}
                transition={{
                  type: "spring",
                  stiffness: 380,
                  damping: 24,
                  delay: i * 0.04,
                }}
                className={cn(
                  "group flex h-12 items-center gap-2 rounded-full pl-3 pr-4 text-sm font-semibold shadow-premium",
                  a.className
                )}
              >
                <a.icon className="h-5 w-5" />
                <span className="max-w-0 overflow-hidden whitespace-nowrap opacity-0 transition-all duration-300 group-hover:max-w-[140px] group-hover:opacity-100">
                  {a.label}
                </span>
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Back-to-top — appears after scroll */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            type="button"
            onClick={scrollTop}
            aria-label="Scroll back to top"
            initial={{ opacity: 0, scale: 0.6, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.6, y: 12 }}
            transition={{ type: "spring", stiffness: 320, damping: 24 }}
            className={cn(
              "relative flex h-12 w-12 items-center justify-center rounded-full",
              "border border-accent/40 bg-accent/15 text-accent-foreground shadow-premium backdrop-blur",
              "transition-colors hover:bg-accent/30",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            )}
          >
            <svg
              className="pointer-events-none absolute inset-0 -rotate-90"
              viewBox="0 0 56 56"
              aria-hidden
            >
              <circle
                cx="28"
                cy="28"
                r={R}
                fill="none"
                stroke="oklch(0.82 0.13 78 / 0.18)"
                strokeWidth="2.5"
              />
              <motion.circle
                cx="28"
                cy="28"
                r={R}
                fill="none"
                stroke="oklch(0.85 0.14 80)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeDasharray={C}
                style={{ strokeDashoffset: offset }}
              />
            </svg>
            <motion.span
              animate={{ y: [0, -2, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowUp className="h-5 w-5" />
            </motion.span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Main toggle FAB — always visible */}
      <motion.button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close contact options" : "Open contact options"}
        aria-expanded={open}
        whileHover={{ scale: reduced ? 1 : 1.05 }}
        whileTap={{ scale: reduced ? 1 : 0.95 }}
        className={cn(
          "flex h-14 w-14 items-center justify-center rounded-full",
          "bg-gradient-to-br from-primary to-primary/80 text-primary-foreground",
          "shadow-[0_12px_36px_-8px_oklch(0.55_0.11_165/0.6)]",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        )}
      >
        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.span
              key="close"
              initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
              animate={{ rotate: 0, opacity: 1, scale: 1 }}
              exit={{ rotate: 90, opacity: 0, scale: 0.6 }}
              transition={{ duration: 0.2 }}
            >
              <X className="h-6 w-6" />
            </motion.span>
          ) : (
            <motion.span
              key="plus"
              initial={{ rotate: 90, opacity: 0, scale: 0.6 }}
              animate={{ rotate: 0, opacity: 1, scale: 1 }}
              exit={{ rotate: -90, opacity: 0, scale: 0.6 }}
              transition={{ duration: 0.2 }}
            >
              <Plus className="h-6 w-6" />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}

export default ContactDock;
