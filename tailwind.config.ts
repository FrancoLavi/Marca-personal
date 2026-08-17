import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#17202a",
        muted: "#66717d",
        line: "#e5e9ed",
        surface: "#f7f8f9",
        accent: "#216e68",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 12px 30px rgba(23, 32, 42, 0.07)",
      },
    },
  },
  plugins: [],
};

export default config;
