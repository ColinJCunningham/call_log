import React from "react";
import { Box, Grommet, ResponsiveContext } from "grommet";
import Currentdate from "./Calendar/calendar";
import RandomQuote from "./Quote/randomquote";
import Logger from "./Form/index";
import { deepMerge } from "grommet/utils";
import { grommet } from "grommet/themes";
import { useState, useEffect } from "react";

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
				border={{ color: "dark-3", size: "xsmall" }}
				elevation='small'
				pad='small'>
				<Box
					overflow='scroll'
					direction='row-responsive'
					fill={true}
					pad='xsmall'
					background='dark-3'>
					<Currentdate />
					<RandomQuote />
				</Box>
				<Box
					direction='column'
					pad='medium'
					fill={true}
					background='neutral-33'>
					<Logger />
				</Box>
			</Box>
		</Grommet>
	);
}
