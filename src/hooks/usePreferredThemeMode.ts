import { PaletteMode, useMediaQuery } from "@mui/material";

const usePreferredThemeMode = () => {
	const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
	const preferredMode = (
		prefersDarkMode ? "dark" : "light"
	) satisfies PaletteMode;

	return preferredMode;
};

export default usePreferredThemeMode;
