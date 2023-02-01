/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.jsx"],
  theme: {
    extend: {
      colors: {
        peach: "#FFE1A8",
        sage: "#C9CBA3",
        "terra-cotta": "#e26d5c",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
