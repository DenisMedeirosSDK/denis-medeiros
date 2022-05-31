module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
    extend: {
      fontFamily: {
        secondary: ['Roboto', 'sans-serif'],
      },
      colors: {
        brand: {
          300: '#FFB742',
        },
      },
    },
  },
  plugins: [],
};
