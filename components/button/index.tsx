import Styles from './styles.module.css';
import { TypeProps } from './types';

function IconLoader() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className="animate-spin h-5 w-5 mr-2"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
			strokeWidth="2"
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
			/>
		</svg>
	);
}

function Button({ ...props }: TypeProps) {
	const stylesPrimary =
		props.variant === 'secondary' ? Styles.secondary : Styles.primary;

	return (
		<button
			className={`${props.className} ${stylesPrimary}`}
			onClick={props.onClick}
		>
			{props.isLoading ? (
				<div className="flex items-center justify-center">
					<IconLoader />
					<div className="">{props.loadingMessage}</div>
				</div>
			) : (
				props.children
			)}
		</button>
	);
}

export { Button };
