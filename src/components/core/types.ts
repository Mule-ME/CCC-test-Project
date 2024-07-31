export interface IPopoverMenuProps {
  showPopover: boolean;
  setShowPopover: (show: boolean) => void;
  anchorEl: HTMLElement | null;
  setAnchorEl: (el: HTMLElement | null) => void;
  selectedProject: string;
  setSelectedProject: (project: string) => void;
}
