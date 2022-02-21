import Image from 'next/image';
import React from 'react';

import { DetailsItem } from '../details-item';
import Styles from './styles.module.css';

type FoodItemProps = {
	name: string;
	imageUrl: string;
	deliveryFee: string;
	rate: number;
	reviews: number;
	category: string;
	deliveryTime: string;
};

function FoodItem({ ...props }: FoodItemProps) {
	return (
		<div>
			<div>
				<div className={Styles.thumb}>
					<Image
						src={props.imageUrl}
						alt={props.name}
						width={336}
						height={176}
					/>
				</div>
				<div className={Styles.header}>
					<h3>{props.name}</h3>
					<span>{props.deliveryFee}</span>
				</div>
			</div>
			<DetailsItem
				rate={props.rate}
				reviews={props.reviews}
				category={props.category}
				deliveryTime={props.deliveryTime}
			/>
		</div>
	);
}

export { FoodItem };
