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
        brand: {
          void: "#050505",       // Main Background
          panel: "#0F0F0F",      // Card Backgrounds
          steel: "#2A2A2A",      // Borders
          cyan: "#00E5FF",       // Action / Hover
          gold: "#FFD700",       // Highlight / Warning
          text: "#EDEDED",       // Primary Text
          muted: "#888888",      // Secondary Text
        },
      },
      fontFamily: {
        sans: ["var(--font-rajdhani)", "sans-serif"], 
        mono: ["var(--font-space-mono)", "monospace"], 
      },
      backgroundImage: {
        "grid-pattern": "linear-gradient(to right, #ffffff05 1px, transparent 1px), linear-gradient(to bottom, #ffffff05 1px, transparent 1px)",
      },
      animation: {
        "blink": "blink 2s infinite",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.4" },
        },
      },
    },
  },
  plugins: [],
};
export default config;