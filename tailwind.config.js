/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html", "./src/*.jsx", "./src/**/*.jsx"],
  theme: {
    extend: {
      colors: {
        greenCustom: "#24503A",
        backDrop: "#4d4d4d",
      },
    },
  },
  plugins: [],
};
