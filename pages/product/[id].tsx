import Head from 'next/head';
import React from 'react';

import { FoodItem, Navbar, Sidebar } from '../../components';
import { TypeParams, TypeProps } from './types';

async function getServerSideProps({ params: { id } }: TypeParams) {
	return {
		props: {
			id,
			product: {
				name: 'Gigantic Rodeo Burger',
				imageUrl: '/foods/burger.jpg',
				deliveryFee: '2.99 Delivery',
				rate: 4.3,
				reviews: 104,
				category: 'Burger',
				deliveryTime: '45 - 55 min',
			},
		},
	};
}

function Product({ ...props }: TypeProps) {
	return (
		<>
			<Head>
				<title>{props.product.name} - Restaurant XPTO</title>
				<meta
					name="description"
					content={`Description of ${props.product.name} in Restaurant XPTO`}
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className="container m-auto flex">
				<Sidebar />
				<div className="grow p-8">
					<Navbar />
					<FoodItem {...props.product} />
				</div>
			</div>
		</>
	);
}

export { getServerSideProps };

export default Product;
