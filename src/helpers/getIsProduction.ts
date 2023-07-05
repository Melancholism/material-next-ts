/* eslint-disable no-else-return */

export const getIsProduction = () =>
	process.env.NEXT_PUBLIC_ENV === "production";
