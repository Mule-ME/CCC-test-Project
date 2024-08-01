import { useTheme } from "@mui/material";

const textInputStyles = () => {
  const theme = useTheme();

  return {
    label: {
      position: "absolute",
      top: 10,
      left: 12,
      fontSize: 16,
      fontWeight: "bold",
      color: theme.palette.text.primary,
    },
    startAdornment: {
      mr: "1px",
    },
    endAdornment: {
      pointerEvents: "none",
      position: "absolute",
      right: 10,
    },
    box: {
      position: "relative",
      width: "100%",
    },
  };
};

export default textInputStyles;
