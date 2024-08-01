import { createTheme } from "@mui/material/styles";
import palette from "./palette";
import componentsOverride from "../components/core/overrides";

const themeOptions = {
  palette,
  shape: { borderRadius: 6 },
  typography: {
    fontFamily: "sans-serif",
  },
};

export const theme = createTheme(themeOptions);
theme.components = componentsOverride(theme);
