"use client";

import { useLocale } from "@/components/locale-provider";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/section-heading";
import { AssetImage } from "@/components/asset-image";
import { Glow, SectionFade } from "@/components/decor";
import { team } from "@/lib/content";

export function Team() {
  const { tp } = useLocale();

  return (
    <section id="team" className="section scroll-mt-24 bg-paper">
      <SectionFade from="darkest" />
      <Glow tone="gold" className="end-[8%] top-[14%] h-72 w-72 opacity-55" />

      <div className="container relative">
        <SectionHeading
          eyebrow={team.eyebrow}
          title={team.h2}
          intro={team.intro}
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {team.members.map((m, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <article className="card-lift gborder group relative flex h-full flex-col items-center rounded-card bg-white p-7 text-center shadow-card hover:shadow-glow-soft">
                <div className="relative h-24 w-24 overflow-hidden rounded-full bg-green shadow-[0_10px_30px_-10px_rgba(6,33,25,0.5)] ring-2 ring-gold/30">
                  <AssetImage
                    src={m.photo}
                    alt={tp(m.name)}
                    placeholder={m.initials}
                    tone="dark"
                    className="h-full w-full object-cover transition-transform duration-700 ease-emphatic group-hover:scale-110"
                  />
                </div>
                <h3 className="font-display mt-5 text-lg leading-tight text-ink">
                  {tp(m.name)}
                </h3>
                <p className="mt-1 text-sm font-semibold text-gold">
                  {tp(m.role)}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted">
                  {tp(m.desc)}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
