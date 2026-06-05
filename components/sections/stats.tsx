"use client";

import { useLocale } from "@/components/locale-provider";
import { Reveal } from "@/components/motion/reveal";
import { CountUp } from "@/components/motion/count-up";
import { stats } from "@/lib/content";
import { cn } from "@/lib/utils";

export function Stats() {
  const { tp } = useLocale();

  return (
    <section className="border-y border-ink/[0.07] bg-paper py-16 sm:py-20">
      <div className="container">
        <div className="grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4">
          {stats.items.map((s, i) => (
            <Reveal
              key={i}
              delay={i * 0.06}
              className={cn(
                "text-center lg:text-start",
                i > 0 && "lg:border-s lg:border-ink/[0.08] lg:ps-8"
              )}
            >
              <div className="font-display text-[3rem] leading-none text-green sm:text-[3.4rem]">
                <CountUp
                  from={s.from}
                  to={s.to}
                  prefix={s.prefix}
                  suffix={s.suffix}
                />
              </div>
              <p className="mt-3 text-sm leading-snug text-muted">
                {tp(s.label)}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
