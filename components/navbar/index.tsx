import Link from 'next/link';
import React from 'react';

import { useFilter } from '../../stores';
import {
	IconLocation,
	IconShoppingBag,
	IconShoppingCart,
	IconFilter,
	IconCoupon,
	IconOptions,
} from '../icon-family';
import { SearchInput } from '../search-input';
import Styles from './styles.module.css';

function Navbar() {
	const { toggleModal } = useFilter((store) => store);

	return (
		<div className={Styles.navbar}>
			<ul className={Styles.nav}>
				<li>
					<Link href="/">
						<a>
							<IconLocation size={24} color="#503E9D" />
							San Francisco, California
							<IconOptions size={16} color="#000000" />
						</a>
					</Link>
				</li>
				<li>
					<Link href="/">
						<a>
							<IconShoppingBag color="#FB6D3A" />
							Pick up
							<IconOptions size={16} color="#000000" />
						</a>
					</Link>
				</li>
				<li>
					<Link href="/">
						<a>
							<IconCoupon color="#FACD5D" />
							Best deals
							<IconOptions size={16} color="#000000" />
						</a>
					</Link>
				</li>
			</ul>
			<SearchInput />
			<ul>
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
