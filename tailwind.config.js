/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        'bright-red': {
          '50': '#fff0f1',
          '100': '#ffdcdf',
          '200': '#ffbfc5',
          '300': '#ff939e',
          '400': '#ff5566',
          '500': '#ff2137',
          '600': '#ff0019',
          '700': '#d90015',
          '800': '#af0112',
          '900': '#930916',
          '950': '#510008',
      },
      
      }
    },
  },
  plugins: [],
  darkMode: 'selector',
}

