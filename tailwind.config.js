/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        custom:['quicksand']
      },
      colors: {
        'leftpowerbi': '#29092C',
        'midpowerbi': '#3B0D30',
        'rightpowerbi': '#531232',
        'bgpowerbi': '#52334F',
        'bg2powerbi': '#603552',
      }
    },
  },
  plugins: [],
}

