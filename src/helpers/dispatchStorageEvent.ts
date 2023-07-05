type Props = {
	eventName: string;
};

const dispatchStorageEvent = ({ eventName }: Props) => {
	dispatchEvent(new Event(eventName));
};

export default dispatchStorageEvent;
