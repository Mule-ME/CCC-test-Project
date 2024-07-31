import { Popover as DefaultPopover } from "@mui/material";
import { IPopoverProps } from "./types";

const Popover = ({ open, anchorEl, onClose, children }: IPopoverProps) => {
  return (
    <DefaultPopover
      open={open}
      anchorEl={anchorEl}
      onClose={onClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
    >
      {children}
    </DefaultPopover>
  );
};

export default Popover;
