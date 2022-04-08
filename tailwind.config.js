module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["EuclidCircular, sans-serif"],
    },
    extend: {
      dropShadow: {
        lg: "0 0 80px rgb(192 219 255 / 75%), 0 0 32px rgb(65 120 255 / 24%);",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
