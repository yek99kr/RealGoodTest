/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        // prettier-ignore
        "4xs": {'min': '318px', 'max': '349px'},
        // prettier-ignore
        "3xs": {'min': '350px', 'max': '399px'},
        // prettier-ignore
        "2xs": {'min': '400px', 'max': '459px'},
        // prettier-ignore
        'xs': {'min': '460px', 'max': '640px'},

        // prettier-ignore
        'xl': "1350px",
        // prettier-ignore
        '2xl': "1600px",
        // 'lg': { 'min': "1080px", 'max': "100px" },

        // // prettier-ignore
        // 'xl': { 'min': "1080px", 'max': "1300px" },
        // // prettier-ignore
        // 'xxl': { 'min': "1080px", 'max': "1300px" },
      },
    },
  },
  plugins: [],
};
