"use client";

import { Fragment } from "react";
import { ArrowRight } from "lucide-react";
import { useLocale } from "@/components/locale-provider";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Grain, Waveform, Glow, SectionFade } from "@/components/decor";
import { how } from "@/lib/content";

export function HowItWorks() {
  const { tp } = useLocale();

  return (
    <section
      id="how"
      className="section scroll-mt-24 bg-green-radial"
    >
      <SectionFade from="paper" />
      <Grain className="mix-blend-soft-light" opacity={0.08} />
      <Waveform className="inset-x-0 top-10 h-24 w-full" opacity={0.14} />
      <Glow tone="gold" className="end-[10%] top-[20%] h-72 w-72" />
      <Glow tone="green" className="bottom-[6%] start-[4%] h-80 w-80" />

      <div className="container relative">
        <SectionHeading
          eyebrow={how.eyebrow}
          title={how.h2}
          intro={how.intro}
          tone="dark"
        />

        <div className="mt-14 flex flex-col gap-4 lg:flex-row lg:items-stretch">
          {how.steps.map((s, i) => (
            <Fragment key={i}>
              <Reveal delay={i * 0.08} className="flex-1">
                <div className="card-lift gborder relative h-full rounded-card bg-green-panel/25 p-6 backdrop-blur-sm hover:bg-green-panel/35 hover:shadow-glow-soft">
                  <div className="font-display flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-gold-bright to-gold text-base font-bold text-green-darkest shadow-[0_6px_22px_-6px_rgba(201,162,75,0.65)]">
                    {i + 1}
                  </div>
                  <h3 className="font-display mt-4 text-lg text-cream">
                    {tp(s.title)}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-cream/65">
                    {tp(s.desc)}
                  </p>
                </div>
              </Reveal>

              {i < how.steps.length - 1 && (
                <div
                  aria-hidden
                  className="flex items-center justify-center text-gold/55 lg:px-0.5"
                >
                  <ArrowRight className="h-5 w-5 rotate-90 lg:rotate-0 rtl:lg:rotate-180" />
                </div>
              )}
            </Fragment>
          ))}
        </div>

        {/* Accuracy footer bar */}
        <Reveal delay={0.1}>
          <div className="gborder relative mt-10 flex flex-col items-start justify-between gap-5 overflow-hidden rounded-card-lg bg-green-darkest/45 p-6 shadow-glow-soft sm:flex-row sm:items-center">
            <p className="text-sm font-semibold text-cream sm:text-base">
              {tp(how.footer)}
            </p>
            <div className="flex flex-wrap gap-2">
              {how.models.map((m) => (
                <span
                  key={m}
                  dir="ltr"
                  className="rounded-full border border-gold/40 bg-gold/10 px-3 py-1.5 font-mono text-xs font-semibold text-gold-bright"
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
