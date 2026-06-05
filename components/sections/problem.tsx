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
    <section id="problem" className="section scroll-mt-24 bg-paper">
      <div className="container">
        <SectionHeading
          eyebrow={problem.eyebrow}
          title={problem.h2}
          intro={problem.intro}
        />

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {problem.cards.map((c, i) => {
            const Icon = ICONS[i];
            return (
              <Reveal key={i} delay={i * 0.08}>
                <article className="h-full rounded-2xl border border-ink/[0.08] bg-white p-8 transition-colors duration-300 hover:border-ink/[0.16]">
                  <Icon className="h-6 w-6 text-gold" strokeWidth={1.6} />
                  <h3 className="font-display mt-6 text-xl text-ink">
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
