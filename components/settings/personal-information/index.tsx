import { useState } from 'react';

import { Dialog } from '@headlessui/react';

import { Button } from '../../button';
import { IconBase as Icon } from '../../icon';

function PersonalInformation() {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [isLoading, setIsLoading] = useState<boolean>(false);

	function handleSend() {
		setIsLoading(true);

		setTimeout(() => {
			setIsLoading(false);

			setIsOpen(false);
		}, 3000);
	}

	return (
		<>
			<button onClick={() => setIsOpen(true)}>
				<div>
					<Icon iconName="profile" color="#503E9D" />
					Personal information
				</div>
				<Icon iconName="chevron-right" color="#A3A3A4" size={16} />
			</button>
			<Dialog
				open={isOpen}
				onClose={() => setIsOpen(false)}
				className="relative z-50"
			>
				<div className="fixed inset-0 flex bg-black/25 items-center justify-center p-4">
					<Dialog.Panel className="w-[25rem] p-8 rounded bg-white">
						<Dialog.Title
							as="h2"
							className="mb-8 flex justify-between items-center"
						>
							<div>Personal information</div>
							<button onClick={() => setIsOpen(false)}>
								<Icon iconName="close" color="#A3A3A4" />
							</button>
						</Dialog.Title>
						<p>Profile image</p>
						<p>Profile details</p>
						<Button
							variant="primary"
							loadingMessage="Sending"
							isLoading={isLoading}
							onClick={handleSend}
						>
							Update profile
						</Button>
					</Dialog.Panel>
				</div>
			</Dialog>
		</>
	);
}

export { PersonalInformation };
