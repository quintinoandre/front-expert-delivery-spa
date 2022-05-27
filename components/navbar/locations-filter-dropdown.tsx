import { Fragment, useState, useEffect } from 'react';

import { Menu, Transition } from '@headlessui/react';

import { IconBase as Icon } from '../icon';

function LocationsFilter() {
	const [locationSelected, setLocationSelected] = useState('');

	const DEFAULT_LOCATION = 'Select a location';

	const locationsOptions = [
		{
			title: 'San Francisco, California',
		},
		{
			title: 'Los Angeles, California',
		},
		{
			title: 'Las Vegas, Nevada',
		},
	];

	function saveLocation(location: string) {
		setLocationSelected(location);
	}

	useEffect(() => {
		(() => {
			setLocationSelected(DEFAULT_LOCATION);
		})();
	}, []);

	return (
		<Menu as="div" className="relative inline-block text-left">
			<div>
				<Menu.Button className="flex justify-center items-center w-full">
					<Icon iconName="location" size={24} color="#503E9D" />
					{locationSelected}
					<div className="flex">
						<Icon iconName="options" size={16} color="#000000" />
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
				<Menu.Items className="absolute left-0 w-72 mt-2 bg-gray-100 shadow rounded-xl overflow-hidden">
					{locationsOptions.map((locationsOption) => (
						<Menu.Item key={locationsOption.title}>
							{({ active }) => (
								<a
									className={`${
										active && 'bg-gray-200 text-gray-600'
									} py-2 px-4`}
									onClick={(_event) => saveLocation(locationsOption.title)}
									aria-hidden="true"
								>
									{locationsOption.title}
								</a>
							)}
						</Menu.Item>
					))}
				</Menu.Items>
			</Transition>
		</Menu>
	);
}

export { LocationsFilter };
