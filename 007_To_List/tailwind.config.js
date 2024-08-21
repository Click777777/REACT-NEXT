/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        btn_success: "#44FFD2",
        btn_error: "#F72C25",
      },
    },
  },
  plugins: [],
};
