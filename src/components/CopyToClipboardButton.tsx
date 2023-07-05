/* eslint-disable react/require-default-props */
import { Popover, IconButton, Typography } from "@mui/material";
import { Copy } from "iconsax-react";
import React from "react";

type Props = {
	text: string;
	size: number | number;
	disabled?: boolean;
	edge?: false | "end" | "start";
};

const CopyToClipboardButton = ({
	text,
	size,
	disabled = false,
	edge = "end",
}: Props) => {
	const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);
	const [isCopied, setIsCopied] = React.useState(false);

	const handleClick = () => {
		setIsCopied(true);
		navigator.clipboard.writeText(text);
	};

	const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
		setIsCopied(false);
	};

	const handlePopoverClose = () => {
		setAnchorEl(null);
	};

	const open = Boolean(anchorEl);
	return (
		<>
			<IconButton
				disabled={disabled}
				edge={edge}
				onClick={handleClick}
				onMouseEnter={handlePopoverOpen}
				aria-label="Copy to clipboard"
				onMouseLeave={handlePopoverClose}
			>
				<Copy variant="Bulk" size={size} color="#6B60E8" />
			</IconButton>
			<Popover
				sx={{
					pointerEvents: "none",
					"& .MuiPaper-root": {
						p: 1,
						display: "flex",
					},
				}}
				open={open}
				anchorEl={anchorEl}
				anchorOrigin={{
					vertical: "bottom",
					horizontal: "left",
				}}
				transformOrigin={{
					vertical: "top",
					horizontal: "left",
				}}
				onClose={handlePopoverClose}
				disableRestoreFocus
			>
				<Typography variant="caption">
					{isCopied ? "Copied!" : "Click to copy"}
				</Typography>
			</Popover>
		</>
	);
};

export default CopyToClipboardButton;
