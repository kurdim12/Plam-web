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

        <Reveal delay={0.1} className="mt-12">
          <figure className="overflow-hidden rounded-card-lg border-gold-hair bg-white shadow-card">
            <AssetImage
              src="/assets/team.jpg"
              alt="Team Vcoders — University of Petra"
              placeholder="team.jpg"
              className="aspect-[16/9] w-full object-cover"
            />
            <figcaption className="px-5 py-3.5 text-center text-sm text-muted">
              {tp(team.photoCaption)}
            </figcaption>
          </figure>
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {team.members.map((m, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <article className="h-full rounded-card border border-ink/10 bg-white p-7 shadow-card transition-transform duration-300 ease-emphatic hover:-translate-y-1.5">
                <div className="flex items-center gap-4">
                  <span
                    dir="ltr"
                    className="font-display flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-green text-lg font-bold text-gold-bright"
                  >
                    {m.initials}
                  </span>
                  <div>
                    <h3 className="font-display text-lg leading-tight text-ink">
                      {tp(m.name)}
                    </h3>
                    <p className="mt-1 text-sm font-semibold text-gold">
                      {tp(m.role)}
                    </p>
                  </div>
                </div>
                <p className="mt-5 text-sm leading-relaxed text-muted">
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
