import { ChevronRightIcon } from '@chakra-ui/icons';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import { Link, useLocation } from 'react-router';

import { ROUTES } from '~/app/routers';

import styles from './Breadcrumbs.module.css';

export const Breadcrumbs = () => {
    const location = useLocation();
    const paths = location.pathname.split('/').filter(Boolean);
    return (
        <div className={styles.breadcrumbs}>
            <Breadcrumb spacing='8px' size='ls' separator={<ChevronRightIcon color='gray.500' />}>
                <BreadcrumbItem>
                    <BreadcrumbLink as={Link} to={ROUTES.ROOT.path}>
                        {ROUTES.ROOT.name}
                    </BreadcrumbLink>
                </BreadcrumbItem>

                {paths.map((path, index) => {
                    const fullPath = `/${paths.slice(0, index + 1).join('/')}`;
                    const isCurrentPath = path === paths[paths.length - 1];
                    return (
                        <BreadcrumbItem key={index}>
                            <BreadcrumbLink
                                as={Link}
                                to={fullPath}
                                {...(isCurrentPath && { 'aria-current': 'page' })}
                            >
                                {findByPathName(path)}
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                    );
                })}
            </Breadcrumb>
        </div>
    );
};

const findByPathName = (path: string) => {
    for (const key in ROUTES) {
        if (ROUTES[key].path === path) {
            return ROUTES[key].name;
        }
    }
    return null;
};
