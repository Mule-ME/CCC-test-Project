import { SliderData } from "./types";

export const sliderData: SliderData[] = [
  {
    name: "temperature",
    label: "Temperature",
    defaultValue: 10,
    unit: "°C",
    marks: [
      { value: 0, label: "0°C" },
      { value: 20, label: "20°C" },
      { value: 37, label: "37°C" },
      { value: 100, label: "100°C" },
    ],
  },
  {
    name: "maxTokens",
    label: "Maximum Tokens",
    defaultValue: 20,
    unit: "",
    marks: [],
  },
  {
    name: "topP",
    label: "Top p",
    defaultValue: 9,
    unit: "",
    marks: [],
  },
  {
    name: "frequencyPenalty",
    label: "Frequency penalty",
    defaultValue: 9,
    unit: "",
    marks: [],
  },
  {
    name: "presencePenalty",
    label: "Presence penalty",
    defaultValue: 20,
    unit: "",
    marks: [],
  },
];
