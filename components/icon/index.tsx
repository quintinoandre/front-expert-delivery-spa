import {
	IconBookmark,
	IconCard,
	IconChevronRight,
	IconClose,
	IconCoupon,
	IconDelivery,
	IconDocument,
	IconFeed,
	IconFilter,
	IconFire,
	IconHeart,
	IconHome,
	IconLocation,
	IconMail,
	IconMap,
	IconMoney,
	IconOptions,
	IconPhone,
	IconPlus,
	IconProfile,
	IconRestaurant,
	IconSearch,
	IconSettings,
	IconShoppingBag,
	IconShoppingCart,
	IconSilverware,
	IconSplitOrder,
	IconStar,
	IconSupport,
	IconWallet,
} from '../icon-family';
import { TypeProps } from './types';

function IconBase({ ...props }: TypeProps): JSX.Element {
	switch (props.iconName) {
		case 'bookmark':
			return <IconBookmark size={props.size} color={props.color} />;
		case 'card':
			return <IconCard size={props.size} color={props.color} />;
		case 'chevron-right':
			return <IconChevronRight size={props.size} color={props.color} />;
		case 'close':
			return <IconClose size={props.size} color={props.color} />;
		case 'coupon':
			return <IconCoupon size={props.size} color={props.color} />;
		case 'delivery':
			return <IconDelivery size={props.size} color={props.color} />;
		case 'document':
			return <IconDocument size={props.size} color={props.color} />;
		case 'feed':
			return <IconFeed size={props.size} color={props.color} />;
		case 'filter':
			return <IconFilter size={props.size} color={props.color} />;
		case 'fire':
			return <IconFire size={props.size} color={props.color} />;
		case 'heart':
			return <IconHeart size={props.size} color={props.color} />;
		case 'home':
			return <IconHome size={props.size} color={props.color} />;
		case 'location':
			return <IconLocation size={props.size} color={props.color} />;
		case 'mail':
			return <IconMail size={props.size} color={props.color} />;
		case 'map':
			return <IconMap size={props.size} color={props.color} />;
		case 'money':
			return <IconMoney size={props.size} color={props.color} />;
		case 'options':
			return <IconOptions size={props.size} color={props.color} />;
		case 'phone':
			return <IconPhone size={props.size} color={props.color} />;
		case 'plus':
			return <IconPlus size={props.size} color={props.color} />;
		case 'profile':
			return <IconProfile size={props.size} color={props.color} />;
		case 'restaurant':
			return <IconRestaurant size={props.size} color={props.color} />;
		case 'search':
			return <IconSearch size={props.size} color={props.color} />;
		case 'settings':
			return <IconSettings size={props.size} color={props.color} />;
		case 'shopping-bag':
			return <IconShoppingBag size={props.size} color={props.color} />;
		case 'shopping-cart':
			return <IconShoppingCart size={props.size} color={props.color} />;
		case 'silverware':
			return <IconSilverware size={props.size} color={props.color} />;
		case 'split-order':
			return <IconSplitOrder size={props.size} color={props.color} />;
		case 'star':
			return <IconStar size={props.size} color={props.color} />;
		case 'support':
			return <IconSupport size={props.size} color={props.color} />;
		case 'wallet':
			return <IconWallet size={props.size} color={props.color} />;
		default:
			return <IconFire size={props.size} color={props.color} />;
	}
}

export { IconBase };
