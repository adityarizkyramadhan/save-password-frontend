import { Button, Container, Input, Text, useToast } from "@chakra-ui/react";
import React, { useState } from "react";
import api from "../api";

const Login = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [loading, setLoading] = useState(false);

  const toast = useToast();

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setLoading(true);
      const { data } = await api.post("/login", {
        username: formData.username,
        password: formData.password,
      });
      localStorage.setItem("token", `Bearer ${data.data.token}`);
      toast({ title: "Login Berhasil", status: "success" });
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } catch (error) {
      toast({ title: "Username atau password salah", status: "error" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <Text fontSize="4xl" mb="4">
        Login
      </Text>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          mb="4"
          required
        />
        <Input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          mb="6"
          required
        />
        <Button
          isLoading={loading}
          loadingText="Loading..."
          type="submit"
          colorScheme="blue"
        >
          Login
        </Button>
      </form>
    </Container>
  );
};

export default Login;
