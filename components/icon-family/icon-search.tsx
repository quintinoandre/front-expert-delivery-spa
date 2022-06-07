import { IconProps } from '../../types';

function IconSearch({ ...props }: IconProps) {
	function svgPathToReturn(size: string | number | undefined) {
		if (typeof size === 'string') Number(size);

		switch (size) {
			default:
				return (
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M14.8571 7.42857C14.8571 3.32588 11.5313 0 7.42857 0C3.32588 0 0 3.32588 0 7.42857C0 11.5313 3.32588 14.8571 7.42857 14.8571C9.26857 14.8571 10.96 14.1829 12.2629 13.0743L12.5714 13.3829V14.2857L18.2857 20L20 18.2857L14.2857 12.5714H13.3829L13.0743 12.2629C14.1829 10.96 14.8571 9.26857 14.8571 7.42857ZM2.28571 7.42857C2.28571 4.57143 4.57143 2.28571 7.42857 2.28571C10.2857 2.28571 12.5714 4.57143 12.5714 7.42857C12.5714 10.2857 10.2857 12.5714 7.42857 12.5714C4.57143 12.5714 2.28571 10.2857 2.28571 7.42857Z"
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

export { IconSearch };
