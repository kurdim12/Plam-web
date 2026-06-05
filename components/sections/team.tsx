"use client";

import { useLocale } from "@/components/locale-provider";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/section-heading";
import { AssetImage } from "@/components/asset-image";
import { team } from "@/lib/content";

export function Team() {
  const { tp } = useLocale();

  return (
    <section id="team" className="section scroll-mt-24 bg-paper">
      <div className="container">
        <SectionHeading
          eyebrow={team.eyebrow}
          title={team.h2}
          intro={team.intro}
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {team.members.map((m, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <article className="flex h-full flex-col items-center rounded-card border border-ink/10 bg-white p-7 text-center shadow-card transition-transform duration-300 ease-emphatic hover:-translate-y-1.5">
                <div className="h-24 w-24 overflow-hidden rounded-full bg-green shadow-card ring-2 ring-gold/30">
                  <AssetImage
                    src={m.photo}
                    alt={tp(m.name)}
                    placeholder={m.initials}
                    tone="dark"
                    className="h-full w-full object-cover"
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
