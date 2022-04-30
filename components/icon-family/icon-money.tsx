import { IconProps } from '../../types';

function IconMoney({ ...props }: IconProps) {
	return (
		<svg
			width={props.size || '16'}
			height={props.size || '16'}
			viewBox="0 0 16 16"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M14.4 2H1.6C0.712 2 0 2.6675 0 3.5V12.5C0 13.3284 0.716344 14 1.6 14H14.4C15.2837 14 16 13.3284 16 12.5V3.5C16 2.6675 15.28 2 14.4 2ZM14.4 12.5H1.6V3.5H14.4V12.5ZM8.8 11.75H7.2V11H5.6V9.5H8.8V8.75H6.4C5.95817 8.75 5.6 8.41421 5.6 8V5.75C5.6 5.33579 5.95817 5 6.4 5H7.2V4.25H8.8V5H10.4V6.5H7.2V7.25H9.6C10.0418 7.25 10.4 7.58579 10.4 8V10.25C10.4 10.6642 10.0418 11 9.6 11H8.8V11.75Z"
				fill={props.color || 'gray'}
			/>
		</svg>
	);
}

export { IconMoney };
