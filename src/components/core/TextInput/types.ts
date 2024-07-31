import { TextFieldProps } from "@mui/material";

export interface ITextInputProps extends Omit<TextFieldProps, "variant"> {
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
  label?: string;
}
