//
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { useAccount, useSignMessage } from "wagmi";
import useAuthStore from "@/store/useAuthStore";
import AxiosT from "@/setup/axios.setup";
import { displayTxError } from "@/helpers/displayTxError";
import useDetectSwitchAccountAndNetwork from "./useDetectSwitchAccountAndNetwork";

type LoginData = {
	nonce: string;
	signedMessage: string;
};

const useLogin = () => {
	useDetectSwitchAccountAndNetwork();
	const queryClient = useQueryClient();
	const { address, isConnected } = useAccount();
	const { signMessageAsync } = useSignMessage();
	const setIsLoggedIn = useAuthStore((state) => state.setIsLoggedIn);
	const token = useAuthStore((state) => state.token);

	const { mutate: callLogin, isLoading: loginIsLoading } = useMutation({
		mutationFn: (data: LoginData) =>
			AxiosT.post("/users/login", {
				wallet: address,
				message: data.nonce,
				signature: data.signedMessage,
			}),
		onSuccess: async (data) => {
			if (!data?.data?.data?.token) {
				if (data) {
					throw new Error("Somthing went wrong, please call to support");
				}
			}
			if (data?.data?.data?.token) {
				queryClient.resetQueries();
				setIsLoggedIn(true, data?.data?.data?.token);
				toast.success("Logged in successfully");
			}
		},
		onError: async (err) => {
			displayTxError(err);
		},
	});
	const signNonce = async (nonce: string) => {
		try {
			const signed = await signMessageAsync({ message: nonce });
			callLogin({
				nonce,
				signedMessage: signed,
			});
		} catch (e: any) {
			displayTxError(e);
		}
	};
	const { mutate: callGetNonce, isLoading: nonceIsLoading } = useMutation({
		mutationFn: () => AxiosT.post("/users/nonce", { wallet: address }),
		onSuccess: (data) => {
			signNonce(data?.data?.data?.nonce);
		},
		onError: (e) => {
			console.log(e, "callGetNonce");
			displayTxError(e);
		},
	});
	const handleLogin = async () => {
		if (!isConnected) {
			toast.error("Please connect your wallet");
		}
		callGetNonce();
	};
	useEffect(() => {
		const status = !!(token && isConnected);
		setIsLoggedIn(status, token);
	}, [isConnected, token, setIsLoggedIn]);

	return {
		login: handleLogin,
		loginIsLoading: loginIsLoading || nonceIsLoading,
	};
};

export default useLogin;
