import { ChangeEvent, useState } from "react";
import { TextField, Button, Typography, Container, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import loginStyles from "./style";

const Login = () => {
  const defaultFormFields = {
    username: "",
    password: "",
  };

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { username, password } = formFields;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const [error, setError] = useState("");

  const styles = loginStyles();
  const navigate = useNavigate();

  const handleLogin = () => {
    // Mock backend authentication
    if (username === "user" && password === "password") {
      // Store token in localStorage
      localStorage.setItem("accessToken", "mockedAccessToken");

      // Redirect to the home page
      navigate("/chat");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <Box sx={styles.outerContainer}>
      <Container maxWidth="xs">
        <Box sx={styles.container}>
          <Typography variant="h4" gutterBottom sx={styles.title} color="white">
            Login
          </Typography>
          <TextField
            label="Username"
            variant="outlined"
            margin="normal"
            fullWidth
            required
            name="username"
            value={username}
            onChange={handleChange}
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            margin="normal"
            fullWidth
            value={password}
            required
            name="password"
            onChange={handleChange}
          />
          {error && (
            <Typography color="error" variant="body2" sx={styles.errorText}>
              {error}
            </Typography>
          )}
          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={styles.loginButton}
            onClick={handleLogin}
          >
            Login
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Login;
