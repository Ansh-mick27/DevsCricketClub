/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cricket: {
          green: '#1B4D3E',
          lightgreen: '#4A7C59',
          cream: '#F5F5DC',
          gold: '#FFD700',
        }
      },
      animation: {
        'bounce-ball': 'bounce 1s infinite',
        'spin-slow': 'spin 3s linear infinite',
      }
    },
  },
  plugins: [],
}