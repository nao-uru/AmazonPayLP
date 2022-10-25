// const colors = require('tailwindcss/colors');

module.exports = {
  mode:"jit",
  purge: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx,vue,html}',
    './dist/**/*.{js,jsx,ts,tsx,vue,html}',
    './dist/*.html',
  ],
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx,vue,html}',
    './dist/**/*.{js,jsx,ts,tsx,vue,html}',
    "./src/**/*.{html,js}",
  ],
  theme: {
    colors: {
    'main_pink': '#F582BF',
    'second_green': '#4BB9AD',
    'notion_orange':'#FF683F',
    'main_text':'#3E3A39',
    'fff': '#FFFFFF',
    },
  }
}
