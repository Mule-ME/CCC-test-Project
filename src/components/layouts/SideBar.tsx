import { useState } from "react";
import {
  Box,
  Drawer,
  List,
  ListItemButton,
  Collapse,
  Typography,
  useTheme,
} from "@mui/material";
import { sideBarResources } from "./config";
import { useNavigate } from "react-router-dom";

const SideBar = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const [open, setOpen] = useState<Record<string, string | null>>({
    parent: null,
    child: null,
  });

  const handleClick = (title: string, isChild: boolean = false) => {
    setOpen((prevOpen) => {
      const newOpen = { ...prevOpen };
      if (isChild) {
        newOpen.child = prevOpen.child === title ? null : title;
      } else {
        newOpen.parent = prevOpen.parent === title ? null : title;
        newOpen.child = null;
        navigate("/");
      }
      return newOpen;
    });
  };

  const isChildActive = (parentTitle: string) => {
    return open.child?.startsWith(`${parentTitle}-`);
  };

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  const drawerWidth = 240;
  const drawerStyles = {
    width: drawerWidth,
    flexShrink: 0,
    "& .MuiDrawer-paper": {
      width: drawerWidth,
      boxSizing: "border-box",
      marginTop: 8,
      backgroundColor: theme.palette.secondary.main,
    },
  };

  const listStyles = {
    width: "100%",
    maxWidth: 360,
    bgcolor: theme.palette.secondary.main,
  };

  const listItemButtonStyles = (isActive: boolean, hasPadding = false) => ({
    backgroundColor: isActive ? theme.palette.grey[100] : "transparent",
    padding: hasPadding ? 2 : undefined,
    borderRadius: hasPadding ? 1 : undefined,
  });

  return (
    <Box
      sx={{
        display: "flex",
        borderRight: "#000 1px solid",
        backgroundColor: theme.palette.secondary.main,
      }}
    >
      <Drawer sx={drawerStyles} variant="permanent" anchor="left">
        {sideBarResources.map((res, index) => (
          <List key={index} sx={listStyles} component="nav">
            <ListItemButton
              onClick={() => handleClick(res.title)}
              sx={listItemButtonStyles(
                open.parent === res.title && !isChildActive(res.title),
                true
              )}
            >
              {res.icon}
              <Typography sx={{ fontSize: 15, pl: 2 }}>{res.title}</Typography>
            </ListItemButton>
            {res.children.length > 0 && (
              <Collapse
                in={open.parent === res.title}
                timeout="auto"
                unmountOnExit
              >
                <List component="div">
                  {res.children.map((child, childIndex) => (
                    <ListItemButton
                      key={childIndex}
                      onClick={() => {
                        handleClick(`${res.title}-${child.title}`, true);
                        handleNavigate(child.path);
                      }}
                      sx={listItemButtonStyles(
                        open.child === `${res.title}-${child.title}`,
                        false
                      )}
                    >
                      <Typography sx={{ fontSize: 14, pl: 2 }}>
                        {child.title}
                      </Typography>
                    </ListItemButton>
                  ))}
                </List>
              </Collapse>
            )}
          </List>
        ))}
      </Drawer>
    </Box>
  );
};

export default SideBar;
