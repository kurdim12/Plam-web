"use client";

import * as React from "react";
import { Menu, X } from "lucide-react";
import { useLocale } from "@/components/locale-provider";
import { LangToggle } from "@/components/lang-toggle";
import { Logo } from "@/components/asset-image";
import { buttonVariants } from "@/components/ui/button";
import { nav } from "@/lib/content";
import { cn } from "@/lib/utils";

export function Navbar() {
  const { tp } = useLocale();
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-ink/10 bg-cream/80 shadow-[0_4px_30px_-20px_rgba(6,33,25,0.5)] backdrop-blur-md"
          : "border-b border-transparent bg-cream/60 backdrop-blur-sm"
      )}
    >
      <nav className="container flex h-[72px] items-center justify-between gap-4">
        <a href="#top" className="flex shrink-0 items-center" aria-label="Palm Guard — home">
          <Logo />
        </a>

        <div className="hidden items-center gap-0.5 lg:flex">
          {nav.links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-3.5 py-2 text-sm font-medium text-ink/75 transition-colors hover:bg-green/5 hover:text-green"
            >
              {tp(l.label)}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <LangToggle />
          <a
            href="#contact"
            className={cn(buttonVariants({ variant: "gold", size: "sm" }), "hidden sm:inline-flex")}
          >
            {tp(nav.cta)}
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
            aria-expanded={open}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 text-ink transition-colors hover:border-gold hover:text-green lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-ink/10 bg-cream/95 backdrop-blur-md lg:hidden">
          <div className="container flex flex-col gap-1 py-4">
            {nav.links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-base font-medium text-ink/85 transition-colors hover:bg-green/5 hover:text-green"
              >
                {tp(l.label)}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className={cn(buttonVariants({ variant: "gold" }), "mt-2")}
            >
              {tp(nav.cta)}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
