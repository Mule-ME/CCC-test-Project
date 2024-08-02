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
import { projects } from "utils";
import projectMenuStyles from "./style";

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

  const menus = [
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
      sx: styles.selected,
      divider: true,
    },
    {
      content: "Create project",
      icon: <AddIcon sx={styles.icon} />,
      sx: styles.default,
      divider: false,
    },
    {
      content: "Organization overview",
      icon: <OrganizationIcon sx={styles.icon} />,
      sx: styles.organization,
      divider: false,
    },
  ];

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
              sx={styles.autocompleteInput}
              {...params}
              size="small"
              placeholder="Change project..."
              startAdornment={
                <SearchIcon
                  fontSize="medium"
                  style={{
                    color: theme.palette.common.white,
                  }}
                />
              }
            />
          )}
        />

        <MenuList>
          {menus.map(({ content, icon, sx, divider }, index) => (
            <Fragment key={index}>
              <MenuItem sx={sx}>
                {content}
                {icon}
              </MenuItem>
              {divider && <Divider sx={{ backgroundColor: "grey.900" }} />}
            </Fragment>
          ))}
        </MenuList>
      </Box>
    </Popover>
  );
};

export default ProjectMenu;
