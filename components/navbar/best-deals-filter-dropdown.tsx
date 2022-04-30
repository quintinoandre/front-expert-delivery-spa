import { Fragment, useState, useEffect } from 'react';

import { Menu, Transition } from '@headlessui/react';

import { IconCoupon, IconOptions } from '../icon-family';

function BestDealsFilter() {
	const [bestDealsModeSelected, setBestDealsModeSelected] = useState('');

	const DEFAULT_BEST_DEAL_MODE = 'Region Offers';

	const bestDealsOptions = [
		{
			title: 'Region Offers',
		},
		{
			title: 'Week Offers',
		},
	];

	function saveBestDealsMode(bestDealsMode: string) {
		setBestDealsModeSelected(bestDealsMode);
	}

	useEffect(() => {
		(() => {
			setBestDealsModeSelected(DEFAULT_BEST_DEAL_MODE);
		})();
	}, []);

	return (
		<Menu as="div" className="relative inline-block text-left">
			<div>
				<Menu.Button className="flex justify-center items-center w-full">
					<IconCoupon color="#FACD5D" />
					{bestDealsModeSelected}
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
				<Menu.Items className="absolute right-0 w-56 mt-2 bg-gray-100 shadow rounded-xl overflow-hidden">
					{bestDealsOptions.map((bestDealsOption) => (
						<Menu.Item key={bestDealsOption.title}>
							{({ active }) => (
								<a
									className={`${
										active && 'bg-gray-200 text-gray-600'
									} py-2 px-4`}
									onClick={(_event) => saveBestDealsMode(bestDealsOption.title)}
									aria-hidden="true"
								>
									{bestDealsOption.title}
								</a>
							)}
						</Menu.Item>
					))}
				</Menu.Items>
			</Transition>
		</Menu>
	);
}

export { BestDealsFilter };
