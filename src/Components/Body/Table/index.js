import React from "react";
import {
	Box,
	Grommet,
	Table,
	TableHeader,
	TableRow,
	TableCell,
	TableBody,
} from "grommet";
import db from "../../../Utils/firebase";

const data = [];

export default function CallList() {
	return (
		<Grommet>
			<Box overflow='scroll' pad='large'>
				<Table>
					<TableHeader>
						<TableRow style={{ fontFamily: "hind", fontSize: "1.4rem" }}>
							<TableCell
								background='dark-2'
								pad='small'
								scope='col'
								border='bottom'>
								Date/Time of Call
							</TableCell>
							<TableCell background='dark-2' scope='col' border='bottom'>
								Name
							</TableCell>
							<TableCell background='dark-2' scope='col' border='bottom'>
								Plan Name
							</TableCell>
							<TableCell background='dark-2' scope='col' border='bottom'>
								Call Back Number
							</TableCell>
							<TableCell background='dark-2' scope='col' border='bottom'>
								Notes
							</TableCell>
							<TableCell background='dark-2' scope='col' border='bottom'>
								Status
							</TableCell>
						</TableRow>
					</TableHeader>
					<TableBody>
						<TableRow>
							<TableCell scope='row'>
								<strong>Eric</strong>
							</TableCell>
							<TableCell>Coconut</TableCell>
							<TableCell>Coconut</TableCell>
							<TableCell>Coconut</TableCell>
							<TableCell>Coconut</TableCell>
							<TableCell>Coconut</TableCell>
						</TableRow>
					</TableBody>
				</Table>
			</Box>
		</Grommet>
	);
}
