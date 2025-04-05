import { Outlet } from 'react-router';

export const Layout = () => (
    <div>
        <main>
            <Outlet />
        </main>
    </div>
);
