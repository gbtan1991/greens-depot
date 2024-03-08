/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      colors: {
        themeNeutral: "#dafbfb",
        themeText: "#252F2F",
      }
    },
  },
  plugins: [],
}
