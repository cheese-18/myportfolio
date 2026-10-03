/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        minecraft: ['VT323', 'monospace'],
        pixel: ['Silkscreen', 'monospace'],
      },
      colors: {
        mc: {
          sky: '#78A7FF',
          grass: '#5C8E32',
          dirt: '#866043',
          oak: '#B8945F',
          oakDark: '#6A4D27',
          stone: '#707070',
          stoneDark: '#4A4A4A',
          end: '#0c0714',
          endStone: '#DFE69F',
          endStoneDark: '#99A15F',
          endPortal: '#5A189A',
          purpur: '#AB67A9',
          purpurDark: '#6B386A',
          enderGreen: '#00C88C',
          diamond: '#4DEEEA',
          gold: '#FFAA00',
        }
      },
      boxShadow: {
        'mc-btn': 'inset -3px -3px 0px 0px #373737, inset 3px 3px 0px 0px #FFFFFF',
        'mc-btn-active': 'inset 3px 3px 0px 0px #373737, inset -3px -3px 0px 0px #FFFFFF',
        'mc-panel': 'inset -4px -4px 0px 0px #3A3A3A, inset 4px 4px 0px 0px #C6C6C6',
        'mc-panel-dark': 'inset -4px -4px 0px 0px #1a0f2e, inset 4px 4px 0px 0px #7b42a7',
      }
    },
  },
  plugins: [],
}
