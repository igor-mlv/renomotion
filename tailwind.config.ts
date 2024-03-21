import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
    fontFamily: {
      montserrat: ["Montserrat", "sans-serif"],
      noto: ["Noto Sans Lao Looped", "sans-serif"],
    },
    fontWeight: {
      normal: '400',
      bold: '700',
    },
    extend: {
      backgroundImage: {
        'root-pattern': "url('/assets/root-bg.png')",
      },
      colors: {
        'gold': '#DCBF77',
      },
    },
  },
  plugins: [],
};
export default config;
