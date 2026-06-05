"use client";

import { EyeOff, SearchX, Hourglass } from "lucide-react";
import { useLocale } from "@/components/locale-provider";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Glow, SectionFade } from "@/components/decor";
import { problem } from "@/lib/content";

const ICONS = [EyeOff, SearchX, Hourglass];

export function Problem() {
  const { tp } = useLocale();

  return (
    <section id="problem" className="section scroll-mt-24 bg-cream">
      <SectionFade from="darkest" />
      <Glow tone="gold" className="end-[8%] top-[14%] h-72 w-72 opacity-60" />

      <div className="container relative">
        <SectionHeading
          eyebrow={problem.eyebrow}
          title={problem.h2}
          intro={problem.intro}
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {problem.cards.map((c, i) => {
            const Icon = ICONS[i];
            return (
              <Reveal key={i} delay={i * 0.1}>
                <article className="card-lift gborder group relative h-full overflow-hidden rounded-card bg-white p-7 shadow-card hover:shadow-glow-soft">
                  <span
                    aria-hidden
                    className="font-display pointer-events-none absolute end-5 top-2 text-6xl font-semibold text-ink/[0.045]"
                  >
                    0{i + 1}
                  </span>
                  <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-gold/20 to-gold/5 text-gold ring-1 ring-gold/25">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-display relative mt-5 text-xl text-ink">
                    {tp(c.title)}
                  </h3>
                  <p className="relative mt-3 text-[0.95rem] leading-relaxed text-muted">
                    {tp(c.desc)}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
