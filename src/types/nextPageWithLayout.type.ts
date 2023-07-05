import { NextPage } from "next";

export type TNextPageWithLayout<P = Record<string, never>, IP = P> = NextPage<
	P,
	IP
> & {
	getLayout?: (page: React.ReactElement) => React.ReactNode;
};
