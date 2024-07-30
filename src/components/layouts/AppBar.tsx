import {
  Typography,
  Grid,
  Toolbar,
  AppBar as DefaultAppBar,
  Badge,
  IconButton,
} from "@mui/material";
// import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
const AppBar = () => {
  return (
    <DefaultAppBar position="fixed">
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
        >
          <MenuIcon />
        </IconButton>
        <Grid item xs={12}>
          <Typography variant="h6" noWrap>
            <img className={classes.logo} src={Logo} alt="Help Ex Login Logo" />
          </Typography>
        </Grid>
        <Popper
          className={classes.popper}
          open={openNotification}
          anchorEl={anchorEls}
          placement={placement}
          transition
        >
          {({ TransitionProps }) => (
            <Fade {...TransitionProps} timeout={5}>
              <Notification />
            </Fade>
          )}
        </Popper>
        <div className={classes.cons}>
          <Badge badgeContent={17} color="error">
            <NotificationsIcon
              onClick={handleClickNotification("bottom-start")}
              className={classes.Navicons}
              fontSize="large"
            />
          </Badge>
          <SettingsIcon className={classes.Navicons} fontSize="large" />
          <AccountCircleIcon
            className={classes.Navicons}
            fontSize="large"
            onClick={handleProfileMenuOpen}
          />
        </div>
      </Toolbar>
    </DefaultAppBar>
  );
};

export default AppBar;
