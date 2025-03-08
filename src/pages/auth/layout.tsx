import { Outlet } from 'react-router-dom';

export default function AuthLayout() {
    return (
        <div className="flex flex-col bg-zinc-100">
            <div className="flex flex-col relative p-6 min-h-screen items-center justify-center">
                <Outlet />
            </div>
        </div>
    );
}
