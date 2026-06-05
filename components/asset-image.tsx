"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Renders an image from /public/assets, falling back to a clearly-labeled
 * placeholder if the file hasn't been dropped in yet (never blocks the build).
 */
export function AssetImage({
  src,
  alt,
  className,
  placeholder,
  tone = "light",
}: {
  src: string;
  alt: string;
  className?: string;
  placeholder: string;
  tone?: "light" | "dark";
}) {
  const [failed, setFailed] = React.useState(false);
  const imgRef = React.useRef<HTMLImageElement>(null);

  // Catch images that 404'd before hydration attached the error handler.
  React.useEffect(() => {
    const img = imgRef.current;
    if (img && img.complete && img.naturalWidth === 0) setFailed(true);
  }, []);

  if (failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={cn(
          "flex flex-col items-center justify-center gap-2 p-6 text-center",
          tone === "dark"
            ? "border-gold-hair bg-green-darkest text-cream/60"
            : "border border-dashed border-ink/20 bg-cream text-muted",
          className
        )}
      >
        <span className="font-mono text-[11px] uppercase tracking-widest opacity-70">
          {placeholder}
        </span>
        <span className="text-xs opacity-60">drop file in /public/assets/</span>
      </div>
    );
  }

  // eslint-disable-next-line @next/next/no-img-element
  return (
    <img
      ref={imgRef}
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
      onLoad={(e) => {
        if (e.currentTarget.naturalWidth === 0) setFailed(true);
      }}
      className={className}
    />
  );
}

/** Brand logo with a typographic wordmark fallback if the PNG is missing. */
export function Logo({
  variant = "default",
  className,
}: {
  variant?: "default" | "cream";
  className?: string;
}) {
  const [failed, setFailed] = React.useState(false);
  const imgRef = React.useRef<HTMLImageElement>(null);
  const src = variant === "cream" ? "/assets/logo-cream.png" : "/assets/logo.png";
  const cream = variant === "cream";

  React.useEffect(() => {
    const img = imgRef.current;
    if (img && img.complete && img.naturalWidth === 0) setFailed(true);
  }, []);

  if (failed) {
    return (
      <span
        className={cn(
          "font-display text-xl font-semibold tracking-tight",
          cream ? "text-cream" : "text-green",
          className
        )}
      >
        Palm<span className="text-gold">Guard</span>
      </span>
    );
  }

  // eslint-disable-next-line @next/next/no-img-element
  return (
    <img
      ref={imgRef}
      src={src}
      alt="Palm Guard"
      onError={() => setFailed(true)}
      onLoad={(e) => {
        if (e.currentTarget.naturalWidth === 0) setFailed(true);
      }}
      className={cn("h-11 w-auto", className)}
    />
  );
}
