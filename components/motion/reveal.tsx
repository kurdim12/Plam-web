"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface RevealProps extends React.HTMLAttributes<HTMLDivElement> {
  /** stagger delay in seconds */
  delay?: number;
  /** travel distance in px */
  y?: number;
}

/**
 * Staggered fade-up on scroll. CSS-driven (via IntersectionObserver toggling a
 * class) so it degrades to fully-visible without JS and can't be left half-shown
 * by a throttled rAF. Pass delay={i * 0.08} for sequential reveals.
 */
export function Reveal({
  delay = 0,
  y = 24,
  className,
  children,
  style,
  ...rest
}: RevealProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 }
    );
    io.observe(el);
    // Safety net: never leave content hidden.
    const t = window.setTimeout(() => setVisible(true), 1400);
    return () => {
      io.disconnect();
      window.clearTimeout(t);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={cn("pg-reveal", visible && "is-visible", className)}
      style={
        {
          "--reveal-y": `${y}px`,
          "--reveal-delay": `${delay}s`,
          ...style,
        } as React.CSSProperties
      }
      {...rest}
    >
      {children}
    </div>
  );
}
