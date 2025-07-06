/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        elegant: ['"Playfair Display"', 'serif'],
      },
    },
  },
  plugins: [],
}

