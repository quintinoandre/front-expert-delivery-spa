import Link from 'next/link';
import React from 'react';

import { Category } from '../category';
import { IconChevronRight } from '../icon-family';
import Styles from './styles.module.css';

function Categories() {
	const categories = [
		{
			name: 'Popular',
			legend: '286+ options',
			iconName: 'fire',
			backgroundSection: '#FB6D34',
		},
		{
			name: 'Fast delivery',
			legend: '1,843+ options',
			iconName: 'delivery',
			backgroundSection: '#503E9D',
		},
		{
			name: 'High class',
			legend: '25+ options',
			iconName: 'wallet',
			backgroundSection: '#FACD5D',
		},
		{
			name: 'Dine in',
			legend: '182+ options',
			iconName: 'silverware',
			backgroundSection: '#FB6D34',
		},
		{
			name: 'Pick up',
			legend: '3,348+ options',
			iconName: 'home',
			backgroundSection: '#503E9D',
		},
		{
			name: 'Nearest',
			legend: '44+ options',
			iconName: 'map',
			backgroundSection: '#FACD5D',
		},
	];
	return (
		<div>
			<div className={Styles.header}>
				<h2>Explore categories</h2>
				<Link href="/categories">
					<a>
						See all
						<IconChevronRight size={12} color="#5B4AA3" />
					</a>
				</Link>
			</div>
			<div className="flex gap-6 justify-between">
				{categories.map((category) => (
					<Category key={category.name} {...category} />
				))}
			</div>
		</div>
	);
}

export { Categories };
