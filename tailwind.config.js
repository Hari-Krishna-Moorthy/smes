/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        dark: '#333',
        light: '#fff',
      },
      textColor: {
        dark: '#fff',
        light: '#333',
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
        lexEnd: ['Lexend', 'sans-serif'],
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
