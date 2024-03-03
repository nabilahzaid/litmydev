import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { ChakraProvider, Heading } from "@chakra-ui/react";
import BrowserRouters from "./routes/BrowserRouters";

function App() {
  return (
    <ChakraProvider>
      <BrowserRouters />
    </ChakraProvider>
  );
}

export default App;
