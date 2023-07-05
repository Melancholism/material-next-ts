import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Link from "@/components/Link";
import Head from "next/head";
import AxiosT from "@/setup/axios.setup";
import { TNextPageWithLayout } from "@/types/nextPageWithLayout.type";
import NestedLayout from "@/components/NestedLayout";
import useAuthStore from "@/store/useAuthStore";
import useThemeModeStore from "@/store/useThemeModeStore";
import { useAccount } from "wagmi";
import { useTheme } from "@mui/material";

const About: TNextPageWithLayout = () => {
	const { isConnected } = useAccount();
	const isLoggedIn = useAuthStore((state) => state.isLoggedIn);

	const mode = useThemeModeStore((state) => state.mode);
	const {
		palette: { mode: muiThemeMode },
	} = useTheme();

	AxiosT.get("/notifications")
		.then((res) => console.log(res, "res"))
		.catch((e) => console.log(e, "error"));

	return (
		<>
			<Head>
				<title>About Page</title>
			</Head>
			<Typography>
				This page removes the main layout but has a standalone layout for itself
			</Typography>
			<Typography>
				This page sends a client-side fetch request that needs auth token. if
				your are not logged in a toast gets displayed.
			</Typography>
			<Container maxWidth="lg">
				<Box
					sx={{
						my: 4,
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<Link href="/">
						<Button variant="contained">Go to the home page</Button>
					</Link>
					<br /> <br />
					<Typography variant="h4">
						isConnected: {isConnected.toString()}
					</Typography>
					<Typography variant="h4">
						isLoggedIn: {isLoggedIn.toString()}
					</Typography>
					<Typography variant="h4">useThemeModeStore mode: {mode}</Typography>
					<Typography variant="h4">Mui Theme mode: {muiThemeMode}</Typography>
				</Box>
			</Container>
		</>
	);
};

About.getLayout = function getLayout(page: React.ReactElement) {
	return <NestedLayout>{page}</NestedLayout>;
};

export default About;
