import { Box, Menu, Typography } from "@mui/material";

type Props = {
	anchorEl: any;
	isOpen: boolean;
	handleClose: () => void;
};

const UploadFileInfo = ({ anchorEl, handleClose, isOpen }: Props) => (
	<Menu
		anchorEl={anchorEl}
		open={isOpen}
		anchorOrigin={{
			vertical: "bottom",
			horizontal: "right",
		}}
		transformOrigin={{
			vertical: "top",
			horizontal: "right",
		}}
		onClose={handleClose}
		PaperProps={{
			sx: {
				backgroundColor: "unset !important",
				boxShadow: "unset",
				marginTop: { xs: "5px", md: "20px" },
				"& ul": {
					padding: "0",
					background: "unset",
					backgroundColor: "unset",
				},
			},
		}}
	>
		<Box
			width={{ xs: "100%" }}
			p={{ xs: 2 }}
			borderRadius={4}
			border="1px solid"
			borderColor="background.paper"
			sx={{
				overflowY: "scroll",
				maxHeight: { xs: 570, md: 800, lg: 850 },
			}}
			display="flex"
			flexDirection="column"
			gap={{ xs: 2 }}
		>
			<Box display="flex" alignItems="center" gap={1}>
				<Typography
					variant="subtitle2"
					fontFamily="Gilroy-SemiBold"
					lineHeight={{ md: "24px" }}
				>
					Maximum File size is 20MB. <br />
					Allowed file extensions: JPEG, JPG, PNG.
				</Typography>
			</Box>
		</Box>
	</Menu>
);

export default UploadFileInfo;
