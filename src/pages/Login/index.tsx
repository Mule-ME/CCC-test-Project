import { Button, Typography, Container, Box } from "@mui/material";
import { TextInput } from "components/core";
import useLogin from "./hooks/useLogin";
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
          <TextInput
            placeholder="Username"
            margin="normal"
            fullWidth
            sx={styles.textInput}
            required
            name="username"
            value={username}
            onChange={handleChange}
          />
          <TextInput
            placeholder="Password"
            margin="normal"
            sx={styles.textInput}
            type="password"
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
