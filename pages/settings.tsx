import type { NextPage } from 'next';

import {
	PageTemplate,
	PersonalInformation,
	SavedAddresses,
	MarketingPreference,
	PaymentMethods,
	MyCards,
	Support,
	InviteAFriend,
	Discounts,
} from '../components';
import Styles from '../styles/settings.module.css';

const Settings: NextPage = () => {
	return (
		<PageTemplate
			title="Settings - Nibble"
			description="User settings on Nibble"
		>
			<div className={Styles.container}>
				<h1>Settings</h1>
				<p>General</p>
				<ul>
					<li>
						<PersonalInformation />
					</li>
					<li>
						<SavedAddresses />
					</li>
					<li>
						<MarketingPreference />
					</li>
				</ul>
				<p>Payments</p>
				<ul>
					<li>
						<PaymentMethods />
					</li>
					<li>
						<MyCards />
					</li>
				</ul>
				<p>Other</p>
				<ul>
					<li>
						<Support />
					</li>
					<li>
						<InviteAFriend />
					</li>
					<li>
						<Discounts />
					</li>
				</ul>
			</div>
		</PageTemplate>
	);
};

export default Settings;
