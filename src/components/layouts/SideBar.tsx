import { useState, useEffect } from "react";
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
import { useNavigate, useLocation } from "react-router-dom";
import { sideBarStyles } from "./style";

const SideBar = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const styles = sideBarStyles();
  const location = useLocation();

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

  useEffect(() => {
    // Check URL and update sidebar state
    const updateSidebarState = (path: string) => {
      sideBarResources.forEach((res) => {
        res.children.forEach((child) => {
          if (child.path === path) {
            setOpen({
              parent: res.title,
              child: `${res.title}-${child.title}`,
            });
          }
        });
      });
    };

    updateSidebarState(location.pathname);
  }, [location.pathname]);

  return (
    <Box sx={styles.box}>
      <Drawer sx={styles.drawer} variant="permanent" anchor="left">
        {sideBarResources.map((res, index) => (
          <List key={index} sx={styles.list} component="nav">
            <ListItemButton
              onClick={() => handleClick(res.title)}
              sx={styles.listItemButton(
                open.parent === res.title && !isChildActive(res.title),
                true
              )}
            >
              {res.icon}
              <Typography sx={styles.typography}>{res.title}</Typography>
            </ListItemButton>
            {res.children.length > 0 && (
              <Collapse
                in={open.parent === res.title}
                timeout="auto"
                unmountOnExit
              >
                <List component="div" sx={styles.collapse.list}>
                  {res.children.map((child, childIndex) => (
                    <ListItemButton
                      key={childIndex}
                      onClick={() => {
                        handleClick(`${res.title}-${child.title}`, true);
                        handleNavigate(child.path);
                      }}
                      sx={{
                        ...styles.listItemButton(
                          open.child === `${res.title}-${child.title}`,
                          false
                        ),
                        borderRadius: 1,
                        "&:hover": {
                          backgroundColor: theme.palette.action.hover,
                        },
                      }}
                    >
                      <Typography sx={styles.childTypography}>
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
