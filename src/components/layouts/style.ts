import { useTheme } from "@mui/material";

const appBarStyles = () => {
  const theme = useTheme();
  return {
    appBar: {
      backgroundColor: theme.palette.common.black,
    },
    avatar: {
      width: 24,
      height: 24,
      fontSize: 15,
      color: theme.palette.common.black,
      backgroundColor: theme.palette.grey[300],
    },
    breadcrumbs: {
      ".MuiBreadcrumbs-separator": {
        color: theme.palette.common.white,
      },
    },
    iconButton: {
      p: 0,
    },
    button: {
      textTransform: "capitalize",
    },
    buttonText: {
      fontSize: 15,
      color: theme.palette.common.white,
    },
    listItemIcon: {
      minWidth: "unset",
      ml: 1,
    },
    rightMenuButtonText: (isActive: boolean) => ({
      fontSize: 15,
      color: isActive ? theme.palette.common.white : theme.palette.grey[200],
    }),
    settingsIconButton: {
      p: 0,
      mx: 2,
    },
    settingsIcon: {
      color: theme.palette.common.white,
    },
    profileAvatar: {
      fontSize: 15,
      backgroundColor: theme.palette.grey[200],
    },
    menu: {
      mt: "45px",
    },
  };
};

const sideBarStyles = () => {
  const theme = useTheme();

  return {
    box: {
      display: "flex",
      borderRight: `${theme.palette.common.black} 1px solid`,
      backgroundColor: theme.palette.secondary.main,
    },
    drawer: {
      width: 240,
      flexShrink: 0,
      "& .MuiDrawer-paper": {
        width: 240,
        boxSizing: "border-box",
        marginTop: 8,
        backgroundColor: theme.palette.secondary.main,
      },
    },
    list: {
      width: "100%",
      maxWidth: 360,
      bgcolor: theme.palette.secondary.main,
    },
    listItemButton: (isActive: boolean, hasPadding = false) => ({
      backgroundColor: isActive ? theme.palette.grey[200] : "transparent",
      padding: hasPadding ? 2 : undefined,
      mx: 2,
      borderRadius: hasPadding ? 1 : undefined,
    }),
    typography: {
      fontSize: 15,
      pl: 2,
    },
    collapse: {
      list: {
        width: "100%",
        maxWidth: 360,
        bgcolor: theme.palette.secondary.main,
      },
    },
    childTypography: {
      fontSize: 14,
      pl: 2,
    },
  };
};

export { appBarStyles, sideBarStyles };
