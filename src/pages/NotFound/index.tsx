import { Box, Typography, Button, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import notFoundStyles from "./style";
import { useEffect } from "react";

const NotFound = () => {
  const styles = notFoundStyles();
  const navigate = useNavigate();

  const token = localStorage.getItem("accessToken");

  const handleGoHome = () => {
    token ? navigate("/chat") : navigate("/login");
  };

  return (
    <Container sx={styles.container}>
      <Box sx={styles.box}>
        <Typography
          variant="h1"
          component="div"
          gutterBottom
          sx={styles.heading}
        >
          404
        </Typography>
        <Typography
          variant="h5"
          component="div"
          gutterBottom
          sx={styles.subheading}
        >
          Page Not Found
        </Typography>
        <Typography
          variant="body1"
          component="div"
          gutterBottom
          sx={styles.bodyText}
        >
          The page you are looking for doesn't exist or has been moved.
        </Typography>
        <Button variant="contained" color="primary" onClick={handleGoHome}>
          Go to Homepage
        </Button>
      </Box>
    </Container>
  );
};

export default NotFound;
