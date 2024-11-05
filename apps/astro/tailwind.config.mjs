/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      blue: "#1fb6ff",
      purple: "#7e5bef",
      pink: "#ff49db",
      orange: "#ff7849",
      green: "#13ce66",
      yellow: "#ffc82c",
      white: "#fff",
      black: "#000",
      gray: {
        100: "#14151a",
        200: "#25252d",
        500: "#35394a",
        700: "#9e9fa9",
      },
    },
    fontWeight: {
      default: 300,
      bold: 700,
    },
    fontFamily: {
      default: ["Poppins", "Open Sans", "sans-serif"],
      brand: ["Bungee", "sans-serif"],
    },
  },
  plugins: [],
};
