import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

const useLogin = () => {
  const defaultFormFields = {
    username: "",
    password: "",
  };

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { username, password } = formFields;

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleLogin = () => {
    if (username === "user" && password === "user") {
      localStorage.setItem("accessToken", "mockedAccessToken");

      window.location.reload();
      navigate("/chat");
    } else {
      setError("Invalid username or password");
    }
  };

  return {
    formFields,
    error,
    handleChange,
    handleLogin,
  };
};

export default useLogin;
