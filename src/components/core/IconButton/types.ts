import { IconButtonProps } from "@mui/material";

export interface IIconButtonProps extends Omit<IconButtonProps, "color"> {
  color?: string;
  borderColor?: string;
}
