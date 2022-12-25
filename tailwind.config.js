/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors:{
        btnPrimary: "p-3 bg-green-400 border-2",
        primary: "black"
      }
    },
  },
  plugins: [],
}
