import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
    Button,
    Icon,
    List,
    ListItem,
} from '@chakra-ui/react';
import { NavLink } from 'react-router';

import ChevronDownIcon from '~/assets/icons/chevron-down.svg?react';
import LeftIcon from '~/assets/icons/left-icon.svg?react';

import { menuItems } from '../config';
import styles from './NavBar.module.css';

export const NavBar = () => (
    <div className={styles.navBar}>
        <Accordion
            allowToggle
            pt='10px'
            pb='10px'
            maxH='872px'
            overflow='auto'
            className={styles.navBarMenu}
        >
            {menuItems.map((item, index) => (
                <AccordionItem key={index} border='none'>
                    <AccordionButton
                        data-test-id={item.testId || ''}
                        position='relative'
                        pl='8px'
                        pr='0px'
                        pt='12px'
                        pb='12px'
                        _expanded={{ bg: '#EAFFC7' }}
                        _hover={{ bg: '#FFFFD3' }}
                    >
                        <Box as='span' display='flex' flex='1' textAlign='left' alignItems='center'>
                            <Icon boxSize={6}>{item.icon}</Icon>
                            <div className={styles.navBarLabel}>{item.label}</div>
                        </Box>
                        <AccordionIcon
                            as={ChevronDownIcon}
                            fontSize='16px'
                            position='absolute'
                            right='16px'
                        />
                    </AccordionButton>
                    <AccordionPanel padding={0}>
                        <List className={styles.navBarList}>
                            {item.paths.map((path, index) => (
                                <ListItem key={index} _hover={{ bg: '#FFFFD3' }}>
                                    <NavLink to={path.path}>
                                        <span className={styles.navBarSpan} />
                                        {path.linkLabel}
                                    </NavLink>
                                </ListItem>
                            ))}
                        </List>
                    </AccordionPanel>
                </AccordionItem>
            ))}
        </Accordion>
        <footer className={styles.navBarFooter}>
            <span>Версия программы 03.25</span>
            <p>
                Все права защищены,
                <br />
                ученический файл,
                <br />
                ©Клевер Технолоджи, 2025
            </p>
            <Button
                leftIcon={<LeftIcon />}
                size='xs'
                variant='link'
                color='black'
                fontWeight='600'
                display='flex'
                alignItems='flex-start'
                justifyContent='flex-start'
            >
                Выйти
            </Button>
        </footer>
    </div>
);
