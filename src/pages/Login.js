import { Button, Container, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import api from "../api";

const Login = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const data = await api.post("/login", {
        username: formData.username,
        password: formData.password,
      });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container mt="10">
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
        <Button type="submit" colorScheme="blue">
          Login
        </Button>
      </form>
    </Container>
  );
};

export default Login;
