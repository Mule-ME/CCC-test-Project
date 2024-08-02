import { Box, Typography } from "@mui/material";

const Completions = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Typography variant="h4" component="div" fontWeight="bold" color="white">
        Completions
      </Typography>
    </Box>
  );
};

export default Completions;
