import { ILayout } from "./types";
import { Box, Grid } from "@mui/material";
import { AppBar, SideBar } from "components/layouts";
import layoutStyles from "./style";

const Layout = ({ children, ...rest }: ILayout) => {
  const styles = layoutStyles();
  const token = localStorage.getItem("accessToken");

  return (
    <Box>
      {!token ? (
        <Box>{children}</Box>
      ) : (
        <Grid container sx={styles.container}>
          <Grid item xs={12} sx={styles.gridItem}>
            <Box sx={styles.root}>
              <AppBar />
              <SideBar />
              <Box sx={styles.page}>{children}</Box>
            </Box>
          </Grid>
        </Grid>
      )}
    </Box>
  );
};

export default Layout;
