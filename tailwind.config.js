/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',   // Scans all .js, .ts, .jsx, .tsx files in the app folder
    './src/components/**/*.{js,ts,jsx,tsx}', // Scans all .js, .ts, .jsx, .tsx files in the components folder
  ],
  theme: {
    extend: {},
  },
  plugins: [require('tailwind-scrollbar-hide')],

};

