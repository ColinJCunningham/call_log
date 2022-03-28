import React from "react";
import { Box, Paragraph, Grommet, Text } from "grommet";
import Random from "../../../Utils/quotes";

const myTheme = {
	paragraph: {
		font: {
			family: "hind",
		},
	},
};

const number = Math.floor(Math.random() * 20 + 1);

export default function Quote() {
	return (
		<Grommet theme={myTheme} pad='none'>
			<Box overflow='hidden' pad='none'>
				<Paragraph
					size='large'
					responsive={true}
					textAlign='center'
					alignSelf='center'>
					{Random[number].quote}
					<br />
					<Text
						size='small'
						style={{ fontStyle: "italic", fontEmphasis: "800" }}>
						{"- " + Random[number].name}
					</Text>
				</Paragraph>
			</Box>
		</Grommet>
	);
}
