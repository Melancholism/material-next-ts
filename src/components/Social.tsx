/* eslint-disable react/require-default-props */
import { Box, IconButton, useMediaQuery } from "@mui/material";
import { Edit } from "iconsax-react";
import React from "react";
import { getURLWithProtocol } from "@/helpers/getURLWithProtocol";
import {
	DiscordIcon,
	InstagramIcon,
	LinkedinIcon,
	TwitterIcon,
} from "./CustomIcons";

type TURL = {
	discord?: string;
	twitter?: string;
	linkedIn?: string;
	instagram?: string;
};

type Props = {
	iconColor?: string;
	hasBlur?: boolean;
	hasEdit?: boolean;
	urls?: TURL;
	editOnCLick?: () => void;
};

const Social = ({
	iconColor,
	hasBlur = false,
	hasEdit = false,
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	editOnCLick = () => {},
	urls,
}: Props) => {
	const isMdDown = useMediaQuery("(max-width:767px)");
	const iconSize = isMdDown ? 16 : 24;

	return (
		<Box
			display="flex"
			justifyContent="center"
			alignItems="center"
			className="socials"
			gap={3}
			position="relative"
			top={4}
		>
			{urls?.discord && (
				<a
					target="_blank"
					className="social-icon"
					aria-label="discord"
					href={getURLWithProtocol(urls?.discord)}
					rel="noreferrer"
				>
					<DiscordIcon
						style={{ display: "block", color: iconColor }}
						sx={{
							width: { xs: 20, md: 30 },
							height: { xs: 16, md: 24 },
						}}
					/>
				</a>
			)}
			{urls?.twitter && (
				<a
					target="_blank"
					aria-label="twitter"
					className="social-icon"
					href={`https://twitter.com/${urls?.twitter}` || "#1"}
					rel="noreferrer"
				>
					<TwitterIcon
						style={{ display: "block", color: iconColor }}
						sx={{
							width: { xs: 20, md: 30 },
							height: { xs: 16, md: 24 },
						}}
					/>
				</a>
			)}
			{/* {github && (
				<a target="_blank" className="social-icon" href={urls?.github || "#1"} rel="noreferrer">
					<GithubIcon style={{ display: 'block', color: iconColor }} />
				</a>
			)} */}
			{urls?.linkedIn && (
				<a
					target="_blank"
					aria-label="linkedin"
					className="social-icon"
					href={getURLWithProtocol(urls?.linkedIn)}
					rel="noreferrer"
				>
					<LinkedinIcon
						style={{
							display: "block",
							color: iconColor,
						}}
						sx={{
							width: { xs: 16, md: 24 },
							height: { xs: 16, md: 24 },
						}}
					/>
				</a>
			)}
			{urls?.instagram && (
				<a
					target="_blank"
					aria-label="instagram"
					className="social-icon"
					href={`https://www.instagram.com/${urls?.instagram}` || "#1"}
					rel="noreferrer"
				>
					<InstagramIcon
						style={{ display: "block", color: iconColor }}
						sx={{
							width: { xs: 16, md: 24 },
							height: { xs: 16, md: 24 },
						}}
					/>
				</a>
			)}
			{hasEdit && (
				<IconButton
					onClick={editOnCLick}
					aria-label="Edit social media"
					sx={{
						background: "rgba(107, 96, 232, 0.24)",
						borderRadius: { xs: 2, md: 3 },
					}}
				>
					<Edit
						size={iconSize}
						color={iconColor}
						style={{ display: "block" }}
					/>
				</IconButton>
			)}
			{hasBlur && (
				<Box
					position="absolute"
					width="100%"
					height="35%"
					top="50%"
					left="50%"
					right={0}
					bottom={0}
					bgcolor="#6B60E8"
					zIndex={-1}
					sx={{
						transform: "translate(-50%, -50%)",
						filter: "blur(25px)",
					}}
				/>
			)}
		</Box>
	);
};

export default Social;
