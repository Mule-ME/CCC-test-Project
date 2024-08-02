import TerminalIcon from "@mui/icons-material/Terminal";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import TuneIcon from "@mui/icons-material/Tune";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import StorageOutlinedIcon from "@mui/icons-material/StorageOutlined";
import DataObjectOutlinedIcon from "@mui/icons-material/DataObjectOutlined";

const sideBarResources = [
  {
    title: "Playground",
    mainPath: "/chat",
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
    mainPath: "/assistant",
    icon: <SmartToyIcon fontSize="small" />,
    children: [],
  },
  {
    title: "Fine-tuning",
    mainPath: "/tune",
    icon: <TuneIcon fontSize="small" />,
    children: [],
  },
  {
    title: "Batches",
    mainPath: "/batches",

    icon: <DataObjectOutlinedIcon fontSize="small" />,
    children: [],
  },
  {
    title: "Storage",
    mainPath: "/storage",
    icon: <StorageOutlinedIcon fontSize="small" />,
    children: [],
  },
  {
    title: "Usage",
    mainPath: "/privacyPolicy",

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
    mainPath: "/apiKeys",

    icon: <LockOutlinedIcon fontSize="small" />,
    children: [],
  },
];

export { sideBarResources };
