import { useState } from "react";
import {
  Box,
  Drawer,
  CssBaseline,
  List,
  ListItemButton,
  Collapse,
  Typography,
} from "@mui/material";
import { sideBarResources } from "./config";
import { useNavigate } from "react-router-dom";

const SideBar = () => {
  const navigate = useNavigate();
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

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Drawer
        sx={{
          width: 240,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: 240,
            boxSizing: "border-box",
            marginTop: 8,
          },
        }}
        variant="permanent"
        anchor="left"
      >
        {sideBarResources.map((res, index) => (
          <List
            key={index}
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
            component="nav"
          >
            <ListItemButton
              onClick={() => handleClick(res.title)}
              sx={{
                backgroundColor:
                  open.parent === res.title && !isChildActive(res.title)
                    ? "rgba(0, 0, 0, 0.08)"
                    : "transparent",
              }}
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
                      sx={{
                        pl: 5,
                        backgroundColor:
                          open.child === `${res.title}-${child.title}`
                            ? "rgba(0, 0, 0, 0.08)"
                            : "transparent",
                      }}
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
