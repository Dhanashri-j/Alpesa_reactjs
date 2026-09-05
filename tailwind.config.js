/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  corePlugins: {
    preflight: false
  },
  theme: {
    extend: {
      colors: {
        navy: '#0a2540',
        'navy-soft': '#0d3258',
        saffron: '#d97706',
        cream: '#eef3f9',
        accent: '#134e4a'
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        body: ['Inter Tight', 'sans-serif']
      }
    }
  },
  plugins: []
};
