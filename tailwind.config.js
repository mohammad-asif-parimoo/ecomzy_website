/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'outfit': ['Outfit', 'sans-serif'],
        'preahvihear': ['Preahvihear', 'sans-serif'],
        'plus': ['Plus Jakarta Sans', 'sans-serif'],
        'tinos': ['Tinos', 'serif'],
      }
    },
  },
  plugins: [],
}