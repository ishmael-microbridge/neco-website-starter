/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      borderWidth: {
        1: '1px',
      },
      colors: {
        "dark-gray": "#4E4E4E",
        "neco-green": "#2ADC9D"
      }
    },
  },
  plugins: [],
}
