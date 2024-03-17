import React from "react";
import "./App.css";

import { ChakraProvider } from "@chakra-ui/react";
import BrowserRouters from "./routes/BrowserRouters";

function App() {
  return (
    <ChakraProvider>
      <BrowserRouters />
    </ChakraProvider>
  );
}

export default App;
