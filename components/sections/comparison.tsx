"use client";

import { Check, X } from "lucide-react";
import { useLocale } from "@/components/locale-provider";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Grain } from "@/components/decor";
import { comparison } from "@/lib/content";

export function Comparison() {
  const { tp } = useLocale();

  return (
    <section id="why" className="section scroll-mt-24 bg-cream">
      <div className="container">
        <SectionHeading
          eyebrow={comparison.eyebrow}
          title={comparison.h2}
          align="center"
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 md:items-stretch">
          {/* Traditional methods */}
          <Reveal>
            <div className="h-full rounded-card-lg border border-error/25 bg-error/[0.04] p-7 sm:p-8">
              <h3 className="font-display text-xl text-ink/75">
                {tp(comparison.traditionalTitle)}
              </h3>
              <ul className="mt-6 space-y-4">
                {comparison.traditional.map((it, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-error/12 text-error">
                      <X className="h-4 w-4" />
                    </span>
                    <span className="text-[0.95rem] leading-relaxed text-muted">
                      {tp(it)}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Palm Guard */}
          <Reveal delay={0.1}>
            <div className="relative h-full overflow-hidden rounded-card-lg border-gold-hair bg-green-radial p-7 shadow-card-dark sm:p-8">
              <Grain opacity={0.06} />
              <h3 className="font-display relative text-xl text-cream">
                {tp(comparison.palmguardTitle)}
              </h3>
              <ul className="relative mt-6 space-y-4">
                {comparison.palmguard.map((it, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold/20 text-gold-bright">
                      <Check className="h-4 w-4" />
                    </span>
                    <span className="text-[0.95rem] leading-relaxed text-cream/85">
                      {tp(it)}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
