/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],

  theme: {
    screens: {
      xs: '375px',
      sm: '600px',
      md: '900px',
      lg: '1200px',
      xl: '1536px',
    },
    extend: {
      fontFamily: {
        logo: ['Bebas Neue'],
      },
      height: {
        banner: '500px',
        searchInput: '36px',
        card: '200px',
      },
      borderRadius: {
        default: '10px',
        full: '100%',
      },
      dropShadow: {
        custom: '0px 10px 30px rgba(175, 198, 245, 0.2)',
      },
    },
  },
  plugins: [],
};
