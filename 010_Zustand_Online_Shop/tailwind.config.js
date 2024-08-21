/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // primary: "#283044",
        // bg_main: "#ffffff",
        primary: "#34e1d3",
        bg_main: "#000100",
        // primary: "#000000",
        // bg_main: "#ffffff",
      },
      screens: {},
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
