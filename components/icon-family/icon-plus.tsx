import { IconProps } from '../../types';

function IconPlus({ ...props }: IconProps) {
	function svgPathToReturn(size: string | number | undefined) {
		if (typeof size === 'string') Number(size);

		switch (size) {
			case 32:
				return (
					<path
						d="M32 18.2857H18.2857V32H13.7143V18.2857H0V13.7143H13.7143V0H18.2857V13.7143H32V18.2857Z"
						fill={props.color || 'gray'}
					/>
				);
			default:
				return (
					<path
						d="M20 11.4286H11.4286V20H8.57143V11.4286H0V8.57143H8.57143V0H11.4286V8.57143H20V11.4286Z"
						fill={props.color || 'gray'}
					/>
				);
		}
	}

	return (
		<svg
			width={props.size || '20'}
			height={props.size || '20'}
			viewBox={props.size ? `0 0 ${props.size} ${props.size}` : '0 0 20 20'}
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			{svgPathToReturn(props.size)}
		</svg>
	);
}

export { IconPlus };
