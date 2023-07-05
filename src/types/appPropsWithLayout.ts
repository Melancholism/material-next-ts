import { EmotionCache } from "@emotion/cache";
import { TNextPageWithLayout } from "./nextPageWithLayout.type";
import { AppProps } from "next/app";

export interface TAppPropsWithLayout extends AppProps {
	emotionCache?: EmotionCache;
	Component: TNextPageWithLayout;
}
