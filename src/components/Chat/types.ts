export interface SliderData {
  name: string;
  label: string;
  defaultValue: number;
  unit: string;
  marks: { value: number; label: string }[];
}
