import * as Stitches from "@stitches/react";

const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = Stitches.createStitches({
  prefix: "slides",
  theme: {
    colors: {
      computerOld: "#e8e2d0",
      computerNormal: "#e2e0d9",
      computerModern: "#dadcd8",

      windowTopLight: "#e4dbd6",
      windowTopDark: "#cec3bd",

      desk: "#d3bf97",
      wall: "#f5f4f0",
      screen: "#b7dbef",

      white: "#fff",
      black: "#000",
      grey: "#6c635f",
      blue: "#2667a7",
      green: "#b7cc92",
      yellow: "#ffe8b6",
      red: "#e06363",

      // Notflix colors
      "grey-100": "#14151a",
      "grey-200": "#25252d",
      "grey-500": "#35394a",
      "grey-700": "#9e9fa9",
    },
  },
});

export {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
};
