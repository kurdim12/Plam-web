"use client";

import { Check } from "lucide-react";
import { useLocale } from "@/components/locale-provider";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Glow } from "@/components/decor";
import { roadmap } from "@/lib/content";
import { cn } from "@/lib/utils";

export function Roadmap() {
  const { tp } = useLocale();

  return (
    <section id="roadmap" className="section scroll-mt-24 bg-cream">
      <Glow tone="gold" className="start-[6%] top-[20%] h-72 w-72 opacity-50" />

      <div className="container relative">
        <SectionHeading eyebrow={roadmap.eyebrow} title={roadmap.h2} />

        <div className="relative mt-14" role="list">
          {/* gradient timeline rail */}
          <div
            aria-hidden
            className="absolute bottom-6 top-4 start-[15px] w-0.5 rounded-full bg-gradient-to-b from-gold via-gold/40 to-transparent"
          />

          <div className="space-y-9">
            {roadmap.items.map((it, i) => (
              <Reveal
                key={i}
                delay={i * 0.08}
                role="listitem"
                className="group relative ps-12"
              >
                {/* glowing node */}
                <span
                  className={cn(
                    "absolute start-0 top-0.5 flex h-8 w-8 items-center justify-center rounded-full ring-4 ring-cream transition-transform duration-300 group-hover:scale-110",
                    it.done
                      ? "bg-gradient-to-br from-gold-bright to-gold text-green-darkest shadow-[0_0_0_4px_rgba(201,162,75,0.14),0_8px_22px_-6px_rgba(201,162,75,0.6)]"
                      : "bg-green text-gold-bright shadow-[0_8px_20px_-8px_rgba(6,33,25,0.55)]"
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
                    <span className="rounded-full bg-gold/15 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-gold ring-1 ring-gold/25">
                      {tp(it.tag)}
                    </span>
                  )}
                </div>

                <h3 className="font-display mt-3 text-xl text-ink transition-colors group-hover:text-green">
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
