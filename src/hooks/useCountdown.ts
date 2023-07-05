import dayjs from 'dayjs';
import { useEffect, useState } from 'react';

function useCountdown(expireDate: number, onExpire: () => void) {
	const [timeLeft, setTimeLeft] = useState(0);
	const [months, setMonths] = useState(0);

	function getMonthsFromNow() {
		return dayjs(expireDate).diff(dayjs(), 'M');
		// new Date(expireDate).getMonth() -
		// new Date().getMonth() +
		// 12 * (new Date(expireDate).getFullYear() - new Date().getFullYear())
	}

	useEffect(() => {
		const interval = setInterval(() => {
			const now = Date.now();
			const left = expireDate - now;

			if (left <= 1000) {
				onExpire();
				clearInterval(interval);
				setTimeLeft(0);
			} else {
				setTimeLeft(left);
				setMonths(getMonthsFromNow());
			}
		}, 1000);

		return () => clearInterval(interval);
	}, []);

	const seconds = Math.floor(timeLeft / 1000);
	const minutes = Math.floor(seconds / 60);
	const hours = Math.floor(minutes / 60);
	const days = Math.floor(hours / 24);

	return {
		months: months > 9 ? months : `0${months}`,
		days: days % 30 > 9 ? days % 30 : `0${days % 30}`,
		hours: hours % 24 > 9 ? hours % 24 : `0${hours % 24}`,
		minutes: minutes % 60 > 9 ? minutes % 60 : `0${minutes % 60}`,
		seconds: seconds % 60 > 9 ? seconds % 60 : `0${seconds % 60}`,
	};
}
export default useCountdown;
