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
