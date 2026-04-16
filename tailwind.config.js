/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        blush: "#f6d7d7",
        peach: "#f6d1bd",
        sand: "#efe4da",
        rose: "#c7877d",
        champagne: "#faf5f0",
        ink: "#4a3d39",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "serif"],
        script: ['"Parisienne"', "cursive"],
        sans: ['"Manrope"', "sans-serif"],
      },
      boxShadow: {
        soft: "0 20px 60px rgba(117, 88, 75, 0.12)",
        glow: "0 10px 35px rgba(199, 135, 125, 0.18)",
      },
    },
  },
  plugins: [],
};
