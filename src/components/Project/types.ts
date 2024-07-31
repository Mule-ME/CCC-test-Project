export interface IProjectMenuProps {
  showPopover: boolean;
  setShowPopover: (value: boolean) => void;
  anchorEl: HTMLElement | null;
  setAnchorEl: (element: HTMLElement | null) => void;
  selectedProject: string;
  setSelectedProject: (project: string) => void;
}
