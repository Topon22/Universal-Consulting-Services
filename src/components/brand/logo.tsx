import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

type LogoProps = {
  /** show the wordmark next to the emblem */
  withText?: boolean;
  /** emblem size in px */
  size?: number;
  /** wordmark variant */
  variant?: "navbar" | "footer" | "compact";
  className?: string;
  href?: string;
};

/**
 * Universal Consulting Services Group brand lockup.
 * Uses the official emblem (globe + arrow + swoosh) with a transparent
 * background so it reads cleanly on both light and dark surfaces.
 */
export function Logo({
  withText = true,
  size = 40,
  variant = "navbar",
  className,
  href = "#home",
}: LogoProps) {
  const emblem = (
    <span
      className="relative inline-flex shrink-0 items-center justify-center"
      style={{ width: size, height: size }}
    >
      <Image
        src="/ucs-logo-transparent.png"
        alt="Universal Consulting Services Group emblem"
        width={size}
        height={size}
        priority
        className="h-full w-full object-contain drop-shadow-[0_2px_8px_rgba(0,0,0,0.18)] transition-transform duration-500 group-hover:rotate-[8deg] group-hover:scale-105"
      />
    </span>
  );

  const text = (
    <span className="flex flex-col leading-none">
      {variant === "footer" ? (
        <>
          <span className="font-serif text-lg font-bold tracking-tight text-foreground">
            UCS Group
          </span>
          <span className="mt-1 text-[10px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
            Universal Consulting Services
          </span>
        </>
      ) : (
        <>
          <span className="font-serif text-base font-bold tracking-tight text-foreground">
            UCS Group
          </span>
          <span className="mt-0.5 text-[10px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
            Study in the USA
          </span>
        </>
      )}
    </span>
  );

  const content = (
    <span className={cn("group flex items-center gap-2.5", className)}>
      {emblem}
      {withText && text}
    </span>
  );

  if (!href) return content;

  return (
    <Link href={href} aria-label="Universal Consulting Services Group — home">
      {content}
    </Link>
  );
}

/** Emblem-only logo (no wordmark) */
export function LogoMark({ size = 40, className }: { size?: number; className?: string }) {
  return (
    <span
      className={cn("relative inline-flex shrink-0 items-center justify-center group", className)}
      style={{ width: size, height: size }}
    >
      <Image
        src="/ucs-logo-transparent.png"
        alt="UCSG emblem"
        width={size}
        height={size}
        priority
        className="h-full w-full object-contain transition-transform duration-500 group-hover:rotate-[8deg] group-hover:scale-105"
      />
    </span>
  );
}
