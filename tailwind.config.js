/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      keyframes: {
        floatUp: {
          '0%': { transform: 'translate(0px)' },
          '50%': { transform: 'translate(0, -8px)' },
          '100%': { transform: 'translate(0)' },
        },
      },
      animation: {
        floatUp: 'floatUp 2s',
      },
      colors: {
        primaria: '#FF00FF',
      },
    },
  },
  plugins: [],
}
