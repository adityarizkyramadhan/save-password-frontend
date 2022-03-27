import React from "react";
import { Button, Container, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Container>
      <Text fontSize="4xl" mb="4">
        Save Password App
      </Text>
      <Text mb="6">Aplikasi untuk menyimpan password</Text>
      <Button as={Link} to="/login" colorScheme="blue" variant="outline" mr="4">
        Login
      </Button>
      <Button as={Link} to="/register" colorScheme="blue">
        Register
      </Button>
    </Container>
  );
};

export default Home;
