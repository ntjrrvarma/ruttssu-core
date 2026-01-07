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
        // We define your "Ruttssu Brand" colors here
        brand: {
          black: "#050505",   // Deepest black
          dark: "#0a0a0a",    // Main Background
          gray: "#1f1f1f",    // Card Background
          accent: "#3b82f6",  // System Blue
          text: "#ededed",    // Main Text
          muted: "#a1a1aa",   // Secondary Text
        }
      },
      fontFamily: {
        // We link these to the variables in layout.tsx
        sans: ["var(--font-inter)"],
        mono: ["var(--font-mono)"],
      },
    },
  },
  plugins: [],
};
export default config;