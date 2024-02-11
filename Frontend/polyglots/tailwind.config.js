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
        white: {
          A700_3d: "#ffffff3d",
          A700_72: "#ffffff72",
          A700_33: "#ffffff33",
          A700_00: "#ffffff00",
          A700_01: "#fffdfd",
          A700: "#ffffff",
          A700_7a: "#ffffff7a",
        },
        light_green: { A700: "#43d92b" },
        green: {
          50: "#d5fde0",
          600: "#47965e",
          800: "#357046",
          A700: "#07c03e",
          A200_a3: "#76fa9ca3",
        },
        black: { 900: "#000000" },
        gray: {
          100: "#f4f4f6",
          200: "#f0f0f0",
          300: "#dedfe3",
          500: "#aaaaaa",
          900: "#22242f",
          "500_01": "#9b9daa",
          "100_01": "#f7f5f5",
          "800_a3": "#3d3d3da3",
          "700_00": "#5e5e5e00",
          "700_23": "#5e5e5e23",
        },
        blue_gray: { 100: "#d1d1d1", 800: "#333647" },
        indigo: { 200: "#9197cf" },
      },
      backgroundImage: { gradient: "radial-gradient(#5e5e5e23,#5e5e5e00)" },
      fontFamily: {
        montserrat: "Montserrat",
        inter: "Inter",
        manrope: "Manrope",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
