import { IconProps } from '../../types';

function IconShoppingBag({ ...props }: IconProps) {
	function svgPathToReturn(size: string | number | undefined) {
		if (typeof size === 'string') Number(size);

		switch (size) {
			default:
				return (
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M17.5556 5.71429H19.7778C21 5.71429 22 6.73143 22 8V21.7143C22 22.9767 21.0051 24 19.7778 24H4.22222C2.99492 24 2 22.9767 2 21.7143V8C2 6.73143 2.98889 5.71429 4.22222 5.71429H6.44444C6.44444 2.55837 8.93175 0 12 0C13.4734 0 14.8865 0.602039 15.9284 1.67368C16.9702 2.74531 17.5556 4.19876 17.5556 5.71429ZM12 2.28571C13.8409 2.28571 15.3333 3.82074 15.3333 5.71429H8.66667C8.66667 3.82074 10.1591 2.28571 12 2.28571ZM12 13.7143C8.93175 13.7143 6.44444 11.1559 6.44444 8H8.66667C8.66667 9.89355 10.1591 11.4286 12 11.4286C13.8409 11.4286 15.3333 9.89355 15.3333 8H17.5556C17.5556 11.1559 15.0682 13.7143 12 13.7143Z"
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

export { IconShoppingBag };
