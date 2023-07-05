export const getURLWithProtocol = (input: string) => {
	let url: URL;
	if (input) {
		try {
			url = new URL(input);

			if (!url.hostname) {
				// cases where the hostname was not identified
				// ex: user:password@www.example.com, example.com:8000
				url = new URL(`https://${input}`);
			}
		} catch (error) {
			url = new URL(`https://${input}`);
		}
		return url?.href || "/";
	} else {
		return "/";
	}
};
