import { cn } from "@/lib/utils";

const DELAYS = [0, 0.18, 0.36, 0.12, 0.28];
const DURATIONS = [0.9, 1.15, 0.8, 1.25, 1.0];

/**
 * The looping "listening" equalizer. Driven by a CSS keyframe animation
 * (compositor-only) so framer-motion's JS frame-loop can idle.
 */
export function Equalizer({
  bars = 5,
  className,
  barClassName,
}: {
  bars?: number;
  className?: string;
  barClassName?: string;
}) {
  return (
    <div aria-hidden className={cn("flex h-4 items-end gap-[3px]", className)}>
      {Array.from({ length: bars }).map((_, i) => (
        <span
          key={i}
          className={cn("eq-bar w-[3px] rounded-full bg-gold-bright", barClassName)}
          style={{
            animationDelay: `${DELAYS[i % DELAYS.length]}s`,
            animationDuration: `${DURATIONS[i % DURATIONS.length]}s`,
          }}
        />
      ))}
    </div>
  );
}
