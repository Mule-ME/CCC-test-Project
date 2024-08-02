import { Typography, Box, Autocomplete, Button } from "@mui/material";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import ReplayIcon from "@mui/icons-material/Replay";
import CodeOffIcon from "@mui/icons-material/CodeOff";
import { TextInput, IconButton } from "components/core";
import { chatMenuStyles } from "./style";

const ChatMenu = () => {
  const styles = chatMenuStyles();

  const presets = [
    "Friendly Chatbot",
    "Informative Assistant",
    "Imaginative Storyteller",
    "Logical Analyst",
    "Concise Summarizer",
  ];

  return (
    <Box sx={styles.container}>
      <Typography sx={styles.title}>Chat</Typography>
      <Box sx={styles.controls}>
        <Autocomplete
          options={presets}
          sx={styles.autocomplete}
          renderInput={(params) => (
            <TextInput
              {...params}
              size="small"
              placeholder="Presets"
              endAdornment={<UnfoldMoreIcon sx={styles.unfoldMoreIcon} />}
            />
          )}
        />
        <Button sx={styles.button} variant="outlined">
          Save
        </Button>
        <IconButton aria-label="upload your file" sx={styles.iconButton}>
          <FileUploadIcon fontSize="small" />
        </IconButton>
        <IconButton aria-label="Regenerate response" sx={styles.iconButton}>
          <ReplayIcon fontSize="small" />
        </IconButton>
        <IconButton aria-label="Disable code" sx={styles.iconButton}>
          <CodeOffIcon fontSize="small" />
        </IconButton>
      </Box>
    </Box>
  );
};

export default ChatMenu;
