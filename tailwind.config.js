/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f9f6f3',
          100: '#f3ede7',
          200: '#e7dbd1',
          300: '#d8c3b0',
          400: '#c5a68c',
          500: '#b48a6b',
          600: '#a37257',
          700: '#8d5e49',
          800: '#734e3f',
          900: '#604138',
          950: '#382218',
        },
        secondary: {
          50: '#f5f7f6',
          100: '#e9efed',
          200: '#d3e0db',
          300: '#b1c9c1',
          400: '#89aea2',
          500: '#689487',
          600: '#537a6f',
          700: '#43625a',
          800: '#39504a',
          900: '#30413d',
          950: '#1a2422',
        },
        accent: {
          50: '#fef4ee',
          100: '#fde6d8',
          200: '#fac8b0',
          300: '#f7a282',
          400: '#f37550',
          500: '#ee4d25',
          600: '#da3518',
          700: '#b32815',
          800: '#922217',
          900: '#781f16',
          950: '#410d08',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Helvetica', 'Arial', 'sans-serif'],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
        },
      },
    },
  },
  plugins: [],
}