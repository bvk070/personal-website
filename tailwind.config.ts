import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        surface: "var(--surface)",
        "surface-2": "var(--surface-2)",
        border: "var(--border)",
        gold: "var(--gold)",
        "gold-muted": "var(--gold-muted)",
        "text-primary": "var(--text)",
        "text-secondary": "var(--text-2)",
        "text-muted": "var(--text-muted)",
      },
      borderRadius: {
        btn: "8px",
        card: "12px",
        pill: "999px",
      },
      fontSize: {
        hero: ["72px", { lineHeight: "1.05", letterSpacing: "-0.03em" }],
        section: ["40px", { lineHeight: "1.15", letterSpacing: "-0.03em" }],
        "card-title": ["22px", { lineHeight: "1.3", letterSpacing: "-0.03em" }],
        body: ["16px", { lineHeight: "1.7" }],
      },
      boxShadow: {
        "card-glow": "0 0 0 1px var(--border), 0 0 20px rgba(201,151,44,0.08)",
        "card-glow-hover": "0 0 0 1px var(--gold-muted), 0 0 30px rgba(201,151,44,0.15)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        cal: ["var(--font-cal)", "var(--font-inter)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
