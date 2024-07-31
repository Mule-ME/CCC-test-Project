import { ILayout } from "./types";
import { Box, Grid } from "@mui/material";
import { styled } from "@mui/system";
import { AppBar, SideBar } from "components/layouts";

const Root = styled("div")({
  display: "flex",
  height: "100vh",
});

const Page = styled("div")({
  flexGrow: 1,
  backgroundColor: "#eff2f3",
  padding: "16px",
  marginTop: "64px",
  boxSizing: "border-box",
});

const Layout = ({ children, ...rest }: ILayout) => {
  const token = localStorage.getItem("accessToken");

  return (
    <Box>
      {!token ? (
        <Box>{children}</Box>
      ) : (
        <Grid container justifyContent="center">
          <Grid justifyContent="center" item xs={12}>
            <Root>
              <AppBar />
              <SideBar />
              <Page>{children}</Page>
            </Root>
          </Grid>
        </Grid>
      )}
    </Box>
  );
};

export default Layout;
