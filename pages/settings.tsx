import type { NextPage } from 'next';

import {
	PageTemplate,
	IconBase as Icon,
	PersonalInformation,
	SavedAddresses,
	MarketingPreference,
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
						<button>
							<div>
								<Icon iconName="wallet" color="#503E9D" />
								Payment methods
							</div>
							<Icon iconName="chevron-right" color="#A3A3A4" size={16} />
						</button>
					</li>
					<li>
						<button>
							<div>
								<Icon iconName="card" color="#FB6D3A" />
								My cards
							</div>
							<Icon iconName="chevron-right" color="#A3A3A4" size={16} />
						</button>
					</li>
				</ul>
				<p>Other</p>
				<ul>
					<li>
						<button>
							<div>
								<Icon iconName="support" color="#503E9D" />
								Support
							</div>
							<Icon iconName="chevron-right" color="#A3A3A4" size={16} />
						</button>
					</li>
					<li>
						<button>
							<div>
								<Icon iconName="split-order" color="#FB6D3A" />
								Invite a friend
							</div>
							<Icon iconName="chevron-right" color="#A3A3A4" size={16} />
						</button>
					</li>
					<li>
						<button>
							<div>
								<Icon iconName="money" color="#FACD5D" size={24} />
								Discounts
							</div>
							<Icon iconName="chevron-right" color="#A3A3A4" size={16} />
						</button>
					</li>
				</ul>
			</div>
		</PageTemplate>
	);
};

export default Settings;
