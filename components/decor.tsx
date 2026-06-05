import { cn } from "@/lib/utils";

/** Subtle SVG fractal-noise grain overlay. */
export function Grain({
  className,
  opacity = 0.06,
}: {
  className?: string;
  opacity?: number;
}) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 grain-overlay mix-blend-soft-light",
        className
      )}
      style={{ opacity }}
    />
  );
}

/** Concentric gold rings — the "sound radiating from the trunk" motif. */
export function GoldRings({
  className,
  opacity = 0.5,
}: {
  className?: string;
  opacity?: number;
}) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 480 480"
      fill="none"
      style={{ opacity }}
      className={cn("pointer-events-none absolute", className)}
    >
      {[36, 84, 132, 180, 228].map((r, i) => (
        <circle
          key={r}
          cx="240"
          cy="240"
          r={r}
          stroke="#C9A24B"
          strokeOpacity={0.32 - i * 0.045}
          strokeWidth="1"
        />
      ))}
    </svg>
  );
}

/** Thin gold sound-wave lines for section accents. */
export function Waveform({
  className,
  opacity = 0.25,
}: {
  className?: string;
  opacity?: number;
}) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
      fill="none"
      style={{ opacity }}
      className={cn("pointer-events-none absolute", className)}
    >
      <path
        d="M0 60 Q 75 10 150 60 T 300 60 T 450 60 T 600 60 T 750 60 T 900 60 T 1050 60 T 1200 60"
        stroke="#C9A24B"
        strokeWidth="1.25"
      />
      <path
        d="M0 60 Q 60 95 120 60 T 240 60 T 360 60 T 480 60 T 600 60 T 720 60 T 840 60 T 960 60 T 1080 60 T 1200 60"
        stroke="#C9A24B"
        strokeOpacity="0.55"
        strokeWidth="1"
      />
    </svg>
  );
}

/** Ambient radial glow blob for depth (place behind content). */
export function Glow({
  className,
  tone = "gold",
}: {
  className?: string;
  tone?: "gold" | "green" | "bright";
}) {
  const bg =
    tone === "green"
      ? "rgba(15, 74, 54, 0.5)"
      : tone === "bright"
        ? "rgba(229, 198, 121, 0.2)"
        : "rgba(201, 162, 75, 0.16)";
  return (
    <div aria-hidden className={cn("glow-blob", className)} style={{ background: bg }} />
  );
}

/** Concentric "listening" rings pulsing outward (CSS, compositor-only). */
export function SoundWaveRings({ className }: { className?: string }) {
  return (
    <div aria-hidden className={cn("pointer-events-none absolute", className)}>
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="absolute inset-0 rounded-full border border-gold/25 animate-pulse-ring"
          style={{ animationDelay: `${i * 1.1}s` }}
        />
      ))}
    </div>
  );
}

/** Soft gradient seam that blends a section's top edge into the previous one. */
const SEAM_COLORS: Record<string, string> = {
  darkest: "#04140F",
  dark: "#062119",
  green: "#0A3526",
  cream: "#F7F2E5",
  paper: "#FCFAF3",
};
export function SectionFade({
  from,
  className,
}: {
  from: keyof typeof SEAM_COLORS;
  className?: string;
}) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-x-0 top-0 z-[1] h-20",
        className
      )}
      style={{
        background: `linear-gradient(to bottom, ${SEAM_COLORS[from]}, transparent)`,
      }}
    />
  );
}
