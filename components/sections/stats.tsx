"use client";

import { useLocale } from "@/components/locale-provider";
import { Reveal } from "@/components/motion/reveal";
import { CountUp } from "@/components/motion/count-up";
import { Grain } from "@/components/decor";
import { stats } from "@/lib/content";
import { cn } from "@/lib/utils";

export function Stats() {
  const { tp } = useLocale();

  return (
    <section className="relative overflow-hidden bg-darkest-radial py-16 sm:py-20">
      <Grain opacity={0.07} />
      <div className="container relative">
        <div className="grid grid-cols-2 gap-x-6 gap-y-12 rounded-card-lg border-gold-hair bg-green-darkest/30 px-6 py-12 sm:px-10 lg:grid-cols-4">
          {stats.items.map((s, i) => (
            <Reveal
              key={i}
              delay={i * 0.08}
              className={cn(
                "text-center",
                i > 0 && "lg:border-s lg:border-gold/12 lg:ps-6"
              )}
            >
              <div className="font-display text-[2.75rem] font-semibold leading-none text-gold-bright sm:text-5xl">
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
