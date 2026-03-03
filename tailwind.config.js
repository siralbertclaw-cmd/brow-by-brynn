/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        cream:    "#FAF7F4",
        blush:    "#E8C4C4",
        rose:     "#C9908E",
        gold:     "#C9A96E",
        mink:     "#8B7355",
        charcoal: "#2C2424",
      },
      fontFamily: {
        serif: ["'Playfair Display'", "Georgia", "serif"],
        sans:  ["'Lato'", "sans-serif"],
      },
    },
  },
  plugins: [],
}
