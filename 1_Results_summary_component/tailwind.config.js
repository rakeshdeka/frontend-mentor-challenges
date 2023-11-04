/** @type {import('tailwindcss').Config} */



export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Hanken_Grotesk: ['Hanken Grotesk', 'sans-serif'],

      },
      screens: {
        'mobile': '375px',
      },

    },
  },
  plugins: [],
}

