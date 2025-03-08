import {} from 'zustand/middleware';

import { IStateSlice } from '@/store/store';

export interface IAuthState {
    authKey: string;
    isAuthorized: boolean;

    setAuthKey: (authKey: string) => void;
    setAuthorized: (isAuthorized: boolean) => void;
}

export const createAuthStore: IStateSlice<IAuthState> = (set) => ({
    authKey: '',
    isAuthorized: true,

    setAuthKey: (authKey) => set((state) => {
		state.auth.authKey = authKey;
	}),
    setAuthorized: (isAuthorized) => set((state) => {
		state.auth.isAuthorized = isAuthorized;
	}),

});
