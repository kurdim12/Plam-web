"use client";

import { ArrowRight } from "lucide-react";
import { useLocale } from "@/components/locale-provider";
import { Reveal } from "@/components/motion/reveal";
import { AssetImage } from "@/components/asset-image";
import { buttonVariants } from "@/components/ui/button";
import { hero } from "@/lib/content";
import { cn } from "@/lib/utils";

export function Hero() {
  const { tp, isRTL } = useLocale();

  return (
    <section
      id="top"
      className="relative scroll-mt-24 overflow-hidden bg-gradient-to-br from-green to-green-darkest pb-24 pt-20 sm:pb-32 sm:pt-28"
    >
      <div className="container grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="max-w-xl">
          <Reveal>
            <span className="eyebrow text-gold-bright">
              <span className="h-px w-8 bg-gold-bright/50" />
              {tp(hero.eyebrow)}
            </span>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="font-display mt-7 text-balance text-[2.8rem] leading-[1.02] text-cream sm:text-6xl lg:text-[4.2rem]">
              <span className="block">{tp(hero.h1a)}</span>
              <span className={cn("block text-gold", !isRTL && "italic")}>
                {tp(hero.h1b)}
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-7 max-w-lg text-pretty text-lg leading-relaxed text-cream/70">
              {tp(hero.sub)}
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a href="#contact" className={buttonVariants({ variant: "gold", size: "lg" })}>
                {tp(hero.ctaPrimary)}
                <ArrowRight className="h-4 w-4 rtl:rotate-180" />
              </a>
              <a href="#how" className={buttonVariants({ variant: "ghost", size: "lg" })}>
                {tp(hero.ctaSecondary)}
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <ul className="mt-12 flex flex-wrap gap-x-6 gap-y-3">
              {hero.chips.map((chip, i) => (
                <li
                  key={i}
                  className="inline-flex items-center gap-2 text-sm text-cream/65"
                >
                  <span className="h-1 w-1 rounded-full bg-gold-bright" />
                  {tp(chip)}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="relative mx-auto max-w-md overflow-hidden rounded-2xl border border-white/10 bg-black">
            <AssetImage
              src="/assets/render-dark.jpg"
              alt="Palm Guard solar-powered acoustic detection device"
              placeholder="render-light.jpg"
              tone="dark"
              className="aspect-[4/3] w-full bg-black object-contain"
            />
            <div className="absolute start-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/50 px-3 py-1.5 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-gold-bright" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-cream/85">
                {tp(hero.listening)}
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
