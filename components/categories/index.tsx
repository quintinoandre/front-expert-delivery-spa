import Link from 'next/link';

import { Category } from '../category';
import { IconChevronRight } from '../icon-family';
import Styles from './styles.module.css';

function Categories() {
	const categories = [
		{
			id: '1',
			name: 'Popular',
			legend: '286+ options',
			iconName: 'fire',
			backgroundSection: '#FB6D34',
		},
		{
			id: '2',
			name: 'Fast delivery',
			legend: '1,843+ options',
			iconName: 'delivery',
			backgroundSection: '#503E9D',
		},
		{
			id: '3',
			name: 'High class',
			legend: '25+ options',
			iconName: 'wallet',
			backgroundSection: '#FACD5D',
		},
		{
			id: '4',
			name: 'Dine in',
			legend: '182+ options',
			iconName: 'silverware',
			backgroundSection: '#FB6D34',
		},
		{
			id: '5',
			name: 'Pick up',
			legend: '3,348+ options',
			iconName: 'home',
			backgroundSection: '#503E9D',
		},
		{
			id: '6',
			name: 'Nearest',
			legend: '44+ options',
			iconName: 'map',
			backgroundSection: '#FACD5D',
		},
	];
	return (
		<div className="mb-12">
			<div className={Styles.header}>
				<h2>Explore categories</h2>
				<Link href="/categories">
					<a>
						See all
						<IconChevronRight size={12} color="#5B4AA3" />
					</a>
				</Link>
			</div>
			<div className={Styles.container}>
				{categories.map((category) => (
					<Category key={category.name} {...category} />
				))}
			</div>
		</div>
	);
}

export { Categories };
