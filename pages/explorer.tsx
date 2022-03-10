import type { NextPage } from 'next';
import React from 'react';

import { Highlights, PageTemplate, FoodsList } from '../components';

const Explorer: NextPage = () => {
	return (
		<PageTemplate
			title="Explore - Restaurant Category"
			description="List of restaurants in category"
		>
			<Highlights title="Restaurants nearby" />
			<FoodsList />
		</PageTemplate>
	);
};

export default Explorer;
