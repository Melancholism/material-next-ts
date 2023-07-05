import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@/components/Link";
import Head from "next/head";
import { Button, useTheme } from "@mui/material";

import useAuthStore from "@/store/useAuthStore";
import useThemeModeStore from "@/store/useThemeModeStore";
import { useAccount } from "wagmi";
import React from "react";

const NestedLayout = React.lazy(() => import("@/components/NestedLayout"));

const Home = () => {
	const { isConnected } = useAccount();
	const isLoggedIn = useAuthStore((state) => state.isLoggedIn);

	const mode = useThemeModeStore((state) => state.mode);
	const {
		palette: { mode: muiThemeMode },
	} = useTheme();
	return (
		<NestedLayout>
			<Head>
				<title>Home Page</title>
			</Head>
			<br />
			<Link href="/about" color="secondary">
				Go to the about page
			</Link>
			<br />
			<Typography variant="h4">
				isConnected: {isConnected.toString()}
			</Typography>
			<Typography variant="h4">isLoggedIn: {isLoggedIn.toString()}</Typography>
			<Typography variant="h4">useThemeModeStore mode: {mode}</Typography>
			<Typography variant="h4">Mui Theme mode: {muiThemeMode}</Typography>
			<br /> <br />
			<Typography variant="h4">Typography:</Typography>
			<Box>
				<Typography variant="h5">
					Variants: h1 | h2 | h3 | h4 | h5 | h6 | subtitle1 | subtitle2 | body1
					| body2 | caption | caption2 (custom) | button | overline
				</Typography>
				<Typography variant="h1">I am h1</Typography>
				<Typography variant="h2">I am h2</Typography>
				<Typography variant="h3">I am h3</Typography>
				<Typography variant="h4">I am h4</Typography>
				<Typography variant="h5">I am h5</Typography>
				<Typography variant="h6">I am h6</Typography>
				<Typography variant="subtitle1">I am subtitle1</Typography>
				<Typography variant="subtitle2">I am subtitle2</Typography>
				<Typography variant="body1">I am body1</Typography>
				<Typography variant="body2">I am body2</Typography>
				<Typography variant="caption">I am caption</Typography>
				<Typography variant="caption2">
					I am caption2 (custom variant)
				</Typography>
				<Typography variant="button">I am button</Typography>
				<Typography variant="overline">I am overline</Typography>
			</Box>
			<Box>
				<Typography variant="h4">Buttons:</Typography>
				<Box>
					<Typography variant="h5">Contained colors|disabled|sizes</Typography>

					<Box display="flex" gap={1}>
						<Button variant="contained" color="primary">
							primary
						</Button>
						<Button variant="contained" color="secondary">
							secondary
						</Button>
						<Button variant="contained" color="error">
							error
						</Button>
						<Button variant="contained" color="info">
							info
						</Button>
						<Button variant="contained" color="inherit">
							inherit
						</Button>
						<Button variant="contained" color="success">
							success
						</Button>
						<Button variant="contained" color="warning">
							warning
						</Button>
						<Button variant="contained" color="inactive">
							inactive (custom)
						</Button>
						<Button variant="contained" disabled>
							disabled=true
						</Button>
						<Button variant="contained" size="small">
							small
						</Button>
						<Button variant="contained" size="medium">
							medium
						</Button>
						<Button variant="contained" size="large">
							large
						</Button>
					</Box>
				</Box>
				<Box>
					<Typography variant="h5">Outlined colors|disabled|sizes</Typography>

					<Box display="flex" gap={1}>
						<Button variant="outlined" color="primary">
							primary
						</Button>
						<Button variant="outlined" color="secondary">
							secondary
						</Button>
						<Button variant="outlined" color="error">
							error
						</Button>
						<Button variant="outlined" color="info">
							info
						</Button>
						<Button variant="outlined" color="inherit">
							inherit
						</Button>
						<Button variant="outlined" color="success">
							success
						</Button>
						<Button variant="outlined" color="warning">
							warning
						</Button>
						<Button variant="outlined" color="inactive">
							inactive (custom)
						</Button>
						<Button variant="outlined" disabled>
							disabled=true
						</Button>
						<Button variant="outlined" size="small">
							small
						</Button>
						<Button variant="outlined" size="medium">
							medium
						</Button>
						<Button variant="outlined" size="large">
							large
						</Button>
					</Box>
				</Box>
				<Box>
					<Typography variant="h5">Text: colors|disabled|sizes</Typography>

					<Box display="flex" gap={1}>
						<Button variant="text" color="primary">
							primary
						</Button>
						<Button variant="text" color="secondary">
							secondary
						</Button>
						<Button variant="text" color="error">
							error
						</Button>
						<Button variant="text" color="info">
							info
						</Button>
						<Button variant="text" color="inherit">
							inherit
						</Button>
						<Button variant="text" color="success">
							success
						</Button>
						<Button variant="text" color="warning">
							warning
						</Button>
						<Button variant="text" color="inactive">
							inactive (custom)
						</Button>
						<Button variant="text" disabled>
							disabled=true
						</Button>
						<Button variant="text" size="small">
							small
						</Button>
						<Button variant="text" size="medium">
							medium
						</Button>
						<Button variant="text" size="large">
							large
						</Button>
					</Box>
				</Box>
				<Box>
					<Typography variant="h5">
						Gradient (custom button variant) colors|disabled|sizes
					</Typography>

					<Box display="flex" gap={1}>
						<Button variant="gradient" color="primary">
							primary
						</Button>
						<Button variant="gradient" color="secondary">
							secondary
						</Button>
						<Button variant="gradient" color="error">
							error
						</Button>
						<Button variant="gradient" color="info">
							info
						</Button>
						<Button variant="gradient" color="inherit">
							inherit
						</Button>
						<Button variant="gradient" color="success">
							success
						</Button>
						<Button variant="gradient" color="warning">
							warning
						</Button>
						<Button variant="gradient" color="inactive">
							inactive (custom)
						</Button>
						<Button variant="gradient" disabled>
							disabled=true
						</Button>
						<Button variant="gradient" size="small">
							small
						</Button>
						<Button variant="gradient" size="medium">
							medium
						</Button>
						<Button variant="gradient" size="large">
							large
						</Button>
					</Box>
				</Box>
			</Box>
			<Box>
				<Typography variant="h4">Palette Colors:</Typography>
				<Typography variant="h4">primary:</Typography>
				<Box display="flex" gap={1}>
					<Box width={190} height={50} bgcolor="primary.main">
						primary.main
					</Box>
					<Box width={190} height={50} bgcolor="primary.main2">
						primary.main2 (main2 is custom)
					</Box>
					<Box width={190} height={50} bgcolor="primary.dark">
						primary.dark
					</Box>
					<Box width={190} height={50} bgcolor="primary.light">
						primary.light
					</Box>
					<Box width={190} height={50} bgcolor="primary.contrastText">
						primary.contrastText
					</Box>
				</Box>
				<Typography variant="h4">secondary:</Typography>
				<Box display="flex" gap={1}>
					<Box width={190} height={50} bgcolor="secondary.main">
						secondary.main
					</Box>
					<Box width={190} height={50} bgcolor="secondary.dark">
						secondary.dark
					</Box>
					<Box width={190} height={50} bgcolor="secondary.light">
						secondary.light
					</Box>
					<Box width={190} height={50} bgcolor="secondary.contrastText">
						secondary.contrastText
					</Box>
				</Box>
				<Typography variant="h4">error:</Typography>
				<Box display="flex" gap={1}>
					<Box width={190} height={50} bgcolor="error.main">
						error.main
					</Box>
					<Box width={190} height={50} bgcolor="error.dark">
						error.dark
					</Box>
					<Box width={190} height={50} bgcolor="error.light">
						error.light
					</Box>
					<Box width={190} height={50} bgcolor="error.contrastText">
						error.contrastText
					</Box>
				</Box>
				<Typography variant="h4">warning:</Typography>
				<Box display="flex" gap={1}>
					<Box width={190} height={50} bgcolor="warning.main">
						warning.main
					</Box>
					<Box width={190} height={50} bgcolor="warning.dark">
						warning.dark
					</Box>
					<Box width={190} height={50} bgcolor="warning.light">
						warning.light
					</Box>
					<Box width={190} height={50} bgcolor="warning.contrastText">
						warning.contrastText
					</Box>
				</Box>
				<Typography variant="h4">info:</Typography>
				<Box display="flex" gap={1}>
					<Box width={190} height={50} bgcolor="info.main">
						info.main
					</Box>
					<Box width={190} height={50} bgcolor="info.dark">
						info.dark
					</Box>
					<Box width={190} height={50} bgcolor="info.light">
						info.light
					</Box>
					<Box width={190} height={50} bgcolor="info.contrastText">
						info.contrastText
					</Box>
				</Box>
				<Typography variant="h4">success:</Typography>
				<Box display="flex" gap={1}>
					<Box width={190} height={50} bgcolor="success.main">
						success.main
					</Box>
					<Box width={190} height={50} bgcolor="success.dark">
						success.dark
					</Box>
					<Box width={190} height={50} bgcolor="success.light">
						success.light
					</Box>
					<Box width={190} height={50} bgcolor="success.contrastText">
						success.contrastText
					</Box>
				</Box>
				<Typography variant="h4">warning:</Typography>
				<Box display="flex" gap={1}>
					<Box width={190} height={50} bgcolor="warning.main">
						warning.main
					</Box>
					<Box width={190} height={50} bgcolor="warning.dark">
						warning.dark
					</Box>
					<Box width={190} height={50} bgcolor="warning.light">
						warning.light
					</Box>
					<Box width={190} height={50} bgcolor="warning.contrastText">
						warning.contrastText
					</Box>
				</Box>
				<Typography variant="h4">tonalOffset:</Typography>
				<Box display="flex" gap={1}>
					<Box width={190} height={50} bgcolor="tonalOffset">
						tonalOffset
					</Box>
					<Box width={190} height={50} bgcolor="tonalOffset.dark">
						tonalOffset.dark
					</Box>
					<Box width={190} height={50} bgcolor="tonalOffset.light">
						tonalOffset.light
					</Box>
				</Box>
				<Typography variant="h4">contrastThreshold:</Typography>
				<Box display="flex" gap={1}>
					<Box width={190} height={50} bgcolor="contrastThreshold">
						contrastThreshold
					</Box>
				</Box>
				<Typography variant="h4">common:</Typography>
				<Box display="flex" gap={1}>
					<Box width={190} height={50} bgcolor="common.dark">
						common.dark
					</Box>
					<Box width={190} height={50} bgcolor="common.light">
						common.light
					</Box>
				</Box>
				<Typography variant="h4">grey:</Typography>
				<Box display="flex" gap={1}>
					<Box width={190} height={50} bgcolor="grey">
						grey
					</Box>
				</Box>
				<Typography variant="h4">text:</Typography>
				<Box display="flex" gap={1}>
					<Box width={190} height={50} bgcolor="text.primary">
						text.primary
					</Box>
					<Box width={190} height={50} bgcolor="text.secondary">
						text.secondary
					</Box>
					<Box width={190} height={50} bgcolor="text.disabled">
						text.disabled
					</Box>
				</Box>
				<Typography variant="h4">divider:</Typography>
				<Box display="flex" gap={1}>
					<Box width={190} height={50} bgcolor="divider">
						divider
					</Box>
				</Box>
				<Typography variant="h4">action:</Typography>
				<Box display="flex" gap={1}>
					<Box width={190} height={50} bgcolor="action.active">
						action.active
					</Box>
					<Box width={190} height={50} bgcolor="action.hover">
						action.hover
					</Box>
					<Box width={190} height={50} bgcolor="action.hoverOpacity">
						action.hoverOpacity
					</Box>
					<Box width={190} height={50} bgcolor="action.selected">
						action.selected
					</Box>
					<Box width={190} height={50} bgcolor="action.selectedOpacity">
						action.selectedOpacity
					</Box>
					<Box width={190} height={50} bgcolor="action.disabled">
						action.disabled
					</Box>
					<Box width={190} height={50} bgcolor="action.disabledOpacity">
						action.disabledOpacity
					</Box>
					<Box width={190} height={50} bgcolor="action.disabledBackground">
						action.disabledBackground
					</Box>
					<Box width={190} height={50} bgcolor="action.focus">
						action.focus
					</Box>
					<Box width={190} height={50} bgcolor="action.focusOpacity">
						action.focusOpacity
					</Box>
					<Box width={190} height={50} bgcolor="action.activatedOpacity">
						action.activatedOpacity
					</Box>
				</Box>
				{/* active: string; hover: string; hoverOpacity: number; selected: string;
                selectedOpacity: number; disabled: string; disabledOpacity: number;
                disabledBackground: string; focus: string; focusOpacity: number;
                activatedOpacity: number; */}
				<Typography variant="h4">background:</Typography>
				<Box display="flex" gap={1}>
					<Box width={190} height={50} bgcolor="background.default">
						background.default
					</Box>
					<Box width={190} height={50} bgcolor="background.paper">
						background.paper
					</Box>
				</Box>
			</Box>
			<br />
			<br />
		</NestedLayout>
	);
};

export default React.memo(Home);
