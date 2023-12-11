/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      purple: '#3f3cbb',
      midnight: '#121063',
      metal: '#565584',
      tahiti: '#3ab7bf',
      silver: '#ecebff',
      bubblegum: '#ff77e9',
      bermuda: '#78dcca',
    },
    extend: {
      backgroundImage: {
        'hero-pattern': "url('https://c4.wallpaperflare.com/wallpaper/395/979/578/patterns-background-glitter-lines-wallpaper-preview.jpg')",
      }

    },
  },
  plugins: [],
}

