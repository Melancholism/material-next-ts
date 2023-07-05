import React from "react";

type Props = {
	children: React.ReactNode;
};

const NestedLayout = ({ children }: Props) => (
	<>
		<nav style={{ backgroundColor: "#3396ff" }}>Nested Layout</nav>
		<div>{children}</div>
	</>
);

export default NestedLayout;
