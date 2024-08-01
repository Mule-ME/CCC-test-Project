import { TextField, InputAdornment, Box, Typography } from "@mui/material";
import { ITextInputProps } from "./types";
import textInputStyles from "./style";

const TextInput = ({
  startAdornment,
  endAdornment,
  placeholder,
  onChange,
  InputProps,
  label,
  sx,
  ...props
}: ITextInputProps) => {
  const styles = textInputStyles();

  return (
    <Box sx={styles.box}>
      {label && <Typography sx={styles.label}>{label}</Typography>}
      <TextField
        {...props}
        variant="outlined"
        placeholder={placeholder}
        onChange={onChange}
        sx={sx}
        InputProps={{
          ...InputProps,
          startAdornment: startAdornment ? (
            <InputAdornment position="start" sx={styles.startAdornment}>
              {startAdornment}
            </InputAdornment>
          ) : null,
          endAdornment: endAdornment ? (
            <InputAdornment position="end" sx={styles.endAdornment}>
              {endAdornment}
            </InputAdornment>
          ) : null,
        }}
      />
    </Box>
  );
};

export default TextInput;
