/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-100px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(100px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        underlineExpand: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
      },
      animation: {
        slideInLeft: 'slideInLeft 1s ease-out forwards',
        slideInRight: 'slideInRight 1s ease-out forwards',
        underlineExpand: 'underlineExpand 0.5s ease-out forwards',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),],
}