"use client";

import { EyeOff, SearchX, Hourglass } from "lucide-react";
import { useLocale } from "@/components/locale-provider";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/section-heading";
import { problem } from "@/lib/content";

const ICONS = [EyeOff, SearchX, Hourglass];

export function Problem() {
  const { tp } = useLocale();

  return (
    <section id="problem" className="section scroll-mt-24 bg-cream">
      <div className="container">
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
                <article className="h-full rounded-card border border-ink/10 bg-paper p-7 shadow-card transition-transform duration-300 ease-emphatic hover:-translate-y-1.5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold/10 text-gold ring-1 ring-gold/25">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-display mt-5 text-xl text-ink">
                    {tp(c.title)}
                  </h3>
                  <p className="mt-3 text-[0.95rem] leading-relaxed text-muted">
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
