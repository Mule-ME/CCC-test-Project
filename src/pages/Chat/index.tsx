import { Box, Grid } from "@mui/material";
import { ChatBox, ModelInfo, ChatMenu } from "components/Chat";
import chatStyles from "./style";

const Chat = () => {
  const styles = chatStyles();

  return (
    <Box sx={styles.container}>
      <ChatMenu />
      <Grid container sx={styles.gridContainer}>
        <Grid item xs={9.5} sx={styles.chatBoxGridItem}>
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
