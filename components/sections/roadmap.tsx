"use client";

import { useLocale } from "@/components/locale-provider";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/section-heading";
import { roadmap } from "@/lib/content";
import { cn } from "@/lib/utils";

export function Roadmap() {
  const { tp } = useLocale();

  return (
    <section id="roadmap" className="section scroll-mt-24 bg-cream">
      <div className="container">
        <SectionHeading eyebrow={roadmap.eyebrow} title={roadmap.h2} />

        <div className="relative mt-16">
          <div
            aria-hidden
            className="absolute bottom-2 top-2 start-[5px] w-px bg-ink/[0.12]"
          />
          <div className="space-y-10">
            {roadmap.items.map((it, i) => (
              <Reveal key={i} delay={i * 0.06} className="relative ps-10">
                <span
                  className={cn(
                    "absolute start-0 top-[7px] h-2.5 w-2.5 rounded-full ring-4 ring-cream",
                    it.done ? "bg-gold" : "border-2 border-ink/25 bg-cream"
                  )}
                />
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                  <span className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">
                    {tp(it.period)}
                  </span>
                  {it.tag && (
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-muted">
                      {tp(it.tag)}
                    </span>
                  )}
                </div>
                <h3 className="font-display mt-2 text-xl text-ink">
                  {tp(it.title)}
                </h3>
                <p className="mt-2 max-w-2xl text-[0.95rem] leading-relaxed text-muted">
                  {tp(it.desc)}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
