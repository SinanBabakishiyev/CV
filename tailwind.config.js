/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}", "./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        renktext: '#004e9c',
        
      },

      fontFamily: {
        textfont: ["Roboto", 'sans-serif'],
      }
    },
    
  },
  plugins: [],
}