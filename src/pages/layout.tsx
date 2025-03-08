import type { PropsWithChildren } from 'react';
import { Outlet } from 'react-router-dom';

import Footer from "@/features/footer";
import Header from "@/features/header";

export default function AppLayout({ children }: PropsWithChildren) {
    return (
        <div className="flex items-start justify-start min-h-screen">
            <div className="flex flex-col relative w-full border-l border-zinc-200">
				<Header />
                <div className="flex flex-col overflow-y-auto h-full min-h-[calc(100vh-116px)]">{children || <Outlet />}</div>
				<Footer />
            </div>
        </div>
    );
}
