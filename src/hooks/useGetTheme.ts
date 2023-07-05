import { createTheme } from "@mui/material/styles";
import breakpoints from "../themes/breakpoints";
import typography from "../themes/typography";
import useThemeModeStore, { TMode } from "@/store/useThemeModeStore";
import { useEffect, useMemo } from "react";
import { dark } from "../themes/dark";
import { light } from "../themes/light";
import usePreferredThemeMode from "@/hooks/usePreferredThemeMode";

const useGetTheme = () => {
	const mode = useThemeModeStore((state) => state.mode);
	const toggleMode = useThemeModeStore((state) => state.toggleMode);
	const preferredMode = usePreferredThemeMode();

	useEffect(() => {
		const localStorageMode = localStorage.getItem("mode") as TMode;

		if (!!localStorageMode && mode !== localStorageMode) {
			toggleMode(localStorageMode, preferredMode);
		}
	}, [mode, toggleMode, preferredMode]);

	const theme = useMemo(
		() =>
			createTheme({
				...(mode === "system"
					? preferredMode === "dark"
						? dark
						: light
					: mode === "dark"
					? dark
					: light),
				breakpoints: breakpoints,
				typography: typography,
			}),
		[mode, preferredMode]
	);

	return { theme };
};

export default useGetTheme;
