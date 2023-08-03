/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      colors: {
        transparent: 'transparent',
        white: '#fff',
        primary: '#191A15',
        accent: '#54BD95',
        gradient: '#dbf0eb',
        gradientPink: '#f4f1ee',
        gray: '#A6A6A6',
      },
    },
  },
  plugins: [],
}

