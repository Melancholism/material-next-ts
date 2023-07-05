import usePreferredThemeMode from "@/hooks/usePreferredThemeMode";
import useThemeModeStore, { TMode } from "@/store/useThemeModeStore";
import { Paper, ToggleButton, ToggleButtonGroup } from "@mui/material";
import React from "react";

const ToggleThemeButton = () => {
	const preferredMode = usePreferredThemeMode();
	const mode = useThemeModeStore((state) => state.mode);
	const toggleMode = useThemeModeStore((state) => state.toggleMode);

	const handleChange = (
		e: React.MouseEvent<HTMLElement, MouseEvent>,
		value: TMode | null
	) => {
		if (value) {
			toggleMode(value, preferredMode);
		}
	};
	return (
		<Paper>
			<ToggleButtonGroup value={mode} exclusive onChange={handleChange}>
				<ToggleButton value="light">Light</ToggleButton>
				<ToggleButton value="dark">dark</ToggleButton>
				<ToggleButton value="system">System</ToggleButton>
			</ToggleButtonGroup>
		</Paper>
	);
};

export default ToggleThemeButton;
