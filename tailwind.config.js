module.exports = {
  content: ["./src/**/*.{html,js}"],

  //  this.theme
  daisyui: {
    themes: [
      {
        mytheme: {
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
    ],
  },

  plugins: [require("daisyui")],
};
