/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors:{
        "brand-yellow": "#fed685",
        "brand-blue": "#3969B3",
        "brand-light-blue": "#85B5FF",
        
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
