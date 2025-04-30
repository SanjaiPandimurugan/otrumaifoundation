/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#e6f7f7',
          200: '#b3e6e6',
          300: '#80d6d6',
          400: '#4dc6c6',
          500: '#1ab6b6', // teal from logo
          600: '#159191',
          700: '#106d6d',
          800: '#0a4848',
          900: '#052424',
        },
        secondary: {
          100: '#e6f7ef',
          200: '#b3e6d1',
          300: '#80d6b3',
          400: '#4dc695',
          500: '#1ab676', // green from logo
          600: '#15915e',
          700: '#106d47',
          800: '#0a482f',
          900: '#052418',
        },
        accent: '#b97a34', // brown accent color for buttons/CTAs
      },
    },
  },
  plugins: [],
}