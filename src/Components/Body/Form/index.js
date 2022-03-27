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

export default function Logger() {
	const [value, setValue] = React.useState("one");
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();
	const onSubmit = (data) => console.log(data);

	const textstyle = {
		backgroundColor: "white",
		boxSizing: "none",
		fontFamily: "big",
		fontWeight: "900",
	};

	// Hind
	return (
		<form onSubmit={handleSubmit(onSubmit)}>
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
					<FormField label='Call Back Number'>
						<TextInput
							style={textstyle}
							defaultValue=''
							{...register("phone")}
							placeholder='123-456-7890'
						/>
					</FormField>
					<FormField label='General Notes'>
						<TextArea
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
