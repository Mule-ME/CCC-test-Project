import TerminalIcon from "@mui/icons-material/Terminal";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import TuneIcon from "@mui/icons-material/Tune";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import StorageOutlinedIcon from "@mui/icons-material/StorageOutlined";
import DataObjectOutlinedIcon from "@mui/icons-material/DataObjectOutlined";

const appBarRightMenu = [
  { title: "Dashboard", isActive: true },
  { title: "Docs", isActive: false },
  { title: "API reference", isActive: false },
];
const appBarProfileMenu = ["Profile", "Account", "Dashboard", "Logout"];

const sideBarResources = [
  {
    title: "Playground",
    icon: <TerminalIcon fontSize="small" />,
    children: [
      {
        title: "Chat",
        path: "/chat",
      },
      {
        title: "Assistants",
        path: "/assistant",
      },
      {
        title: "Completions",
        path: "/completion",
      },
    ],
  },
  {
    title: "Assistants",
    icon: <SmartToyIcon fontSize="small" />,
    children: [],
  },
  { title: "Fine-tuning", icon: <TuneIcon fontSize="small" />, children: [] },
  {
    title: "Batches",
    icon: <DataObjectOutlinedIcon fontSize="small" />,
    children: [],
  },
  {
    title: "Storage",
    icon: <StorageOutlinedIcon fontSize="small" />,
    children: [],
  },
  {
    title: "Usage",
    icon: <BarChartOutlinedIcon fontSize="small" />,
    children: [
      {
        title: "Privacy policy",
        path: "/privacyPolicy",
      },
    ],
  },
  {
    title: "API keys",
    icon: <LockOutlinedIcon fontSize="small" />,
    children: [],
  },
];

export { appBarRightMenu, appBarProfileMenu, sideBarResources };
