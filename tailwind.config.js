/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sour: ["Sour Gummy", "cursive"], // Custom font
      },
    },
  },
  plugins: [],
};
