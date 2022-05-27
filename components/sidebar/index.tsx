import Image from 'next/image';
import Link from 'next/link';

import { IconBase as Icon } from '../icon';
import { UserProfile } from '../user-profile';
import Styles from './styles.module.css';

function Sidebar() {
	return (
		<div className={Styles.sidebar}>
			<div className={Styles.header}>
				<span>
					<Image src="/logo.png" width={40} height={32} alt="DeliveryAPP FX" />
				</span>
				<h3>Nibble</h3>
			</div>
			<ul className={Styles.menu}>
				<li className={Styles.active}>
					<Link href="/">
						<a>
							<Icon iconName="home" color="#A3A3A4" />
							<span>Home</span>
						</a>
					</Link>
				</li>
				<li>
					<Link href="/explore">
						<a>
							<Icon iconName="feed" color="#A3A3A4" />
							<span>Explore</span>
						</a>
					</Link>
				</li>
				<li>
					<Link href="/favorites">
						<a>
							<Icon iconName="bookmark" color="#A3A3A4" />
							<span>Favorites</span>
						</a>
					</Link>
				</li>
				<li>
					<Link href="/orders">
						<a>
							<Icon iconName="document" color="#A3A3A4" />
							<span>Orders</span>
						</a>
					</Link>
				</li>
				<li>
					<Link href="/messages">
						<a>
							<Icon iconName="mail" color="#A3A3A4" />
							<span>Messages</span>
						</a>
					</Link>
				</li>
				<li>
					<Link href="/settings">
						<a>
							<Icon iconName="settings" color="#A3A3A4" />
							<span>Settings</span>
						</a>
					</Link>
				</li>
			</ul>
			<div className={Styles.footer}>
				<UserProfile />
			</div>
			<p className="text-gray-100">Sidebar</p>
		</div>
	);
}

export { Sidebar };
