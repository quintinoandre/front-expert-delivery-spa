import React from 'react';

import { IconProps } from '../../types';

function IconStar({ ...props }: IconProps) {
	return (
		<svg
			width={props.size || '16'}
			height={props.size || '16'}
			viewBox="0 0 16 16"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M8 12.8589L12.944 16L11.632 10.08L16 6.09684L10.248 5.57474L8 0L5.752 5.57474L0 6.09684L4.36 10.08L3.056 16L8 12.8589Z"
				fill={props.color || 'gray'}
			/>
		</svg>
	);
}

export { IconStar };
