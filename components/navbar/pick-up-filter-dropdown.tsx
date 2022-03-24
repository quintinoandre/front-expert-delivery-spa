import React, { Fragment, useState, useEffect } from 'react';

import { Menu, Transition } from '@headlessui/react';

import { IconOptions, IconShoppingBag } from '../icon-family';

function PickUpFilter() {
	const [pickUpModeSelected, setPickUpModeSelected] = useState('');

	const DEFAULT_PICK_UP_MODE = 'Pick Up';

	const pickUpModeOptions = [
		{
			title: 'Pick Up',
		},
		{
			title: 'Delivery',
		},
	];

	function savePickUpMode(pickUpMode: string) {
		setPickUpModeSelected(pickUpMode);
	}

	useEffect(() => {
		(() => {
			setPickUpModeSelected(DEFAULT_PICK_UP_MODE);
		})();
	}, []);

	return (
		<Menu as="div" className="relative inline-block text-left">
			<div>
				<Menu.Button className="flex justify-center items-center w-full">
					<IconShoppingBag color="#FB6D3A" />
					{pickUpModeSelected}
					<div className="flex">
						<IconOptions size={16} color="#000000" />
					</div>
				</Menu.Button>
			</div>
			<Transition
				as={Fragment}
				enter="transition ease-out duration-100"
				enterFrom="transform opacity-0 scale-95"
				enterTo="transform opacity-100 scale-100"
				leave="transition ease-in duration-75"
				leaveFrom="transform opacity-100 scale-100"
				leaveTo="transform opacity-0 scale-95"
			>
				<Menu.Items className="absolute left-0 w-36 mt-2 bg-gray-100 shadow rounded-xl overflow-hidden">
					{pickUpModeOptions.map((pickUpModeOption) => (
						<Menu.Item key={pickUpModeOption.title}>
							{({ active }) => (
								<a
									className={`${
										active && 'bg-gray-200 text-gray-600'
									} py-2 px-4`}
									onClick={(_event) => savePickUpMode(pickUpModeOption.title)}
									aria-hidden="true"
								>
									{pickUpModeOption.title}
								</a>
							)}
						</Menu.Item>
					))}
				</Menu.Items>
			</Transition>
		</Menu>
	);
}

export { PickUpFilter };
