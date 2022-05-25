module.exports = {
  content: ["./src/**/*.{html,js}"],

  //  this.theme
  daisyui: {
    themes: [
      {
        light: {
          primary: "#00033e",

          secondary: "#5f2591",

          accent: "#3d61b5",

          neutral: "#1F282E",

          "base-100": "#ECF0F3",

          info: "#345CDF",

          success: "#13A08D",

          warning: "#EBAE3D",

          error: "#EA3959",
        },
      },
      {
        dark: {
          primary: "#99fff8",

          secondary: "#c41f48",

          accent: "#ce83e2",

          neutral: "#25252D",

          "base-100": "#333C47",

          info: "#607CE1",

          success: "#14996D",

          warning: "#907309",

          error: "#EF6B88",
        },
      },
    ],
  },

  plugins: [require("daisyui")],
};
