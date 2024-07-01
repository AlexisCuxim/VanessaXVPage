/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/js/**/*.js",
  ],
  theme: {
    screens: {
      xs: '320px',
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1200',
      '2xl': '1440px',
    },
    fontFamily: {
      rochester: ['Rochester', 'sans-serif'],
      poppins: ['Poppins', 'sans-serif'],
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
      center: true,
    },
    colors: {
      'white': '#ffffff',
      'primary': '#006A6A',
      'secondary': '#EEE7CE',
      'text': '#444444',
    },
  },
  plugins: [],
}

