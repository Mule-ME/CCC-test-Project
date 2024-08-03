import { Theme } from "@emotion/react";
import { styled, SxProps, Typography, useTheme } from "@mui/material";

const RightMenuButtonText = styled(Typography)<{ isActive: boolean }>(
  ({ theme, isActive }) => ({
    fontSize: 15,
    fontWeight: isActive ? 600 : 500,

    color: isActive ? theme.palette.common.white : theme.palette.grey[200],
  })
);

const appBarStyles = (): Record<string, SxProps<Theme>> => {
  const theme = useTheme();
  return {
    appBar: {
      backgroundColor: theme.palette.common.black,
    },
    toolBar: { display: "flex", justifyContent: "space-between" },
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
      fontWeight: 600,
      color: theme.palette.common.white,
    },
    listItemIcon: {
      minWidth: "unset",
      ml: 1,
    },

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

export { appBarStyles, RightMenuButtonText };
