import logo from "./logo.svg";
import React from "react";
import ReactDOM from "react-dom";
import { Box, Grommet } from "grommet";
import Nav from "./Components/Header/index";
import Body from "./Components/Body/index";

function App() {
  return (
    <Grommet background="light-5" full={true}>
      <Nav />
      <Body />
    </Grommet>
  );
}

export default App;
