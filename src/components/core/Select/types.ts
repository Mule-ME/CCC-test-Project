import { SelectProps } from "@mui/material";

export interface Option {
  value: any;
  label: string;
}

export interface ISelectProps extends Omit<SelectProps, "Value"> {
  label?: string;
  helperText?: string;
  endAdornment?: React.ReactNode;
  options: Option[];
}
