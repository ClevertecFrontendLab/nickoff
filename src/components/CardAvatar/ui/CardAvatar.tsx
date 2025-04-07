import { Avatar } from '@chakra-ui/react';

import styles from './CardAvatar.module.css';

const mockUser = {
    title: 'Екатерина Константинопольская',
    src: '/src/assets/user-photo.jpg',
    subTitle: '@bake_and_pie',
};
export const CardAvatar = () => (
    <div className={styles.cardAvatar}>
        <Avatar size='md' name={mockUser.title} src={mockUser.src} />
        <div>
            <h3 className={styles.cardAvatarTitle}>{mockUser.title}</h3>
            <p className={styles.cardAvatarSubTitle}>{mockUser.subTitle}</p>
        </div>
    </div>
);
