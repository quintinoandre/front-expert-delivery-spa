import Image from 'next/image';

import {
	FoodsList,
	PageTemplate,
	DetailsItem,
	IconBase as Icon,
} from '../../components';
import Styles from './styles.module.css';

type TypeParams = { params: { id: string } };

type TypeProps = { id: string };

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
			<div className={Styles.header}>
				<div className={Styles.cover}>
					<div className={Styles.image}>
						<Image src="/cover.jpg" layout="fill" alt="cover" />
					</div>
					<div className={Styles.brand}>
						<Image
							src="/brands/burger-king.svg"
							width={96}
							height={96}
							alt="cover"
						/>
					</div>
					<button className={Styles.favoriteButton}>
						<Icon iconName="heart" color="#000000" />
					</button>
				</div>
				<div className={Styles.details}>
					<div className="flex flex-col md:flex-row mb-3">
						<h1>Burger King</h1>
						<div className={Styles.tags}>
							<span className="tag-purple">Free delivery</span>
							<span className="tag-orange">Buy 2 get 1 free</span>
							<span className="tag-gray">Opens at 12 PM</span>
						</div>
					</div>
					<p>
						It is one of the most iconic and well-recognizable fast food
						restaurants out there which offers really amazing food and drinks.
					</p>
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
