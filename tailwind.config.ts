import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        canvas: "#0c0c0e",
        ink: "#f4f1ea",
        muted: "#96938c",
        line: "#242327",
        surface: "#141316",
        card: "#1b1a1e",
        accent: "#f2a63d",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      boxShadow: {
        soft: "0 24px 60px rgba(0, 0, 0, 0.45)",
      },
    },
  },
  plugins: [],
};

export default config;
