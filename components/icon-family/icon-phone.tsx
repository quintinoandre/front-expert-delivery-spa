import { IconProps } from '../../types';

function IconPhone({ ...props }: IconProps) {
	function svgPathToReturn(size: string | number | undefined) {
		if (typeof size === 'string') Number(size);

		switch (size) {
			default:
				return (
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M4.02222 8.65556C5.62222 11.8 8.2 14.3778 11.3444 15.9778L13.7889 13.5333C14.1 13.2222 14.5333 13.1333 14.9222 13.2556C16.1667 13.6667 17.5 13.8889 18.8889 13.8889C19.5025 13.8889 20 14.3864 20 15V18.8889C20 19.5025 19.5025 20 18.8889 20C8.45684 20 0 11.5432 0 1.11111C0 0.816426 0.117063 0.533811 0.325437 0.325437C0.533811 0.117063 0.816426 0 1.11111 0H5C5.61365 0 6.11111 0.497461 6.11111 1.11111C6.11111 2.5 6.33333 3.83333 6.74444 5.07778C6.86667 5.46667 6.77778 5.9 6.46667 6.21111L4.02222 8.65556Z"
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

export { IconPhone };
