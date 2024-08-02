import { Slider as MuiSlider, styled, useTheme } from "@mui/material";
import { ISliderProps } from "./types";
import sliderStyles from "./style";

const StyledSlider = styled(MuiSlider)(({ theme }) => sliderStyles(theme));

const Slider = (props: ISliderProps) => {
  const theme = useTheme();
  return <StyledSlider theme={theme} {...props} />;
};

export default Slider;
