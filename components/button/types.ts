type TypeProps = {
	children: React.ReactNode;
	className?: string;
	variant?: 'primary' | 'secondary';
	isLoading?: boolean;
	loadingMessage?: string;
	isDisabled?: boolean;
	onClick?: () => void;
};

export type { TypeProps };
