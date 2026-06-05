"use client";

import { useLocale } from "@/components/locale-provider";
import { Logo } from "@/components/asset-image";
import { footer } from "@/lib/content";
import type { Pair } from "@/lib/content";

function FooterCol({
  title,
  links,
}: {
  title: Pair;
  links: { label: Pair; href: string }[];
}) {
  const { tp } = useLocale();
  return (
    <div>
      <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-bright">
        {tp(title)}
      </h4>
      <ul className="mt-4 space-y-2.5">
        {links.map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              className="text-sm text-cream/60 transition-colors hover:text-cream"
            >
              {tp(l.label)}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  const { tp } = useLocale();

  return (
    <footer className="border-t border-cream/10 bg-green-darkest">
      <div className="container py-16">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <Logo variant="cream" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-cream/55">
              {tp(footer.blurb)}
            </p>
          </div>
          <FooterCol title={footer.exploreTitle} links={footer.explore} />
          <FooterCol title={footer.companyTitle} links={footer.company} />
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-cream/10 pt-6 text-xs text-cream/45 sm:flex-row sm:items-center sm:justify-between">
          <span>{tp(footer.copyright)}</span>
          <span>{tp(footer.madeWith)}</span>
        </div>
      </div>
    </footer>
  );
}
