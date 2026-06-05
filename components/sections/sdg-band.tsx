"use client";

import { useLocale } from "@/components/locale-provider";
import { Reveal } from "@/components/motion/reveal";
import { sdg } from "@/lib/content";

export function SdgBand() {
  const { tp } = useLocale();

  return (
    <section className="bg-green py-24 sm:py-32">
      <div className="container text-center">
        <Reveal>
          <h2 className="font-display mx-auto max-w-4xl text-balance text-[1.9rem] leading-[1.25] text-cream sm:text-4xl lg:text-[2.6rem]">
            {tp(sdg.mission)}
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <ul className="mt-9 flex flex-wrap justify-center gap-x-8 gap-y-3">
            {sdg.tags.map((t, i) => (
              <li
                key={i}
                className="inline-flex items-center gap-2 text-sm text-cream/70"
              >
                <span className="h-1 w-1 rounded-full bg-gold-bright" />
                {tp(t)}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
