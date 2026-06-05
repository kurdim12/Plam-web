"use client";

import { useLocale } from "@/components/locale-provider";
import { Reveal } from "@/components/motion/reveal";
import { CountUp } from "@/components/motion/count-up";
import { Grain, Glow } from "@/components/decor";
import { stats } from "@/lib/content";
import { cn } from "@/lib/utils";

export function Stats() {
  const { tp } = useLocale();

  return (
    <section className="relative overflow-hidden bg-darkest-radial py-16 sm:py-20">
      <Grain opacity={0.07} />
      <Glow tone="gold" className="left-1/2 top-1/2 h-64 w-[70%] -translate-x-1/2 -translate-y-1/2" />

      <div className="container relative">
        <div className="relative grid grid-cols-2 gap-x-6 gap-y-12 overflow-hidden rounded-card-lg bg-gradient-to-b from-green-panel/25 to-green-darkest/50 px-6 py-12 shadow-card-dark gborder sm:px-10 lg:grid-cols-4">
          {stats.items.map((s, i) => (
            <Reveal
              key={i}
              delay={i * 0.08}
              className={cn(
                "relative text-center",
                i > 0 && "lg:border-s lg:border-gold/12 lg:ps-6"
              )}
            >
              <div className="font-display text-5xl font-semibold leading-none text-gold-bright drop-shadow-[0_2px_24px_rgba(229,198,121,0.28)] sm:text-[3.25rem]">
                <CountUp
                  from={s.from}
                  to={s.to}
                  prefix={s.prefix}
                  suffix={s.suffix}
                />
              </div>
              <p className="mt-3.5 text-sm leading-snug text-cream/70 sm:text-[0.95rem]">
                {tp(s.label)}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
