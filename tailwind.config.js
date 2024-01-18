/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
        Jost: ["'Jost', sans-serif"],
      },
    },
    colors: {
      red: "#ea2929",
      grey: "#8e8d8d",
      white: "#ffffff",
      black: "#000000",
    },
  },
  plugins: [require("daisyui")],
};
