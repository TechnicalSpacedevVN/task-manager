/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    // colors: {
    //   accent: '#249fd4',
    //   blue: '#1fb6ff',
    //   purple: '#7e5bef',
    //   pink: '#ff49db',
    //   orange: '#ff7849',
    //   green: '#13ce66',
    //   yellow: '#ffc82c',
    //   'gray-dark': '#273444',
    //   gray: '#8492a6',
    //   'gray-light': '#d3dce6',
    // },
    extend: {
      // colors: {
      //   accent: {
      //     DEFAULT: '#249fd4',
      //     50: '#f4fafc',
      //     100: '#cae7f4',
      //     200: '#a0d5ec',
      //     300: '#77c3e4',
      //     400: '#4db1dc',
      //     500: '#249fd4',
      //     600: '#1c7fa9',
      //     700: '#155f7f',
      //     800: '#0e3f54',
      //     900: '#071f2a',
      //   },
      // },
      colors: {
        accent: {
          DEFAULT: '#249fd4',
          dark: '#071f2a',
          50: '#f4fafc',
          100: '#cae7f4',
          200: '#a0d5ec',
          300: '#77c3e4',
          400: '#4db1dc',
          500: '#249fd4',
          600: '#1c7fa9',
          700: '#155f7f',
          800: '#0e3f54',
          900: '#071f2a',
        },
      },
      // width: {
      //   menu: 64,
      // },
      // minWidth: {
      //   menu: 64,
      // },
    },
    // minWidth: {
    //   150: '150px',
    //   '1/4': '25%',
    //   '1/2': '50%',
    //   '3/4': '75%',
    // },
  },
  plugins: [],
  corePlugins: {
    // preflight: false,
  },
}
