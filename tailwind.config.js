/** @type {import('tailwindcss').Config} */
export default {
  content: ["./static/index.html", "./static/src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      "md":"600px",
      "lg":"900px",
      "xl":"1300px",
    },
    extend: {
      fontFamily: {
        sans: ['"Open Sans"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
