/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "color-primary": "#087f5b",
        "color-primary-dark": "#066c48",
      },
      boxShadow: {
        custom: "0 5px 20px 0 rgba(0, 0, 0, 0.25)",
      },
      fontFamily: {
        "ibm-plex": ["IBM Plex Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
