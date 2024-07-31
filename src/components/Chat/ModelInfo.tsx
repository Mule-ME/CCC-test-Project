import { useState } from "react";
import { Link } from "react-router-dom";
import { Box, Typography, useTheme } from "@mui/material";
import { Slider, TextInput } from "components/core";
import { sliderData } from "./config";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
const ModelInfo = () => {
  const theme = useTheme();

  const [values, setValues] = useState<Record<string, number>>(
    sliderData.reduce(
      (acc, curr) => ({ ...acc, [curr.name]: curr.defaultValue }),
      {} as Record<string, number>
    )
  );

  const handleSliderChange =
    (name: string) => (event: Event, newValue: number | number[]) => {
      setValues((prevValues) => ({
        ...prevValues,
        [name]: newValue as number,
      }));
    };
  return (
    <Box
      sx={{
        borderLeft: `1px solid ${theme.palette.common.black}`,
        p: 3,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
        mt: 2,
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {sliderData.slice(0, 2).map((slider) => (
          <Box key={slider.name}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography color={theme.palette.text.primary}>
                {slider.label}
              </Typography>
              <Typography color={theme.palette.text.primary}>
                {values[slider.name]}
                {slider.unit}
              </Typography>
            </Box>
            <Slider
              aria-label={slider.label}
              value={values[slider.name]}
              onChange={handleSliderChange(slider.name)}
              valueLabelDisplay="off"
            />
          </Box>
        ))}
        <Box>
          <Typography color={theme.palette.text.primary} fontSize={16}>
            Stop sequences
          </Typography>
          <Typography color={theme.palette.text.primary} fontSize={12} pb={1}>
            Enter sequence and press Tab
          </Typography>
          <TextInput
            sx={{
              width: "100%",
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#757575",
                },
                "&:hover fieldset": {
                  borderColor: "#E0E0E0",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#757575",
                },
              },
            }}
            size="small"
          />
        </Box>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {sliderData.slice(2).map((slider) => (
          <Box key={slider.name}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography color={theme.palette.text.primary}>
                {slider.label}
              </Typography>
              <Typography color={theme.palette.text.primary}>
                {values[slider.name]}
                {slider.unit}
              </Typography>
            </Box>
            <Slider
              aria-label={slider.label}
              value={values[slider.name]}
              onChange={handleSliderChange(slider.name)}
              valueLabelDisplay="off"
            />
          </Box>
        ))}
        <Box sx={{ display: "flex", gap: 1, my: 2 }}>
          <LockOutlinedIcon
            fontSize="small"
            sx={{ color: theme.palette.common.white }}
          />
          <Typography color={theme.palette.text.primary} fontSize={16}>
            API and playground requests will not be used to train our model.
            <br />
            <Link
              to="/privacyPolicy"
              style={{
                color: theme.palette.primary.light,
                textDecoration: "none",
              }}
            >
              Learn more
            </Link>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ModelInfo;
