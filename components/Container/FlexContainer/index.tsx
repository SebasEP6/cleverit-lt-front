import React, { ReactNode } from 'react';

import styles from '@/styles/components/Container/Flex.module.sass';

interface IFlexContainer {
  children: ReactNode;
}

const FlexContainer: React.FC<IFlexContainer> = ({
  children
}) => (
  <div
    className={styles.container}
  >
    { children }
  </div>
);

export default FlexContainer;