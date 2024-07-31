import {
  Select as MuiSelect,
  FormControl,
  InputLabel,
  MenuItem,
  FormHelperText,
  InputAdornment,
  OutlinedInput,
  useTheme,
} from "@mui/material";
import { ISelectProps } from "./types";

const Select = ({
  label,
  helperText,
  defaultValue,
  endAdornment,
  options,
  ...props
}: ISelectProps) => {
  const theme = useTheme();

  return (
    <FormControl
      variant="outlined"
      fullWidth
      sx={{
        "& .MuiInputLabel-root": {
          color: theme.palette.text.primary,
          fontSize: "1rem",
          "&.Mui-focused": {
            color: theme.palette.text.primary,
          },
        },
        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            borderColor: theme.palette.grey[400],
          },
          "&:hover fieldset": {
            borderColor: "transparent",
          },
          "&.Mui-focused fieldset": {
            borderColor: "transparent",
          },
          height: 40,
          width: 100,

          borderRadius: 2,
          backgroundColor: theme.palette.grey[200],
          color: theme.palette.text.primary,
        },
        "& .MuiSelect-select": {
          padding: "12px 14px",
        },
        "& .MuiSelect-icon": {
          color: theme.palette.primary.main,
        },
        "& .MuiMenuItem-root": {
          fontSize: "0.875rem",
          "&:hover": {
            backgroundColor: theme.palette.action.hover,
          },
        },
        "& .MuiFormHelperText-root": {
          color: theme.palette.error.main,
          fontSize: "0.75rem",
        },
      }}
    >
      {label && <InputLabel sx={{ top: -7 }}>{label}</InputLabel>}
      <MuiSelect
        {...props}
        input={
          <OutlinedInput
            label={label}
            endAdornment={
              endAdornment ? (
                <InputAdornment position="end">{endAdornment}</InputAdornment>
              ) : null
            }
          />
        }
      >
        {options.map((option, index) => (
          <MenuItem key={index} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </MuiSelect>
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
};

export default Select;
