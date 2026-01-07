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
          void: "#050505",       // Deep Space (Main BG)
          armor: "#0F0F0F",      // Panels/Cards
          steel: "#2A2A2A",      // Borders/Grid
          cyan: "#00E5FF",       // Primary Action (Cyber Cyan)
          gold: "#FFD700",       // Highlights (Architect Gold)
          success: "#00FF94",    // Logic Green
          creative: "#9D46FF",   // Data Purple
          text: "#EDEDED",       // Standard Text
          muted: "#888888",      // Secondary Text
        },
      },
      fontFamily: {
        sans: ["var(--font-rajdhani)", "sans-serif"], // Default for headers
        mono: ["var(--font-mono)", "monospace"],      // Default for data
      },
      backgroundImage: {
        // The faint grid pattern (5% opacity white)
        "grid-pattern": "linear-gradient(to right, #ffffff05 1px, transparent 1px), linear-gradient(to bottom, #ffffff05 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};
export default config;