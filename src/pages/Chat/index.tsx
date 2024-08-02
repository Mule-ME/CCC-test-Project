import { Box, Grid } from "@mui/material";
import { ChatBox, ModelInfo, ChatMenu } from "components/Chat";
import chatStyles from "./style";

const Chat = () => {
  const styles = chatStyles();

  return (
    <Box sx={styles.container}>
      <ChatMenu />
      <Grid container sx={styles.gridContainer}>
        <Grid item xs={10} md={8} lg={9.5} sx={styles.chatBoxGridItem}>
          <ChatBox />
        </Grid>
        <Grid
          item
          xs={8}
          md={4}
          lg={2.5}
          sx={{ margin: { xs: "auto", sm: "0px" } }}
        >
          <ModelInfo />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Chat;
