import * as React from "react";
import { Popover as DefaultPopover } from "@mui/material";
import { IPopover } from "./types";

const Popover = ({ children, showPopover, setShowPopover }: IPopover) => {
  const handleClose = () => {
    setShowPopover(null);
  };

  const open = Boolean(showPopover);
  const id = open ? "simple-popover" : undefined;

  return (
    <DefaultPopover
      id={id}
      open={open}
      anchorEl={showPopover}
      onClose={handleClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
    >
      {children}
    </DefaultPopover>
  );
};

export default Popover;
