import {
  useToast,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  Container,
  Text,
  Flex,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Input,
  Stack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import api from "../api";

const Data = () => {
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({
    password: "",
    platform: "",
    username: "",
  });
  const [loading, setLoading] = useState(false);

  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const getData = async () => {
    try {
      const { data } = await api.get("/seedata");
      setData(data.data);
    } catch (error) {
      toast({ title: "Token Expired", status: "error" });
      logout();
    }
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setLoading(true);
      await api.post("/adddata", formData);
      toast({ title: "Berhasil tambah data", status: "success" });
      onClose();
      getData();
    } catch (error) {
      toast({ title: "Terjadi Kesalahan", status: "error" });
      logout();
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.clear();
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Container maxW="container.xl">
      <Flex alignItems="center" mb="6" justifyContent="space-between">
        <Text fontSize="3xl">Data User</Text>
        <Button colorScheme="blue" onClick={onOpen}>
          Tambah Data
        </Button>
      </Flex>
      <Table variant="simple" mb="6">
        <Thead>
          <Tr>
            <Th>No.</Th>
            <Th>Password</Th>
            <Th>Platform</Th>
            <Th>Username</Th>
          </Tr>
        </Thead>
        {data.length === 0 ? (
          <Tfoot>
            <Tr>
              <Td colSpan={4} textAlign="center">
                Tidak ada data
              </Td>
            </Tr>
          </Tfoot>
        ) : (
          <Tbody>
            {data.map((row, index) => (
              <Tr key={index}>
                <Td>{index + 1}</Td>
                <Td>{row.Password}</Td>
                <Td>{row.Platform}</Td>
                <Td>{row.Username}</Td>
              </Tr>
            ))}
          </Tbody>
        )}
      </Table>
      <Flex justifyContent="center">
        <Button colorScheme="red" onClick={logout}>
          Logout
        </Button>
      </Flex>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent as="form" onSubmit={handleSubmit}>
          <ModalHeader>Tambah Data Baru</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack spacing="4">
              <Input
                type="text"
                name="password"
                placeholder="Password"
                onChange={handleChange}
                required
              />
              <Input
                type="text"
                name="platform"
                placeholder="Platform"
                onChange={handleChange}
                required
              />
              <Input
                type="text"
                name="username"
                placeholder="Username"
                onChange={handleChange}
                required
              />
            </Stack>
          </ModalBody>
          <ModalFooter>
            <Button
              type="button"
              isDisabled={loading}
              variant="ghost"
              mr={3}
              onClick={onClose}
            >
              Close
            </Button>
            <Button
              loadingText="Submitting..."
              isLoading={loading}
              type="submit"
              colorScheme="blue"
            >
              Submit
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Container>
  );
};

export default Data;
