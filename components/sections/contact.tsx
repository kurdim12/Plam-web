"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import { useLocale } from "@/components/locale-provider";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/section-heading";
import {
  Grain,
  GoldRings,
  Glow,
  SoundWaveRings,
  SectionFade,
} from "@/components/decor";
import { buttonVariants } from "@/components/ui/button";
import { contact } from "@/lib/content";

function WhatsAppGlyph({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.122 1.524 5.862L.057 23.57l5.838-1.53A11.934 11.934 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.8 9.8 0 01-5.034-1.387l-.36-.214-3.733.979.997-3.645-.235-.374A9.787 9.787 0 012.182 12C2.182 6.579 6.579 2.182 12 2.182S21.818 6.579 21.818 12 17.421 21.818 12 21.818z" />
    </svg>
  );
}

export function Contact() {
  const { tp } = useLocale();
  const telHref = "tel:" + contact.phone.replace(/\s+/g, "");

  return (
    <section id="contact" className="section scroll-mt-24 bg-green-radial">
      <SectionFade from="paper" />
      <Grain className="mix-blend-soft-light" opacity={0.08} />
      <GoldRings
        className="bottom-[-180px] end-[-160px] h-[540px] w-[540px]"
        opacity={0.4}
      />
      <SoundWaveRings className="left-1/2 top-[24%] h-[240px] w-[240px] -translate-x-1/2" />
      <Glow tone="gold" className="left-1/2 top-[18%] h-72 w-[55%] -translate-x-1/2" />

      <div className="container relative">
        <SectionHeading
          eyebrow={contact.eyebrow}
          title={contact.h2}
          intro={contact.sub}
          tone="dark"
          align="center"
        />

        <Reveal delay={0.16}>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <a
              href={contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({ variant: "whatsapp", size: "lg" })}
            >
              <WhatsAppGlyph className="h-5 w-5" />
              {tp(contact.whatsappLabel)}
            </a>
            <a
              href={contact.emailUrl}
              className={buttonVariants({ variant: "gold", size: "lg" })}
            >
              <Mail className="h-4 w-4" />
              {tp(contact.emailLabel)}
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.22}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-cream/75">
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 text-gold" />
              {tp(contact.location)}
            </span>
            <span aria-hidden className="hidden h-4 w-px bg-cream/20 sm:block" />
            <a
              href={telHref}
              dir="ltr"
              className="inline-flex items-center gap-2 transition-colors hover:text-cream"
            >
              <Phone className="h-4 w-4 text-gold" />
              {contact.phone}
            </a>
            <span aria-hidden className="hidden h-4 w-px bg-cream/20 sm:block" />
            <a
              href={`mailto:${contact.email}`}
              dir="ltr"
              className="inline-flex items-center gap-2 transition-colors hover:text-cream"
            >
              <Mail className="h-4 w-4 text-gold" />
              {contact.email}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
