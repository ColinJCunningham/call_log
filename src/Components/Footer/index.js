import React from "react";
import { Footer, Text, Anchor, Box } from "grommet";
import { Vulnerability, Notes, Phone, Analytics } from "grommet-icons";

export default function Foot() {
	return (
		<Footer background='dark-2' pad='medium'>
			<Text>
				Copyright
				<br />
				<span style={{ fontSize: ".8rem" }}> cunninghamwebdesign 2022</span>
			</Text>
			<Anchor
				target='_blank'
				href='https://github.com/ColinJCunningham'
				label='GitHub'
			/>
			<Box direction='column'>
				<Anchor
					target='_blank'
					href='https://www.colinjamescunningham.com'
					label='Portfolio'
				/>
				<Anchor
					target='_blank'
					href='https://retirewelltpa.com/'
					label='RetireWell Website'
				/>
			</Box>
		</Footer>
	);
}
