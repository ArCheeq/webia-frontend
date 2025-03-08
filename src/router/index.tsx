import { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';

import logo from '@/assets/images/logo.svg';
import { Loader } from '@/components/Loader';
import { cn } from '@/lib';
import { useStore } from '@/store/store';

import { useInitialLoad } from '../hooks/useInitialLoad';

import { AppRouter } from './app.router';
import { AuthRouter } from './auth.router';

export default function Router() {
    const initialData = useInitialLoad();
    const isAuthorized = useStore((state) => state.auth.isAuthorized);

    useEffect(() => {
        initialData.prefetch();
    }, []);

    const getRouter = () => {
        if (!isAuthorized) return AuthRouter;
        return AppRouter;
    };

    if (!initialData.isReady)
        return (
            <div className={cn('bg-gradient-to-b from-[#0A1835] to-[#181C37]')}>
                <div className="flex flex-col gap-8 items-center justify-center">
                    <img src={logo} alt="logo" className="h-20 w-20 mb-4" />
                    <div className="flex items-center justify-center">
                        <Loader className="text-[#E0DEDC] h-5 w-5" />
                    </div>
                </div>
            </div>
        );

    return <RouterProvider router={getRouter()} />;
}
