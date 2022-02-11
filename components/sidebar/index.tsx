import Link from 'next/link';
import React from 'react';

import { IconBase } from '../icon';
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
							<span>
								<IconBase iconName="home" color="#A3A3A4" />
							</span>
							Home
						</a>
					</Link>
				</li>
				<li className={Styles.active}>
					<Link href="/explore">
						<a>
							<span>
								<IconBase iconName="feed" color="#A3A3A4" />
							</span>
							Explore
						</a>
					</Link>
				</li>
				<li>
					<Link href="/favorites">
						<a>
							<span>
								<IconBase iconName="bookmark" color="#A3A3A4" />
							</span>
							Favorites
						</a>
					</Link>
				</li>
				<li>
					<Link href="/orders">
						<a>
							<span>
								<IconBase iconName="document" color="#A3A3A4" />
							</span>
							Orders
						</a>
					</Link>
				</li>
				<li>
					<Link href="/messages">
						<a>
							<span>
								<IconBase iconName="mail" color="#A3A3A4" />
							</span>
							Messages
						</a>
					</Link>
				</li>
				<li>
					<Link href="/settings">
						<a>
							<span>
								<IconBase iconName="settings" color="#A3A3A4" />
							</span>
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
