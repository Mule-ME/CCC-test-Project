import { IconButton as MuiIconButton } from "@mui/material";
import { IIconButtonProps } from "./types";

const IconButton = ({
  borderColor = "transparent",
  color = "#000",
  sx,
  ...props
}: IIconButtonProps) => {
  return (
    <MuiIconButton
      {...props}
      sx={{
        width: "40px",
        color: color,
        borderColor: borderColor,
        border: `1px solid ${borderColor}`,
        borderRadius: "5px",
        "&:hover": {
          borderColor: borderColor,
        },
        "&:active": {
          borderColor: borderColor,
        },
        "&:focus": {
          borderColor: borderColor,
        },
        ...sx,
      }}
    />
  );
};

export default IconButton;
