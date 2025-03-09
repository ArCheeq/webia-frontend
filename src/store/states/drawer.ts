import { IStateSlice } from '@/store/store';

export interface IDrawerState {
	opened: boolean;
	element: IElementEntity | null;

	open: (element: IElementEntity) => void;
	close: () => void;
}

export const createDrawerStore: IStateSlice<IDrawerState> = (set) => ({
	opened: false,
	element: null,

	open: (element: IElementEntity) => set((state) => {
		state.drawer.opened = true;
		state.drawer.element = element as any;
	}),
	close: () => set((state) => {
		state.drawer.opened = false;
		state.drawer.element = null;
	}),
});

