import { useTheme } from "@mui/material";

export const notFoundStyles = () => {
  const theme = useTheme();
  return {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "80vh",
      textAlign: "center",
      margin: "0px auto",
    },
    box: {},
    heading: {
      color: theme.palette.text.primary,
    },
    subheading: {
      color: theme.palette.text.primary,
    },
    bodyText: {
      color: theme.palette.text.primary,
    },
  };
};

export default notFoundStyles;
