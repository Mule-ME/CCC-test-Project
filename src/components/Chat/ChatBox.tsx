import { useState } from "react";
import { Box, Button, SelectChangeEvent, Typography } from "@mui/material";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";
import { IconButton, Select, TextInput } from "components/core";
import CleaningServicesIcon from "@mui/icons-material/CleaningServices";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import { options } from "./config";
import { chatBoxStyles } from "./style";

const ChatBox = () => {
  const styles = chatBoxStyles();
  const [selectedOption, setSelectedOption] = useState<string>("");

  const handleChange = (
    event: SelectChangeEvent<unknown>,
    child: React.ReactNode
  ) => {
    setSelectedOption(event.target.value as string);
  };

  return (
    <Box sx={styles.container}>
      <Box sx={styles.header}>
        <Select
          value={selectedOption}
          onChange={handleChange}
          options={options}
          sx={{fontWeight:600}}
          endAdornment={
            <IconButton>
              <UnfoldMoreIcon sx={styles.unfoldMoreIcon} />
            </IconButton>
          }
        />
        <Box sx={styles.iconButtonContainer}>
          <IconButton aria-label="clear history">
            <CleaningServicesIcon sx={styles.cleaningServicesIcon} />
          </IconButton>
          <Button sx={styles.compareButton} size="small">
            <Typography sx={styles.compareTypography}>Compare</Typography>
            <CompareArrowsIcon sx={styles.compareArrowsIcon} />
          </Button>
        </Box>
      </Box>
      <Box sx={styles.textInputContainer}>
        <TextInput
          label="System"
          multiline
          maxRows={2}
          sx={styles.textInput}
          placeholder="Enter system instructions"
        />
      </Box>
    </Box>
  );
};

export default ChatBox;
