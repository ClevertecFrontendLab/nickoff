import HeaderLogoText from '~/assets/yee-daa.svg?react';
import HeaderLogo from '~/assets/yee-daa-logo.svg?react';

import styles from './Logo.module.css';

export const Logo = () => (
    <div className={styles.logo}>
        <HeaderLogo />
        <HeaderLogoText />
    </div>
);
