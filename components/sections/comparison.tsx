"use client";

import { Check, X } from "lucide-react";
import { useLocale } from "@/components/locale-provider";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/section-heading";
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

        <div className="mt-16 grid gap-6 md:grid-cols-2 md:items-stretch">
          {/* Traditional methods */}
          <Reveal>
            <div className="h-full rounded-2xl border border-ink/[0.08] bg-white p-8">
              <h3 className="font-display text-xl text-ink/70">
                {tp(comparison.traditionalTitle)}
              </h3>
              <ul className="mt-7 space-y-5">
                {comparison.traditional.map((it, i) => (
                  <li key={i} className="flex items-start gap-3.5">
                    <X
                      className="mt-0.5 h-5 w-5 shrink-0 text-error/70"
                      strokeWidth={1.75}
                    />
                    <span className="text-[0.95rem] leading-relaxed text-muted">
                      {tp(it)}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Palm Guard */}
          <Reveal delay={0.08}>
            <div className="h-full rounded-2xl border border-gold/30 bg-green/[0.03] p-8">
              <h3 className="font-display text-xl text-green">
                {tp(comparison.palmguardTitle)}
              </h3>
              <ul className="mt-7 space-y-5">
                {comparison.palmguard.map((it, i) => (
                  <li key={i} className="flex items-start gap-3.5">
                    <Check
                      className="mt-0.5 h-5 w-5 shrink-0 text-gold"
                      strokeWidth={1.75}
                    />
                    <span className="text-[0.95rem] leading-relaxed text-ink/80">
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
