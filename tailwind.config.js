/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'brand-primary': '#0057A8',
        'brand-accent': '#46AAE8',
        'brand-bg': '#F7F3EA',
        'brand-surface': '#FFFFFF',
        'brand-navy': '#06386E',
        'brand-roast': '#704F41',
        'brand-espresso': '#3A2018',
        'brand-ink': '#121212',
        'brand-line': '#E5E5E5',
      },
      fontFamily: {
        sans: ['Assistant', 'Arial', 'sans-serif'],
        display: ['"Bodoni Moda"', '"Libre Bodoni"', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
