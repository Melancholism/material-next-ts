import { getIsProduction } from "@/helpers/getIsProduction";
import { mainnet, sepolia, bsc, bscTestnet } from "@wagmi/chains";
import { Chain } from "wagmi";

export const targetChains: Chain[] = getIsProduction()
	? [mainnet, bsc]
	: [sepolia, bscTestnet];
