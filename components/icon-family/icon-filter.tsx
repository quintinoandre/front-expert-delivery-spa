import { IconProps } from '../../types';

function IconFilter({ ...props }: IconProps) {
	return (
		<svg
			width={props.size || '20'}
			height={props.size || '20'}
			viewBox="0 0 20 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M0 3V5.33333H20V3H0ZM3.33333 11.1667H16.6667V8.83333H3.33333V11.1667ZM12.2222 17H7.77778V14.6667H12.2222V17Z"
				fill={props.color || 'gray'}
			/>
		</svg>
	);
}

export { IconFilter };
