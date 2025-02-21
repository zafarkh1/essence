import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        gilroy: ["Gilroy", "sans-serif"],
      },
      colors: {
        primary: "#FA3402",
        primaryHover: "#EF544B",
        grayish: "#797979",
      },
      container: {
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "14rem",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
