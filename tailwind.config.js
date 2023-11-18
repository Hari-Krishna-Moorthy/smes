/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#fff',
          dark: '#192054',
        },
        secondary: {
          light: '#F2F5FD',
          dark: '#192054',
        },
      },
      backgroundColor: {
        dark: '#333',
        light: '#fff',
        light1: '#1C204F',
        dark1: '#D4D7E8',
        primary: {
          light: '#fff',
          dark: 'rgb(18,18,18)',
        },
        secondary: {
          light: '#F2F5FD',
          dark: '#192054',
        },
      },
      textColor: {
        dark: '#fff',
        light: '#333',
        light1: '#1C204F',
        dark1: '#D4D7E8',
        primary: {
          light: '#F2F5FD',
          dark: '#192054',
        },
        secondary: {
          light: '#fff',
          dark: '#192054',
        },
      },
      fontFamily: {
        display: 'Lexend',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },

  // font-name [fontSize, lineHeight]
  fontSize: {
    sm: ['14px', '21px'],
    base: ['16px', '24px'],
    lg: ['18px', '27px'],
    xl: ['24px', '36px'],
    '2xl': ['32px', '48px'],
    '3xl': ['48px', '72px'],
  },
  plugins: [],
  darkMode: 'class',
}
