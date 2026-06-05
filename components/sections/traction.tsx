"use client";

import { Trophy, Medal, Send, Rocket } from "lucide-react";
import { useLocale } from "@/components/locale-provider";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/section-heading";
import { traction } from "@/lib/content";

const ICONS = [Trophy, Medal, Send, Rocket];

export function Traction() {
  const { tp } = useLocale();

  return (
    <section id="traction" className="section scroll-mt-24 bg-paper">
      <div className="container">
        <SectionHeading eyebrow={traction.eyebrow} title={traction.h2} />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {traction.cards.map((c, i) => {
            const Icon = ICONS[i];
            return (
              <Reveal key={i} delay={i * 0.06}>
                <article className="flex h-full flex-col rounded-2xl border border-ink/[0.08] bg-white p-7 transition-colors duration-300 hover:border-ink/[0.16]">
                  <Icon className="h-6 w-6 text-gold" strokeWidth={1.6} />
                  <span className="mt-5 text-[11px] font-semibold uppercase tracking-[0.16em] text-gold">
                    {tp(c.tag)}
                  </span>
                  <h3 className="font-display mt-1.5 text-lg leading-snug text-ink">
                    {tp(c.title)}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted">
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
