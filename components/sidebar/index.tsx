import Link from 'next/link';
import React from 'react';

import Styles from './styles.module.css';

function Sidebar() {
	return (
		<div className={Styles.sidebar}>
			<div className={Styles.header}>
				<p>
					<span>icon</span>DeliveryAPP FX
				</p>
			</div>
			<ul className={Styles.menu}>
				<li>
					<Link href="/">
						<a>
							<span>icon</span>
							Home
						</a>
					</Link>
				</li>
				<li className={Styles.active}>
					<Link href="/explore">
						<a>
							<span>icon</span>
							Explore
						</a>
					</Link>
				</li>
				<li>
					<Link href="/favorites">
						<a>
							<span>icon</span>
							Favorites
						</a>
					</Link>
				</li>
				<li>
					<Link href="/orders">
						<a>
							<span>icon</span>
							Orders
						</a>
					</Link>
				</li>
				<li>
					<Link href="/messages">
						<a>
							<span>icon</span>
							Messages
						</a>
					</Link>
				</li>
				<li>
					<Link href="/settings">
						<a>
							<span>icon</span>
							Settings
						</a>
					</Link>
				</li>
			</ul>
			<div className={Styles.footer}>user component</div>
			<p className="text-gray-100">Sidebar</p>
		</div>
	);
}

export { Sidebar };
