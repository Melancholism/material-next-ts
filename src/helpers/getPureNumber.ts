function getPureNumber(input: string | number) {
	return +`${input}`.replace(/[^0-9.]/g, '');
}

export default getPureNumber;
