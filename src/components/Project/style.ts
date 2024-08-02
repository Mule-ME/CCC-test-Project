import { SxProps, Theme, useTheme } from "@mui/material";

const projectMenuStyles = (): Record<string, SxProps<Theme>> => {
  const theme = useTheme();

  return {
    popoverBox: {
      px: 2,
      py: 1,
      width: 300,
      bgcolor: theme.palette.secondary.light,
    },
    autocomplete: {
      ".MuiOutlinedInput-root": {
        "& fieldset": { borderColor: theme.palette.grey[100] },
        "&:hover fieldset": { borderColor: theme.palette.grey[700] },
        ".Mui-focused fieldset": {
          borderColor: theme.palette.common.white,
        },
      },
    },

    autocompleteInput: {
      "& .MuiOutlinedInput-root": {
        borderRadius: 2,
        "& fieldset": {
          borderColor: theme.palette.grey[100],
        },
        "&:hover fieldset": {
          borderColor: theme.palette.grey[200],
        },
        "&.Mui-focused fieldset": {
          borderColor: theme.palette.grey[600],
          borderWidth: "3px",
        },
      },
    },

    selected: {
      padding: "10px 16px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      backgroundColor: theme.palette.primary.main,
      ":hover": {
        color: theme.palette.text.primary,
        backgroundColor: theme.palette.primary.main,
      },
      color: theme.palette.common.white,
      borderRadius: 2,
    },
    default: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      ":hover": {
        backgroundColor: theme.palette.grey[200],
        color: theme.palette.common.white,
      },
      borderRadius: 2,
    },
    organization: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      ":hover": {
        backgroundColor: theme.palette.grey[200],
        color: theme.palette.common.white,
      },
      color: theme.palette.text.primary,
      borderRadius: 2,
    },

    icon: {
      marginRight: 1,
    },
    infoIcon: {
      fontSize: "medium",
    },
    projectBox: {
      display: "flex",
      alignItems: "center",
      gap: 1,
    },
  };
};

export default projectMenuStyles;
