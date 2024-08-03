import {
  Select as MuiSelect,
  FormControl,
  MenuItem,
  FormHelperText,
  InputAdornment,
} from "@mui/material";
import { ISelectProps } from "./types";
import selectStyles from "./style";

const Select = ({
  helperText,
  defaultValue,
  endAdornment,
  options,
  ...props
}: ISelectProps) => {
  const styles = selectStyles();

  return (
    <FormControl
      variant="outlined"
      sx={styles.formControl}
    >
      <MuiSelect
        defaultValue={defaultValue}
        displayEmpty
        {...props}
        endAdornment={
          endAdornment ? (
            <InputAdornment position="end" sx={styles.inputAdornment}>
              {endAdornment}
            </InputAdornment>
          ) : null
        }
      >
        <MenuItem disabled value="" sx={styles.menuItem}>
          gpt-4o
        </MenuItem>
        {options.map((option, index) => (
          <MenuItem key={index} value={option.value}>
            {option.value}
          </MenuItem>
        ))}
      </MuiSelect>
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
};

export default Select;
