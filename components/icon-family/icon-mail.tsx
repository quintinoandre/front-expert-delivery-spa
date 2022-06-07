import { IconProps } from '../../types';

function IconMail({ ...props }: IconProps) {
	function svgPathToReturn(size: string | number | undefined) {
		if (typeof size === 'string') Number(size);

		switch (size) {
			case 20:
				return (
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M2 2H18C19.1046 2 20 2.89543 20 4V16C20 17.1046 19.1046 18 18 18H2C0.89 18 0 17.1 0 16V4C0 2.89 0.89 2 2 2ZM10 9L18 4H2L10 9ZM18 6.37V16H2V6.37L10 11.36L18 6.37Z"
						fill={props.color || 'gray'}
					/>
				);
			default:
				return (
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M2.4 3H21.6C22.9255 3 24 4.06332 24 5.375V19.625C24 20.9367 22.9255 22 21.6 22H2.4C1.068 22 0 20.9312 0 19.625V5.375C0 4.05687 1.068 3 2.4 3ZM12 11.3125L21.6 5.375H2.4L12 11.3125ZM21.6 8.18937V19.625H2.4V8.18937L12 14.115L21.6 8.18937Z"
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

export { IconMail };
