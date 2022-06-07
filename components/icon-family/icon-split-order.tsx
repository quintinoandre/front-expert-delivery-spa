import { IconProps } from '../../types';

function IconSplitOrder({ ...props }: IconProps) {
	function svgPathToReturn(size: string | number | undefined) {
		if (typeof size === 'string') Number(size);

		switch (size) {
			default:
				return (
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M15.2727 3C12.8628 3 10.9091 5.01472 10.9091 7.5C10.9091 9.98528 12.8628 12 15.2727 12C17.6827 12 19.6364 9.98528 19.6364 7.5C19.6364 5.01472 17.6827 3 15.2727 3ZM15.2727 5.1375C16.5382 5.1375 17.5636 6.195 17.5636 7.5C17.5636 8.805 16.5382 9.8625 15.2727 9.8625C14.0075 9.8625 12.9818 8.80477 12.9818 7.5C12.9818 6.19523 14.0075 5.1375 15.2727 5.1375ZM3.27273 9.75V6.375H5.45455V9.75H8.72727V12H5.45455V15.375H3.27273V12H0V9.75H3.27273ZM15.2727 13.125C12.36 13.125 6.54545 14.6213 6.54545 17.625V21H24V17.625C24 14.6213 18.1855 13.125 15.2727 13.125ZM21.9273 17.625C21.9273 16.905 18.5127 15.2625 15.2727 15.2625C12 15.2625 8.61818 16.905 8.61818 17.625V18.8625H21.9273V17.625Z"
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

export { IconSplitOrder };
