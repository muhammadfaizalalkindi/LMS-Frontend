/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ["./src/**/*.{html,js,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#F9D100',
          light: '#fef9e0',
          dark: '#f7b900',
        },
        secondary: {
          DEFAULT: '#564FFD',
          light: '#ebeaff'
        },
      }
    },
  },
  plugins: [],
}

