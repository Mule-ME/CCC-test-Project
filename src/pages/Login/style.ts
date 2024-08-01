import { SxProps, Theme, useTheme } from "@mui/material";

export const loginStyles = (): Record<string, SxProps<Theme>> => {
  const theme = useTheme();
  return {
    outerContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
    },
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: 3,
      backgroundColor: theme.palette.grey[200],
      borderRadius: 2,
    },
    title: {},
    errorText: {
      mt: 2,
    },
    loginButton: {
      mt: 2,
    },
  };
};

export default loginStyles;
