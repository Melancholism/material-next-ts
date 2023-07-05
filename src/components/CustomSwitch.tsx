import styled from '@emotion/styled';
import { Switch, SwitchProps } from '@mui/material';
import React from 'react';

const CustomSwitch = styled(
	(props: SwitchProps) => (
		<Switch
			focusVisibleClassName=".Mui-focusVisible"
			disableRipple
			{...props}
		/>
	),
	{
		shouldForwardProp: (prop) => prop !== 'isSmall',
	}
)<{ isSmall?: boolean }>(({ theme, isSmall }) => ({
	width: isSmall ? 64 : 112,
	height: isSmall ? 32 : 56,
	padding: 0,
	'& .MuiSwitch-switchBase': {
		padding: 0,
		margin: 4,
		transitionDuration: '300ms',
		'&.Mui-checked': {
			transform: isSmall ? 'translateX(32px)' : 'translateX(56px)',
			'& + .MuiSwitch-track': {
				backgroundColor: (theme as any).palette.background.paper,
				opacity: 1,
				border: 0,
			},
			'&.Mui-disabled + .MuiSwitch-track': {
				opacity: 0.5,
			},
		},
		'&.Mui-focusVisible .MuiSwitch-thumb': {
			border: '6px solid #fff',
		},
		'&.Mui-disabled .MuiSwitch-thumb': {},
		'&.Mui-disabled + .MuiSwitch-track': {
			opacity: 0.3,
		},
	},
	'& .MuiSwitch-thumb': {
		boxSizing: 'border-box',
		width: isSmall ? 24 : 48,
		height: isSmall ? 24 : 48,
	},
	'& .MuiSwitch-track': {
		borderRadius: 56 / 2,
		backgroundColor: (theme as any).palette.background.paper,
		opacity: 1,
		transition: (theme as any).transitions.create(['background-color'], {
			duration: 500,
		}),
	},
	'@media (max-width:767px)': {
		width: isSmall ? 64 : 56,
		height: isSmall ? 32 : 28,

		'& .MuiSwitch-thumb': {
			width: 24,
			height: 24,
		},
		'& .MuiSwitch-switchBase': {
			margin: isSmall ? 4 : 2,
			'&.Mui-checked': {
				transform: isSmall ? 'translateX(32px)' : 'translateX(28px)',
			},
		},
	},
}));

export default CustomSwitch;
