module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    typography: (theme) => ({}),
    extend: {
      backgroundImage: {
        'earth': "url('/static/images/flat.jpg')",
        
      },
      animation: {
        rotate: "rotate 5s infinite"
      },
        keyframes: {
          rotate: {
            "0%": {
              transform: "bg-[0%, 20%]"
            },
            "33%": {
              transform: ""
            }, 
            "66%": {
              transform:  "none"
            },
            "100%": {
              transform:  "none"
            },

          }
        }
      },
  },

  plugins: [
    // ...
    require('@tailwindcss/forms', '@tailwindcss/typography' ),
    
  ],



}
