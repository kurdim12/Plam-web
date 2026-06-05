"use client";

import { useLocale } from "@/components/locale-provider";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/section-heading";
import { AssetImage } from "@/components/asset-image";
import { solution } from "@/lib/content";

export function Solution() {
  const { tp } = useLocale();

  return (
    <section id="solution" className="section scroll-mt-24 bg-cream">
      <div className="container">
        <SectionHeading
          eyebrow={solution.eyebrow}
          title={solution.h2}
          intro={solution.intro}
        />

        <div className="mt-16 grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-16">
          {/* Device */}
          <Reveal className="lg:sticky lg:top-28">
            <div className="overflow-hidden rounded-2xl border border-ink/[0.08] bg-black">
              <AssetImage
                src="/assets/render-dark.jpg"
                alt="Palm Guard device on a black background"
                placeholder="render-dark.jpg"
                tone="dark"
                className="aspect-[4/3] w-full bg-black object-contain"
              />
            </div>
            <p className="mt-4 flex items-start gap-2.5 text-sm leading-snug text-muted">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
              {tp(solution.badge)}
            </p>
          </Reveal>

          {/* Spec sheet */}
          <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
            {solution.specs.map((s, i) => (
              <Reveal
                key={s.label}
                delay={i * 0.05}
                className="border-t border-ink/[0.1] pt-5"
              >
                <span
                  dir="ltr"
                  className="font-mono text-xs font-semibold tracking-wider text-gold"
                >
                  {s.label}
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
        </div>
      </div>
    </section>
  );
}
