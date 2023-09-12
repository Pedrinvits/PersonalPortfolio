const { color } = require('framer-motion')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: ['var(--font-inter)', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'hero-image': "url('/images/hero-bg.png')",
      },
      fontFamily: {
        mono: ['var(--font-plex-mono)', 'monospace'],
      },
      boxShadow: {
        //button: '0px 0px 68px 7px rgba(5, 150, 105, 0.4)',
        button: '0px 0px 68px 7px rgba(101, 86, 178, 0.13) ',
      },
      colors : {
        'light-purple': '#a659f2',
        'gray-line': '#323238',
        'gradient-black':'rgb(23, 23, 23)',
        'button-hover' : '#1C1B22'
      },
      backgroundColor: {
        'button' : 'rgb(23, 23, 23)',
        'body' : '#121214'
      }
    },
  },
  plugins: [],
}
