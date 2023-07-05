import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import CustomButton from "./AuthButton";
import React from "react";
import ToggleThemeButton from "./ToggleThemeButton";

type Props = {
	children: React.ReactNode;
};

const Layout = ({ children }: Props) => (
	<>
		<Box flexGrow={1}>
			<AppBar position="static">
				<Toolbar>
					<CustomButton />
					<Typography mx="auto">Main Layout</Typography>
					<ToggleThemeButton />
				</Toolbar>
			</AppBar>
		</Box>
		<main>{children}</main>
	</>
);

export default Layout;
