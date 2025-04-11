import { Outlet } from 'react-router';

import { Header, NavBar, SideBar } from '~/components';

import styles from './Layout.module.css';

export const Layout = () => (
    <div className={styles.layout}>
        <Header />
        <main className={styles.layoutMain}>
            <NavBar />
            <Outlet />
            <SideBar />
        </main>
    </div>
);
