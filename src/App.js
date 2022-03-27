import { ChakraProvider, Flex } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthRoute from "./components/AuthRoute";
import PrivateRoute from "./components/PrivateRoute";
import Data from "./pages/Data";
import Footer from "./pages/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Register from "./pages/Register";

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Flex maxW="100%" mx="auto" minH="100vh" pt={20} direction="column">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route element={<AuthRoute />}>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Route>
            <Route element={<PrivateRoute />}>
              <Route path="/data" element={<Data />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </Flex>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
