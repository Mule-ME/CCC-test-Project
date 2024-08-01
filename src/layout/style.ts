import { useTheme } from "@mui/material";

export const layoutStyles = () => {
  return {
    root: {
      display: "flex",
      height: "100vh",
    },
    page: {
      flexGrow: 1,
      marginTop: "64px",
      boxSizing: "border-box",
    },
    container: {
      justifyContent: "center",
    },
    gridItem: {
      justifyContent: "center",
    },
  };
};

export default layoutStyles;
