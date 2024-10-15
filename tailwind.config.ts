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
        primary: 'rgba(82, 39, 66, 1)', // M-JOY Purple
        shade_primary: 'rgba(82, 39, 66, 0.3)', // M-JOY Purple Shade with 30% opacity
        secondary: 'rgba(209, 165, 56, 1)', // M-JOY Orange
        tertiary: 'rgba(237, 206, 75, 1)', // M-JOY Yellow
        gray_title: 'rgba(51, 51, 51, 1)', // Gray 1 (Title)
        gray_description: 'rgba(79, 79, 79, 1)', // Gray 2 (Description)
        border_button: 'rgba(59, 72, 17, 1)', // Green Button Border
        white: 'rgba(255, 255, 255, 1)', // White
      },
    },
  },
  plugins: [],
};
export default config;
