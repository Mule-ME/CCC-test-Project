import { Fragment, SyntheticEvent } from "react";
import {
  MenuItem,
  MenuList,
  Box,
  Autocomplete,
  Divider,
  Tooltip,
  useTheme,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import InfoIcon from "@mui/icons-material/Info";
import OrganizationIcon from "@mui/icons-material/Business";
import { IProjectMenuProps } from "./types";
import { Popover, TextInput } from "components/core";
import projectMenuStyles from "./style";

const projects = [
  "Default project",
  "Project Alpha",
  "Project Beta",
  "Project Gamma",
  "Project Delta",
  "Project Epsilon",
];

const ProjectMenu = ({
  showPopover,
  setShowPopover,
  anchorEl,
  setAnchorEl,
  selectedProject,
  setSelectedProject,
}: IProjectMenuProps) => {
  const theme = useTheme();
  const styles = projectMenuStyles();

  const handleClose = () => {
    setShowPopover(false);
    setAnchorEl(null);
  };

  const handleProjectChange = (event: SyntheticEvent, value: string | null) => {
    if (value) {
      setSelectedProject(value);
      handleClose();
    }
  };

  return (
    <Popover open={showPopover} anchorEl={anchorEl} onClose={handleClose}>
      <Box sx={styles.popoverBox}>
        <Autocomplete
          options={projects}
          onChange={handleProjectChange}
          sx={styles.autocomplete}
          renderInput={(params) => (
            <TextInput
              {...params}
              size="small"
              placeholder="Change project..."
              startAdornment={
                <SearchIcon
                  fontSize="medium"
                  style={{ color: theme.palette.common.white }}
                />
              }
            />
          )}
        />

        <MenuList>
          {[
            {
              content: (
                <Box sx={styles.projectBox}>
                  {selectedProject}
                  <Tooltip title={selectedProject} arrow>
                    <InfoIcon sx={styles.infoIcon} />
                  </Tooltip>
                </Box>
              ),
              icon: <CheckIcon sx={styles.icon} />,
              sx: styles.menuItem(selectedProject).selected,
              divider: true,
            },
            {
              content: "Create project",
              icon: <AddIcon sx={styles.icon} />,
              sx: styles.menuItem(selectedProject).default,
            },
            {
              content: "Organization overview",
              icon: <OrganizationIcon sx={styles.icon} />,
              sx: styles.menuItem(selectedProject).organization,
            },
          ].map(({ content, icon, sx, divider }, index) => (
            <Fragment key={index}>
              <MenuItem sx={sx}>
                {content}
                {icon}
              </MenuItem>
              {divider && <Divider />}
            </Fragment>
          ))}
        </MenuList>
      </Box>
    </Popover>
  );
};

export default ProjectMenu;
