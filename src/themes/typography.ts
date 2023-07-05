import { TypographyOptions } from "@mui/material/styles/createTypography";
import { Roboto } from "next/font/google";
export const roboto = Roboto({
	weight: ["400"],
	subsets: ["latin"],
	display: "swap",
	fallback: ["Helvetica", "Arial", "sans-serif"],
});

const typography: TypographyOptions = {
	fontFamily: roboto.style.fontFamily,
	h1: {
		// fontDisplay: "swap",
		// "@media (max-width: 767px)": {
		// 	fontSize: "2rem",
		// },
		// "@media (min-width: 768px) and (max-width: 1199px) ": {
		// 	fontSize: "3rem",
		// },
		// fontSize: "5rem",
	},
	h2: {
		// fontDisplay: "swap",
	},
	h3: {
		// fontDisplay: "swap",
	},
	h4: {
		// fontDisplay: "swap",
	},
	h5: {
		// fontDisplay: "swap",
	},
	h6: {
		// fontDisplay: "swap",
	},
	body1: {
		// fontDisplay: "swap",
	},
	body2: {
		// fontDisplay: "swap",
	},
	subtitle1: {
		// fontDisplay: "swap",
	},
	subtitle2: {
		// fontDisplay: "swap",
	},
	caption: {
		// fontDisplay: "swap",
	},
	caption2: {
		fontSize: "0.5rem",
	},
	button: {
		// fontDisplay: "swap",
	},
	overline: {
		// fontDisplay: "swap",
	},
};

export default typography;
