import { TextField, Button, Typography, Container, Box } from "@mui/material";
import useLogin from "./hooks/useLogin"; // Adjust the path as necessary
import loginStyles from "./style";

const Login = () => {
  const { formFields, error, handleChange, handleLogin } = useLogin();
  const { username, password } = formFields;

  const styles = loginStyles();

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
