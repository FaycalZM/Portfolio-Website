/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'LeagueSpartan': ['League Spartan', 'sans-serif'],
        'Futura': ['FuturaPT', 'sans-serif'],
        'LaBelleAurore': ['La Belle Aurore', 'sans-serif']
      },
      colors: {
        'primary-yellow': '#ffd700',
        'primary-white': '#fff',
        'secondary-gray': '#4d4d4e',
        'very-dark-blue': '#022c43',
        'very-dark-gray': '#181818',
        'dark-gray': '#333',
        'dark-blue': '#115173'
      }
    },
  },
  plugins: [],
}

