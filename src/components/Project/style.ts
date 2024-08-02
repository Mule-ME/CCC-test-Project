import { useTheme } from "@mui/material";

const projectMenuStyles = () => {
  const theme = useTheme();

  return {
    popoverBox: {
      px: 2,
      py: 1,
      width: 350,
      bgcolor: theme.palette.secondary.light,
    },
    autocomplete: {
      ".MuiOutlinedInput-root": {
        "& fieldset": { borderColor: theme.palette.grey[100] },
        "&:hover fieldset": { borderColor: theme.palette.grey[700] },
        ".Mui-focused fieldset": {
          borderColor: theme.palette.common.white,
        },
        ".MuiAutocomplete-paper": {
          backgroundColor: "black",
          color: "white",
        },
      },
    },
    menuItem: (selectedProject: string) => ({
      selected: {
        padding: "10px 16px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: theme.palette.primary.main,
        ":hover": {
          color: theme.palette.primary.main,
          backgroundColor: theme.palette.grey[500],
        },
        color: theme.palette.common.white,
        borderRadius: "10px",
      },
      default: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        ":hover": {
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.common.white,
        },
        borderRadius: "10px",
      },
      organization: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        ":hover": {
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.common.white,
        },
        color: theme.palette.text.primary,
        borderRadius: "10px",
      },
    }),
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
