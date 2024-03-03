/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: {
          50: "#f9f1f5",
          100: "#edd4e0",
          200: "#e1b7cb",
          300: "#d69ab7",
          400: "#ca7da2",
          500: "#be608d",
          600: "#ae4779",
          700: "#913b65",
          800: "#83365b",
          900: "#652946",
          950: "#481e32",
        },
        secondary: {
          50: "#faf5f8",
          100: "#f6edf1",
          200: "#eedce4",
          300: "#e2bfcf",
          400: "#ce98af",
          500: "#bd7794",
          600: "#a25772",
          700: "#8e485f",
          800: "#763e50",
          900: "#643745",
          950: "#3b1c25",
        },
      },
    },
  },
  plugins: [],
};
