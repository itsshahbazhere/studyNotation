/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        richBlack: {
          900: '#000814',
          800: '#161D29',
          700: '#AFB2BF',
          500: '#2C333F'
           // Optional lighter shades
        },
      },
    },
  },
  plugins: [],
}