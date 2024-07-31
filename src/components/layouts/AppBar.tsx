import * as React from "react";
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
} from "@mui/material";
import { appBarLeftMenu, appBarProfileMenu, appBarRightMenu } from "./config";
import { Settings } from "@mui/icons-material";

function AppBar() {
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
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

          {appBarLeftMenu?.map((menu) => (
            <Button sx={{ textTransform: "capitalize" }}>
              <Typography color="#fff" sx={{ fontSize: 15 }}>
                {menu?.title}
              </Typography>
              <ListItemIcon sx={{ minWidth: "unset", ml: 1 }}>
                {menu?.icon}
              </ListItemIcon>
              {/* {menu?.separator} */}
            </Button>
          ))}
        </Box>

        <Box sx={{ flexGrow: 0 }}>
          {appBarRightMenu?.map((rightMenu) => (
            <Button sx={{ textTransform: "capitalize" }}>
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
