import { useTheme } from "@mui/material";

const selectStyles = () => {
  const theme = useTheme();

  return {
    formControl: {
      "& .MuiInputLabel-root": {
        color: theme.palette.text.primary,
        fontSize: "1rem",
        "&.Mui-focused": {
          color: theme.palette.text.primary,
        },
      },
      "& .MuiOutlinedInput-root": {
        "& fieldset": {
          borderColor: theme.palette.grey[400],
        },
        "&:hover fieldset": {
          borderColor: "transparent",
        },
        "&.Mui-focused fieldset": {
          borderColor: "transparent",
        },
        height: 40,
        px: 1,
        borderRadius: 2,
        backgroundColor: theme.palette.grey[200],
        color: theme.palette.text.primary,
      },
      "& .MuiSelect-select": {
        padding: "12px 14px",
      },
      "& .MuiSelect-icon": {
        color: theme.palette.primary.main,
        display: "none",
      },
      "& .MuiMenuItem-root": {
        fontSize: "0.875rem",
        "&:hover": {
          backgroundColor: theme.palette.action.hover,
        },
      },
      "& .MuiFormHelperText-root": {
        color: theme.palette.error.main,
        fontSize: "0.75rem",
      },
    },
    inputAdornment: {
      pointerEvents: "none",
      position: "absolute",
      left: 51,
    },
    menuItem: {
      px: 1,
    },
  };
};

export default selectStyles;
