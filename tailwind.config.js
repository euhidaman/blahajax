
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'hero': "url('/src/assets/header-background.jpg')",
      })
    },
  },
  variants: {
    extend: { },
  },
  plugins: [],
}
