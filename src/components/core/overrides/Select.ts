import { Theme } from "@mui/material/styles";

function Select(theme: Theme) {
  return {
    MuiSelect: {
      styleOverrides: {
        root: {
          fontSize: "14px",
          //TODO measurement's should implemented using theme size
          width: "300px",
        },
        select: {
          color: theme.palette.text.primary,
          //   backgroundColor: theme.palette.secondary.main,
          padding: "10px",
          "&.Mui-error": {
            borderColor: theme.palette.error.main,
            color: theme.palette.error.main,
            "&:hover": {
              //   backgroundColor: '#ffcdd2',
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
          fontSize: 12,
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

export { MenuItem, Select, InputLabel };
