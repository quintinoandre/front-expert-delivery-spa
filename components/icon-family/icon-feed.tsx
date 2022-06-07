import { IconProps } from '../../types';

function IconFeed({ ...props }: IconProps) {
	function svgPathToReturn(size: string | number | undefined) {
		if (typeof size === 'string') Number(size);

		switch (size) {
			default:
				return (
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M0 0H10.6667V13.3333H0V0ZM24 0H13.3333V8H24V0ZM8 10.6667V2.66667H2.66667V10.6667H8ZM21.3333 5.33333V2.66667H16V5.33333H21.3333ZM21.3333 13.3333V21.3333H16V13.3333H21.3333ZM8 21.3333V18.6667H2.66667V21.3333H8ZM24 10.6667H13.3333V24H24V10.6667ZM0 16H10.6667V24H0V16Z"
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

export { IconFeed };
