/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        accent: "#62cff4",
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
        grade: "#6D17CB"
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/hero1.jpg')",
        "hero-section": "url('/src/assets/herobg.png')",
        "hero-about": "url('/src/assets/about.jpg')",
        "hero-cloud": "url('/src/assets/service7.jpg')",
        "hero-it": "url('/src/assets/service6.png')",
        "hero-managed": "url('/src/assets/service2.jpg')",
        "hero-cyber": "url('/src/assets/service3.jpg')",
      },
    },
  },
  plugins: [],
};
