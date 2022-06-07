import { IconProps } from '../../types';

function IconSupport({ ...props }: IconProps) {
	function svgPathToReturn(size: string | number | undefined) {
		if (typeof size === 'string') Number(size);

		switch (size) {
			default:
				return (
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M0 12C0 5.376 5.376 0 12 0C18.624 0 24 5.376 24 12C24 18.624 18.624 24 12 24C5.376 24 0 18.624 0 12ZM13.2 16.8V19.2H10.8V16.8H13.2ZM12 21.6C6.708 21.6 2.4 17.292 2.4 12C2.4 6.708 6.708 2.4 12 2.4C17.292 2.4 21.6 6.708 21.6 12C21.6 17.292 17.292 21.6 12 21.6ZM7.2 9.6C7.2 6.948 9.348 4.8 12 4.8C14.652 4.8 16.8 6.948 16.8 9.6C16.8 11.1395 15.852 11.968 14.9289 12.7746C14.0532 13.5399 13.2 14.2856 13.2 15.6H10.8C10.8 13.4145 11.9305 12.5479 12.9245 11.786C13.7043 11.1883 14.4 10.6551 14.4 9.6C14.4 8.28 13.32 7.2 12 7.2C10.68 7.2 9.6 8.28 9.6 9.6H7.2Z"
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

export { IconSupport };
