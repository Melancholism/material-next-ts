import { ThemeOptions, createTheme } from "@mui/material/styles";

const { palette } = createTheme();
export const light: ThemeOptions = {
	palette: {
		mode: "light",
		primary: {
			main: "#654FFF",
			main2: "#333",
		},
		secondary: {
			main: "#f50057",
		},
		background: {
			default: "#fff",
			paper: "#f3f1fc",
			transparent: "rgba(3, 0, 20, 0.48)",
		},
		// divider: {},
		// error: {
		// 	main: red.A400,
		// },
		// text: {
		// 	primary: "#fff",
		// 	secondary: "#ffffff7a",
		// },
		inactive: palette.augmentColor({
			color: {
				main: "#1F1E38",
			},
		}),
		// action: {
		// 	disabledBackground: "#ffffff1f",
		// 	disabled: "#ffffff7a",
		// },
	},
	components: {
		MuiButton: {
			// Add a custom variant for buttons
			variants: [
				{
					props: { variant: "gradient" },
					style: {
						background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
						boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
						":hover": {
							boxShadow: "none",
						},
					},
				},
			],
		},
	},
};
