import NumAbbr from 'number-abbreviate';
/* eslint-disable no-plusplus */
const numAbbr = new NumAbbr(['K', 'M', 'B', 'T']);

export function abbreviateNumber(value) {
	return numAbbr.abbreviate(value, 2);
}
