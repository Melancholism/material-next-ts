import { Box, CircularProgress } from "@mui/material";
import React from "react";

type Props = {
	children: any;
	isLoading: boolean;
	width?: string;
	[key: string]: any;
};
const LoadingComponent = ({ children, isLoading, width, ...props }: Props) => (
	<Box width={width ?? "100%"}>
		{isLoading ? (
			<Box
				{...props}
				display="flex"
				justifyContent="center"
				width="100%"
				// height="100%"
				alignItems="center"
			>
				<CircularProgress />
			</Box>
		) : (
			children
		)}
	</Box>
);

export default LoadingComponent;
