import { createBrowserRouter, createRoutesFromChildren, Navigate, Outlet, Route } from 'react-router-dom';

import AuthLayout from '@/pages/auth/layout';
import LoginPage from '@/pages/auth/login.page';
import ErrorPage from '@/pages/error';

export const AuthRouter = createBrowserRouter(
    createRoutesFromChildren(
        <Route path="/" Component={Outlet} ErrorBoundary={ErrorPage}>
            <Route index element={<Navigate to={'/auth'} replace={true} />} />
            <Route path={'auth'} Component={AuthLayout}>
                <Route path="login" Component={LoginPage} />

                <Route index element={<Navigate to={'login'} replace={true} />} />
                <Route path="*" element={<Navigate to={'/login'} replace={true} />} />
            </Route>

            <Route path={'*'} element={<Navigate to={'/auth'} replace={true} />} />
        </Route>,
    ),
);
