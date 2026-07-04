"use client";

import * as React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, CalendarCheck, Sparkles } from "lucide-react";
import { COMPANY } from "@/lib/data";

/**
 * MobileStickyCTA — a slim full-width bottom bar, mobile-only (hidden on
 * lg+). Keeps the primary "Free Consultation" CTA + tap-to-call within one
 * thumb-reach at all times, matching a pattern every top study-abroad
 * competitor uses.
 *
 * Placement notes:
 *   • z-[55] — below the chat widget launcher (z-[70]) and contact dock
 *     (z-[70]), which on mobile are bumped above this bar via their own
 *     `bottom-20 lg:bottom-5` offset.
 *   • Honors iOS safe-area via `pb-[env(safe-area-inset-bottom)]`.
 *   • Appears after the user scrolls past the hero (so it doesn't fight
 *     with the hero's own CTA on first paint).
 */
export function MobileStickyCTA() {
  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => {
      // Show after the user has scrolled ~one viewport (past the hero).
      setShow(window.scrollY > window.innerHeight * 0.6);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ type: "spring", stiffness: 320, damping: 30 }}
          className="fixed inset-x-0 bottom-0 z-[55] lg:hidden"
          role="region"
          aria-label="Quick actions"
        >
          <div className="border-t border-border/60 bg-background/90 backdrop-blur-lg shadow-[0_-8px_24px_-12px_rgba(0,0,0,0.25)]">
            <div
              className="flex items-center gap-2.5 px-3 py-2.5"
              style={{ paddingBottom: "calc(0.625rem + env(safe-area-inset-bottom))" }}
            >
              <a
                href={COMPANY.phoneHref}
                aria-label={`Call UCSG at ${COMPANY.phone}`}
                className="flex h-11 flex-1 items-center justify-center gap-1.5 rounded-full border border-border/70 bg-background/60 text-sm font-semibold text-foreground transition-colors hover:border-primary/40 hover:text-primary"
              >
                <Phone className="h-4 w-4 text-primary" />
                Call
              </a>
              <Link
                href="/?view=contact"
                className="flex h-11 flex-[1.6] items-center justify-center gap-1.5 rounded-full bg-primary text-sm font-bold text-primary-foreground shadow-premium transition-all hover:shadow-lg active:scale-[0.98]"
              >
                <Sparkles className="h-4 w-4" />
                Free Consultation
                <CalendarCheck className="h-4 w-4 opacity-80" />
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default MobileStickyCTA;
