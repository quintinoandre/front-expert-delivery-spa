import create from 'zustand';

import { TypeFilterState } from './types';

export const useFilter = create<TypeFilterState>((set) => {
	const initialState = { isOpen: false };

	return {
		state: { ...initialState },
		toggleModal: () =>
			set(({ state }) => {
				state.isOpen = !state.isOpen;
			}),
	};
});
