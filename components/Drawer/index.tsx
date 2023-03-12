import React from 'react';
import { Drawer, DrawerProps } from 'rsuite';

import { IconButton } from '../Button';
import { FloatContainer } from '../Container';

import styles from '@/styles/components/Drawer/Body.module.sass';

interface IDrawerProps extends DrawerProps {
    isOpen: boolean;
    onRequestClose: () => void;
    children: React.ReactNode;
}

const CustomDrawer: React.FC<IDrawerProps> = ({
    isOpen,
    onRequestClose,
    children,
    ...drawerProps
}) => {


    return (
        <Drawer
            open={isOpen}
            onClose={onRequestClose}
            {...drawerProps}
        >
            <FloatContainer>
                <IconButton
                    onClick={onRequestClose}
                >
                    X
                </IconButton>
            </FloatContainer>
            <div className={styles.container}>
                {children}
            </div>
        </Drawer>
    );
};

export default CustomDrawer;
