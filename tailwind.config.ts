import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#05060f",
          900: "#090b18",
          800: "#10152b",
          700: "#1a2342",
        },
        electric: "#3d5afe",
        cyan: "#8fa6ff",
        paper: "#f5f0e6",
      },
      fontFamily: {
        sans: ["Manrope Variable", "Segoe UI", "sans-serif"],
        serif: ["Bodoni Moda Variable", "Georgia", "serif"],
      },
      letterSpacing: {
        display: "-0.065em",
      },
      animation: {
        marquee: "marquee 24s linear infinite",
      },
      keyframes: {
        marquee: {
          to: { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
