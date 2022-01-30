module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    typography: (theme) => ({}),
    extend: {
      colors: {
        'night': '#191919',
      },
    }
  },
  plugins: [
    // ...
    require('@tailwindcss/forms', '@tailwindcss/typography'),
  ],
}
