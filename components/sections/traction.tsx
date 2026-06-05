"use client";

import { Trophy, Medal, Send, Rocket } from "lucide-react";
import { useLocale } from "@/components/locale-provider";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Glow } from "@/components/decor";
import { traction } from "@/lib/content";

const ICONS = [Trophy, Medal, Send, Rocket];

export function Traction() {
  const { tp } = useLocale();

  return (
    <section id="traction" className="section scroll-mt-24 bg-paper">
      <Glow tone="gold" className="end-[6%] top-[16%] h-72 w-72 opacity-55" />

      <div className="container relative">
        <SectionHeading eyebrow={traction.eyebrow} title={traction.h2} />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {traction.cards.map((c, i) => {
            const Icon = ICONS[i];
            return (
              <Reveal key={i} delay={i * 0.08}>
                <article className="card-lift gborder relative flex h-full flex-col rounded-card bg-white p-6 shadow-card hover:shadow-glow-soft">
                  <div className="flex items-center justify-between gap-3">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-green-panel to-green-darkest text-gold-bright shadow-[0_8px_22px_-10px_rgba(6,33,25,0.7)] ring-1 ring-gold/20">
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
