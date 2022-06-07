import { useState } from 'react';

import { Dialog } from '@headlessui/react';

import { IconBase as Icon } from '../../icon';
import Styles from './styles.module.css';

function Discounts() {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	return (
		<>
			<button onClick={() => setIsOpen(true)}>
				<div>
					<Icon iconName="money" color="#FACD5D" />
					Discounts
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
							<div>Discounts</div>
							<button onClick={() => setIsOpen(false)}>
								<Icon iconName="close" color="#A3A3A4" />
							</button>
						</Dialog.Title>
						<ul className={Styles.discounts}>
							<li className={Styles.purple}>
								<div>
									<h3>KL7L24</h3>
									<p>* valid until 30 Sep 2022</p>
								</div>
							</li>
							<li className={Styles.orange}>
								<div>
									<h3>AQ1P7O</h3>
									<p>* valid until 15 Nov 2022</p>
								</div>
							</li>
						</ul>
					</Dialog.Panel>
				</div>
			</Dialog>
		</>
	);
}

export { Discounts };
