/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: ["./*.{html,js}"],
    theme: {
      extend: {
        fontFamily: {
          'roboto': ['Roboto', 'sans-serif'],
        },
      },
    },
    plugins: [],
  }