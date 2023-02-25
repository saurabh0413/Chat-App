import React from "react";
import Mainroutes from "./pages/Mainroutes";
import { ChakraProvider } from "@chakra-ui/react";
const App = () => {
  return (
    <ChakraProvider>
      <Mainroutes />
    </ChakraProvider>
  );
};

export default App;
