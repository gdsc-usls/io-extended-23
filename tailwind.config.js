/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "google-reg": ["Google Sans Regular", "sans-serif"],
        "google-mid": ["Google Sans Medium", "sans-serif"],
      },
    },
  },
  plugins: [],
};
