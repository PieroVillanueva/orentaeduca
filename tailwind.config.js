/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      colors: {
        secondary: '#F6A360',
        typography: {
          100: '#82899A',
          500: '#1F2226',
        },
        primary: {
          50: '#F2F8FD',
          100: '#E4EFFA',
          200: '#C2DDF5',
          300: '#8CC3ED',
          400: '#4FA4E1',
          500: '#2889CF',
          600: '#1A6CAF',
          700: '#16568E',
          800: '#164976',
          900: '#183F62',
          950: '#0F263E',
        },
      },
      backgroundImage: {
        'pattern': "url('/img/bgCeleste.svg')",
        'contacto1': "url('/img/contacto1.webp')",
        'gradiente-pattern': 'linear-gradient(130deg, rgba(194, 221, 245, 0.25) -1%, rgba(79, 164, 225, 0.25) 59%)',
        'gradiente1': 'linear-gradient(180deg, #FFFFFF 21%, #C2DDF5 107%)',
      },
      boxShadow: {
        'interno': '0px -174px 52.3px -26px rgba(0,0,0,0.45) inset',
      },
    },
  },
  plugins: [],
}