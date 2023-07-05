/* eslint-disable react/jsx-props-no-spreading */
import { Typography } from "@mui/material";
import React from "react";

type Props = {
	error: string;
	[key: string]: any;
};

const ErrorText = ({ error, ...props }: Props) =>
	error && (
		<Typography
			{...props}
			pt={{ xs: 0.5, md: 1 }}
			color="#FF00C7"
			variant="subtitle1"
		>
			{error}
		</Typography>
	);

export default ErrorText;
