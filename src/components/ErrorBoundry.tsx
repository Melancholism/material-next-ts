import React, { ErrorInfo, ReactNode } from "react";

type MyProps = { children?: ReactNode };
type MyState = { hasError: boolean };

class ErrorBoundary extends React.Component<MyProps, MyState> {
	public state: MyState = {
		hasError: false,
	};
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	public static getDerivedStateFromError(_: Error): MyState {
		// Update state so the next render will show the fallback UI

		return { hasError: true };
	}
	public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
		// You can use your own error logging service here
		console.log("Error Boundry:", { error, errorInfo });
	}
	public render() {
		// Check if the error is thrown
		if (this.state.hasError) {
			// You can render any custom fallback UI
			return (
				<div>
					<h2>Oops, there is an error!</h2>
					<button
						type="button"
						onClick={() => this.setState({ hasError: false })}
					>
						Try again?
					</button>
				</div>
			);
		}

		// Return children components in case of no error

		return this.props.children;
	}
}

export default ErrorBoundary;
