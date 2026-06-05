"use client";

import { Cpu } from "lucide-react";
import { useLocale } from "@/components/locale-provider";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/section-heading";
import { AssetImage } from "@/components/asset-image";
import { solution } from "@/lib/content";

export function Solution() {
  const { tp } = useLocale();

  return (
    <section id="solution" className="section scroll-mt-24 bg-paper">
      <div className="container">
        <SectionHeading
          eyebrow={solution.eyebrow}
          title={solution.h2}
          intro={solution.intro}
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          {/* Device on black */}
          <Reveal className="lg:sticky lg:top-28">
            <div className="relative rounded-card-lg border-gold-hair bg-black p-3 shadow-card-dark">
              <AssetImage
                src="/assets/render-dark.jpg"
                alt="Palm Guard device on a black background"
                placeholder="render-dark.jpg"
                tone="dark"
                className="aspect-[4/3] w-full rounded-[16px] bg-black object-contain"
              />
              <div className="absolute inset-x-3 bottom-3 flex items-start gap-3 rounded-2xl border-gold-hair bg-green-darkest/85 p-4 backdrop-blur-sm">
                <Cpu className="mt-0.5 h-5 w-5 shrink-0 text-gold-bright" />
                <p className="text-sm font-medium leading-snug text-cream/90">
                  {tp(solution.badge)}
                </p>
              </div>
            </div>
          </Reveal>

          {/* Spec grid */}
          <div className="grid gap-4 sm:grid-cols-2">
            {solution.specs.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.06}>
                <article className="h-full rounded-card border border-ink/10 bg-white p-5 shadow-card transition-transform duration-300 ease-emphatic hover:-translate-y-1.5">
                  <span
                    dir="ltr"
                    className="inline-flex min-w-[3.25rem] items-center justify-center rounded-lg border border-gold/40 bg-gold/10 px-2.5 py-1 font-mono text-xs font-bold tracking-wider text-gold"
                  >
                    {s.label}
                  </span>
                  <h3 className="font-display mt-4 text-lg text-ink">
                    {tp(s.title)}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {tp(s.desc)}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
