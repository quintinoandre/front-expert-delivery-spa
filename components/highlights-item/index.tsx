import Image from 'next/image';
import React from 'react';

import {
	IconStar,
	IconMoney,
	IconSilverware,
	IconLocation,
} from '../icon-family';
import Styles from './styles.module.css';

type HighlightsItemProps = {
	name: string;
	rate: number;
	comments: number;
	food: string;
	distance: number;
	price: number;
	bonus: string;
	brandUrl: string;
};

function HighlightsItem({ ...props }: HighlightsItemProps) {
	return (
		<div className={Styles.restaurant}>
			<div className={Styles.brand}>
				<Image src={props.brandUrl} alt={props.name} width={64} height={64} />
			</div>
			<div className={Styles.information}>
				<h3>{props.name}</h3>
				<div className="my-3">
					<div>
						<IconStar size={16} color="#FACD5D" />
						<span>{props.rate}</span>({props.comments})
					</div>
					<div>
						<IconSilverware size={16} color="#A3A3A4" />
						{props.food}
					</div>
					<div>
						<IconMoney size={16} color="#A3A3A4" />
						{props.price}
					</div>
				</div>
				<div>
					<div>{props.bonus}</div>
					<div>
						<IconLocation size={16} color="#A3A3A4" />
						{props.distance}
					</div>
				</div>
			</div>
		</div>
	);
}

export { HighlightsItem };
