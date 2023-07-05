import { toast } from "react-toastify";
import { targetChains } from "@/constants/targetChains";
import { w3mConnectors, w3mProvider } from "@web3modal/ethereum";
import { configureChains, createConfig } from "wagmi";

// Get projectID at https://cloud.walletconnect.com
if (!process.env.NEXT_PUBLIC_PROJECT_ID) {
	toast.error(
		"Walletconnect ProjectID is not set. Checkout README.md"
	);
	throw new Error(
		"Walletconnect ProjectID is not set. Checkout README.md"
	);
}
const projectId = process.env.NEXT_PUBLIC_PROJECT_ID;

// Configure wagmi client
const { chains, publicClient, webSocketPublicClient } = configureChains(
	targetChains,
	[w3mProvider({ projectId })]
);
const wagmiConfig = createConfig({
	autoConnect: true,
	connectors: w3mConnectors({ version: 2, chains, projectId }),
	publicClient,
	webSocketPublicClient,
});

export { wagmiConfig, chains };
