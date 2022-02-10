import React from 'react';

import {
	IconDelivery,
	IconFire,
	IconMap,
	IconRestaurant,
	IconSilverware,
	IconWallet,
} from '../icon-family';

type IconBaseProps = {
	size?: string | number;
	color?: string;
	iconName: string;
};

function IconBase({ ...props }: IconBaseProps): JSX.Element {
	switch (props.iconName) {
		case 'delivery':
			return <IconDelivery size={props.size} color={props.color} />;
		case 'fire':
			return <IconFire size={props.size} color={props.color} />;
		case 'map':
			return <IconMap size={props.size} color={props.color} />;
		case 'restaurant':
			return <IconRestaurant size={props.size} color={props.color} />;
		case 'silverware':
			return <IconSilverware size={props.size} color={props.color} />;
		case 'wallet':
			return <IconWallet size={props.size} color={props.color} />;
		default:
			return <IconFire size={props.size} color={props.color} />;
	}
}

export { IconBase };
