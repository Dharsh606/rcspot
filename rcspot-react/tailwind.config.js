/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'rc-red': '#e50914',
        'rc-dark': '#0a0a0a',
        'rc-darker': '#000',
        'rc-light': '#1a1a1a',
        'rc-card': '#111',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-in-right': 'slideInRight 0.6s ease-in-out',
        'slide-out-right': 'slideOutRight 0.5s ease-in-out',
        'scale-in': 'scaleIn 0.5s ease',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { transform: 'translate(100%, -50%)', opacity: '0' },
          '100%': { transform: 'translateY(-50%)', opacity: '1' },
        },
        slideOutRight: {
          '0%': { transform: 'translateY(-50%)', opacity: '1' },
          '100%': { transform: 'translate(100%, -50%)', opacity: '0', visibility: 'hidden' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0)' },
          '100%': { transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
}
