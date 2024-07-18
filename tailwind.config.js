/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'qunasys-primary': '#00479d',
        'qunasys-secondary': '#009BDE',
        'qunasys-green': '#569700',
        'qunasys-orange': '#DF5B10',
        'qunasys-red': '#ad1818',
        'qunasys-yellow': '#E4B50E',
        'gray-100': '#f8f8f8',
        'gray-200': '#f4f4f4',
        'gray-300': '#e9e9e9',
        'gray-400': '#d1d1d1',
        'gray-500': '#bababa',
        'gray-600': '#9f9f9f',
        'gray-700': '#868686',
        'gray-800': '#6f6f6f',
        'gray-900': '#5a5a5a',
        'text-base': '#212121',
        white: '#fff',
      },
    },
  },
  plugins: [],
};
