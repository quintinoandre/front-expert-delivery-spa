import { IconProps } from '../../types';

function IconHeart({ ...props }: IconProps) {
	function svgPathToReturn(size: string | number | undefined) {
		if (typeof size === 'string') Number(size);

		switch (size) {
			default:
				return (
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M10 3.15368C11.09 1.83869 12.76 1 14.5 1C17.58 1 20 3.49537 20 6.69482C20 10.5984 16.6 13.7978 11.45 18.6332L10 20L8.55 18.6332C3.4 13.7978 0 10.5984 0 6.69482C0 3.49537 2.42 1 5.5 1C7.24 1 8.91 1.83869 10 3.15368ZM10 17.2044L10.1 17.1008C14.86 12.6381 18 9.68719 18 6.69482C18 4.62398 16.5 3.07084 14.5 3.07084C12.96 3.07084 11.46 4.10627 10.93 5.51444H9.07C8.54 4.10627 7.04 3.07084 5.5 3.07084C3.5 3.07084 2 4.62398 2 6.69482C2 9.68719 5.14 12.6381 9.89 17.1008L10 17.2044Z"
						fill={props.color || 'gray'}
					/>
				);
		}
	}

	return (
		<svg
			width={props.size || '20'}
			height={props.size || '20'}
			viewBox={props.size ? `0 0 ${props.size} ${props.size}` : '0 0 20 20'}
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			{svgPathToReturn(props.size)}
		</svg>
	);
}

export { IconHeart };
