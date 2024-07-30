import { ILayout } from "./types";
import { Box, Grid } from "@mui/material";
import { styled } from "@mui/system";
import { SideBar } from "components/layouts";

const Root = styled("div")({
  display: "flex",
});

const Main = styled("div")({
  backgroundColor: "#eff2f3",
});

const Page = styled("div")({
  flexGrow: 1,
  backgroundColor: "#eff2f3",
});

const Drawer = styled("div")({
  position: "fixed",
  backgroundColor: "#eff2f3",
});

const Nav = styled("div")({
  height: 10,
  marginBottom: 60,
  width: "100%",
});

const Layout = ({ children, ...rest }: ILayout) => {
  return (
    <Box>
      <Grid container justifyContent="center">
        <Grid justifyContent="center" item xs={12}>
          <Root>
            <SideBar />
            <Page>
              <Nav></Nav>
              {children}
            </Page>
          </Root>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Layout;
