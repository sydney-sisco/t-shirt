module.exports = {
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'internet': "url('/macbook-air.png')",
      }),
      inset: {
        '22': '5.5rem',
        'hero-shirt': '21.5vh',
      },
      width: {
        '100px': '100px',
        '125px': '125px',
      },
      translate: {
        '-moon': '-14vw',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
