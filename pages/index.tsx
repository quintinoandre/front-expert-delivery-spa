import type { NextPage } from 'next';

import { Categories, Highlights, FoodsList, PageTemplate } from '../components';

const Home: NextPage = () => {
	return (
		<PageTemplate
			title="Nibble Restaurant"
			description="Description of nibble restaurants"
		>
			<Categories />
			<Highlights />
			<FoodsList />
		</PageTemplate>
	);
};

export default Home;
