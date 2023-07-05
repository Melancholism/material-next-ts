export type TLoginState = {
	isLoggedIn: boolean;
	token: string | undefined;
	setIsLoggedIn: (status: boolean, authToken?: string | undefined) => void;
};

export type TTokenStore = {
	state: TLoginState;
};
