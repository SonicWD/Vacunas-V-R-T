/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: '#1b1b1b',
        light: '#ffffff',
        gold: '#c7b8a5',
        red: '#880b0b4b',
        gray: '#efefef',
      },
      fontFamily: {
        oswald: ['Oswald', 'sans-serif'],
      },
      letterSpacing: {
        tight: '.05rem',
      },
    },
  },
  plugins: [],
}