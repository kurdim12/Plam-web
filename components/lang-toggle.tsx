"use client";

import { useLocale } from "@/components/locale-provider";
import { cn } from "@/lib/utils";

export function LangToggle({ className }: { className?: string }) {
  const { locale, toggle } = useLocale();
  return (
    <button
      onClick={toggle}
      aria-label={locale === "en" ? "التبديل إلى العربية" : "Switch to English"}
      className={cn(
        "inline-flex h-10 min-w-[3.25rem] items-center justify-center rounded-full border border-ink/15 px-4 text-sm font-bold text-ink transition-colors duration-300 hover:border-gold hover:bg-gold/10 hover:text-green",
        className
      )}
    >
      <span className={locale === "en" ? "font-arabic" : "font-sans"}>
        {locale === "en" ? "عربي" : "EN"}
      </span>
    </button>
  );
}
