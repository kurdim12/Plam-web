"use client";

import { useLocale } from "@/components/locale-provider";
import { Reveal } from "@/components/motion/reveal";
import {
  Grain,
  GoldRings,
  Glow,
  SoundWaveRings,
  SectionFade,
} from "@/components/decor";
import { sdg } from "@/lib/content";

export function SdgBand() {
  const { tp } = useLocale();

  return (
    <section className="relative overflow-hidden bg-darkest-radial py-20 sm:py-28">
      <SectionFade from="cream" />
      <Grain opacity={0.07} />
      <GoldRings
        className="left-1/2 top-1/2 h-[680px] w-[680px] -translate-x-1/2 -translate-y-1/2"
        opacity={0.3}
      />
      <SoundWaveRings className="left-1/2 top-1/2 h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2" />
      <Glow
        tone="gold"
        className="left-1/2 top-1/2 h-72 w-[55%] -translate-x-1/2 -translate-y-1/2"
      />

      <div className="container relative text-center">
        <Reveal>
          <h2 className="font-display mx-auto max-w-4xl text-balance text-[1.95rem] leading-[1.18] text-cream sm:text-4xl lg:text-[2.9rem]">
            {tp(sdg.mission)}
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <ul className="mt-10 flex flex-wrap justify-center gap-3">
            {sdg.tags.map((t, i) => (
              <li
                key={i}
                className="gborder relative rounded-full bg-green-darkest/50 px-4 py-2 text-sm font-medium text-cream/85 backdrop-blur-sm"
              >
                {tp(t)}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
