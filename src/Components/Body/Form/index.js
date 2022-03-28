import React from "react";
import {
	Box,
	FormField,
	TextInput,
	RadioButtonGroup,
	Header,
	TextArea,
} from "grommet";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import db from "../../../Utils/firebase";
import Currentdate from "../Calendar/calendar";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default function Logger() {
	const [value, setValue] = React.useState("one");
	const [data, setData] = useState([]);
	const [id, setId] = useState([]);
	const [phone, setPhone] = useState("");

	let currentDate = new Date();

	const makeId = () => {
		let ID = "";
		let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
		for (var i = 0; i < 12; i++) {
			ID += characters.charAt(Math.floor(Math.random() * 36));
		}
		setId(ID);
	};

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();

	const onSubmit = (data) =>
		db
			.collection("call")
			.add({
				name: data.name,
				plan: data.plan,
				phone: phone,
				note: data.notes,
				transfer: data.transfer ? data.transfer : null,
				value: value,
				date: currentDate,
				id: id,
			})
			.then((docRef) => {
				alert("Call Successfully Logged");
				document.getElementById("form").reset();
				setValue("one");
			})
			.catch((error) => {
				console.error("Error adding document: ", error);
			});

	const textstyle = {
		backgroundColor: "white",
		boxSizing: "none",
		fontFamily: "big",
		fontWeight: "900",
	};

	useEffect(() => {
		makeId();
	}, []);

	// Hind
	return (
		<form id='form' onSubmit={handleSubmit(onSubmit)}>
			<Box pad='large' fill={true} direction='row'>
				<Box
					style={{
						width: "60%",
						borderRight: ".5px solid black",
						paddingRight: "3%",
					}}
					margin={{ right: "medium" }}
					alignSelf='start'
					direction='column'>
					<FormField label='Name'>
						<TextInput
							style={textstyle}
							defaultValue=''
							{...register("name")}
							placeholder='Troy Polomalu'
						/>
					</FormField>
					<FormField label='Plan Name'>
						<TextInput
							style={textstyle}
							defaultValue=''
							{...register("plan")}
							placeholder='Plan Name'
						/>
					</FormField>
					<FormField
						style={{ width: "fit-content", overflow: "hidden" }}
						label='Call Back Number'>
						<PhoneInput
							inputProps={{
								style: {
									marginLeft: "10%",
									padding: "1.4rem",
								},
							}}
							country='us'
							value={phone}
							onChange={(phone) => setPhone(phone)}
							placeholder='123-456-7890'
						/>
					</FormField>
					<FormField label='General Notes'>
						<TextArea
							resize={true}
							{...register("notes")}
							style={textstyle}
							placeholder='...'
						/>
					</FormField>
				</Box>
				<Box
					alignContent='end'
					style={{
						width: "60%",
						paddingTop: "4%",
						paddingLeft: "2%",
					}}
					direction='column'>
					<Header
						style={{
							fontWeight: "800",
							marginBottom: "8%",
							width: "100%",
							color: "#333333",
							fontSize: "1.5rem",
							borderBottom: "2px solid black",
						}}>
						Call Outcome
					</Header>
					<Box direction='row'>
						<RadioButtonGroup
							style={{
								marginBottom: "10%",
								fontFamily: "hind",
								fontSize: "1.3em",
							}}
							name='doc'
							options={["Transferred", "Call Back", "Completed"]}
							value={value}
							onChange={(event) => setValue(event.target.value)}
						/>
						{value === "Transferred" ? (
							<FormField
								style={{ paddingLeft: "10%", minHeight: "5rem" }}
								label='Transfered To:'>
								<TextInput
									style={{
										width: "100%",
										backgroundColor: "whitesmoke",
										padding: "none",
									}}
									defaultValue=''
									{...register("transfer")}
								/>
							</FormField>
						) : (
							<div> </div>
						)}
					</Box>
					<input
						style={{
							fontFamily: "hind",
							fontWeight: "800",
							fontSize: "1.3em",
							backgroundColor: "#333333",
							width: "70%",
							color: "whitesmoke",
						}}
						type='submit'
					/>
				</Box>
			</Box>
		</form>
	);
}
