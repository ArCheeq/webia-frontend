import { useState } from 'react';

import { endpoints } from '@/constants/endpoints';
import { getStore } from '@/store';

export function useInitialLoad() {
    const [isReady, setReady] = useState(false);

    async function prefetch() {
        const auth = getStore().auth;
        // Добавлять cюда все запросы, которые нужно сделать при первой загрузке (пока на сайте лоадер)
        try {
            const authKey = localStorage.getItem('authKey');
            if (!authKey) throw new Error('No auth key');

            auth.setAuthKey(authKey);
            await endpoints.GetSettings().request();

            auth.setAuthorized(true);
        } finally {
            setReady(true);
        }
    }

    return {
        isReady,
        prefetch,
    };
}
