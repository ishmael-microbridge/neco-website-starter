/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      borderWidth: {
        1: '1px',
      },
      colors: {
        "mid-gray": "#4E4E4E",
        "dark-gray": "#222222",
        "neco-green": "#2ADC9D",
        "neco-blue": "#145596"
      },
      backgroundImage: {
        "timeline-item-gradient": "linear-gradient(#145596 65%, #063666 100%)",
        "header-pattern": "url('../../assets/images/three-stripes-pattern.svg')",
        "line-pattern": "url('../../assets/images/line-pattern-top.svg'), url('../../assets/images/line-pattern-bottom.svg')",
      },
    },
  },
  plugins: [],
}
