export function abbrNum(number: number | string, decPlaces: number) {
	decPlaces = 10 ** decPlaces;

	const abbrev = ["k", "m", "b", "t"];

	for (let i = abbrev.length - 1; i >= 0; i--) {
		const size = 10 ** ((i + 1) * 3);

		if (size <= +number) {
			number = Math.floor((+number * decPlaces) / size) / decPlaces;
			number = String(number) + abbrev[i];
			break;
		}
	}

	return number ?? "...";
}
