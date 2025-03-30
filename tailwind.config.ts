import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      // bp means Break Point

      "bp-2xl": { min: "1600px" },
      // => @media (min-width: 1600px) { ... }

      "bp-xl": { min: "1340px" },
      // => @media (min-width: 1340px) { ... }

      "bp-lg": { min: "1040px" },
      // => @media (min-width: 1040px) { ... }

      "bp-md": { min: "840px" },
      // => @media (min-width: 840px) { ... }

      "bp-sm": { min: "640px" },
      // => @media (min-width: 640px) { ... }
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
export default config;
