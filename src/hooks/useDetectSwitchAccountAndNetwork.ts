import useAuthStore from "@/store/useAuthStore";
import React from "react";
import { toast } from "react-toastify";
import { ConnectorData, useAccount } from "wagmi";

const useDetectSwitchAccountAndNetwork = () => {
	const { connector: activeConnector } = useAccount();
	const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
	const setIsLoggedIn = useAuthStore((state) => state.setIsLoggedIn);
	React.useEffect(() => {
		const handleConnectorUpdate = ({ account, chain }: ConnectorData) => {
			if (account && isLoggedIn) {
				toast.warning("Account Changed! Login Again.");
				setIsLoggedIn(false);
			} else if (chain) {
				chain?.unsupported &&
					toast.warning("Unsupported chain! Switch Network.");
			}
		};

		if (activeConnector) {
			activeConnector.on("change", handleConnectorUpdate);
		}

		return () => activeConnector?.off("change", handleConnectorUpdate) as any;
	}, [activeConnector, setIsLoggedIn, isLoggedIn]);
};

export default useDetectSwitchAccountAndNetwork;
