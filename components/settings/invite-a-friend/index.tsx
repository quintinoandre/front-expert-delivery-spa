import Image from 'next/image';
import { useState } from 'react';

import { Dialog } from '@headlessui/react';

import { IconBase as Icon } from '../../icon';
import Styles from './styles.module.css';

function InviteAFriend() {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	return (
		<>
			<button onClick={() => setIsOpen(true)}>
				<div>
					<Icon iconName="split-order" color="#FB6D3A" />
					Invite a friend
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
							<div>Invite a friend</div>
							<button onClick={() => setIsOpen(false)}>
								<Icon iconName="close" color="#A3A3A4" />
							</button>
						</Dialog.Title>
						<button className={Styles.inviteButton}>
							<div>
								<Icon iconName="plus" color="#503E9D" />
							</div>
							Send an invite to a friend
						</button>
						<h3>Invited friends (2)</h3>
						<ul>
							<li>
								<div>
									<Image src="/woman.png" width="48" height="48" alt="Woman" />
									<div>
										<h4>Kate Simpson</h4>
										<p>katesimpson@outlook.com</p>
									</div>
								</div>
							</li>
							<li>
								<div>
									<Image src="/man.png" width="48" height="48" alt="Man" />
									<div>
										<h4>Andrew Smith</h4>
										<p>andrewsmith@ui8.net</p>
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

export { InviteAFriend };
