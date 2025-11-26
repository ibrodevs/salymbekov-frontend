/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          50: '#EBF4FF',
          100: '#D6E9FF',
          200: '#A8D3FF',
          300: '#7ABDFF',
          400: '#4CA7FF',
          500: '#0B4C8C',
          600: '#0B4C8C',
          700: '#093A6B',
          800: '#07294A',
          900: '#020B14',
        }
      }
    },
  },
  plugins: [],
}
