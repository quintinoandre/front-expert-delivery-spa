import { IconProps } from '../../types';

function IconMoney({ ...props }: IconProps) {
	function svgPathToReturn(size: string | number | undefined) {
		if (typeof size === 'string') Number(size);

		switch (size) {
			case 16:
				return (
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M14.4 2H1.6C0.712 2 0 2.6675 0 3.5V12.5C0 13.3284 0.716344 14 1.6 14H14.4C15.2837 14 16 13.3284 16 12.5V3.5C16 2.6675 15.28 2 14.4 2ZM14.4 12.5H1.6V3.5H14.4V12.5ZM8.8 11.75H7.2V11H5.6V9.5H8.8V8.75H6.4C5.95817 8.75 5.6 8.41421 5.6 8V5.75C5.6 5.33579 5.95817 5 6.4 5H7.2V4.25H8.8V5H10.4V6.5H7.2V7.25H9.6C10.0418 7.25 10.4 7.58579 10.4 8V10.25C10.4 10.6642 10.0418 11 9.6 11H8.8V11.75Z"
						fill={props.color || 'gray'}
					/>
				);
			default:
				return (
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M21.6 3H2.4C1.068 3 0 4.05687 0 5.375V19.625C0 20.9367 1.07452 22 2.4 22H21.6C22.9255 22 24 20.9367 24 19.625V5.375C24 4.05687 22.92 3 21.6 3ZM21.6 19.625H2.4V5.375H21.6V19.625ZM13.2 18.4375H10.8V17.25H8.4V14.875H13.2V13.6875H9.6C8.93726 13.6875 8.4 13.1558 8.4 12.5V8.9375C8.4 8.28166 8.93726 7.75 9.6 7.75H10.8V6.5625H13.2V7.75H15.6V10.125H10.8V11.3125H14.4C15.0627 11.3125 15.6 11.8442 15.6 12.5V16.0625C15.6 16.7183 15.0627 17.25 14.4 17.25H13.2V18.4375Z"
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

export { IconMoney };
