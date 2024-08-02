import { useTheme } from "@mui/material";

const chatBoxStyles = () => {
  const theme = useTheme();
  return {
    container: {
      padding: "16px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "start",
      height: "100%",
    },

    header: {
      width: "100%",
      display: "flex",
      gap: 3,
      justifyContent: "space-between",
    },
    select: {
      width: 110,
    },
    iconButtonContainer: {
      display: "flex",
      justifyContent: "space-between",
      gap: 2,
    },
    unfoldMoreIcon: {
      color: theme.palette.common.white,
      fontSize: "large",
    },
    cleaningServicesIcon: {
      fontSize: "small",
      color: theme.palette.common.white,
    },
    compareButton: {
      color: theme.palette.text.primary,
      textTransform: "capitalize",
    },
    compareTypography: {
      fontSize: 14,
      mr: 1,
    },
    compareArrowsIcon: {
      fontSize: "medium",
      color: theme.palette.common.white,
    },
    textInputContainer: {
      marginTop: "40px !important",
      margin: "0 auto",
      width: "100%",
      maxWidth: 600,
    },
    textInput: {
      width: "100%",
      borderColor: "transparent",
      "& .MuiOutlinedInput-root": {
        height: 85,
        "& fieldset": {
          borderColor: theme.palette.grey[100],
        },
        "&:hover fieldset": {
          borderColor: theme.palette.grey[200],
        },
        "&.Mui-focused fieldset": {
          borderColor: theme.palette.grey[900],
          borderWidth: "0.5px",
        },
      },
    },
  };
};

const chatMenuStyles = () => {
  const theme = useTheme();

  return {
    container: {
      height: 60,
      width: "100%",
      bgcolor: theme.palette.secondary.light,
      borderBottom: `${theme.palette.common.black} 1px solid`,
      padding: "20px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    title: {
      fontSize: 24,
      fontWeight: 700,
      color: theme.palette.text.primary,
    },
    controls: {
      display: "flex",
      alignItems: "center",
      gap: 1,
    },
    autocomplete: {
      "& .MuiOutlinedInput-root": {
        "& fieldset": {
          borderColor: theme.palette.grey[200],
        },
        "&:hover fieldset": {
          borderColor: theme.palette.grey[700],
        },
        "&.Mui-focused fieldset": {
          borderColor: theme.palette.grey[700],
        },
      },
      width: { xs: "150px", md: "250px" },
      marginRight: 1,
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
          borderColor: theme.palette.grey[900],
          borderWidth: "0.5px",
        },
      },
    },

    button: {
      width: "80px",
      height: 38,
      color: theme.palette.common.white,
      borderColor: "transparent",
      backgroundColor: theme.palette.grey[200],
      ":hover": {
        borderColor: theme.palette.common.white,
      },
    },
    iconButton: {
      backgroundColor: theme.palette.grey[200],
      ":hover": {
        borderColor: theme.palette.common.white,
      },
    },
    unfoldMoreIcon: {
      fontSize: "small",
      color: theme.palette.grey[900],
    },
  };
};

const modelInfoStyles = () => {
  const theme = useTheme();
  return {
    container: {
      borderLeft: { xs: "none", md: `1px solid ${theme.palette.common.black}` },
      p: 3,
      display: "flex",
      flexDirection: "column",
      justifyContent: "stretch",
      height: "100%",
    },
    sliderGroup: {
      display: "flex",
      flexDirection: "column",
      gap: 2,
    },
    sliderBox: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    stopSequences: {
      width: "100%",
      "& .MuiOutlinedInput-root": {
        "& fieldset": {
          borderColor: theme.palette.grey[900],
        },
        "&:hover fieldset": {
          borderColor: theme.palette.grey.A100,
        },
        "&.Mui-focused fieldset": {
          borderColor: theme.palette.grey[900],
        },
      },
    },
    apiInfoBox: {
      display: "flex",
      gap: 1,
      my: 2,
    },
    lockIcon: {
      color: theme.palette.common.white,
    },
    privacyLink: {
      color: theme.palette.primary.light,
      textDecoration: "none",
    },
    sliderLabel: {
      color: theme.palette.text.primary,
    },
  };
};

export { chatBoxStyles, chatMenuStyles, modelInfoStyles };
