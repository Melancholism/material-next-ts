import { useRef, useEffect } from 'react';

const useClickOutside = (handler) => {
	const domNode: any = useRef();

	useEffect(() => {
		const maybeHandler = (event) => {
			if (!domNode.current.contains(event.target)) {
				handler();
			}
		};

		document.addEventListener('mousedown', maybeHandler);

		return () => {
			document.removeEventListener('mousedown', maybeHandler);
		};
	});

	return domNode;
};

export default useClickOutside;
