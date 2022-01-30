import React from 'react';

import Styles from './styles.module.css';

function Navbar() {
	return (
		<div className={Styles.navbar}>
			<div className="flex items-center">
				<div>San Francisco, California</div>
				<div>Pick up</div>
				<div>Best deals</div>
			</div>
			<input className={Styles.inputSearch} placeholder="Search for anything" />
			<div>
				<button>FIL</button>
				<button>CKT</button>
			</div>
		</div>
	);
}

export { Navbar };
