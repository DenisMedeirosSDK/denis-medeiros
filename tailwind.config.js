module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
    },
    extend: {
      colors: {
        danger: {
          500: "#E25858",
        },
      },
    },
  },
  plugins: [],
};
