import Image from 'next/image';
import Link from 'next/link';

import { IconBase as Icon } from '../icon';
import Styles from './styles.module.css';
import { TypeProps } from './types';

function HighlightsItem({ ...props }: TypeProps) {
	return (
		<div className={Styles.restaurant}>
			<Link href={`/restaurants/${props.id}`}>
				<a>
					<div className={Styles.brand}>
						<Image
							src={props.brandUrl}
							alt={props.name}
							width={64}
							height={64}
						/>
					</div>
				</a>
			</Link>
			<div className={Styles.information}>
				<h3>
					<Link href={`/restaurants/${props.id}`}>
						<a>{props.name}</a>
					</Link>
				</h3>
				<div className="my-3">
					<div>
						<Icon iconName="star" size={16} color="#FACD5D" />
						<span>{props.rate}</span>({props.comments})
					</div>
					<div>
						<Icon iconName="silverware" size={16} color="#A3A3A4" />
						{props.food}
					</div>
					<div>
						<Icon iconName="money" size={16} color="#A3A3A4" />
						{props.price}
					</div>
				</div>
				<div>
					<div>{props.bonus}</div>
					<div>
						<Icon iconName="location" size={16} color="#A3A3A4" />
						{props.distance}
					</div>
				</div>
			</div>
		</div>
	);
}

export { HighlightsItem };
