import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import React from "react";

type Props = {
	btns: any;
	state: any;
	handleState: (
		event: React.MouseEvent<HTMLElement>,
		newValue: string | null
	) => void;
};

const CustomToggle = ({ btns, state, handleState }: Props) => (
	<ToggleButtonGroup
		value={state}
		exclusive
		onChange={handleState}
		sx={{
			borderRadius: 6,
			p: 0.5,
			".MuiToggleButton-root": {
				color: "text.primary",
				border: "none",
				textTransform: "none",
				p: "8px 16px",
			},
			".Mui-selected": {
				backgroundColor: "#6B60E8!important",
			},
			".MuiToggleButtonGroup-grouped": {
				borderRadius: "24px!important",
			},
		}}
	>
		{btns.map(({ id, value, inner }) => (
			<ToggleButton key={id} value={value} aria-label="left aligned">
				{inner}
			</ToggleButton>
		))}
	</ToggleButtonGroup>
);

export default CustomToggle;
