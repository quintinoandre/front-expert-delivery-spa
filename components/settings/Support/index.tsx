import { useState } from 'react';

import { Dialog } from '@headlessui/react';

import { IconBase as Icon } from '../../icon';
import Styles from './styles.module.css';

function Support() {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	return (
		<>
			<button onClick={() => setIsOpen(true)}>
				<div>
					<Icon iconName="support" color="#503E9D" />
					Support
				</div>
				<Icon iconName="chevron-right" color="#A3A3A4" />
			</button>
			<Dialog
				open={isOpen}
				onClose={() => setIsOpen(false)}
				className={Styles.dialog}
			>
				<div className={Styles.dialog__div}>
					<Dialog.Panel className={Styles.dialogPanel}>
						<Dialog.Title as="h2" className={Styles.dialogTitle}>
							<div>Support</div>
							<button onClick={() => setIsOpen(false)}>
								<Icon iconName="close" color="#A3A3A4" />
							</button>
						</Dialog.Title>
						<ul>
							<li>
								<button>
									<div className={Styles.purple}>
										<Icon iconName="mail" size={20} color="#503E9D" />
									</div>
									<div>
										<h3>Live Chat</h3>
										<p>
											Waiting time: <strong>5 min</strong>
										</p>
									</div>
									<Icon iconName="chevron-right" size={12} color="#A3A3A4" />
								</button>
							</li>
							<li>
								<button>
									<div className={Styles.orange}>
										<Icon iconName="document" size={20} color="#FB6D3A" />
									</div>
									<div>
										<h3>FAQ</h3>
										<p>182 Park Row Street, Suite 8</p>
									</div>
									<Icon iconName="chevron-right" size={12} color="#A3A3A4" />
								</button>
							</li>
							<li>
								<div>
									<div className={Styles.yellow}>
										<Icon iconName="phone" color="#FACD5D" />
									</div>
									<div>
										<h3>Phone number</h3>
										<p>+1 (987) 1234 098</p>
									</div>
								</div>
							</li>
						</ul>
					</Dialog.Panel>
				</div>
			</Dialog>
		</>
	);
}

export { Support };
