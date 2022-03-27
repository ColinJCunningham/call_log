import React from "react";
import {
	Box,
	Grommet,
	ResponsiveContext,
	Button,
	RadioButtonGroup,
} from "grommet";
import Currentdate from "./Calendar/calendar";
import RandomQuote from "./Quote/randomquote";
import Logger from "./Form/index";

import { deepMerge } from "grommet/utils";
import { grommet } from "grommet/themes";
import { useState, useEffect } from "react";
import "./index.css";
import CallList from "./Table/index";

const myTheme = {
	heading: {
		font: {
			family: "stella cursive serif",
			size: "xxlarge",
		},
	},
};

const customBreakpoints = deepMerge(grommet, {
	global: {
		breakpoints: {
			xsmall: {
				value: 500,
			},
			small: {
				value: 890,
				Box: {
					background: "red",
				},
			},
			medium: undefined,
			middle: {
				value: 2000,
			},
		},
	},
});

export default function Body() {
	const [winwidth, setWinwidth] = useState(
		window.innerWidth > 891 ? true : false
	);

	return (
		<Grommet background='light-5' theme={customBreakpoints}>
			<Box
				margin={{
					top: "large",
				}}
				gap='medium'
				direction='row-responsive'
				pad='small'>
				<Box
					elevation='large'
					id='box1'
					overflow='scroll'
					direction='column'
					round={true}
					style={{ width: "30%" }}
					pad='xsmall'
					background='dark-2'>
					<Currentdate />
					<RandomQuote />
				</Box>
				<Box direction='column' fill={true}>
					<Logger />
				</Box>
			</Box>
			<Box pad='large' fill={true}>
				<CallList />
			</Box>
		</Grommet>
	);
}
