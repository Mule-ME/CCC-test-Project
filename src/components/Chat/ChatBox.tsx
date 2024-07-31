import { useState } from "react";
import {
  Box,
  Button,
  SelectChangeEvent,
  Typography,
  useTheme,
} from "@mui/material";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";
import { IconButton, Select, TextInput } from "components/core";
import CleaningServicesIcon from "@mui/icons-material/CleaningServices";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
const ChatBox = () => {
  const theme = useTheme();
  const options = [
    { value: "gpt-4o", label: "gpt-4o" },
    { value: "gpt-3.5", label: "gpt-3.5" },
    { value: "bard", label: "bard" },
  ];

  const [selectedOption, setSelectedOption] = useState<string>("");

  const handleChange = (
    event: SelectChangeEvent<unknown>,
    child: React.ReactNode
  ) => {
    setSelectedOption(event.target.value as string);
  };
  return (
    <Box
      sx={{
        padding: "16px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Box sx={{ width: "100%", display: "flex", gap: 3 }}>
        <Select
          label="gpt-4o"
          value={selectedOption}
          onChange={handleChange}
          options={options}
          sx={{ width: 100 }}
          endAdornment={
            <IconButton>
              <UnfoldMoreIcon
                sx={{ color: theme.palette.common.white, fontSize: "large" }}
              />
            </IconButton>
          }
        />
        <Box sx={{ display: "flex", justifyContent: "space-between", gap: 2 }}>
          <IconButton aria-label="clear history">
            <CleaningServicesIcon
              fontSize="small"
              sx={{ color: theme.palette.common.white }}
            />
          </IconButton>
          <Button
            sx={{
              color: theme.palette.text.primary,
              textTransform: "capitalize",
            }}
            size="small"
          >
            <Typography sx={{ fontSize: 14, mr: 1 }}>Compare</Typography>
            <CompareArrowsIcon
              fontSize="medium"
              sx={{ color: theme.palette.common.white }}
            />
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          marginTop: "40px !important",
          margin: "0 auto",
          width: "100%",
          maxWidth: 600,
        }}
      >
        <TextInput
          label="System"
          multiline
          maxRows={2}
          sx={{
            width: "100%",
            "& .MuiOutlinedInput-root": {
              height: 85,
              "& fieldset": {
                borderColor: "#E0E0E0",
              },
              "&:hover fieldset": {
                borderColor: "#757575",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#757575",
              },
            },
          }}
          placeholder="Enter system instructions"
        />
      </Box>
    </Box>
  );
};

export default ChatBox;
