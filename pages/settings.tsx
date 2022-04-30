import type { NextPage } from 'next';
import Link from 'next/link';
import { useState } from 'react';

import { Dialog } from '@headlessui/react';

import { PageTemplate } from '../components';
import {
	IconMail,
	IconBookmark,
	IconChevronRight,
	IconProfile,
	IconWallet,
	IconCard,
	IconSupport,
	IconSplitOrder,
	IconMoney,
} from '../components/icon-family';
import Styles from '../styles/settings.module.css';

const Settings: NextPage = () => {
	const [isOpenModal, setIsOpenModal] = useState(false);

	return (
		<PageTemplate
			title="Settings - Nibble"
			description="User settings on Nibble"
		>
			<div className={Styles.container}>
				<h1>Settings</h1>
				<h2>General</h2>
				<ul>
					<li>
						<button onClick={() => setIsOpenModal(true)}>
							<div>
								<IconProfile color="#503E9D" />
								Personal information
							</div>
							<IconChevronRight color="#A3A3A4" size={16} />
						</button>
					</li>
					<li>
						<Link href="#">
							<a>
								<div>
									<IconBookmark color="#FB6D3A" />
									Saved addresses
								</div>
								<IconChevronRight color="#A3A3A4" size={16} />
							</a>
						</Link>
					</li>
					<li>
						<Link href="#">
							<a>
								<div>
									<IconMail color="#FACD5D" />
									Marketing preference
								</div>
								<IconChevronRight color="#A3A3A4" size={16} />
							</a>
						</Link>
					</li>
				</ul>
				<h2>Payments</h2>
				<ul>
					<li>
						<Link href="#">
							<a>
								<div>
									<IconWallet color="#503E9D" />
									Payment methods
								</div>
								<IconChevronRight color="#A3A3A4" size={16} />
							</a>
						</Link>
					</li>
					<li>
						<Link href="#">
							<a>
								<div>
									<IconCard color="#FB6D3A" />
									My cards
								</div>
								<IconChevronRight color="#A3A3A4" size={16} />
							</a>
						</Link>
					</li>
				</ul>
				<h2>Other</h2>
				<ul>
					<li>
						<Link href="#">
							<a>
								<div>
									<IconSupport color="#503E9D" />
									Support
								</div>
								<IconChevronRight color="#A3A3A4" size={16} />
							</a>
						</Link>
					</li>
					<li>
						<Link href="#">
							<a>
								<div>
									<IconSplitOrder color="#FB6D3A" />
									Invite a friend
								</div>
								<IconChevronRight color="#A3A3A4" size={16} />
							</a>
						</Link>
					</li>
					<li>
						<Link href="#">
							<a>
								<div>
									<IconMoney color="#FACD5D" size={24} />
									Discounts
								</div>
								<IconChevronRight color="#A3A3A4" size={16} />
							</a>
						</Link>
					</li>
				</ul>
			</div>
			<Dialog
				open={isOpenModal}
				onClose={() => setIsOpenModal(false)}
				className="relative z-50"
			>
				<div className="fixed inset-0 flex bg-black/25 items-center justify-center p-4">
					<Dialog.Panel className="w-full p-8 max-w-sm rounded bg-white">
						<Dialog.Title>Deactivate account</Dialog.Title>

						<p>
							Are you sure you want to deactivate your account? All of your data
							will be permanently removed. This action cannot be undone.
						</p>

						<button onClick={() => setIsOpenModal(false)}>Deactivate</button>
						<button onClick={() => setIsOpenModal(false)}>Cancel</button>
					</Dialog.Panel>
				</div>
			</Dialog>
		</PageTemplate>
	);
};

export default Settings;
