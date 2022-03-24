import logo from "./logo.svg";
import React from "react";
import ReactDOM from "react-dom";
import { Box, Grommet } from "grommet";
import Nav from "./Components/Header/index";

function App() {
	return (
		<Grommet background='light-5' full={true}>
			<Nav />
			<Box
				direction='row'
				border={{ color: "dark-1", size: "small" }}
				pad='xsmall'>
				<Box pad='small' background='dark-3' />
				<Box pad='medium' background='light-3' />
			</Box>
		</Grommet>
	);
}

export default App;
