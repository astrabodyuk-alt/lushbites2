import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark:       "#1a1a1a",
        fire:       "#e84c1e",
        "fire-dark":"#c43a10",
        "fire-light":"#ff6b35",
        cream:      "#f5f0e8",
        brown:      "#2d2520",
        card:       "#fffefa",
        muted:      "#b8a898",
        border:     "#e4ddd3",
        text:       "#2d2520",
        "text-2":   "#6b5c52",
      },
      fontFamily: {
        display: ["var(--font-instrument)", "Georgia", "serif"],
        body:    ["var(--font-dm-sans)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        container: "1200px",
      },
      height: {
        nav: "72px",
      },
      borderRadius: {
        sm:  "6px",
        md:  "12px",
        lg:  "20px",
        xl:  "32px",
        full:"9999px",
      },
      boxShadow: {
        sm:   "0 1px 3px rgba(45,37,32,.10), 0 1px 2px rgba(45,37,32,.06)",
        md:   "0 4px 16px rgba(45,37,32,.10), 0 2px 6px rgba(45,37,32,.06)",
        lg:   "0 12px 40px rgba(45,37,32,.14), 0 4px 12px rgba(45,37,32,.08)",
        fire: "0 8px 32px rgba(232,76,30,.30)",
      },
      keyframes: {
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%":   { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        popIn: {
          "0%":   { opacity: "0", transform: "scale(0.88)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        scrollPulse: {
          "0%, 100%": { transform: "translateY(0)", opacity: "1" },
          "50%":       { transform: "translateY(8px)", opacity: "0.4" },
        },
      },
      animation: {
        "fade-up":      "fadeUp 0.7s ease both",
        marquee:        "marquee 22s linear infinite",
        "pop-in":       "popIn 0.5s cubic-bezier(0.34,1.56,0.64,1) both",
        "scroll-pulse": "scrollPulse 1.6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
