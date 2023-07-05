import { useCallback, useEffect } from 'react';

export const useEscape = (setOpen) => {
	const escFunction = useCallback((event) => {
		if (event.key === 'Escape') {
			setOpen(false);
		}
	}, []);

	useEffect(() => {
		document.addEventListener('keydown', escFunction, false);

		return () => {
			document.removeEventListener('keydown', escFunction, false);
		};
	}, []);
};
