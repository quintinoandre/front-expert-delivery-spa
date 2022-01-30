import Link from 'next/link';
import React from 'react';

import { Category } from '../category';
// import Styles from './styles.module.css';

function Categories() {
	const categories = [
		{
			name: 'Popular',
			legend: '+286 options',
			iconName: 'fire',
		},
		{
			name: 'Fast delivery',
			legend: '1,843+ options',
			iconName: 'bike',
		},
		{
			name: 'High class',
			legend: '25+ options',
			iconName: 'wallet',
		},
	];
	return (
		<div>
			<div className="flex">
				<h2 className="grow">Explore categories</h2>
				<Link href="/categories">
					<a>See all</a>
				</Link>
			</div>
			<div className="flex gap-6">
				{categories.map((category) => (
					<Category key={category.name} {...category} />
				))}
			</div>
		</div>
	);
}

export { Categories };
