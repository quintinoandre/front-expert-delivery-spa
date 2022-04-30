import Image from 'next/image';
import Link from 'next/link';

import { IconBase } from '../icon';
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
							<IconBase iconName="home" color="#A3A3A4" />
							<span>Home</span>
						</a>
					</Link>
				</li>
				<li>
					<Link href="/explore">
						<a>
							<IconBase iconName="feed" color="#A3A3A4" />
							<span>Explore</span>
						</a>
					</Link>
				</li>
				<li>
					<Link href="/favorites">
						<a>
							<IconBase iconName="bookmark" color="#A3A3A4" />
							<span>Favorites</span>
						</a>
					</Link>
				</li>
				<li>
					<Link href="/orders">
						<a>
							<IconBase iconName="document" color="#A3A3A4" />
							<span>Orders</span>
						</a>
					</Link>
				</li>
				<li>
					<Link href="/messages">
						<a>
							<IconBase iconName="mail" color="#A3A3A4" />
							<span>Messages</span>
						</a>
					</Link>
				</li>
				<li>
					<Link href="/settings">
						<a>
							<IconBase iconName="settings" color="#A3A3A4" />
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
