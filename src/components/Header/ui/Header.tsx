import { CardAvatar, Logo } from '~/components';

import styles from './Header.module.css';

export const Header = () => (
    <header className={styles.header} data-test-id='header'>
        <Logo />
        <CardAvatar />
    </header>
);
