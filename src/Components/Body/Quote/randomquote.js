import React from "react";
import { Box, Paragraph, Grommet, Text } from "grommet";
import Random from "../../../Utils/quotes";

const myTheme = {
	paragraph: {
		font: {
			family: "stella",
		},
	},
};

const number = Math.floor(Math.random() * 20 + 1);

export default function Quote() {
	return (
		<Grommet theme={myTheme} pad='none'>
			<Box pad='none'>
				<Paragraph
					size='xlarge'
					responsive={true}
					textAlign='left'
					alignSelf='center'>
					{Random[number].quote}
					<br />
					<Text
						size='medium'
						style={{ paddingLeft: "50%", fontStyle: "italic" }}>
						{"- " + Random[number].name}
					</Text>
				</Paragraph>
			</Box>
		</Grommet>
	);
}
