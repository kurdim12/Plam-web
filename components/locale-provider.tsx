"use client";

import * as React from "react";
import type { Pair } from "@/lib/content";

type Locale = "en" | "ar";

interface LocaleContextValue {
  locale: Locale;
  isRTL: boolean;
  setLocale: (l: Locale) => void;
  toggle: () => void;
  /** Inline translate: t(english, arabic) */
  t: (en: string, ar: string) => string;
  /** Translate a content pair */
  tp: (pair: Pair) => string;
}

const LocaleContext = React.createContext<LocaleContextValue | null>(null);

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = React.useState<Locale>("en");

  const apply = React.useCallback((l: Locale) => {
    const el = document.documentElement;
    el.lang = l;
    el.dir = l === "ar" ? "rtl" : "ltr";
  }, []);

  // Restore saved preference on mount
  React.useEffect(() => {
    let saved: Locale | null = null;
    try {
      const v = window.localStorage.getItem("pg-locale");
      if (v === "ar" || v === "en") saved = v;
    } catch {
      /* ignore */
    }
    if (saved) {
      setLocaleState(saved);
      apply(saved);
    } else {
      apply("en");
    }
  }, [apply]);

  const setLocale = React.useCallback(
    (l: Locale) => {
      setLocaleState(l);
      apply(l);
      try {
        window.localStorage.setItem("pg-locale", l);
      } catch {
        /* ignore */
      }
    },
    [apply]
  );

  const value = React.useMemo<LocaleContextValue>(
    () => ({
      locale,
      isRTL: locale === "ar",
      setLocale,
      toggle: () => setLocale(locale === "en" ? "ar" : "en"),
      t: (en, ar) => (locale === "ar" ? ar : en),
      tp: (pair) => (locale === "ar" ? pair.ar : pair.en),
    }),
    [locale, setLocale]
  );

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
}

export function useLocale() {
  const ctx = React.useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used within a LocaleProvider");
  return ctx;
}
