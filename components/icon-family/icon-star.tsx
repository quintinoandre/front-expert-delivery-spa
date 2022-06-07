import { IconProps } from '../../types';

function IconStar({ ...props }: IconProps) {
	function svgPathToReturn(size: string | number | undefined) {
		if (typeof size === 'string') Number(size);

		switch (size) {
			case 16:
				return (
					<path
						d="M8 12.8589L12.944 16L11.632 10.08L16 6.09684L10.248 5.57474L8 0L5.752 5.57474L0 6.09684L4.36 10.08L3.056 16L8 12.8589Z"
						fill={props.color || 'gray'}
					/>
				);
			default:
				return (
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M12 19.4847L19.416 24L17.448 15.49L24 9.76421L15.372 9.01368L12 1L8.628 9.01368L0 9.76421L6.54 15.49L4.584 24L12 19.4847Z"
						fill={props.color || 'gray'}
					/>
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

export { IconStar };
