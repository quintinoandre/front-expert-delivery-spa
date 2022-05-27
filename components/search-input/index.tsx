import { IconBase as Icon } from '../icon';
import Styles from './styles.module.css';

function SearchInput() {
	return (
		<div className={Styles.inputSearch}>
			<Icon iconName="search" color="#000000" />
			<input placeholder="Search for anything" />
		</div>
	);
}

export { SearchInput };
