import { IconProps } from '../../types';

function IconLocation({ ...props }: IconProps) {
	function svgPathToReturn(size: string | number | undefined) {
		if (typeof size === 'string') Number(size);

		switch (size) {
			case 16:
				return (
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M7.2 0.843943C3.86271 1.21286 1.21286 3.86271 0.843943 7.2H0V8.8H0.843943C1.21286 12.1373 3.86271 14.7871 7.2 15.1561V16H8.8V15.1561C12.1373 14.7871 14.7871 12.1373 15.1561 8.8H16V7.2H15.1561C14.7871 3.86271 12.1373 1.21286 8.8 0.843943V0H7.2V0.843943ZM3.2 7.2H2.45671C2.80752 4.74745 4.74745 2.80752 7.2 2.45671V3.2H8.8V2.45671C11.2526 2.80752 13.1925 4.74745 13.5433 7.2H12.8V8.8H13.5433C13.1925 11.2526 11.2526 13.1925 8.8 13.5433V12.8H7.2V13.5433C4.74745 13.1925 2.80752 11.2526 2.45671 8.8H3.2V7.2ZM8 9.6C8.88366 9.6 9.6 8.88366 9.6 8C9.6 7.11634 8.88366 6.4 8 6.4C7.11634 6.4 6.4 7.11634 6.4 8C6.4 8.88366 7.11634 9.6 8 9.6ZM4.8 8C4.8 9.76731 6.23269 11.2 8 11.2C9.76731 11.2 11.2 9.76731 11.2 8C11.2 6.23269 9.76731 4.8 8 4.8C6.23269 4.8 4.8 6.23269 4.8 8Z"
						fill={props.color || 'gray'}
					/>
				);
			default:
				return (
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M10.8 1.26591C5.79406 1.81929 1.81929 5.79406 1.26591 10.8H0V13.2H1.26591C1.81929 18.2059 5.79406 22.1807 10.8 22.7341V24H13.2V22.7341C18.2059 22.1807 22.1807 18.2059 22.7341 13.2H24V10.8H22.7341C22.1807 5.79406 18.2059 1.81929 13.2 1.26591V0H10.8V1.26591ZM4.8 10.8H3.68507C4.21128 7.12117 7.12117 4.21128 10.8 3.68507V4.8H13.2V3.68507C16.8788 4.21128 19.7887 7.12117 20.3149 10.8H19.2V13.2H20.3149C19.7887 16.8788 16.8788 19.7887 13.2 20.3149V19.2H10.8V20.3149C7.12117 19.7887 4.21128 16.8788 3.68507 13.2H4.8V10.8ZM12 14.4C13.3255 14.4 14.4 13.3255 14.4 12C14.4 10.6745 13.3255 9.6 12 9.6C10.6745 9.6 9.6 10.6745 9.6 12C9.6 13.3255 10.6745 14.4 12 14.4ZM7.2 12C7.2 14.651 9.34903 16.8 12 16.8C14.651 16.8 16.8 14.651 16.8 12C16.8 9.34903 14.651 7.2 12 7.2C9.34903 7.2 7.2 9.34903 7.2 12Z"
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

export { IconLocation };
