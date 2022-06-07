import { IconProps } from '../../types';

function IconOptions({ ...props }: IconProps) {
	function svgPathToReturn(size: string | number | undefined) {
		if (typeof size === 'string') Number(size);

		switch (size) {
			case 16:
				return (
					<>
						<path
							d="M4.175 10L8 13.7116L11.825 10L13 11.1482L8 16L3 11.1482L4.175 10Z"
							fill={props.color || 'gray'}
						/>
						<path
							d="M11.825 6L8 2.28841L4.175 6L3 4.85175L8 0L13 4.85175L11.825 6Z"
							fill={props.color || 'gray'}
						/>
					</>
				);
			default:
				return (
					<>
						<path
							d="M6.645 15L12 20.5674L17.355 15L19 16.7224L12 24L5 16.7224L6.645 15Z"
							fill={props.color || 'gray'}
						/>
						<path
							d="M17.355 9L12 3.43261L6.645 9L5 7.27763L12 0L19 7.27763L17.355 9Z"
							fill={props.color || 'gray'}
						/>
					</>
				);
		}
	}

	return (
		<svg
			width={props.size || '24'}
			height={props.size || '24'}
			viewBox={props.size ? `0 0 ${props.size} ${props.size}` : '0 0 24 24'}
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			{svgPathToReturn(props.size)}
		</svg>
	);
}

export { IconOptions };
