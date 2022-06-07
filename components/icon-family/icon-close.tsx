import { IconProps } from '../../types';

function IconClose({ ...props }: IconProps) {
	function svgPathToReturn(size: string | number | undefined) {
		if (typeof size === 'string') Number(size);

		switch (size) {
			default:
				return (
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M6.22222 8L0 1.77778L1.77778 0L8 6.22222L14.2222 0L16 1.77778L9.77778 8L16 14.2222L14.2222 16L8 9.77778L1.77778 16L0 14.2222L6.22222 8Z"
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

export { IconClose };
