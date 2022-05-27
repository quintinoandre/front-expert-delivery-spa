import { useFilter } from '../../stores';
import { IconBase as Icon } from '../icon';
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
						<Icon iconName="filter" color="#FFFFFF" />
					</button>
				</li>
				<li>
					<button className={Styles.shoppingCartButton}>
						<Icon iconName="shopping-cart" color="#FFFFFF" />
					</button>
				</li>
			</ul>
		</div>
	);
}

export { Navbar };
