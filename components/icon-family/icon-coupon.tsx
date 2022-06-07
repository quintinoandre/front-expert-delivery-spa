import { IconProps } from '../../types';

function IconCoupon({ ...props }: IconProps) {
	function svgPathToReturn(size: string | number | undefined) {
		if (typeof size === 'string') Number(size);

		switch (size) {
			default:
				return (
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M0 5.375C0 4.06332 1.07452 3 2.4 3H21.6C22.92 3 24 4.05687 24 5.375V10.125C22.68 10.125 21.6 11.1819 21.6 12.5C21.6 13.8117 22.6745 14.875 24 14.875V19.625C24 20.9367 22.9255 22 21.6 22H2.4C1.07452 22 0 20.9367 0 19.625V14.875C1.32548 14.875 2.4 13.8117 2.4 12.5C2.4 11.1938 1.332 10.125 0 10.125V5.375ZM18 8.34375L16.2 6.5625L6 16.6562L7.8 18.4375L18 8.34375ZM8.172 6.61C9.348 6.61 10.296 7.54812 10.296 8.71187C10.296 9.87271 9.34505 10.8138 8.172 10.8138C6.996 10.8137 6.048 9.87563 6.048 8.71187C6.048 7.55104 6.99895 6.61 8.172 6.61ZM17.952 16.2881C17.952 15.1244 17.004 14.1862 15.828 14.1862C14.6549 14.1862 13.704 15.1273 13.704 16.2881C13.704 17.4519 14.652 18.39 15.828 18.39C17.0011 18.39 17.952 17.449 17.952 16.2881Z"
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

export { IconCoupon };
