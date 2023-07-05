/* eslint-disable consistent-return */
import { TLoginState } from "@/types/tokenStore.type";
import { create } from "zustand";
import { persist } from "zustand/middleware";

const useAuthStore = create<TLoginState>()(
	persist(
		(set, get) => ({
			isLoggedIn: false,
			token: undefined,
			setIsLoggedIn: (status, authToken = undefined) => {
				if (!status) {
					const token = get().token;
					!!token && set({ token: undefined });
				} else {
					set({ token: authToken });
				}
				set({ isLoggedIn: status });
			},
		}),
		{
			name: "token",
		}
	)
);
export default useAuthStore;
