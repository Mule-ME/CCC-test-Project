import {
  TextField,
  InputAdornment,
  Box,
  Typography,
  useTheme,
} from "@mui/material";
import { ITextInputProps } from "./types";

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
  const theme = useTheme();
  return (
    <Box sx={{ position: "relative", width: "100%" }}>
      {label && (
        <Typography
          sx={{
            position: "absolute",
            top: 10,
            left: 12,
            fontSize: 16,
            fontWeight: "bold",
          }}
          color={theme.palette.text.primary}
        >
          {label}
        </Typography>
      )}
      <TextField
        {...props}
        variant="outlined"
        placeholder={placeholder}
        onChange={onChange}
        sx={sx}
        InputProps={{
          ...InputProps,
          startAdornment: startAdornment ? (
            <InputAdornment position="start" sx={{ mr: "1px" }}>
              {startAdornment}
            </InputAdornment>
          ) : null,
          endAdornment: endAdornment ? (
            <InputAdornment position="end">{endAdornment}</InputAdornment>
          ) : null,
        }}
      />
    </Box>
  );
};

export default TextInput;
