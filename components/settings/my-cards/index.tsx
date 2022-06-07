import Image from 'next/image';
import { useState } from 'react';

import { Dialog } from '@headlessui/react';

import { IconBase as Icon } from '../../icon';
import Styles from './styles.module.css';

function MyCards() {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	return (
		<>
			<button onClick={() => setIsOpen(true)}>
				<div>
					<Icon iconName="card" color="#FB6D3A" />
					My cards
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
							<div>My cards (1)</div>
							<button onClick={() => setIsOpen(false)}>
								<Icon iconName="close" color="#A3A3A4" />
							</button>
						</Dialog.Title>
						<ul>
							<li>
								<button className={Styles.button}>
									<Icon iconName="plus" size={32} color="#000000" />
								</button>
							</li>
							<li>
								<button className={`${Styles.button} ${Styles.cardButton}`}>
									<div>
										<div>
											<Image
												src="/card-chip.png"
												width={20}
												height={24}
												alt="Card Chip"
											/>
											<p>1211</p>
										</div>
										<div>
											<h3>Mastercard</h3>
											<p>Platinum</p>
											<div>
												<Image
													src="/logo-mastercard.png"
													width={39}
													height={24}
													alt="Mastercard logo"
												/>
											</div>
										</div>
									</div>
								</button>
							</li>
						</ul>
					</Dialog.Panel>
				</div>
			</Dialog>
		</>
	);
}

export { MyCards };
