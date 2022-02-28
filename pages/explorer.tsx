import type { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';

import { Highlights, Navbar, Sidebar, FoodsList } from '../components';

const Explorer: NextPage = () => {
	return (
		<>
			<Head>
				<title>Explore Restaurants</title>
				<meta
					name="description"
					content="Description of Page explore restaurants"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className="container m-auto flex">
				<Sidebar />
				<div className="grow p-8">
					<Navbar />
					<Highlights title="Restaurants nearby" />
					<FoodsList />
				</div>
			</div>
		</>
	);
};

export default Explorer;
