/* eslint-disable no-mixed-spaces-and-tabs */
import { displayTxError } from "@/helpers/displayTxError";
import dispatchStorageEvent from "@/helpers/dispatchStorageEvent";
import axios from "axios";
import { TTokenStore } from "@/types/tokenStore.type";

const AxiosT = axios.create({
	baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});

AxiosT.interceptors.request.use((req) => {
	let authToken: string | undefined;
	if (typeof window !== "undefined") {
		const tokenStore = localStorage.getItem("token") as string;
		const parsedTokenStore = JSON.parse(tokenStore || "{}") as TTokenStore;
		authToken = parsedTokenStore?.state?.token;
		if (authToken) {
			req.headers.Authorization = `Bearer ${authToken}`;
		}
	}

	return req;
});

if (typeof window !== "undefined") {
	AxiosT.interceptors.response.use(
		(res) => res,
		(err) => {
			displayTxError(err);

			if (err.response?.status === 404) {
				// navigate("/404", { replace: true });
			}
			if (err.response?.status === 401) {
				dispatchStorageEvent({ eventName: "token-storage" });
				console.log("401 boood");
			}
		}
	);
}

AxiosT.defaults.headers.post["Content-Type"] = "application/json";

export default AxiosT;
