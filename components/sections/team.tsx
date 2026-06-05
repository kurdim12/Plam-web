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

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {team.members.map((m, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <article className="h-full rounded-2xl border border-ink/[0.08] bg-white p-8 transition-colors duration-300 hover:border-ink/[0.16]">
                <div className="h-20 w-20 overflow-hidden rounded-full">
                  <AssetImage
                    src={m.photo}
                    alt={tp(m.name)}
                    placeholder={m.initials}
                    tone="dark"
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="font-display mt-6 text-lg text-ink">
                  {tp(m.name)}
                </h3>
                <p className="mt-1 text-sm font-medium text-gold">
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
