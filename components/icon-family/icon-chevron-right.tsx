import { IconProps } from '../../types';

function IconChevronRight({ ...props }: IconProps) {
	function svgPathToReturn(size: string | number | undefined) {
		if (typeof size === 'string') Number(size);

		switch (size) {
			case 12:
				return (
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M2 10.59L6.63949 6L2 1.41L3.43531 0L9.5 6L3.43531 12L2 10.59Z"
						fill={props.color || 'gray'}
					/>
				);
			default:
				return (
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M4 14.12L10.186 8L4 1.88L5.91375 0L14 8L5.91375 16L4 14.12Z"
						fill={props.color || 'gray'}
					/>
				);
		}
	}

	return (
		<svg
			width={props.size || '16'}
			height={props.size || '16'}
			viewBox={props.size ? `0 0 ${props.size} ${props.size}` : '0 0 16 16'}
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			{svgPathToReturn(props.size)}
		</svg>
	);
}

export { IconChevronRight };
