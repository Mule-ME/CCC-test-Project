const GREY = {
  50: "#171718",
  100: "#4F4F54",
  200: "#585964",
  300: "#E8E8E9",
  400: "#202123",
  500: "#1D1D1F",
  600: "#176A56",
  700: "##8F8F8F",
  800: "#363740",
};

const PRIMARY = {
  lighter: "#176A56",
  light: "#0BA37F",
  main: "#1D5D4A",
};

const SECONDARY = {
  lighter: "#1D1D1F",
  light: "#2B2C31",
  main: "#1A1A1C ",
};

const INFO = {
  contrastText: "#D0F2FF",
  light: "#74CAFF",
  dark: "#1890FF",
  main: "#72C8CC",
};

const SUCCESS = {
  contrastText: "#fff",
  light: "rgba(39, 174, 96, 0.7)",
  main: "#27AE60",
  lighter: "#D0F2FF",
};

const WARNING = {
  lighter: "#FFF7CD",
  light: "#FFE16A",
  main: "#FFC107",
  contrastText: "#fff",
};

const ERROR = {
  dark: "rgba(229, 62, 62, 0.1)",
  contrastText: "#fff",
  light: "rgba(229, 62, 62, 0.7)",
  main: "#E53E3E",
  lighter: "#F8EBF3",
};

const palette = {
  common: { black: "#000", white: "#fff" },
  primary: PRIMARY,
  secondary: SECONDARY,
  info: INFO,
  success: SUCCESS,
  warning: WARNING,
  error: ERROR,
  grey: GREY,
  text: {
    primary: GREY[300],
    secondary: GREY[100],
    hint: GREY[200],
    error: ERROR.main,
  },
  background: {
    paper: "#fff",
    default: "#fff",
    neutral: GREY[200],
  },
  action: {},
};

export default palette;
