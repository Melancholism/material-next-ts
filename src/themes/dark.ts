import { ThemeOptions, createTheme } from "@mui/material/styles";

const { palette } = createTheme();
export const dark: ThemeOptions = {
	palette: {
		mode: "dark",
		primary: {
			main: "#3f51b5",
			main2: "#fff",
		},
		secondary: {
			main: "#f50057",
		},
		background: {
			default: "#030014",
			paper: "#030014",
			transparent: "rgba(3, 0, 20, 0.48)",
		},
		// error: {
		// 	main: red.A400,
		// },
		// text: {
		// 	primary: "#fff",
		// 	secondary: "rgba(255, 255, 255, 0.7)",
		// },
		// divider:{},
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
			defaultProps: {
				disableElevation: true,
			},
			styleOverrides: {
				root: {
					minWidth: "fit-content !important",
					// textTransform: "none",
				},

				// containedPrimary: {
				// 	boxShadow: '0px 0px 64px rgba(107, 96, 232, 0.32) !important',
				// 	'&.Mui-disabled': {
				// 		boxShadow: 'none  !important',
				// 	},
				// },

				// sizeSmall: {},
			},
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
