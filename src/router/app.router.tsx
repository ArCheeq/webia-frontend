import { createBrowserRouter, createRoutesFromChildren, Navigate, Route } from 'react-router-dom';

import ErrorPage from '@/pages/error';
import AppLayout from '@/pages/layout';
import HomePage from "@/pages/page";

export const AppRouter = createBrowserRouter(
    createRoutesFromChildren(
        <Route path="/" Component={AppLayout} ErrorBoundary={ErrorPage.withLayout(AppLayout)}>
			<Route index Component={HomePage} />

            <Route path={'*'} element={<Navigate to={'/'} replace={true} />} />
        </Route>,
    ),
);
