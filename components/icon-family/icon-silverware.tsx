import { IconProps } from '../../types';

function IconSilverware({ ...props }: IconProps) {
	function svgPathToReturn(size: string | number | undefined) {
		if (typeof size === 'string') Number(size);

		switch (size) {
			case 16:
				return (
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M6 5.6H7.66667V0H9.33333V5.6C9.33333 7.296 7.95 8.672 6.20833 8.776V16H4.125V8.776C2.38333 8.672 1 7.296 1 5.6V0H2.66667V5.6H4.33333V0H6V5.6ZM11.8333 9.6V3.2C11.8333 1.792 13.7 0 16 0V16H13.9167V9.6H11.8333Z"
						fill={props.color || 'gray'}
					/>
				);
			default:
				return (
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M8.33333 8.4H10.7778V0H13.2222V8.4C13.2222 10.944 11.1933 13.008 8.63889 13.164V24H5.58333V13.164C3.02889 13.008 1 10.944 1 8.4V0H3.44444V8.4H5.88889V0H8.33333V8.4ZM16.8889 14.4V4.8C16.8889 2.688 19.6267 0 23 0V24H19.9444V14.4H16.8889Z"
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

export { IconSilverware };
