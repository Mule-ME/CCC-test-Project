/* eslint-disable @typescript-eslint/no-explicit-any */

import Button from "./Button";

import { Select, MenuItem, InputLabel } from "./Select";
export default function ComponentsOverrides(theme: any) {
  return Object.assign(
    Button(theme),
    Select(theme),
    MenuItem(theme),
    InputLabel(theme)
  );
}
