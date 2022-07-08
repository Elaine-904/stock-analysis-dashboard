module.exports = {
  purge:  ['./src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js'],
  darkMode: "class",  // or 'media' or 'class'
  theme: {
    container: {
      center: true,

       padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    
    },
  },
  variants: {
    extend: {
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ]
}
