import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'grey-1': '#7C7876',
        'grey-2': '#8A9EA8',
        'blue-1': '#1C204F',
        'blue-2': '#DEE6FB66'
      },
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
      boxShadow: {
        'services-content': '0px 11px 5px 17px rgba(107, 149, 239, 0.12)'
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
} as Config
