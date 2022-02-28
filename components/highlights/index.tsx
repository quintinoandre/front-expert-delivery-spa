import Link from 'next/link';
import React from 'react';

import { HighlightsItem } from '../highlights-item';
import { IconChevronRight } from '../icon-family';
import Styles from './styles.module.css';
import { TypeProps } from './types';

function Highlights({ ...props }: TypeProps) {
	const data = [
		{
			id: '1',
			name: 'Burger King',
			brandUrl: '/brands/burger-king.svg',
			rate: 4.8,
			food: 'Burger',
			comments: 1873,
			price: 1,
			bonus: 'Free delivery',
			distance: 4.3,
		},
		{
			id: '2',
			name: 'Carrows Restaurant',
			brandUrl: '/brands/carrows.svg',
			rate: 4.7,
			food: 'Fish',
			comments: 91,
			price: 1,
			bonus: 'Free delivery',
			distance: 0.3,
		},
		{
			id: '3',
			name: 'KFC',
			brandUrl: '/brands/kfc.svg',
			rate: 4.4,
			food: 'Chicken',
			comments: 2.583,
			price: 1,
			bonus: 'Buy 2 get 1 free',
			distance: 18.6,
		},
		{
			id: '4',
			name: `Domino's Pizza`,
			brandUrl: '/brands/dominos-pizza.svg',
			rate: 5.0,
			food: 'Pizza',
			comments: 736,
			price: 1,
			bonus: 'Buy 1 get 1 free',
			distance: 2.8,
		},
		{
			id: '5',
			name: `McDonald's`,
			brandUrl: '/brands/mcdonalds.svg',
			rate: 4.1,
			food: 'Burger',
			comments: 20.359,
			price: 1,
			bonus: '$0.99 Delivery',
			distance: 9.0,
		},
		{
			id: '6',
			name: `Pizza Hut`,
			brandUrl: '/brands/pizza-hut.svg',
			rate: 4.6,
			food: 'Pizza',
			comments: 24,
			price: 1,
			bonus: 'Free delivery',
			distance: 3.4,
		},
	];

	return (
		<div className="mb-12">
			<div className={Styles.header}>
				<h2>{props.title || 'HighLights'}</h2>
				<Link href="/highlights">
					<a>
						See all
						<IconChevronRight size={12} color="#5B4AA3" />
					</a>
				</Link>
			</div>
			<div className="flex gap-6 justify-between flex-wrap">
				{data.map((item) => (
					<HighlightsItem key={item.name} {...item} />
				))}
			</div>
		</div>
	);
}

export { Highlights };
