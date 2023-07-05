import * as React from "react";
import Head from "next/head";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider } from "@emotion/react";
import createEmotionCache from "../helpers/createEmotionCache";
import ErrorBoundary from "@/components/ErrorBoundry";
import {
	Hydrate,
	QueryClient,
	QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { EthereumClient } from "@web3modal/ethereum";
import { WagmiConfig } from "wagmi";
import { Web3Modal } from "@web3modal/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "@/styles/globals.scss";
import useGetTheme from "@/hooks/useGetTheme";
import { chains, wagmiConfig } from "@/configs/wagmi.config";
import useAuthStore from "@/store/useAuthStore";
import useStorageListener from "@/hooks/useStorageListener";
import { TAppPropsWithLayout } from "@/types/appPropsWithLayout";
import Layout from "@/components/Layout";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

const ethereumClient = new EthereumClient(wagmiConfig, chains);

const MyApp = (props: TAppPropsWithLayout) => {
	//
	const { theme } = useGetTheme();
	//
	const setIsLoggedIn = useAuthStore((state) => state.setIsLoggedIn);
	useStorageListener({
		eventName: "token-storage",
		eventFunction: () => setIsLoggedIn(false),
	});
	//
	const [queryClient] = React.useState(
		() =>
			new QueryClient({
				defaultOptions: {
					queries: { staleTime: 30000 },
				},
			})
	);
	//
	const [ready, setReady] = React.useState(false);
	React.useEffect(() => {
		setReady(true);
	}, []);

	const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
	// Use the layout defined at the page level, if available
	const getLayout = Component.getLayout ?? ((page) => <Layout>{page}</Layout>);

	return (
		<CacheProvider value={emotionCache}>
			<Head>
				<meta name="viewport" content="initial-scale=1, width=device-width" />
			</Head>
			<ErrorBoundary>
				<ThemeProvider theme={theme}>
					{/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
					<CssBaseline />
					<QueryClientProvider client={queryClient}>
						<Hydrate state={pageProps.dehydratedState}>
							{ready ? (
								<WagmiConfig config={wagmiConfig}>
									{getLayout(<Component {...pageProps} />)}
								</WagmiConfig>
							) : null}
						</Hydrate>
						<ReactQueryDevtools initialIsOpen={false} />
						<Web3Modal
							projectId={process.env.NEXT_PUBLIC_PROJECT_ID as string}
							ethereumClient={ethereumClient}
							// defaultChain={chains[0]}
							themeMode={theme.palette.mode}
						/>
					</QueryClientProvider>
					<ToastContainer
						position="top-center"
						autoClose={5000}
						hideProgressBar={false}
						newestOnTop={false}
						closeOnClick
						pauseOnFocusLoss
						pauseOnHover
						theme={theme.palette.mode}
					/>
				</ThemeProvider>
			</ErrorBoundary>
		</CacheProvider>
	);
};

export default MyApp;
