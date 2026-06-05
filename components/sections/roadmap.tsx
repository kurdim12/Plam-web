"use client";

import { Check } from "lucide-react";
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

        <div className="relative mt-14" role="list">
          {/* timeline rail */}
          <div
            aria-hidden
            className="absolute bottom-3 top-3 start-[15px] w-px bg-gold/25"
          />

          <div className="space-y-9">
            {roadmap.items.map((it, i) => (
              <Reveal
                key={i}
                delay={i * 0.08}
                role="listitem"
                className="relative ps-12"
              >
                {/* marker */}
                <span
                  className={cn(
                    "absolute start-0 top-0.5 flex h-8 w-8 items-center justify-center rounded-full ring-4 ring-cream",
                    it.done
                      ? "bg-gold text-green-darkest"
                      : "bg-green text-gold-bright"
                  )}
                >
                  {it.done ? (
                    <Check className="h-4 w-4" />
                  ) : (
                    <span className="h-2 w-2 rounded-full bg-gold-bright" />
                  )}
                </span>

                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="rounded-full bg-green/[0.08] px-3 py-1 text-xs font-bold uppercase tracking-wider text-green">
                    {tp(it.period)}
                  </span>
                  {it.tag && (
                    <span className="rounded-full bg-gold/15 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-gold">
                      {tp(it.tag)}
                    </span>
                  )}
                </div>

                <h3 className="font-display mt-3 text-xl text-ink">
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
