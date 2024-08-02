import { useState, MouseEvent } from "react";
import {
  AppBar as DefaultAppBar,
  ListItemIcon,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Avatar,
  Button,
  Tooltip,
  MenuItem,
  Breadcrumbs,
  useTheme,
} from "@mui/material";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";
import { Settings } from "@mui/icons-material";
import { appBarProfileMenu, appBarRightMenu } from "./config";
import { appBarStyles, RightMenuButtonText } from "./style";
import ProjectMenu from "components/Project/ProjectMenu";

function AppBar() {
  const theme = useTheme();
  const styles = appBarStyles();

  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [showPopover, setShowPopover] = useState(false);
  const [selectedProject, setSelectedProject] = useState("Default project");

  const handleOpenUserMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleButtonClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setShowPopover((prev) => !prev);
  };

  const handleLogout = () => {
    localStorage.clear();
    window.location.replace("/login");
  };

  return (
    <DefaultAppBar sx={styles.appBar}>
      <Toolbar sx={styles.toolBar}>
        <Box sx={{ flexGrow: 1, display: { xs: "none", sm: "flex" } }}>
          <IconButton sx={styles.iconButton}>
            <Avatar alt="Fingroo" src="" sx={styles.avatar}>
              F
            </Avatar>
          </IconButton>
          <Breadcrumbs aria-label="breadcrumb" sx={styles.breadcrumbs}>
            {[
              {
                text: "Fingaroo",
                icon: (
                  <UnfoldMoreIcon
                    fontSize="small"
                    sx={{ color: theme.palette.common.white }}
                  />
                ),
              },
              {
                text: selectedProject,
                icon: (
                  <UnfoldMoreIcon
                    fontSize="small"
                    sx={{ color: theme.palette.common.white }}
                  />
                ),
                onClick: handleButtonClick,
              },
            ].map(({ text, icon, onClick }, index) => (
              <Button key={index} sx={styles.button} onClick={onClick}>
                <Typography
                  color={theme.palette.common.white}
                  sx={styles.buttonText}
                >
                  {text}
                </Typography>
                <ListItemIcon sx={styles.listItemIcon}>{icon}</ListItemIcon>
              </Button>
            ))}
          </Breadcrumbs>
          <ProjectMenu
            showPopover={showPopover}
            setShowPopover={setShowPopover}
            anchorEl={anchorEl}
            setAnchorEl={setAnchorEl}
            selectedProject={selectedProject}
            setSelectedProject={setSelectedProject}
          />
        </Box>

        <Box sx={{ flexGrow: 0, flexDirection: "row", display: "flex" }}>
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            {appBarRightMenu?.map((rightMenu) => (
              <Button
                sx={{
                  ...styles.button,
                }}
                key={rightMenu.title}
              >
                <RightMenuButtonText isActive={rightMenu.isActive}>
                  {rightMenu?.title}
                </RightMenuButtonText>
              </Button>
            ))}
          </Box>
          <Box>
            <Tooltip title="Settings">
              <IconButton
                onClick={handleOpenUserMenu}
                sx={styles.settingsIconButton}
              >
                <Settings fontSize="medium" sx={styles.settingsIcon} />
              </IconButton>
            </Tooltip>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={styles.iconButton}>
                <Avatar alt="Mulualem Eshetu" src="" sx={styles.profileAvatar}>
                  M
                </Avatar>
              </IconButton>
            </Tooltip>
          </Box>
          <Menu
            sx={styles.menu}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            keepMounted
            transformOrigin={{ vertical: "top", horizontal: "right" }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {appBarProfileMenu.map((setting) => (
              <MenuItem
                key={setting}
                onClick={(e) => {
                  if (setting === "Logout") {
                    handleLogout();
                  }
                }}
              >
                {" "}
                <Typography textAlign="center">{setting}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Toolbar>
    </DefaultAppBar>
  );
}

export default AppBar;
