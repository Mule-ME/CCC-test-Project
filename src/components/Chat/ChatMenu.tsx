import { Typography, Box, Autocomplete, Button, useTheme } from "@mui/material";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import ReplayIcon from "@mui/icons-material/Replay";
import CodeOffIcon from "@mui/icons-material/CodeOff";
import { TextInput, IconButton } from "components/core";

const ChatMenu = () => {
  const theme = useTheme();
  const presets = [
    "Friendly Chatbot",
    "Informative Assistant",
    "Imaginative Storyteller",
    "Logical Analyst",
    "Concise Summarizer",
  ];

  return (
    <Box
      sx={{
        height: 60,
        width: "100%",
        bgcolor: theme.palette.secondary.light,
        borderBottom: `${theme.palette.common.black} 1px solid`,
        padding: "20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Typography
        fontSize={24}
        fontWeight={700}
        color={theme.palette.text.primary}
      >
        Chat
      </Typography>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <Autocomplete
          options={presets}
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: theme.palette.grey[200],
              },
              "&:hover fieldset": {
                borderColor: theme.palette.grey[700],
              },
              "&.Mui-focused fieldset": {
                borderColor: theme.palette.grey[700],
              },
            },
            width: "250px",
            marginRight: 1,
          }}
          renderInput={(params) => (
            <TextInput
              {...params}
              size="small"
              placeholder="Presets"
              endAdornment={
                <UnfoldMoreIcon
                  fontSize="small"
                  style={{
                    color: theme.palette.grey[200],
                  }}
                />
              }
            />
          )}
        />
        <Button
          sx={{
            width: "80px",
            color: theme.palette.common.white,
            borderColor: "transparent",
            backgroundColor: theme.palette.grey[200],
            ":hover": {
              borderColor: theme.palette.common.white,
            },
          }}
          variant="outlined"
        >
          Save
        </Button>
        <IconButton
          aria-label="upload your file"
          color={theme.palette.common.white}
          sx={{
            backgroundColor: theme.palette.grey[200],
            ":hover": {
              borderColor: theme.palette.common.white,
            },
          }}
        >
          <FileUploadIcon fontSize="small" />
        </IconButton>
        <IconButton
          aria-label="Regenerate response"
          color={theme.palette.common.white}
          sx={{
            backgroundColor: theme.palette.grey[200],
            ":hover": {
              borderColor: theme.palette.common.white,
            },
          }}
        >
          <ReplayIcon fontSize="small" />
        </IconButton>
        <IconButton
          aria-label="Regenerate response"
          color={theme.palette.common.white}
          sx={{
            backgroundColor: theme.palette.grey[200],
            ":hover": {
              borderColor: theme.palette.common.white,
            },
          }}
        >
          <CodeOffIcon fontSize="small" />
        </IconButton>
      </Box>
    </Box>
  );
};

export default ChatMenu;
