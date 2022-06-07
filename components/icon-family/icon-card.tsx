import { IconProps } from '../../types';

function IconCard({ ...props }: IconProps) {
	function svgPathToReturn(size: string | number | undefined) {
		if (typeof size === 'string') Number(size);

		switch (size) {
			default:
				return (
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M2.4 3H21.6C22.92 3 24 4.05687 24 5.375V19.625C24 20.9367 22.9255 22 21.6 22H2.4C1.07452 22 0 20.9367 0 19.625V5.375C0 4.05687 1.068 3 2.4 3ZM21.6 7.75H2.4V5.375H21.6V7.75ZM21.6 19.625H2.4V12.5H21.6V19.625Z"
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

export { IconCard };
