import React from 'react';

import { FoodsList, PageTemplate, DetailsItem } from '../../components';
import Styles from './restaurant.module.css';
import { TypeParams, TypeProps } from './types';

async function getServerSideProps({ params: { id } }: TypeParams) {
	return { props: { id } };
}

function Restaurant({ ...props }: TypeProps) {
	return (
		<PageTemplate
			title="Restaurant - Burger King"
			description="Restaurant Burger King"
			keywords="Restaurant, Burger, King"
		>
			<div>{props.id}</div>
			<div>[header]</div>
			<div className={Styles.header}>
				<div className={Styles.details}>
					<h1>Burger King</h1>
					<p>
						It is one of the most iconic and well-recognizable fast food
						restaurants out there which offers really amazing food and drinks.
					</p>
				</div>
				<div className={Styles.tags}>
					<span>Free delivery</span>
					<span>Buy 2 get 1 free</span>
					<span>Opens at 12 PM</span>
				</div>
			</div>
			<div className="mb-12">
				<DetailsItem
					rate={4.5}
					reviews={1.873}
					category="Burger"
					price={1}
					distance="4,3 km (Irving St, San Francisco, California)"
				/>
			</div>
			<FoodsList />
		</PageTemplate>
	);
}

export { getServerSideProps };

export default Restaurant;
