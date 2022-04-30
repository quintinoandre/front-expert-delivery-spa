import Image from 'next/image';
import Link from 'next/link';

import { DetailsItem } from '../details-item';
import Styles from './styles.module.css';
import { TypeProps } from './types';

function FoodItem({ ...props }: TypeProps) {
	return (
		<div className={Styles.item}>
			<Link href={`/product/${props.id}`}>
				<a>
					<div className={Styles.thumb}>
						<Image
							src={props.imageUrl}
							alt={props.name}
							layout="fill"
							loading="lazy"
						/>
					</div>
				</a>
			</Link>
			<div className={Styles.header}>
				<h3>
					<Link href={`/product/${props.id}`}>
						<a>{props.name}</a>
					</Link>
				</h3>
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
