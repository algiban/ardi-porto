/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{ts,tsx,js,jsx}",
    "./src/components/**/*.{ts,tsx,js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        brandGreen: "#006633",
        brandYellow: "#FBC02D",
        brandAmber: "#F4A100"
      },
      borderRadius: {
        "4xl": "2rem"
      }
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
