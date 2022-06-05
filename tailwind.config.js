module.exports = {
  content: ['./src/**/*.pug'],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography'),require("daisyui")],
}
