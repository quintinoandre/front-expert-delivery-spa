import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { DetailsItem } from '../details-item';
import Styles from './styles.module.css';
import { TypeProps } from './types';

function FoodItem({ ...props }: TypeProps) {
	return (
		<div>
			<Link href={`/product/${props.id}`}>
				<a>
					<div className={Styles.thumb}>
						<Image
							src={props.imageUrl}
							alt={props.name}
							width={336}
							height={176}
							loading="lazy"
						/>
					</div>
				</a>
			</Link>
			<div className={Styles.header}>
				<Link href={`/product/${props.id}`}>
					<a>
						<h3>{props.name}</h3>
					</a>
				</Link>
				<span>{props.deliveryFee}</span>
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
