/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        theme: ["Poppins, sans"]
      },

      colors: {
          themeAccent: '#82ae46',
          themeBlack: '#050407',
          themeWhite: '#f5f5f5',
      }
    },
  },
  plugins: [],
}