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
import AppBar from "./AppBar";

const SideBar = () => {
  // const [open, setOpen] = useState<Record<string, boolean>>({});

  // const handleClick = (title: string) => {
  //   setOpen((prevOpen: Record<string, boolean>) => ({
  //     ...prevOpen,
  //     [title]: !prevOpen[title],
  //   }));
  // };

  const [open, setOpen] = useState<Record<string, boolean>>(
    sideBarResources.reduce((acc, resource) => {
      acc[resource.title] = false;
      return acc;
    }, {} as Record<string, boolean>)
  );

  const handleClick = (title: string) => {
    setOpen((prevOpen: Record<string, boolean>) => {
      const newOpen: Record<string, boolean> = {};
      for (const key in prevOpen) {
        newOpen[key] = key === title ? !prevOpen[key] : false;
      }
      return newOpen;
    });
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar />

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
                backgroundColor: open[res.title]
                  ? "rgba(0, 0, 0, 0.08)"
                  : "transparent",
              }}
            >
              {res.icon}
              <Typography sx={{ fontSize: 15, pl: 2 }}>{res.title}</Typography>
            </ListItemButton>
            {res.children.length > 0 && (
              <Collapse in={open[res.title]} timeout="auto" unmountOnExit>
                <List component="div">
                  {res.children.map((child, childIndex) => (
                    <ListItemButton key={childIndex} sx={{ pl: 5 }}>
                      <Typography sx={{ fontSize: 14, pl: 2 }}>
                        {child.title}
                      </Typography>{" "}
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
