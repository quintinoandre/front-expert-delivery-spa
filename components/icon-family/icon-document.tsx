import { IconProps } from '../../types';

function IconDocument({ ...props }: IconProps) {
	function svgPathToReturn(size: string | number | undefined) {
		if (typeof size === 'string') Number(size);

		switch (size) {
			case 20:
				return (
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M2.22222 0C0.988889 0 0 0.988889 0 2.22222V17.7778C0 19.0111 0.988889 20 2.22222 20H17.7778C19.0111 20 20 19.0111 20 17.7778V2.22222C20 0.988889 19.0111 0 17.7778 0H2.22222ZM2.22222 2.22222H17.7778V17.7778H2.22222V2.22222ZM4.44444 6.66667V4.44444H15.5556V6.66667H4.44444ZM4.44444 8.88889V11.1111H15.5556V8.88889H4.44444ZM4.44444 15.5556V13.3333H12.2222V15.5556H4.44444Z"
						fill={props.color || 'gray'}
					/>
				);
			default:
				return (
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M2.66667 0C1.18667 0 0 1.18667 0 2.66667V21.3333C0 22.8133 1.18667 24 2.66667 24H21.3333C22.8133 24 24 22.8133 24 21.3333V2.66667C24 1.18667 22.8133 0 21.3333 0H2.66667ZM2.66667 2.66667H21.3333V21.3333H2.66667V2.66667ZM5.33333 8V5.33333H18.6667V8H5.33333ZM5.33333 10.6667V13.3333H18.6667V10.6667H5.33333ZM5.33333 18.6667V16H14.6667V18.6667H5.33333Z"
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

export { IconDocument };
