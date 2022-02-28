import type { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';

import {
	Categories,
	Highlights,
	Navbar,
	Sidebar,
	FoodsList,
} from '../components';

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Nibble Restaurants</title>
				<meta name="description" content="Description of nibble restaurants" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className="container m-auto flex">
				<Sidebar />
				<div className="grow p-8">
					<Navbar />
					<Categories />
					<Highlights />
					<FoodsList />
				</div>
			</div>
		</>
	);
};

export default Home;
