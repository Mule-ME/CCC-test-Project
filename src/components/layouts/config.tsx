import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";
import TerminalIcon from "@mui/icons-material/Terminal";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import TuneIcon from "@mui/icons-material/Tune";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import StorageOutlinedIcon from "@mui/icons-material/StorageOutlined";
import DataObjectOutlinedIcon from "@mui/icons-material/DataObjectOutlined";

const appBarLeftMenu = [
  {
    title: "Fingaroo",
  },
  {
    title: "DefaultProject",
    icon: <UnfoldMoreIcon fontSize="small" sx={{ color: "#fff" }} />,
  },
];
const appBarRightMenu = [
  { title: "Dashboard" },
  { title: "Docs" },
  { title: "API reference" },
];
const appBarProfileMenu = ["Profile", "Account", "Dashboard", "Logout"];

const sideBarResources = [
  {
    title: "Playground",
    icon: <TerminalIcon fontSize="small" />,
    children: [
      {
        title: "Chat",
        link: "/chats",
      },
      {
        title: "Assistants",
        link: "/assistants",
      },
      {
        title: "Completions",
        link: "/completions",
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
    children: [],
  },
  {
    title: "API keys",
    icon: <LockOutlinedIcon fontSize="small" />,
    children: [],
  },
];

export { appBarLeftMenu, appBarRightMenu, appBarProfileMenu, sideBarResources };
