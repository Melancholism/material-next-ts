import { Pagination } from "@mui/material";
import React from "react";

type Props = {
	metadata: any;
	setPage: (page: number) => void;
	notScrollToTop?: boolean;
};
const CustomPagination = ({ metadata, setPage, notScrollToTop }: Props) =>
	Math.floor(
		metadata?.pagination?.totalRecords / metadata?.pagination?.pageSize
	) !== 0 && (
		<Pagination
			sx={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				mt: { xs: 4, md: 6 },
			}}
			count={
				Math.ceil(
					metadata?.pagination?.totalRecords / metadata?.pagination?.pageSize
				) || 0
			}
			page={metadata?.pagination?.pageNumber ?? 1}
			onChange={(val, page) => {
				setPage(page);
				if (!notScrollToTop) window.scrollTo(0, 0);
			}}
			color="primary"
		/>
	);

export default CustomPagination;
