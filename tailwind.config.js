// tailwind.config.js
module.exports = {
  mode: "jit",
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: ['active'],
      borderColor: ['focus-visible', 'first'],
      textColor: ['visited'],
      fontFamily: {
        body: ["DM Sans", "sans-serif"],
      },
      colors: {
        primary: "#F62682",
        secondary: "#6F5CF1"
      }
    },
  },
  variants: {
    extend: {
      fontWeight: ["responsive", "hover", "focus"],
      opacity: ["hover"],
      borderColor: ["hover", "focus"],
      margin: ["first", "last"],
      backgroundColor: ["odd", "even"],
      scale: ["hover", "active", "group-hover"],
    },
    textColor: ['responsive', 'hover', 'focus', 'group-hover'],
  },
  plugins: [],
}