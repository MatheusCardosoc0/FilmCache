/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.tsx"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'old': " linear-gradient(to top right,#F0E68C, #DAA520, #FFA500 ,#FF8C00, #B8860B)"
      },
      animation:{
        rotate: 'rotation 0.5s linear '
      },
      keyframes:{
        rotation: {
          '20%':{
            transform: 'rotateY(100deg)'
          }
        }
      }
    },
  },
  plugins: [],
}
