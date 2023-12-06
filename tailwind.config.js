/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "color-primary": "#087f5b",
      },
      boxShadow: {
        custom: "0 20px 30px 0 rgba(0, 0, 0, 0.27)",
      },
    },
  },
  plugins: [],
};
