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
      <Box
        sx={{
          px: 2,
          py: 1,
          width: 350,
          bgcolor: theme.palette.secondary.light,
        }}
      >
        <Autocomplete
          options={projects}
          onChange={handleProjectChange}
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": { borderColor: theme.palette.grey[100] },
              "&:hover fieldset": { borderColor: theme.palette.grey[700] },
              "&.Mui-focused fieldset": {
                borderColor: theme.palette.primary.light,
              },
              "& .MuiAutocomplete-paper": {
                backgroundColor: "black",
                color: "white",
              },
              "& .MuiAutocomplete-listbox": {
                "& .MuiAutocomplete-option": {
                  '&[data-focus="true"]': { backgroundColor: "red" },
                  '&[aria-selected="true"]': { backgroundColor: "red" },
                  "&:hover": { backgroundColor: "red" },
                },
              },
            },
          }}
          renderInput={(params) => (
            <TextInput
              {...params}
              size="small"
              placeholder="Change project..."
              startAdornment={
                <SearchIcon
                  fontSize="medium"
                  style={{ color: theme.palette.grey[700] }}
                />
              }
            />
          )}
        />

        <MenuList>
          {[
            {
              content: (
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                  }}
                >
                  {selectedProject}
                  <Tooltip title={selectedProject} arrow>
                    <InfoIcon sx={{ fontSize: "medium" }} />
                  </Tooltip>
                </Box>
              ),
              icon: <CheckIcon sx={{ marginRight: 1, alignSelf: "end" }} />,
              sx: {
                padding: "10px 16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                backgroundColor: theme.palette.primary.main,
                ":hover": {
                  color: theme.palette.primary.main,
                  backgroundColor: theme.palette.grey[500],
                },
                color: theme.palette.common.white,
                borderRadius: "10px",
              },
              divider: true,
            },
            {
              content: "Create project",
              icon: <AddIcon sx={{ marginRight: 1 }} />,
              sx: {
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                ":hover": {
                  backgroundColor: theme.palette.primary.main,
                  color: theme.palette.common.white,
                },
                borderRadius: "10px",
              },
            },
            {
              content: "Organization overview",
              icon: <OrganizationIcon sx={{ marginRight: 1 }} />,
              sx: {
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                ":hover": {
                  backgroundColor: theme.palette.primary.main,
                  color: theme.palette.common.white,
                },
                color: theme.palette.text.primary,
                borderRadius: "10px",
              },
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
