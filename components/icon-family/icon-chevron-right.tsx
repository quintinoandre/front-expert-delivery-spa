import { IconProps } from '../../types';

function IconChevronRight({ ...props }: IconProps) {
	return (
		<svg
			width={props.size || '12'}
			height={props.size || '12'}
			viewBox="0 0 12 12"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M2 10.59L6.63949 6L2 1.41L3.43531 0L9.5 6L3.43531 12L2 10.59Z"
				fill={props.color || 'gray'}
			/>
		</svg>
	);
}

export { IconChevronRight };
