/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './**/*.html', 
  ],
  theme: {
    extend: {
      fontSize: {
        'pc-normal': ['1.25rem', { lineHeight: '1.75rem' }], // Equivalent à text-xl
        'pc-large': ['1.5rem', { lineHeight: '2rem' }],      // Equivalent à text-2xl
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: ["dark", "light"],
  },
  darkMode: 'class',
}