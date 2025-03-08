import type { PropsWithChildren } from 'react';
import { Outlet } from 'react-router-dom';

export default function AppLayout({ children }: PropsWithChildren) {
    return (
        <div className="flex items-start justify-start min-h-screen">
            <div className="flex flex-col relative h-screen w-full border-l border-zinc-200">
                <div className="flex flex-col overflow-y-auto h-full">{children || <Outlet />}</div>
            </div>
        </div>
    );
}
