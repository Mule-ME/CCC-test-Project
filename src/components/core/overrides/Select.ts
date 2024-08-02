import { Theme } from "@mui/material/styles";

function Select(theme: Theme) {
  return {
    MuiSelect: {
      styleOverrides: {
        root: {
          fontSize: "14px",
        },
        select: {
          color: theme.palette.text.primary,
          // backgroundColor: theme.palette.secondary.main,
          padding: "10px",
          "&.Mui-error": {
            borderColor: theme.palette.error.main,
            color: theme.palette.error.main,
            "&:hover": {
              backgroundColor: theme.palette.error.light,
            },
          },
        },
        icon: {
          color: theme.palette.grey[500],
        },
      },
    },
  };
}

function MenuItem(theme: Theme) {
  return {
    MuiMenuItem: {
      styleOverrides: {
        root: {
          color: theme.palette.text.primary,
          fontSize: 14,
        },
      },
    },
  };
}

function InputLabel(theme: Theme) {
  return {
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: theme.palette.text.primary,
          // paddingTop: '4px', //new
        },
      },
    },
  };
}

function MuiMenuList(theme: Theme) {
  return {
    MuiList: {
      styleOverrides: {
        root: {
          color: theme.palette.text.primary,
          // paddingTop: '4px', //new
          backgroundColor: theme.palette.secondary.light,
        },
      },
    },
  };
}

// MuiMenu - paper;
export { MenuItem, Select, InputLabel, MuiMenuList };
