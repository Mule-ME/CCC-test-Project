import { Box, Typography } from "@mui/material";

const Assistants = () => {
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
        Assistants
      </Typography>
    </Box>
  );
};

export default Assistants;
