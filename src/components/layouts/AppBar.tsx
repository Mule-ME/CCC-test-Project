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
} from "@mui/material";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";
import { appBarProfileMenu, appBarRightMenu } from "./config";
import { Settings } from "@mui/icons-material";
import { PopoverMenu } from "components/core";

function AppBar() {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const [showPopover, setShowPopover] = useState(false);
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [selectedProject, setSelectedProject] = useState("Default project");

  const handleButtonClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setShowPopover((prev) => !prev);
  };

  return (
    <DefaultAppBar sx={{ backgroundColor: "#232" }}>
      <Toolbar>
        <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
          <IconButton sx={{ p: 0 }}>
            <Avatar
              alt="Fingroo"
              src=""
              sx={{ width: 24, height: 24, fontSize: 15 }}
            >
              F
            </Avatar>
          </IconButton>
          <Breadcrumbs
            aria-label="breadcrumb"
            sx={{ ".MuiBreadcrumbs-separator": { color: "#fff" } }}
          >
            <Button sx={{ textTransform: "capitalize" }}>
              <Typography color="#fff" sx={{ fontSize: 15 }}>
                Fingaroo
              </Typography>
              <ListItemIcon sx={{ minWidth: "unset", ml: 1 }}>
                <UnfoldMoreIcon fontSize="small" sx={{ color: "#fff" }} />
              </ListItemIcon>
            </Button>
            <Button
              sx={{ textTransform: "capitalize" }}
              onClick={handleButtonClick}
            >
              <Typography color="#fff" sx={{ fontSize: 15 }}>
                {selectedProject}
              </Typography>
              <ListItemIcon sx={{ minWidth: "unset", ml: 1 }}>
                <UnfoldMoreIcon fontSize="small" sx={{ color: "#fff" }} />
              </ListItemIcon>
            </Button>
          </Breadcrumbs>
          <PopoverMenu
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
              <Typography color="#fff" sx={{ fontSize: 15 }}>
                {rightMenu?.title}
              </Typography>
            </Button>
          ))}

          <Tooltip title="Settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Settings fontSize="medium" sx={{ color: "#fff" }} />
            </IconButton>
          </Tooltip>
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar alt="Mulualem Eshetu" src="" />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: "45px" }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
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
