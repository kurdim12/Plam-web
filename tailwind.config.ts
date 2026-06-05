import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.25rem",
      screens: { "2xl": "1200px" },
    },
    extend: {
      colors: {
        // Single source of truth — Palm Guard design system
        green: {
          DEFAULT: "#0A3526", // primary dark bg
          darkest: "#062119",
          panel: "#0F4A36",
        },
        gold: {
          DEFAULT: "#C9A24B",
          bright: "#E5C679",
        },
        cream: "#F7F2E5",
        paper: "#FCFAF3",
        ink: "#13271E",
        muted: "#5D7066",
        error: "#B4452F",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-albert)", "system-ui", "sans-serif"],
        arabic: ["var(--font-almarai)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        card: "18px",
        "card-lg": "22px",
      },
      boxShadow: {
        card: "0 18px 40px -22px rgba(6, 33, 25, 0.28)",
        "card-hover": "0 28px 60px -28px rgba(6, 33, 25, 0.34)",
        "card-dark": "0 26px 60px -28px rgba(0, 0, 0, 0.65)",
        glow: "0 0 60px -12px rgba(201, 162, 75, 0.35)",
        "glow-gold": "0 16px 50px -18px rgba(201, 162, 75, 0.5)",
        "glow-soft": "0 24px 70px -30px rgba(201, 162, 75, 0.35)",
      },
      backgroundImage: {
        "green-radial":
          "radial-gradient(120% 120% at 15% 0%, #0F4A36 0%, #0A3526 45%, #062119 100%)",
        "darkest-radial":
          "radial-gradient(120% 100% at 85% 0%, #0B3527 0%, #062119 55%, #04140F 100%)",
        "gold-sheen":
          "linear-gradient(110deg, transparent 25%, rgba(229, 198, 121, 0.5) 50%, transparent 75%)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(0.75)", opacity: "0.55" },
          "100%": { transform: "scale(2.3)", opacity: "0" },
        },
        sheen: {
          "0%": { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "-200% 0" },
        },
      },
      animation: {
        float: "float 7s ease-in-out infinite",
        "float-slow": "float 11s ease-in-out infinite",
        "pulse-ring": "pulse-ring 3.4s ease-out infinite",
      },
      transitionTimingFunction: {
        emphatic: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
