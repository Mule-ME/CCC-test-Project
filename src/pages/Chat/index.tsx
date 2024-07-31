import { Box, Grid, useTheme } from "@mui/material";
import { ChatBox, ModelInfo, ChatMenu } from "components/Chat";
const Chat = () => {
  const theme = useTheme();
  return (
    <Box sx={{ bgcolor: theme.palette.secondary.light, height: "100%" }}>
      <ChatMenu />
      <Grid container spacing={2}>
        <Grid item xs={9.5}>
          <ChatBox />
        </Grid>
        <Grid item xs={2.5}>
          <ModelInfo />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Chat;
