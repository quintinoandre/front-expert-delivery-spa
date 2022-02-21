import React from 'react';

import { FoodItem } from '../food-item';
import Styles from './styles.module.css';

function FoodsList() {
	const data = [
		{
			name: 'Gigantic Rodeo Burger',
			imageUrl: '/foods/burger.jpg',
			deliveryFee: '2.99 Delivery',
			rate: 4.3,
			reviews: 104,
			category: 'Burger',
			deliveryTime: '45 - 55 min',
		},
		{
			name: 'Delicious Cheese Pie',
			imageUrl: '/foods/pizza.jpg',
			deliveryFee: 'Free delivery',
			rate: 4.9,
			reviews: 31,
			category: 'Pie',
			deliveryTime: '15 - 25 min',
		},
		{
			name: 'Chef’s Burger Deluxe',
			imageUrl: '/foods/chef-burguer.jpg',
			deliveryFee: 'Free delivery',
			rate: 4.6,
			reviews: 1.006,
			category: 'Burger',
			deliveryTime: '20 - 30 min',
		},
		{
			name: 'Peperoni Pie',
			imageUrl: '/foods/pizza-peperoni.jpg',
			deliveryFee: 'Free delivery',
			rate: 4.4,
			reviews: 543,
			category: 'Pie',
			deliveryTime: '30 - 45 min',
		},
		{
			name: 'Natural Vegetable Rice',
			imageUrl: '/foods/vegan.jpg',
			deliveryFee: '3.45 Delivery',
			rate: 4.2,
			reviews: 8,
			category: 'Rice',
			deliveryTime: '35 - 40 min',
		},
		{
			name: 'Vegetable Skewers',
			imageUrl: '/foods/vegetable.jpg',
			deliveryFee: '4.99 Delivery',
			rate: 4.3,
			reviews: 45,
			category: 'Skewers',
			deliveryTime: '10 - 20 min',
		},
	];

	return (
		<div className="mb-12">
			<div className={Styles.header}>
				<h2>Popular orders</h2>
				<div>Today</div>
			</div>
			<div className="flex gap-6 justify-between flex-wrap">
				{data.map((item) => (
					<FoodItem key={item.name} {...item} />
				))}
			</div>
		</div>
	);
}

export { FoodsList };
