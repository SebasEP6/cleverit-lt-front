import React, { ReactNode } from "react";

import styles from '@/styles/components/Container/Float.module.sass';

interface IFloatContainer {
  position?: 'right' | 'left';
  children: ReactNode;
}

const FloatContainer: React.FC<IFloatContainer> = ({
  position = 'right',
  children
}) => {
  return (
    <div className={
      position === 'right'
        ? styles.containerRight
        : styles.containerLeft
    }>
      { children }
    </div>
  );
};

export default FloatContainer;