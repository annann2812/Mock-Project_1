/*eslint-env node*/
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  baseUrl: ".",
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Poppins"', "sans-serif"],
      },
      colors: {
        primary: {
          "01": "#76885B",
          "02": "#ff9800",
          "03": "#70c0ff",
        },
        secondary: {
          "01": "#ccc",
          "02": "#ddd",
          "03": "#eee",
        },
      },
    },
  },
  plugins: [],
};
