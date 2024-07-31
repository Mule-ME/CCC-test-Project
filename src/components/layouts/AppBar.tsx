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
import { appBarProfileMenu, appBarRightMenu } from "./config";
import { Settings } from "@mui/icons-material";
import ProjectMenu from "components/Project/PojectMenu";

function AppBar() {
  const theme = useTheme();

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

  return (
    <DefaultAppBar sx={{ backgroundColor: theme.palette.common.black }}>
      <Toolbar>
        <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
          <IconButton sx={{ p: 0 }}>
            <Avatar
              alt="Fingroo"
              src=""
              sx={{
                width: 24,
                height: 24,
                fontSize: 15,
                color: theme.palette.common.black,
                backgroundColor: theme.palette.grey[300],
              }}
            >
              F
            </Avatar>
          </IconButton>
          <Breadcrumbs
            aria-label="breadcrumb"
            sx={{
              ".MuiBreadcrumbs-separator": {
                color: theme.palette.common.white,
              },
            }}
          >
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
              <Button
                key={index}
                sx={{ textTransform: "capitalize" }}
                onClick={onClick}
              >
                <Typography
                  color={theme.palette.common.white}
                  sx={{ fontSize: 15 }}
                >
                  {text}
                </Typography>
                <ListItemIcon sx={{ minWidth: "unset", ml: 1 }}>
                  {icon}
                </ListItemIcon>
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

        <Box sx={{ flexGrow: 0 }}>
          {appBarRightMenu?.map((rightMenu) => (
            <Button sx={{ textTransform: "capitalize" }} key={rightMenu.title}>
              <Typography
                color={
                  rightMenu.isActive
                    ? theme.palette.common.white
                    : theme.palette.grey[200]
                }
                sx={{ fontSize: 15 }}
              >
                {rightMenu?.title}
              </Typography>
            </Button>
          ))}
          <Tooltip title="Settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, mx: 2 }}>
              <Settings
                fontSize="medium"
                sx={{ color: theme.palette.common.white }}
              />
            </IconButton>
          </Tooltip>
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar
                alt="Mulualem Eshetu"
                src=""
                sx={{ fontSize: 15, backgroundColor: theme.palette.grey[200] }}
              >
                M
              </Avatar>
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: "45px" }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            keepMounted
            transformOrigin={{ vertical: "top", horizontal: "right" }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {appBarProfileMenu.map((setting) => (
              <MenuItem key={setting} onClick={handleCloseUserMenu}>
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
