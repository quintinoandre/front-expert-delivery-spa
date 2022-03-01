import React from 'react';

import { IconSearch } from '../icon-family';
import Styles from './styles.module.css';

function SearchInput() {
	return (
		<div className={Styles.inputSearch}>
			<IconSearch color="#000000" />
			<input placeholder="Search for anything" />
		</div>
	);
}

export { SearchInput };
