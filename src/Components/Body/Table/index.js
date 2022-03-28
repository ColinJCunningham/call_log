import React from "react";
import { useState, useEffect } from "react";
import {
	Box,
	Grommet,
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	Button,
	Text,
	TextArea,
	Paragraph,
	Layer,
	FormField,
	TextInput,
	Table,
	TableHeader,
	TableRow,
	TableCell,
	TableBody,
} from "grommet";
import db from "../../../Utils/firebase";
import { useForm } from "react-hook-form";
import dateFormat, { masks } from "dateformat";

import { Edit, StatusGood, Alert, Task, Update } from "grommet-icons";

const textstyle = {
	backgroundColor: "#fbf5f3",
	boxSizing: "none",
	fontFamily: "big",
	fontWeight: "900",
	fontSize: "1.9rem",
	marginTop: "2%",
	minHeight: "20rem",
};

export default function CallList() {
	const [data, setData] = useState([]);
	const [alldata, setAlldata] = useState([]);
	const [show, setShow] = useState(false);
	const [id, setId] = useState();
	const [notes, setNotes] = useState();
	const [place, setPlace] = useState();

	function formatPhoneNumber(phoneNumberString) {
		var cleaned = ("" + phoneNumberString).replace(/\D/g, "");
		var match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/);
		if (match) {
			var intlCode = match[1] ? "+1 " : "";
			return ["(", match[2], ") ", match[3], "-", match[4]].join("");
		}
		return null;
	}

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();

	let currentDate = new Date();

	const fetchData = async () => {
		db.collection("call")
			.orderBy("date", "desc")
			.get()
			.then((querySnapshot) => {
				const temparr = [];
				querySnapshot.forEach((doc) => {
					temparr.push(doc.data());
				});
				setData(temparr.filter((element) => element.value != "Archive"));
				setAlldata(temparr);
			})
			.catch((error) => {
				console.log("Error getting documents: ", error);
			});
	};

	const updateData = (data, ids) =>
		db
			.collection("call")
			.where("id", "==", ids)
			.limit(25)
			.get()
			.then((querySnapshot) => {
				// alert("Call Successfully Updated");
				// console.log(data);
				querySnapshot.forEach((doc) => {
					switch (data) {
						case "Archive":
							doc.ref.update({
								value: "Archive",
							});
							break;
						case "CallBack":
							doc.ref.update({
								value: "Completed",
							});
							break;
						case "Note":
							doc.ref.update({
								note: notes,
							});
							break;
						default:
							break;
					}
				});
			})
			.catch((error) => {
				console.error("Error adding document: ", error);
			});

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<Grommet>
			<Box onClick={(e) => console.log(data)} pad='xlarge'>
				{show && (
					<Layer
						style={{ width: "80%", padding: "2%" }}
						onEsc={() => setShow(false)}
						onClickOutside={() => setShow(false)}>
						<Button
							style={{ marginBottom: "2%" }}
							label='Close'
							onClick={() => setShow(false)}
						/>
						<form id='form'>
							<Text size='xlarge' style={{ textAlign: "center" }}>
								Please Leave General Notes, if any other information is
								incorrect please note it here
							</Text>
							<FormField>
								<TextArea
									value={notes}
									onChange={(event) => setNotes(event.target.value)}
									style={textstyle}
									placeholder={place}
								/>
							</FormField>
							<Button
								label='Submit'
								onClick={(e) => {
									updateData("Note", id);
								}}
								style={{
									fontFamily: "hind",
									fontWeight: "800",
									fontSize: "1.3em",
									backgroundColor: "#333333",
									width: "100%",
									color: "whitesmoke",
								}}
							/>
						</form>
					</Layer>
				)}
				<h1
					style={{
						textAlign: "center",
						fontFamily: "hind",
						textDecoration: "underline",
					}}>
					Recent Calls
				</h1>
				{data
					.filter((element, index) => index < 6)
					.map((value, index, text) => (
						<Card
							key={index}
							onClick={(e) => console.log("Hello")}
							style={{ fontFamily: "hind", marginBottom: "1rem" }}
							height='small'
							fill={true}
							background='light-1'>
							<CardHeader
								key={index + 1}
								style={{
									borderBottom: "1px solid grey",
								}}
								background='#333333'
								pad='small'>
								<Text
									style={{ fontFamily: "big" }}
									key={index + 2}
									size='large'>
									{value.name}
								</Text>
								<Text
									style={{ fontFamily: "big" }}
									key={index + 3}
									size='large'>
									{formatPhoneNumber(value.phone)}
								</Text>
								<Text
									style={{ fontFamily: "big" }}
									key={index + 4}
									size='large'>
									{value.plan}
								</Text>
							</CardHeader>
							<CardBody key={index + 5} background='light-2' pad='small'>
								<Box key={index + 6} direction='row'>
									<h3 key={index + 7}>Call Notes</h3>
									<Paragraph
										key={index + 8}
										style={{
											borderLeft: "3px solid black",
											fontFamily: "big",
											width: "80%",
											margin: "1rem",
											marginRight: "8%",
											paddingLeft: "2%",
										}}>
										{value.note}
									</Paragraph>
									{/* "Transferred", "Call Back", "Completed" */}
									{
										{
											Transferred: (
												<>
													<Update
														key={index + 9}
														color='neutral-3'
														size='large'
														style={{ margin: "2%" }}
													/>
													<h3
														key={index + 12}
														style={{ margin: "2%", paddingTop: "1%" }}>
														{value.value + " To: "}
														<p style={{ fontFamily: "big" }}>
															{value.transfer}
														</p>
													</h3>
												</>
											),
											"Call Back": (
												<>
													<Alert
														key={index + 10}
														color='status-warning'
														size='large'
														style={{ margin: "2%" }}
													/>
													<h3
														key={index + 12}
														style={{ margin: "2%", paddingTop: "1%" }}>
														{value.value}
													</h3>
												</>
											),
											Completed: (
												<>
													<Task
														key={index + 11}
														color='status-ok'
														size='large'
														style={{ margin: "2%" }}
													/>
													<h3
														key={index + 12}
														style={{ margin: "2%", paddingTop: "1%" }}>
														{value.value}
													</h3>
												</>
											),
										}[value.value]
									}
								</Box>
							</CardBody>
							<CardFooter
								style={{
									borderTop: "1px thin grey",
								}}
								key={index + 13}
								pad='xsmall'
								background='light-3'>
								<Text style={{ fontFamily: "big" }}>
									{dateFormat(value.date.seconds, "dddd, mmmm dS, h:MM TT")}
								</Text>
								<Button
									onClick={(e) => {
										updateData("Archive", value.id);
									}}
									key={index + 14}
									style={{
										fontSize: "1.2rem",
										textDecoration: "underline",
									}}
									hoverIndicator={true}>
									Archive
								</Button>
								{value.value === "Call Back" ? (
									<Button
										onClick={(e) => updateData("CallBack", value.id)}
										key={index + 15}
										style={{
											fontSize: "1.2rem",
											textDecoration: "underline",
										}}
										hoverIndicator={true}>
										Called Back
									</Button>
								) : (
									<div> </div>
								)}

								<Button
									key={index + 16}
									style={{ borderColor: "#F0F7FF" }}
									size='medium'
									onClick={(e) => {
										setId(value.id);
										setPlace(value.note);
										setShow(true);
									}}
									label='Edit'
									icon={<Edit size='medium' color='plain' />}
									hoverIndicator
								/>
							</CardFooter>
						</Card>
					))}
			</Box>
			<Box>
				<h1
					style={{
						textAlign: "center",
						fontFamily: "hind",
						textDecoration: "underline",
					}}>
					Full List
				</h1>
				<h5
					style={{
						textAlign: "center",
						fontFamily: "hind",
						textDecoration: "underline",
					}}>
					(25 Records)
				</h5>
				<Table>
					<TableHeader
						style={{
							color: "#333333",
							fontWeight: "800",
							fontSize: "1.4rem",
						}}>
						<TableRow>
							<TableCell scope='col' border='bottom'>
								Date
							</TableCell>
							<TableCell scope='col' border='bottom'>
								Name
							</TableCell>
							<TableCell scope='col' border='bottom'>
								Number
							</TableCell>
							<TableCell scope='col' border='bottom'>
								Plan
							</TableCell>
							<TableCell scope='col' border='bottom'>
								Outcome
							</TableCell>
						</TableRow>
					</TableHeader>
					{alldata.map((value, index, text) => (
						<TableBody key={index + 1}>
							<TableRow key={index + 2}>
								<TableCell key={index + 3} scope='row'>
									<strong key={index + 4}>
										{dateFormat(value.date.seconds, "mm/dd/yyyy")}
									</strong>
								</TableCell>
								<TableCell key={index + 5}>{value.name}</TableCell>
								<TableCell key={index + 6}>
									{formatPhoneNumber(value.phone)}
								</TableCell>
								<TableCell key={index + 7}>{value.plan}</TableCell>
								<TableCell key={index + 8}>{value.value}</TableCell>
							</TableRow>
						</TableBody>
					))}
				</Table>
			</Box>
		</Grommet>
	);
}
