import React from 'react';

import { IconProps } from '../../types';

function IconDelivery({ ...props }: IconProps) {
	return (
		<svg
			width={props.size || '24'}
			height={props.size || '24'}
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M13.692 4H8.4V6.46154H12.708L15.108 8.92308H5.4C2.4 8.92308 0 11.3846 0 14.4615C0 17.5385 2.4 20 5.4 20C8.064 20 10.272 18.0062 10.704 15.4092L13.248 13.8462C13.2 14.0554 13.2 14.2523 13.2 14.4615C13.2 17.5385 15.6 20 18.6 20C21.6 20 24 17.5385 24 14.4615C24 11.3846 21.6 8.92308 18.6 8.92308H18.504L13.692 4ZM8.208 15.3969C7.8 16.64 6.696 17.5385 5.364 17.5385C3.708 17.5385 2.364 16.16 2.364 14.4615C2.364 12.7631 3.708 11.3846 5.364 11.3846C6.708 11.3846 7.8 12.2954 8.208 13.5385H4.8V15.3846L8.208 15.3969ZM15.564 14.4615C15.564 16.16 16.908 17.5385 18.564 17.5385C20.2209 17.5385 21.564 16.1609 21.564 14.4615C21.564 12.7622 20.2209 11.3846 18.564 11.3846C16.908 11.3846 15.564 12.7631 15.564 14.4615Z"
				fill={props.color || 'gray'}
			/>
		</svg>
	);
}

export { IconDelivery };
