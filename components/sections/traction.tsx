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

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {traction.cards.map((c, i) => {
            const Icon = ICONS[i];
            return (
              <Reveal key={i} delay={i * 0.08}>
                <article className="flex h-full flex-col rounded-card border border-ink/10 bg-white p-6 shadow-card transition-transform duration-300 ease-emphatic hover:-translate-y-1.5">
                  <div className="flex items-center justify-between gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-green text-gold-bright">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="rounded-full border border-gold/35 bg-gold/10 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-gold">
                      {tp(c.tag)}
                    </span>
                  </div>
                  <h3 className="font-display mt-5 text-lg leading-snug text-ink">
                    {tp(c.title)}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
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
