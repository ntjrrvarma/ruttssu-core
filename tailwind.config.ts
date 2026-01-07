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
        // THE OFFICIAL RUTTSSU PALETTE
        brand: {
          black: "#050505",       // Deepest Black (Main Background)
          dark: "#0A0A0A",        // Slightly lighter (Cards/Nav)
          gray: "#262626",        // Borders
          accent: "#3291FF",      // System Blue (Links/Buttons)
          text: "#EDEDED",        // Main Text (Readable White)
          muted: "#888888",       // Secondary Text (Subtitles)
        },
      },
      fontFamily: {
        // Logic vs. Design
        sans: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;