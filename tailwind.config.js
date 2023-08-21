/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#edf2f8",
        secondary: "#313bac",
        blacknew: "#030303",
        lightGray: "#e4e4e4",
        gray: "#6b7688",
        brown: "#46364a",
        white: "#ffffff",
        navColor: "#cbcbcb",
      },
      screens: {
        "3xl": "2000px",
        Lmd: "900px",
        sm: "500px",
        xsm: "450px",
      },
      backgroundImage: {
        "mobile-nav": "url('/public/assets/bgWhite.png')",
      },
      boxShadow: {
        nav: "0 0 20px rgba(168, 168, 168, 0.15)",
        work: "0 0 25px rgba(0, 0, 0, 0.2)",
        skill: "0 0 25px #f3f4f3",
        tip: "0 0 25px rgba(0, 0, 0, 0.1)",
        testimonial: "0 0 30px rgba(0,0,0,0.1)",
        email: "0 0 25px #fef4f5",
        tel: "0 0 25px #f2f7fb",
      },
    },
  },
  plugins: [],
};
