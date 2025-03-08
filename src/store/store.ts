import { createStore, StateCreator } from 'zustand';
import { useStore as useZustandStore } from 'zustand';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

import { isProd } from '@/constants/env';
import { createAuthStore, IAuthState } from '@/store/states/auth';

export interface IStore {
    auth: IAuthState;
}

export const store = createStore<IStore>()(
    immer(
        devtools(
            (...a) => ({
                auth: createAuthStore(...a),
            }),
            { enabled: !isProd(), name: 'APP (DEV)' },
        ),
    ),
);

export function useStore<T>(selector: (state: IStore) => T) {
    return useZustandStore(store, selector);
}

export function getStore() {
    return store.getState();
}

(globalThis as any).store = store;

export type IStateSlice<T> = StateCreator<IStore, [['zustand/immer', never]], [], T>;