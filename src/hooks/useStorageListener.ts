import React from "react";

type Props = {
	eventName: string;
	eventFunction: () => void;
};

const useStorageListener = ({ eventName, eventFunction }: Props) => {
	React.useEffect(() => {
		const eventFn = () => {
			eventFunction();
		};

		addEventListener(eventName, eventFn);

		return () => {
			removeEventListener(eventName, eventFn);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
};

export default useStorageListener;
