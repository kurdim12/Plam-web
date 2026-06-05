"use client";

import { useLocale } from "@/components/locale-provider";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/section-heading";
import { how } from "@/lib/content";

export function HowItWorks() {
  const { tp } = useLocale();

  return (
    <section id="how" className="section scroll-mt-24 bg-paper">
      <div className="container">
        <SectionHeading
          eyebrow={how.eyebrow}
          title={how.h2}
          intro={how.intro}
        />

        <div className="mt-16 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-5">
          {how.steps.map((s, i) => (
            <Reveal key={i} delay={i * 0.06} className="border-t border-ink/[0.1] pt-5">
              <span className="font-display text-2xl text-gold">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display mt-3 text-lg text-ink">
                {tp(s.title)}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {tp(s.desc)}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-ink/[0.1] pt-6 sm:flex-row sm:items-center">
            <p className="text-[0.95rem] font-medium text-ink">{tp(how.footer)}</p>
            <div className="flex flex-wrap gap-2">
              {how.models.map((m) => (
                <span
                  key={m}
                  dir="ltr"
                  className="rounded-full border border-ink/[0.12] px-3 py-1 font-mono text-xs text-muted"
                >
                  {m}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
