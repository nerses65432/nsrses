module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        indigo: {
          50: "#eae9ff",
          100: "#cdcff9",
          200: "#a1a0d5",
          900: "#01004f",
          "100_01": "#c5c8f9",
          "100_02": "#bebdff",
        },
        gray: {
          50: "#f6f6ff",
          900: "#03024c",
          "900_02": "#2d1717",
          "900_03": "#01092d",
          "900_01": "#131339",
        },
        blue_gray: { 400: "#8a89ac" },
        black: { 900: "#000000", "900_3f": "#0000003f", "900_26": "#00000026" },
        white: { A700: "#ffffff" },
      },
      fontFamily: { playfairdisplay: "Playfair Display" },
      boxShadow: {
        bs1: "inset 0px 4px  4px 0px #0000003f",
        bs: "3px 3px  10px 0px #00000026",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
