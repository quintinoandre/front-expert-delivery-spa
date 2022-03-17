import React from 'react';

import {
	IconBookmark,
	IconDelivery,
	IconDocument,
	IconFeed,
	IconFire,
	IconHeart,
	IconHome,
	IconMail,
	IconMap,
	IconOptions,
	IconRestaurant,
	IconSettings,
	IconSilverware,
	IconWallet,
} from '../icon-family';
import { TypeProps } from './types';

function IconBase({ ...props }: TypeProps): JSX.Element {
	switch (props.iconName) {
		case 'bookmark':
			return <IconBookmark size={props.size} color={props.color} />;
		case 'delivery':
			return <IconDelivery size={props.size} color={props.color} />;
		case 'document':
			return <IconDocument size={props.size} color={props.color} />;
		case 'feed':
			return <IconFeed size={props.size} color={props.color} />;
		case 'fire':
			return <IconFire size={props.size} color={props.color} />;
		case 'heart':
			return <IconHeart size={props.size} color={props.color} />;
		case 'home':
			return <IconHome size={props.size} color={props.color} />;
		case 'mail':
			return <IconMail size={props.size} color={props.color} />;
		case 'map':
			return <IconMap size={props.size} color={props.color} />;
		case 'options':
			return <IconOptions size={props.size} color={props.color} />;
		case 'restaurant':
			return <IconRestaurant size={props.size} color={props.color} />;
		case 'settings':
			return <IconSettings size={props.size} color={props.color} />;
		case 'silverware':
			return <IconSilverware size={props.size} color={props.color} />;
		case 'wallet':
			return <IconWallet size={props.size} color={props.color} />;
		default:
			return <IconFire size={props.size} color={props.color} />;
	}
}

export { IconBase };
