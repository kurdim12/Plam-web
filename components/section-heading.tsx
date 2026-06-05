"use client";

import { useLocale } from "@/components/locale-provider";
import { Reveal } from "@/components/motion/reveal";
import type { Pair } from "@/lib/content";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  intro,
  tone = "light",
  align = "start",
  className,
  titleClassName,
}: {
  eyebrow: Pair;
  title: Pair;
  intro?: Pair;
  tone?: "light" | "dark";
  align?: "start" | "center";
  className?: string;
  titleClassName?: string;
}) {
  const { tp } = useLocale();
  const dark = tone === "dark";

  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      <Reveal>
        <span
          className={cn(
            "eyebrow text-gold",
            align === "center" && "justify-center"
          )}
        >
          <span className="h-px w-8 bg-gold/55" />
          {tp(eyebrow)}
        </span>
      </Reveal>
      <Reveal delay={0.05}>
        <h2
          className={cn(
            "font-display mt-5 text-balance text-[2.15rem] leading-[1.06] sm:text-4xl lg:text-[2.9rem]",
            dark ? "text-cream" : "text-ink",
            titleClassName
          )}
        >
          {tp(title)}
        </h2>
      </Reveal>
      {intro && (
        <Reveal delay={0.1}>
          <p
            className={cn(
              "mt-5 max-w-2xl text-pretty text-[1.05rem] leading-relaxed sm:text-lg",
              dark ? "text-cream/70" : "text-muted",
              align === "center" && "mx-auto"
            )}
          >
            {tp(intro)}
          </p>
        </Reveal>
      )}
    </div>
  );
}
