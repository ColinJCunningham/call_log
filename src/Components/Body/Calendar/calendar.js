import React from "react";
import { Box, Grommet, Calendar } from "grommet";
import { useState, useEffect } from "react";

export default function Currentdate(props) {
	const dostuff = () => {
		console.log("works");
		setLarge();
	};

	const [large, setLarge] = useState("70%");

	useEffect(() => {
		dostuff();
	}, [props]);

	return (
		<Box
			onClick={(e) => console.log(props.indi === false ? "Yes" : "No")}
			style={{ display: "block" }}
			fill={true}
			pad='small'>
			<div style={{ width: "99%" }}>
				<Calendar
					firstDayOfWeek={1}
					size={"small"}
					style={{
						backgroundColor: "#DADADA",
						padding: "5%",
						borderRadius: "1rem",
						color: "#333333",
						width: "90%",
					}}
					date={new Date().toISOString()}
					onSelect={(date) => {}}
				/>
			</div>
		</Box>
	);
}
