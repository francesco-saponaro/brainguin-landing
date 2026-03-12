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
        primary: "#0F172A",
        action: {
          DEFAULT: "#F97316",
          hover: "#EA580C",
        },
        accent: "#38BDF8",
        wood: "#A16207",
        page: "#F8FAFC",
        card: "#FFFFFF",
        input: "#F1F5F9",
        text: {
          main: "#0F172A",
          muted: "#64748B",
        },
        status: {
          hard: "#EF4444",
          medium: "#EAB308",
          easy: "#22C55E",
        },
      },
      fontFamily: {
        heading: ["var(--font-poppins)"],
        body: ["var(--font-inter)"],
      },
    },
  },
  plugins: [],
};
export default config;
