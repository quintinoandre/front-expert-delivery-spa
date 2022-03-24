import React from 'react';

import { useFilter } from '../../stores';
import { IconShoppingCart, IconFilter } from '../icon-family';
import { SearchInput } from '../search-input';
import { BestDealsFilter } from './best-deals-filter-dropdown';
import { LocationsFilter } from './locations-filter-dropdown';
import { PickUpFilter } from './pick-up-filter-dropdown';
import Styles from './styles.module.css';

function Navbar() {
	const { toggleModal } = useFilter((store) => store);

	return (
		<div className={Styles.navbar}>
			<ul className={Styles.nav}>
				<li>
					<LocationsFilter />
				</li>
				<li>
					<PickUpFilter />
				</li>
				<li>
					<BestDealsFilter />
				</li>
			</ul>
			<SearchInput />
			<ul className={Styles.navButtons}>
				<li>
					<button
						className={Styles.filterButton}
						onClick={(_event) => toggleModal()}
					>
						<IconFilter color="#FFFFFF" />
					</button>
				</li>
				<li>
					<button className={Styles.shoppingCartButton}>
						<IconShoppingCart color="#FFFFFF" />
					</button>
				</li>
			</ul>
		</div>
	);
}

export { Navbar };
