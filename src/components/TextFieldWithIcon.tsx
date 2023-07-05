/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-props-no-spreading */
import useThemeModeStore from "@/store/useThemeModeStore";
import { Box, InputAdornment, InputBase, Typography } from "@mui/material";
import React, { useContext } from "react";
import { Controller } from "react-hook-form";

type Props = {
	label: string;
	icon: React.ReactElement;
	placeholder: string;
	control: any;
	name: string;
	type?: React.InputHTMLAttributes<HTMLInputElement>["type"];
	InputStartAdornment?: string;
	multiline?: boolean;
	minRow?: number;
	maxRow?: number;
	error?: string;
	required?: boolean;
	maxLength?: number;
	minLength?: number;
	pattern?: { message: string; value: RegExp };
};
const TextFieldWithIcon = ({
	label,
	control,
	name,
	icon,
	type,
	InputStartAdornment,
	placeholder,
	multiline,
	minRow,
	maxRow,
	error,
	required = false,
	maxLength,
	minLength = -1,
	pattern,
}: Props) => (
	<Box p={2} borderRadius={2} display="flex">
		<Box
			p={{ xs: 2, md: 3 }}
			display="flex"
			flexDirection="column"
			justifyContent="center"
			borderRadius={2}
			mr={2}
			height="fit-content"
		>
			{icon}
		</Box>
		<Box width="100%">
			<Typography variant="body2" fontFamily="Gilroy">
				{label}
			</Typography>
			<Controller
				name={name}
				control={control}
				rules={{
					required: { message: "Required", value: required },
					minLength: {
						message: `Minimum length is ${minLength} characters.`,
						value: minLength,
					},
					pattern,
				}}
				render={({ field }) => (
					<InputBase
						autoComplete="off"
						type={type}
						startAdornment={
							InputStartAdornment && (
								<InputAdornment position="start">
									{InputStartAdornment}
								</InputAdornment>
							)
						}
						sx={{
							fontSize: { xs: 12, md: 20 },
							fontFamily: "Gilroy-Light",
							width: "100%",
						}}
						placeholder={placeholder}
						multiline={multiline}
						minRows={minRow}
						maxRows={maxRow}
						inputProps={{ maxLength }}
						{...field}
					/>
				)}
			/>
			{error && (
				<Typography pt={1} color="#FF00C7" variant="subtitle1">
					{error}
				</Typography>
			)}
		</Box>
	</Box>
);

export default TextFieldWithIcon;
