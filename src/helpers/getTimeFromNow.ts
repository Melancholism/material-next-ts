import * as dayjs from 'dayjs';
import * as relativeTime from 'dayjs/plugin/relativeTime';

const getTimeFromNow = (
	time: string | number,
	withoutSuffix: boolean,
	expirable: boolean
) => {
	const standardUnixTime = Number.isInteger(time) ? +time * 1000 : time;
	dayjs.extend(relativeTime.default);
	const formatTime = dayjs.default(standardUnixTime).fromNow(withoutSuffix);

	const now = Date.now();

	if (expirable && +standardUnixTime - now <= 0) return false;

	return formatTime;
};

export default getTimeFromNow;
