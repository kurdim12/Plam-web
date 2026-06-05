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
        "card-dark": "0 26px 60px -28px rgba(0, 0, 0, 0.65)",
        glow: "0 0 60px -12px rgba(201, 162, 75, 0.35)",
      },
      backgroundImage: {
        "green-radial":
          "radial-gradient(120% 120% at 15% 0%, #0F4A36 0%, #0A3526 45%, #062119 100%)",
        "darkest-radial":
          "radial-gradient(120% 100% at 85% 0%, #0B3527 0%, #062119 55%, #04140F 100%)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      transitionTimingFunction: {
        emphatic: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
