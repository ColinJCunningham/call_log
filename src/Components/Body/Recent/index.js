import React from "react";
import { Box, FormField, TextInput } from "grommet";
import { useForm } from "react-hook-form";

export default function Logger() {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();
	const onSubmit = (data) => console.log(data);

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<Box direction='column' pad='small'>
				<FormField label='Field label'>
					<TextInput
						defaultValue='Callers Name'
						{...register("example")}
						placeholder='type here'
					/>
				</FormField>
				<FormField label='Field label'>
					<TextInput
						defaultValue='test'
						{...register("example")}
						placeholder='type here'
					/>
				</FormField>

				<input type='submit' />
			</Box>
		</form>
	);
}
