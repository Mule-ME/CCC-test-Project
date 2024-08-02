import { useState } from "react";
import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Slider, TextInput } from "components/core";
import { sliderData } from "./config";
import { modelInfoStyles } from "./style";

const ModelInfo = () => {
  const styles = modelInfoStyles();

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
    <Box sx={styles.container}>
      <Box>
        <Box sx={styles.sliderGroup}>
          {sliderData.slice(0, 2).map((slider) => (
            <Box key={slider.name}>
              <Box sx={styles.sliderBox}>
                <Typography sx={styles.sliderLabel}>{slider.label}</Typography>
                <Typography sx={styles.sliderLabel}>
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
            <Typography sx={styles.sliderLabel} fontSize={16}>
              Stop sequences
            </Typography>
            <Typography sx={styles.sliderLabel} fontSize={12} pb={1}>
              Enter sequence and press Tab
            </Typography>
            <TextInput sx={styles.stopSequences} size="small" />
          </Box>
        </Box>
        <Box sx={{ ...styles.sliderGroup, mt: 3 }}>
          {sliderData.slice(2).map((slider) => (
            <Box key={slider.name}>
              <Box sx={styles.sliderBox}>
                <Typography sx={styles.sliderLabel}>{slider.label}</Typography>
                <Typography sx={styles.sliderLabel}>
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
          <Box sx={styles.apiInfoBox}>
            <LockOutlinedIcon fontSize="small" sx={styles.lockIcon} />
            <Typography sx={styles.sliderLabel} fontSize={16}>
              API and playground requests will not be used to train our model.
              <br />
              <Link to="/privacyPolicy" style={styles.privacyLink}>
                Learn more
              </Link>
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ModelInfo;
