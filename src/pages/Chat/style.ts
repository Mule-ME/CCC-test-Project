import { useTheme } from "@mui/material";

const chatStyles = () => {
  const theme = useTheme();

  return {
    container: {
      bgcolor: theme.palette.secondary.light,
      height: "100%",
      display: "flex",
      flexDirection: "column",
    },
    gridContainer: {
      flex: 1,
    },
    chatBoxGridItem: {
      alignItems: "stretch",
    },
  };
};

export default chatStyles;
