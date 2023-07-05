import React from 'react';

type Props = { ref: React.MutableRefObject<any> };

const useEllipsis = ({ ref }: Props) => {
	const [isEllipsed, setIsEllipsed] = React.useState<boolean>(false);

	React.useEffect(() => {
		function handleResize() {
			if (ref) {
				const { scrollWidth, offsetWidth } = ref.current;
				setIsEllipsed(scrollWidth !== offsetWidth);
			}
		}

		handleResize();

		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, [ref]);

	return { isEllipsed };
};

export default useEllipsis;
