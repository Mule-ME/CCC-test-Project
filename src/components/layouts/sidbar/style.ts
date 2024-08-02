import { useTheme } from "@mui/material";

const sideBarStyles = () => {
  const theme = useTheme();

  return {
    box: {
      display: { xs: "none", sm: "flex" },
      borderRight: `${theme.palette.common.black} 1px solid`,
      backgroundColor: theme.palette.secondary.main,
    },
    drawer: {
      width: 240,
      flexShrink: 0,

      "& .MuiDrawer-paper": {
        width: 240,
        boxSizing: "border-box",
        marginTop: 10,
        backgroundColor: theme.palette.secondary.main,
      },
    },
    list: {
      width: "100%",
      maxWidth: 360,
      bgcolor: theme.palette.secondary.main,
      mt: -1,
    },
    listItemButton: (isActive: boolean, hasPadding = false) => ({
      backgroundColor: isActive ? theme.palette.grey[200] : "transparent",
      padding: hasPadding ? 2 : undefined,
      mx: 2,
      borderRadius: hasPadding ? 1 : undefined,
      height: 20,
    }),

    childListItemButton: (isActive: boolean, hasPadding = false) => ({
      backgroundColor: isActive ? theme.palette.grey[200] : "transparent",
      padding: hasPadding ? 2 : undefined,
      mx: 2,
      borderRadius: hasPadding ? 1 : undefined,
      my: 1,
      height: 35,
    }),
    typography: {
      fontSize: 15,
      pl: 1,
    },

    collapseList: {
      width: "100%",
      maxWidth: 360,
      bgcolor: theme.palette.secondary.main,
    },

    childTypography: {
      fontSize: 14,
      pl: 2,
    },
  };
};

export { sideBarStyles };
