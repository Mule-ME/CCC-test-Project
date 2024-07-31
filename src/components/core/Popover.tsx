import {
  Popover as DefaultPopover,
  MenuItem,
  MenuList,
  Box,
  Autocomplete,
  TextField,
  Divider,
  Tooltip,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import SearchIcon from "@mui/icons-material/Search";
import CreateIcon from "@mui/icons-material/Create";
import InfoIcon from "@mui/icons-material/Info";
import OrganizationIcon from "@mui/icons-material/Business";
import { styled } from "@mui/system";
import { IPopoverMenuProps } from "./types";

const StyledAutocomplete = styled(Autocomplete)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#8F8F8F", // Adjust the border color
    },
    "&:hover fieldset": {
      borderColor: "#8F8F8F", // Adjust the border color on hover
    },
    "&.Mui-focused fieldset": {
      borderColor: "#8F8F8F", // Adjust the border color when focused
    },
  },
}));

const PopoverMenu = ({
  showPopover,
  setShowPopover,
  anchorEl,
  setAnchorEl,
  selectedProject,
  setSelectedProject,
}: IPopoverMenuProps) => {
  const handleClose = () => {
    setShowPopover(false);
    setAnchorEl(null);
  };

  const handleProjectChange = (value: unknown) => {
    if (value) {
      setSelectedProject(value as string);
      handleClose();
    }
  };

  const projects = [
    "Default project",
    "Project Alpha",
    "Project Beta",
    "Project Gamma",
    "Project Delta",
    "Project Epsilon",
  ];

  return (
    <DefaultPopover
      open={showPopover}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
    >
      <Box sx={{ padding: 1, width: 220 }}>
        <StyledAutocomplete
          options={projects}
          // value={selectedProject}
          onChange={(value: unknown) => handleProjectChange(value)}
          renderInput={(params) => (
            <TextField
              {...params}
              variant="outlined"
              size="small"
              placeholder="Change project..."
              InputProps={{
                ...params.InputProps,
                startAdornment: (
                  <>
                    <SearchIcon style={{ color: "#8F8F8F", marginRight: 8 }} />
                    {params.InputProps.startAdornment}
                  </>
                ),
              }}
            />
          )}
        />

        <MenuList>
          <MenuItem
            sx={{ padding: "10px 16px", display: "flex", alignItems: "center" }}
          >
            <CheckCircleIcon sx={{ color: "#00BFA6", marginRight: 1 }} />
            {selectedProject}
            <Tooltip title={selectedProject} arrow>
              <InfoIcon sx={{ color: "#8F8F8F", marginLeft: "auto" }} />
            </Tooltip>
          </MenuItem>
          <Divider />
          <MenuItem
            sx={{
              // padding: "10px 16px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            Create project
            <CreateIcon sx={{ color: "#00BFA6", marginRight: 1 }} />
          </MenuItem>
          <MenuItem
            sx={{ padding: "10px 16px", display: "flex", alignItems: "center" }}
          >
            <OrganizationIcon sx={{ color: "#00BFA6", marginRight: 1 }} />
            Organization overview
          </MenuItem>
        </MenuList>
      </Box>
    </DefaultPopover>
  );
};

export default PopoverMenu;
