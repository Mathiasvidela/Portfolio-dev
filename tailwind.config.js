/** @type {import('tailwindcss').Config} */
import animations from '@midudev/tailwind-animations'

export default {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        // Simple 16 column grid
        '2fr-1fr': '2fr 1fr'
      },

      backgroundClip: ['text']
    },
    colors: {
      'wine' : '#AB446E',
      'purple-100' : '#A08DF1',
      'purple-200' : '#8980FC',
      'purple-300' : '#3B385B',
      'purple-350' : '#8C89B4',
      'purple-400' : '#28253B',
      'skyblue' :'#28B5ED',
      'black-bg' : '#1A191F',
      'black-100' : '#25252C',
      'black-200' : '#0A0B0D',
      'white' : '#f3f3f3',
      'white-100' : '#D8D8D8',
      'gray-100' : '#929292',
      transparent: 'transparent',
    },
  },
  plugins: [animations],
}

