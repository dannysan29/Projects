/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'space-black': '#000000',
        'space-gray': '#1a1a1a',
        'space-blue': '#0077cc',
        'space-cyan': '#00bfff',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'pulse-slow': 'pulse 2s ease-in-out infinite',
      }
    },
  },
  plugins: [],
} 