import React from "react";
import styled from "@emotion/styled";
import { Tab, Tabs } from "@mui/material";
import Link from "@/components/Link";

type TOutlineTabsItem = {
	id: number;
	label: string;
	path?: string;
};

const StyledTabs = styled((props: any) => (
	<Tabs
		{...props}
		TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
	/>
))(({ theme }) => {
	const primaryMainColor = theme.palette.primary.main;
	return {
		"&.MuiTabs-root": {
			borderBottom: "1px solid",
			borderColor: theme.palette.background.paper,
		},
		"& button": {
			opacity: 0.36,
			paddingTop: 20,
			paddingBottom: 20,
		},
		"& .MuiTabs-indicator": {
			display: "flex",
			justifyContent: "center",
			height: "5px",
			backgroundColor: theme.palette.primary.main,
			borderRadius: "5px",
			"&::after": {
				content: '""',
				position: "absolute",
				width: "100%",
				height: "100%",
				bottom: 0,
				top: 0,
				boxShadow: `0px 0px 64px ${primaryMainColor}`,
			},
		},
		"& .MuiTabs-indicatorSpan": {
			width: "100%",
		},
	};
});

const StyledTab = styled((props: any) => <Tab disableRipple {...props} />)(
	({ theme }) => ({
		textTransform: "none",
		fontWeight: 700,
		fontSize: theme.typography.body1.fontSize,
		marginRight: theme.spacing(1),
		color: "background.paper",
		"&.MuiButtonBase-root": {
			minWidth: 0,
			padding: 0,
		},
		"&.Mui-selected": {
			color: theme.palette.primary.main,
			opacity: 1,
		},
		"&.Mui-focusVisible": {
			backgroundColor: "rgba(100, 95, 228, 0.32)",
		},
		"@media (max-width: 767px)": {
			fontSize: "0.875rem",
		},
	})
);

type Props = {
	tabs: TOutlineTabsItem[];
	value: string;
	onChange: (val: string) => void;
	tabsProps?: any;
};
const OutlineTabs = ({ tabs, value, onChange, tabsProps }: Props) => (
	<StyledTabs
		value={value}
		onChange={(e, val) => onChange(val)}
		textColor="secondary"
		indicatorColor="secondary"
		aria-label="secondary tabs example"
		centered
		{...tabsProps}
	>
		{tabs.map((tab) => (
			<StyledTab
				key={tab.id}
				value={tab.path ?? tab.label}
				label={tab.label}
				component={tab.path && Link}
				to={{ pathname: tab.path }}
			/>
		))}
	</StyledTabs>
);

export default OutlineTabs;
