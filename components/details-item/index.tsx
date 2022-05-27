import { IconBase as Icon } from '../icon';
import { IconDelivery } from '../icon-family';
import Styles from './styles.module.css';
import { TypeProps } from './types';

function RateComponent(rate: number, reviews: number) {
	return (
		<div className={Styles.information}>
			<Icon iconName="star" size={16} color="#FACD5D" />
			<span className="font-bold">{rate}</span>({reviews})
		</div>
	);
}

function CategoryComponent(category: string) {
	return (
		<div className={Styles.information}>
			<Icon iconName="silverware" size={16} color="#A3A3A4" />
			{category}
		</div>
	);
}

function PriceComponent(price: number) {
	return (
		<div className={Styles.information}>
			<Icon iconName="money" size={16} color="#A3A3A4" />
			{price}
		</div>
	);
}

function BonusComponent(bonus: string) {
	return <div className={Styles.information}>{bonus}</div>;
}

function DistanceComponent(distance: string) {
	return (
		<div className={Styles.information}>
			<Icon iconName="location" size={16} color="#A3A3A4" />
			{distance}
		</div>
	);
}

function DeliveryTime(deliveryTime: string) {
	return (
		<div className={Styles.information}>
			<IconDelivery size={16} color="#A3A3A4" />
			{deliveryTime}
		</div>
	);
}

function DetailsItem({ ...props }: TypeProps) {
	return (
		<div className="mt-3 flex">
			{props.rate && props.reviews && RateComponent(props.rate, props.reviews)}
			{props.category && CategoryComponent(props.category)}
			{props.price && PriceComponent(props.price)}
			{props.bonus && BonusComponent(props.bonus)}
			{props.distance && DistanceComponent(props.distance)}
			{props.deliveryTime && DeliveryTime(props.deliveryTime)}
		</div>
	);
}

export { DetailsItem };
