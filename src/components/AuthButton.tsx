import useLogin from "@/hooks/useLogin";
import useAuthStore from "@/store/useAuthStore";
import { Box, Button } from "@mui/material";
import { Web3Button, Web3NetworkSwitch } from "@web3modal/react";
import { useAccount, useNetwork } from "wagmi";

const AuthButton = () => {
	const { isConnected } = useAccount();
	const { login, loginIsLoading } = useLogin();
	const { chain } = useNetwork();
	const isLoggedIn = useAuthStore((state) => state.isLoggedIn);

	return (
		<Box width="fit-content">
			{/* Not connected */}
			{(!isConnected || (isConnected && isLoggedIn && !chain?.unsupported)) && (
				<Web3Button icon="show" label="Connect Wallet" balance="show" />
			)}
			{/* Unsupported chain */}
			{chain?.unsupported && <Web3NetworkSwitch />}
			{/* Login case */}
			{isConnected && !chain?.unsupported && !isLoggedIn && (
				<Button
					variant="gradient"
					disabled={loginIsLoading}
					onClick={login}
					sx={{ width: "fit-content" }}
				>
					Login
				</Button>
			)}
		</Box>
	);
};

export default AuthButton;
