/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      ...colors,
      'prussian-blue': '#183446',
      'prussian-blue-opacity-50': 'rgba(24,52,70,0.50)',
      'blue-ncs': '#0090C1',
      'blue-ncs-opacity-10': 'rgba(0,144,193,0.10)',
      'blue-ncs-opacity-30': 'rgba(0,144,193,0.30)',
      'custom-xiketic': '#0D0221',
      'pacific-blue': '#38AECC',
      'blue-sapphire': '#046E8F',
      'midnight-blue': '#0F084B',
      'satin-sheen-gold': '#CCA43B',
      'custom-platinum': '#E5E5E5',
    },
    fontFamily: {
      roboto: ['Roboto', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
};
