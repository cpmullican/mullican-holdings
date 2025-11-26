import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: "#2C2C2C",
        earth: "#8B7355",
        gold: "#C9A962",
        ivory: "#FAF8F5",
        cream: "#F5F2ED",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        serif: ["var(--font-serif)", "serif"],
      },
      fontSize: {
        "display-xl": ["4.5rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-lg": ["3.5rem", { lineHeight: "1.15", letterSpacing: "-0.01em" }],
        "display-md": ["2.5rem", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
        "body-lg": ["1.25rem", { lineHeight: "1.75" }],
        "body": ["1.125rem", { lineHeight: "1.8" }],
      },
      spacing: {
        "section": "8rem",
        "section-sm": "4rem",
      },
      animation: {
        "fade-up": "fadeUp 0.8s ease-out forwards",
        "fade-in": "fadeIn 0.6s ease-out forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
export default config;

