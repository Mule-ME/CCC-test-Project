import { Theme } from "@mui/material/styles";

export default function Button(theme: Theme) {
  return {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "capitalize",
          boxShadow: theme.shadows[0],
          borderRadius: 5,
          "&:hover": {
            boxShadow: "none",
          },
        },
        sizeLarge: {
          height: 55,
          minWidth: 150,
        },
        sizeMedium: {
          height: 45,
        },
        sizeSmall: {
          height: 35,
        },
        containedPrimary: {
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.common.white,
          "&:hover": {
            backgroundColor: theme.palette.primary.light,
          },
        },

        containedSecondary: {
          backgroundColor: theme.palette.secondary.main,
          color: theme.palette.common.white,
          "&:hover": {
            backgroundColor: theme.palette.secondary.light,
          },
        },

        outlinedPrimary: {
          border: `1px solid ${theme.palette.primary.main}`,
          "&:hover": {
            backgroundColor: theme.palette.action.hover,
          },
        },

        outlinedSecondary: {
          border: `1px solid ${theme.palette.secondary.main}`,
          "&:hover": {
            backgroundColor: theme.palette.action.hover,
          },
        },
        outlinedInfo: {
          border: `1px solid ${theme.palette.grey.A400}`,
          color: theme.palette.grey[800],
          "&:hover": {
            border: `1px solid ${theme.palette.grey.A400}`,
            backgroundColor: theme.palette.action.hover,
          },
        },
        text: {
          "&:hover": {
            backgroundColor: theme.palette.action.hover,
          },
        },
      },
    },
  };
}
