"use client";

import * as React from "react";

export type MousePosition = {
  /** X relative to element, in pixels (0 at left edge). */
  x: number;
  /** Y relative to element, in pixels (0 at top edge). */
  y: number;
  /** X normalized to [-0.5, 0.5] where 0 is element center. */
  nx: number;
  /** Y normalized to [-0.5, 0.5] where 0 is element center. */
  ny: number;
  /** Whether the pointer is currently hovering the element. */
  hovering: boolean;
};

const ZERO: MousePosition = { x: 0, y: 0, nx: 0, ny: 0, hovering: false };

/**
 * Tracks the pointer position relative to a referenced element.
 *
 * Attach the returned `ref` to the target element. State updates fire only on
 * `pointerenter` / `pointermove` / `pointerleave`, so it does not thrash
 * re-renders while idle.
 */
export function useMousePosition<T extends HTMLElement = HTMLDivElement>() {
  const ref = React.useRef<T | null>(null);
  const [position, setPosition] = React.useState<MousePosition>(ZERO);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handle = (e: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setPosition({
        x,
        y,
        nx: rect.width ? x / rect.width - 0.5 : 0,
        ny: rect.height ? y / rect.height - 0.5 : 0,
        hovering: true,
      });
    };
    const leave = () => setPosition((p) => ({ ...p, hovering: false }));

    el.addEventListener("pointermove", handle);
    el.addEventListener("pointerenter", handle);
    el.addEventListener("pointerleave", leave);
    return () => {
      el.removeEventListener("pointermove", handle);
      el.removeEventListener("pointerenter", handle);
      el.removeEventListener("pointerleave", leave);
    };
  }, []);

  return { ref, position };
}

export default useMousePosition;
