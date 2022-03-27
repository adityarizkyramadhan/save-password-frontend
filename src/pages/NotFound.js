import { Button, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Flex justifyContent="center" alignItems="center" minHeight="100vh">
      <Flex direction="column" pb="20" alignItems="center">
        <Text fontSize="3xl" textAlign="center" mb="4">
          Halaman Tidak Ditemukan
        </Text>
        <Button as={Link} to="/" colorScheme="blue">
          Kembali ke Beranda
        </Button>
      </Flex>
    </Flex>
  );
};

export default NotFound;
