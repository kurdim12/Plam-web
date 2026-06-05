"use client";

import { ArrowRight } from "lucide-react";
import { useLocale } from "@/components/locale-provider";
import { Reveal } from "@/components/motion/reveal";
import { Equalizer } from "@/components/motion/equalizer";
import { AssetImage } from "@/components/asset-image";
import { Grain, GoldRings, Glow, SoundWaveRings } from "@/components/decor";
import { buttonVariants } from "@/components/ui/button";
import { hero } from "@/lib/content";
import { cn } from "@/lib/utils";

export function Hero() {
  const { tp, isRTL } = useLocale();

  return (
    <section
      id="top"
      className="relative scroll-mt-24 overflow-hidden bg-green-radial pb-24 pt-16 sm:pb-28 sm:pt-20"
    >
      <Grain className="mix-blend-soft-light" opacity={0.08} />
      <GoldRings className="start-[-180px] top-[-140px] h-[560px] w-[560px]" opacity={0.45} />
      <Glow tone="gold" className="end-[4%] top-[6%] h-72 w-72" />
      <Glow tone="green" className="bottom-[-12%] start-[-6%] h-80 w-80" />

      <div className="container relative grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        {/* Copy */}
        <div className="max-w-xl">
          <Reveal>
            <span className="eyebrow rounded-full border border-gold/30 bg-cream/5 px-3.5 py-1.5 text-gold-bright shadow-[inset_0_1px_0_rgba(229,198,121,0.15)]">
              {tp(hero.eyebrow)}
            </span>
          </Reveal>

          <Reveal delay={0.06}>
            <h1 className="font-display mt-6 text-balance text-[2.7rem] leading-[1.02] text-cream sm:text-6xl lg:text-[4.25rem]">
              <span className="block">{tp(hero.h1a)}</span>
              <span className={cn("block text-gold", !isRTL && "italic")}>
                {tp(hero.h1b)}
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="mt-6 max-w-lg text-pretty text-base leading-relaxed text-cream/75 sm:text-lg">
              {tp(hero.sub)}
            </p>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#contact" className={buttonVariants({ variant: "gold", size: "lg" })}>
                {tp(hero.ctaPrimary)}
                <ArrowRight className="h-4 w-4 rtl:rotate-180" />
              </a>
              <a href="#how" className={buttonVariants({ variant: "ghost", size: "lg" })}>
                {tp(hero.ctaSecondary)}
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.24}>
            <ul className="mt-10 flex flex-wrap gap-2.5">
              {hero.chips.map((chip, i) => (
                <li
                  key={i}
                  className="inline-flex items-center gap-2 rounded-full border-gold-hair bg-green-darkest/30 px-3.5 py-2 text-xs font-medium text-cream/85 backdrop-blur-sm transition-colors hover:border-gold/50 hover:bg-green-darkest/50"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-gold-bright" />
                  {tp(chip)}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* Device card */}
        <Reveal delay={0.15} className="relative mx-auto w-full max-w-md lg:mx-0">
          <SoundWaveRings className="left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2" />
          <div className="group relative z-10">
            <div className="overflow-hidden rounded-[22px] border-gold-hair bg-black p-2 shadow-[0_30px_70px_-30px_rgba(0,0,0,0.75),0_14px_50px_-22px_rgba(201,162,75,0.28)] transition-transform duration-500 ease-emphatic rotate-2 hover:rotate-0 rtl:-rotate-2 rtl:hover:rotate-0">
              <AssetImage
                src="/assets/render-dark.jpg"
                alt="Palm Guard solar-powered acoustic detection device"
                placeholder="render-light.jpg"
                tone="dark"
                className="aspect-square w-full rounded-[16px] bg-black object-contain transition-transform duration-700 ease-emphatic group-hover:scale-[1.04]"
              />

              {/* LISTENING badge */}
              <div className="absolute start-5 top-5 inline-flex items-center gap-2.5 rounded-full border-gold-hair bg-green-darkest/90 px-3 py-2 backdrop-blur-sm">
                <span className="h-2 w-2 rounded-full bg-gold-bright" />
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-cream">
                  {tp(hero.listening)}
                </span>
                <Equalizer className="h-3.5" />
              </div>
            </div>

            {/* Floating chips */}
            <div className="absolute -top-4 end-6 hidden animate-float-slow rounded-2xl border-gold-hair bg-green-darkest/95 px-4 py-2.5 text-xs font-medium text-cream/90 shadow-card-dark backdrop-blur-sm sm:block">
              {tp(hero.floatA)}
            </div>
            <div className="absolute -bottom-4 start-6 hidden animate-float rounded-2xl border-gold-hair bg-green-darkest/95 px-4 py-2.5 text-xs font-medium text-cream/90 shadow-card-dark backdrop-blur-sm sm:block">
              {tp(hero.floatB)}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
